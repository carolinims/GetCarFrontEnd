import styles from './listaVeiculos.module.scss';
// import { Veiculo } from 'types/veiculo';
import IVeiculo from 'interfaces/IVeiculo';
import { useState, useEffect } from 'react';
// import veiculo from 'components/data/veiculo.json';
import ItemVeiculo from './itemVeiculo/itemVeiculo';
import http from 'http/index';
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import { isConstructorDeclaration } from 'typescript';
import { isGeneratorFunction } from 'util/types';
import {useCookies} from 'react-cookie';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { listaDeVeiculosState } from "state/veiculo/veiculoAtom";
import useAtualizarListaVeiculo from 'state/veiculo/hooks/useAtualizarlistaVeiculo';

interface Props {
    busca: string,
    filtro: number | null,
}
  

export default function ListarVeiculos(props: Props){
    const navigate = useNavigate();
    const [lista, setLista] = useState<IVeiculo[]>([]);
    const { busca, filtro} = props;
    // const [listaVeiculo, setListaVeiculo] = useState<IVeiculo[]>([]);
    const [isMsgListBDVeiEmpty, setIsMsgListBDVeiEmpty] = useState(false);
    const [cookies, setCookie] = useCookies(['access_token']);

    const setListaDeVeiculosState = useSetRecoilState<IVeiculo[]>(listaDeVeiculosState);
    const [listaDeVeiculos, getlistaDeVeiculosState] = useRecoilState(listaDeVeiculosState);

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        console.log("log aqui {}", regex.test(title));
        return regex.test(title);
    }
    
    function testaFiltro(id: number) {
        if(filtro !== null) 
            return filtro === id;
        return true;
    }
    
    function carregarLista(){
        http.get(
            `veiculo/listarVeiculos`,
                {
                    headers: {
                        Authorization: sessionStorage.getItem("token"),
                        // Authorization: cookies.access_token,
                    } 
                }
        ).then(resp => resp.data).then((data) =>{
            setListaDeVeiculosState(data.content);
            // setListaVeiculo(data.content);
            // console.log(listaVeiculo[0].placaVeiculo);
            console.log(data.content);
        })
        .catch(erro => {
            console.log("Listagem de veículos retornou erro: " + erro)
            if(erro.response.status === 403){
                // se der acesso negado significa que o token expirou, então retorna para login
                sessionStorage.removeItem("token")
                navigate('/Login');
                console.log("Identificado 403")
            }
        })
    }

    useEffect(() => {
        // setIsMsgListBDVeiEmpty(false);
        carregarLista();
        listaDeVeiculos.filter(v => {
        switch (filtro) {
            case 1:
                setLista(listaDeVeiculos.filter(v => testaBusca(v.placaVeiculo) /*&& testaFiltro(1)*/));
            break;
            // case 2:    
            // break;
            case 3:  
                setLista(listaDeVeiculos.filter(v => testaBusca(v.modeloDto.descrModelo) /*&& testaFiltro(3)*/));
            break;
            case 4:   
                setLista(listaDeVeiculos.filter(v => testaBusca(v.modeloDto.marca) /*&& testaFiltro(4)*/));
            break;
            default:
                setLista(listaDeVeiculos.filter(item => item != null));
                console.log("filtro default");
            break;
            }
        });  

    },[busca, filtro, isMsgListBDVeiEmpty]);

   return (
        <div className={styles.itens}>
          {
            lista.length === 0 ? 
            <div>
                <h3 className={styles.msgNenhumVeiculoEncontrado}> Lista de veículos vazia! </h3> 
                <button className={styles.linkCarregaLista} onClick={() => setIsMsgListBDVeiEmpty(true)} >Clique aqui para carregar a lista</button>
            </div>
            :
            lista.map(veiculo => (
            <ItemVeiculo veiculo={veiculo} key={veiculo.idVeiculo} {...veiculo} setIsMsgListBDVeiEmpty={setIsMsgListBDVeiEmpty}/>))
          }
        </div>
      );
}