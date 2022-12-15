import styles from './listarUsuario.module.scss';
import IUsuario from 'interfaces/IUsuario';
import { useState, useEffect } from 'react';
import axios from 'axios';
import https from 'https';
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
import { isConstructorDeclaration } from 'typescript';
import { isGeneratorFunction } from 'util/types';
import {useCookies} from 'react-cookie';
import http from 'http/index';
import ItemUsuario from './itemUsuario/itemUsuario';

interface Props {
    busca: string,
}
  

export default function ListarUsuarios(props: Props){
    const navigate = useNavigate();
    const [lista, setLista] = useState<IUsuario[]>([]);
    const { busca} = props;
    const [listaUsuario, setListaUsuario] = useState<IUsuario[]>([]);
    const [isMsgListBDVeiEmpty, setIsMsgListBDVeiEmpty] = useState(false);
    const [cookies, setCookie] = useCookies(['access_token']);

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        console.log("log aqui {}", regex.test(title));
        return regex.test(title);
    }
    
    function carregarLista(){
        http.get(
            `user`,
                {
                    headers: {
                        Authorization: sessionStorage.getItem("token"),
                        // Authorization: cookies.access_token,
                    } 
                }
        ).then(resp => resp.data).then((data) =>{
            console.log("Dados aqui " + data);
            setListaUsuario(data);
        })
        .catch(erro => {
            console.log("Listagem de usuarios retornou erro: " + erro)
            if(erro.response.status === 403){
                // se der acesso negado significa que o token expirou, então retorna para login
                sessionStorage.removeItem("token")
                alert("Sua sessão expirou! realize novo login.")
                navigate('/Login');
                console.log("Identificado 403")
            }
        })
    }
    useEffect(() => {
        // setIsMsgListBDVeiEmpty(false);
        carregarLista();

        listaUsuario.filter(u => {
            setLista(listaUsuario.filter(us => testaBusca(u.login)));
        }); 
    },[busca, isMsgListBDVeiEmpty]);

   return (
        <div className={styles.itens}>
          {
            lista.length === 0 ? 
            <div>
                <h3 className={styles.msgNenhumUsuarioEncontrado}> Lista de Usuarios vazia! </h3> 
                <button className={styles.linkCarregaLista} onClick={() => setIsMsgListBDVeiEmpty(true)} >Clique aqui para carregar a lista</button>
            </div>
            :
            lista.map(usuario => (
                <ItemUsuario usuario={usuario} key={usuario.id} {...usuario} setIsMsgListBDVeiEmpty={setIsMsgListBDVeiEmpty}/>))
          }
        </div>
      );
}