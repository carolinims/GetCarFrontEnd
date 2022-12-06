import {Veiculo} from 'types/veiculo';
import { useNavigate } from 'react-router-dom';
import styles from './itemVeiculo.module.scss';
import classNames from 'classnames';
import { MdDelete, MdEdit, MdEditAttributes } from 'react-icons/md';
import http from 'http/index';
import {useCookies} from 'react-cookie';
import useAtualizarListaVeiculo from 'state/veiculo/hooks/useAtualizarlistaVeiculo';

interface Props {
  veiculo: Veiculo,
  setIsMsgListBDVeiEmpty: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ItemVeiculo({
  veiculo,
  setIsMsgListBDVeiEmpty
}: Props) 
{
    const { idVeiculo, valorHodometro, renavam, placaVeiculo, imgVeiculo, statusVeiculo, 
        modeloDto} = veiculo;
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['access_token']);
    const atualizaHoo = useAtualizarListaVeiculo();

    function DeletarVeiculo(){
      http.delete(
          `veiculo/excluir/${idVeiculo}`,
              {
                  headers: {
                    Authorization: sessionStorage.getItem("token"),
                  } 
              }
      ).then(resp => {
          console.log("Veículo deletado com sucesso");
          // navigate(`/PortalAdministrativo`);
          setIsMsgListBDVeiEmpty(false);
      })
      .catch(erro => {
          console.log("Exclusão de veículos retornou erro: " + erro)
          if(erro.response.status === 403){
              // se der acesso negado significa que o token expirou, então retorna para login
              sessionStorage.removeItem("token")
              navigate('/Login');
              console.log("Identificado 403")
          }
      })
      atualizaHoo;
  }

    return (
      <div className={styles.item} onClick={() => /*navigate(`/prato/${id}`)*/{}}>
        <div className={styles.fundoImg}>
          <img src={imgVeiculo} alt={"Imagem veículo"} />
        </div>
        <div>
          <h3>{modeloDto.descrModelo}</h3>
          <div className={styles.tags}>
            <div className={styles.tags__marca}><b>Marca: </b>{modeloDto.marca}</div>
            <div className={styles.tags__placa}><b>Placa: </b>{placaVeiculo}</div>
            <div className={styles.tags__renavam}><b>Renavam:</b>{renavam}</div>
            <div className={styles.tags__combustivel}><b>Tipo Combustivel: </b>{modeloDto.tipoCombustivel}</div>
            <div className={styles.tags__categoria}><b>Categoria: </b>{modeloDto.categoria}</div>
          </div>
          <div className={styles.tags}>
            <div className={styles.tags__status}><b>Status do Veículo:</b>{statusVeiculo}</div>
          </div>
        </div>
        <div className={styles.operacoes}>
          <button className={styles.botaoOperacoes}
            onClick={() => {}}>
            <MdEdit color='green' size={30}/>
          </button>
          <button className={styles.botaoOperacoes}
            onClick={() => {
              DeletarVeiculo()
            }}>
            <MdDelete color='red' size={30}/>
          </button>
        </div>
      </div>
    );
  }