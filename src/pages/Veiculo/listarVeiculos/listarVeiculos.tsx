import styles from './listaVeiculos.module.scss';
// import { Veiculo } from 'types/veiculo';
import IVeiculo from 'interfaces/IVeiculo';
import { useState, useEffect } from 'react';
// import veiculo from 'components/data/veiculo.json';
import ItemVeiculo from './itemVeiculo/itemVeiculo';
import axios from 'axios';
import https from 'https';
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import { isConstructorDeclaration } from 'typescript';

interface Props {
    busca: string,
    filtro: number | null,
}
  

export default function ListarVeiculos(props: Props){
    const navigate = useNavigate();
    const [lista, setLista] = useState<IVeiculo[]>([]);
    const { busca, filtro} = props;
    const [listaVeiculo, setListaVeiculo] = useState<IVeiculo[]>([]);
    
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
        axios.get(
            `http://localhost:8081/veiculo/listarVeiculos`,
                {
                    headers: {
                        Authorization: sessionStorage.getItem("token"),
                    } 
                }
        ).then(resp => resp.data).then((data) =>{
            setListaVeiculo(data.content);
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
        carregarLista();
        listaVeiculo.filter(v => {
        switch (filtro) {
            case 1:
                setLista(listaVeiculo.filter(v => testaBusca(v.placaVeiculo) /*&& testaFiltro(1)*/));
            break;
            // case 2:    
            // break;
            case 3:  
                setLista(listaVeiculo.filter(v => testaBusca(v.modeloDto.descrModelo) /*&& testaFiltro(3)*/));
            break;
            case 4:   
                setLista(listaVeiculo.filter(v => testaBusca(v.modeloDto.marca) /*&& testaFiltro(4)*/));
            break;
            default:
                setLista(listaVeiculo.filter(item => item != null));
                console.log("filtro default");
            break;
            }
        });    
    },[busca, filtro]);

   return (
        <div className={styles.itens}>
          {
            lista.length === 0 ? 
            <h3 className={styles.msgNenhumVeiculoEncontrado}> Nenhum veículo encontrado</h3> :
            lista.map(veiculo => (
            <ItemVeiculo key={veiculo.idVeiculo} {...veiculo} />))
          }
        </div>
      );
}