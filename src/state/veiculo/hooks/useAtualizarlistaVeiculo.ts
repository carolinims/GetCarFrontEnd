import { useSetRecoilState } from "recoil"
import IVeiculo from 'interfaces/IVeiculo';
import { listaDeVeiculosState } from "../veiculoAtom";
import http from 'http/index';
import { useNavigate } from 'react-router-dom';

const useAtualizarListaVeiculo = () => {
//   const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    const navigate = useNavigate();
    const setListaDeVeiculosState = useSetRecoilState<IVeiculo[]>(listaDeVeiculosState);
    
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

export default useAtualizarListaVeiculo