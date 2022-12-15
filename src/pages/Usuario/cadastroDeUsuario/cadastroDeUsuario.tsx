import stylesTemas from 'styles/Tema.module.scss';
import styles from './cadastroDeUsuario.module.scss';
import stylesLogin from 'components/menu/MenuSuperior.module.scss'
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import { Link } from 'react-router-dom';
import {CgArrowLongLeft} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import {MdImageSearch, MdOutlineSentimentVerySatisfied, MdOutlineSentimentVeryDissatisfied, MdAccountCircle} from 'react-icons/md';
import { useState, useEffect } from 'react';
import CampoInputText from 'components/campoTexto/campoInputText';
import BotaoOperacao from 'components/botoes/botaoOperacoes';
import http from 'http/index';
import {useCookies} from 'react-cookie';

export default function CadastroDeUsuario(){
    const navigate = useNavigate();
    const [msgRetornoErro, setMsgRetornoErro] = useState('');
    const [msgRetornoSucesso, setMsgRetornoSucesso] = useState('');
    const [submitFormulario, setSubmitFormulario] = useState(Boolean);
    const [cookies, setCookie] = useCookies(['access_token']);

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [perfil, setPerfil] = useState({
        tipoUsuario: 'ADMINISTRADOR'
    });
    
    function enviarFormulario(){
        if(login ==='' || senha ===""){
            setMsgRetornoErro("Campos de preenchimento obrigatorio!");
            return;
        }
        setMsgRetornoErro("");
        setMsgRetornoSucesso("");
        const headers = {
            'Content-Type': 'application/json',
            // Authorization: cookies.access_token,
            Authorization: sessionStorage.getItem("token"),
        };

        const bodyParameters = {
            login: login,
            senha: senha,
            perfil: perfil,
        };
        console.log(bodyParameters);

        http.post( 
            'user',
            bodyParameters,  {headers}
        )
        .then(resp => {
            console.log("Post de cadastro de usuarios retornou sucesso");
            setMsgRetornoSucesso(" - Cadastro realizado com sucesso");
            setLogin("");
            setSenha("");
        })
        .catch(erro => {
            if(erro.response.status === 403){
                // se der acesso negado significa que o token expirou, então retorna para login
                sessionStorage.removeItem("token");
                alert("Sua sessão expirou! realize novo login.")
                navigate('/Login');
                console.log("Identificado 403");
            }

            console.log("Post de cadastro de usuarios retornou erro: " + erro.response.data.mensagem);
            setMsgRetornoErro(erro.response.data.mensagem);
        })
    }

    return(
        <section>
            <div className={stylesTemas.divFundoDefault}>
                <div className={stylesLogin.divLogo}>
                    <Logo />
                </div>
                <div className={stylesLogin.divMenuSuperior}>

                </div>
                <div className={stylesTemas.divConteudo}>
                    <div>
                        <Link onClick={() => navigate(-1)} to={''}>
                            <CgArrowLongLeft/>
                            Voltar
                        </Link>
                    </div>
                    <br/>
                    <br/>
                    <div className={stylesTemas.divTitulo}>
                        Cadastro de Usuarios
                    </div>
                    <br/>
                    {
                        msgRetornoErro !== null && msgRetornoErro.length !== 0 ?
                        <div className={styles.msgErro}>
                            <h3><MdOutlineSentimentVeryDissatisfied size={20}/>{ " - " + msgRetornoErro}</h3>
                        </div>
                        :
                        <br/>
                    }
                    {
                        msgRetornoSucesso !==null && msgRetornoSucesso.length !== 0 ?
                        <div className={styles.msgSucesso}>
                            <h3><MdOutlineSentimentVerySatisfied size={20}/>{msgRetornoSucesso}</h3>
                        </div>
                        :
                        <br/>
                    }
                    
                    <br/>
                    <div className={styles.form} >
                    <br/>
                    <br/>
                    <div className={styles.fundoImg}>
                    <MdAccountCircle size={100} color = {'#3D1A1D'}/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className={styles.camposForm}>
                        <label>Login: </label>
                        <input className={styles.camposLogin}
                        name='login'
                        placeholder='mariazinha.silva'
                        onChange = {(evento) => setLogin(evento.target.value)}
                        value={login}
                        type={'text'}>
                        </input>

                        <label>Senha: </label>
                        <input className={styles.camposLogin}
                        name='senha'
                        placeholder=''
                        onChange = {(evento) => setSenha(evento.target.value)}
                        value={senha}
                        type="password">
                        </input>
                        <br/>
                        <br/>
                        <label>Status: </label>
                        <select 
                            name={'perfil'} 
                            className={styles.camposLogin}
                            onChange = {(evento) => setPerfil({tipoUsuario: evento.target.value})}
                            value={perfil.tipoUsuario}
                            >
                            <option value="ADMINISTRADOR">Administrador</option>
                            <option value="CLIENTE">Cliente</option>
                            <option value="ATENDENTE">Atendente</option>
                            <option value="GERENTE">Gerente</option>
                        </select>
                    </div> 
                    <div className={styles.divBtn}>
                        <BotaoOperacao
                            type='button'
                            rotulo='Enviar'
                            tipoIcon='MdSend'
                            corIcon='#28704D'
                            tamanho='40%'
                            onClick={() => enviarFormulario()}
                        />
                    </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        </section>
    );
}