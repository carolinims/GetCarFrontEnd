import styles from './Login.module.scss';
import stylesTemas from 'styles/Tema.module.scss';
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import {CgMail} from 'react-icons/cg';
import {CgKey} from 'react-icons/cg';
import {CgLogIn} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import CampoInputText from 'components/campoTexto/campoInputText';

export default function Login(){
    const navigate = useNavigate();
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
                            {/* <div className={styles.camposLogin}>
                                <CgMail 
                                size={20}
                                color = '#3D1A1D'
                                />
                                <input 
                                    value={''}
                                    onChange = {() => {}}
                                    placeholder = 'E-mail'
                                />  
                            </div> */}
                            <CampoInputText 
                                value=''
                                onchange={() => {}}
                                rotulo='E-mail'
                                cor='#3D1A1D'
                                tipoIcon='CgMail'
                                tamanho='100%'
                            />
                            <br/>
                            <CampoInputText 
                                value=''
                                onchange={() => {}}
                                rotulo='Senha'
                                cor='#3D1A1D'
                                tipoIcon='CgKey'
                                tamanho='100%'
                            />
                        </div>
                        <div className={styles.formularioBotaoEntrar}>
                            <button className={stylesTemas.corBotaoOperacao}
                            onClick={() => navigate(`/PortalAdministrativo`)}>
                                <CgLogIn size={20} color = '#28704D'/>
                                Entrar
                            </button>
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