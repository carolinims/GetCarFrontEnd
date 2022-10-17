import styles from './Login.module.scss';
import stylesTemas from 'styles/Tema.module.scss';
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import { useNavigate } from 'react-router-dom';
import CampoInputText from 'components/campoTexto/campoInputText';
import BotaoOperacao from 'components/botoes/botaoOperacoes';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {MdAccountCircle} from 'react-icons/md';
import {useCookies} from 'react-cookie';

export default function Login(){
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState("");
    const [msgRetornoErro, setMsgRetornoErro] = useState('');
    const [cookies, setCookie] = useCookies(['access_token', 'userLogado']);

    function logar(){
        console.log("Usuario: " + email + " Senha: " + senha);

        const bodyParameters = {
            login: email,
            senha: senha
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        axios.interceptors.response.use(
            function (response) {
              if (response) {
                // return success
                if (response.status === 200 || response.status === 201) {
                  return response;
                }
                // reject errors & warnings
                return Promise.reject(response);
              }
              // default fallback
              return Promise.reject(response);
            },
            function (error) {
            // if the server throws an error (404, 500 etc.)
              setMsgRetornoErro('Falha de comunicação com servidor!');
              return Promise.reject(error);
            }
          );

        axios.post( 
            'http://getcar.eba-ztmgvkte.us-west-2.elasticbeanstalk.com/autentic',
            bodyParameters, {headers})
            .then(respToken => {
                // setToken(respToken.data.token);
                sessionStorage.setItem("token", "Bearer " + respToken.data.token);
                sessionStorage.setItem("userLogado", email);
                // setCookie('access_token', "Bearer " + respToken.data.token);
                // setCookie('userLogado', email)
                console.log("respToke " + respToken.data.token);
                navigate(`/PortalAdministrativo`);
            })
            .catch(erro => {
                console.log("Post de login retornou erro: " + erro.response.data.mensagem);
                setMsgRetornoErro(erro.response.data.mensagem);
            })
    }

    return(
        <main>
            <div className={stylesTemas.divFundoDefault}>
                <div className={styles.fundoDefault}>
                    <div className={styles.fundoPopUp}>
                        <Logo />
                        <div className={styles.formularioLogin}>
                            <h1 className={stylesTemas.titulo}>
                            Acesse sua conta
                            </h1>
                            <CampoInputText 
                                value={email}
                                rotulo='Usuário'
                                corIcon='#3D1A1D'
                                tipoIcon='MdAccountCircle'
                                tamanho='100%'
                                setValue={setEmail}
                            />
                            <br/>
                            <CampoInputText 
                                value={senha}
                                rotulo='Senha'
                                corIcon='#3D1A1D'
                                tipoIcon='CgKey'
                                tamanho='100%'
                                type="password"
                                setValue={setSenha}
                            />
                        </div>
                        <div>
                            <label className={styles.msgRetornoErro}>
                                {msgRetornoErro}
                            </label>
                        </div>
                        <div className={styles.formularioBotaoEntrar}>
                            <BotaoOperacao
                            type ='button'
                            onClick={() => logar()}
                            rotulo='Entrar'
                            tipoIcon='login'
                            corIcon='#28704D'
                            tamanho='30%'
                            />
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
            
        </main>
    )
}