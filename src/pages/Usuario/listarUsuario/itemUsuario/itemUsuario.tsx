// import {Veiculo} from 'types/veiculo';
import IUsuario from 'interfaces/IUsuario';
import { useNavigate } from 'react-router-dom';
import styles from './itemUsuario.module.scss';
import classNames from 'classnames';
import { MdDelete, MdEdit, MdEditAttributes } from 'react-icons/md';
import http from 'http/index';
import {useCookies} from 'react-cookie';

interface Props {
  usuario: IUsuario,
  setIsMsgListBDVeiEmpty: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ItemUsuario({
  usuario,
  setIsMsgListBDVeiEmpty
}: Props) 
{
    const { id, login, senha, perfil} = usuario;
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['access_token','userLogado']);

    function DeletarUsuario(){
      if(sessionStorage.getItem("userLogado") === login){
        alert("Não é possivel deletar o usuario que esta logado!")
        return;
      }
      http.delete(
          `user/${id}`,
              {
                  headers: {
                    Authorization: sessionStorage.getItem("token"),
                  } 
              }
      ).then(resp => {
          console.log("Cliente deletado com sucesso");
          alert("Cliente deletado com sucesso!")
          navigate(`/PortalAdministrativo`);
          setIsMsgListBDVeiEmpty(false);
      })
      .catch(erro => {
          console.log("Exclusão de clientes retornou erro: " + erro)
          if(erro.response.status === 403){
              // se der acesso negado significa que o token expirou, então retorna para login
              sessionStorage.removeItem("token")
              alert("Sua sessão expirou! realize novo login.")
              navigate('/Login');
              console.log("Identificado 403")
          }
      })
  }

    return (
      <div className={styles.item} onClick={() => /*navigate(`/prato/${id}`)*/{}}>
        <div>
          <div className={styles.tags}>
            <div className={styles.tags__login}><b>Login: </b> {login}</div>
            <div className={styles.tags__perfil}><b>Perfil: </b> {perfil.tipoUsuario}</div>
          </div>
        </div>
        <div className={styles.operacoes}>
          {/* <button className={styles.botaoOperacoes}
            onClick={() => {}}>
            <MdEdit color='green' size={30}/>
          </button> */}
          <button className={styles.botaoOperacoes}
            onClick={() => {
                DeletarUsuario()
            }}>
            <MdDelete color='red' size={30}/>
          </button>
        </div>
      </div>
    );
  }