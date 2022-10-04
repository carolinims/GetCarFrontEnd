import styles from './Login.module.scss';
import stylesTemas from 'styles/Tema.module.scss';
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import { useNavigate } from 'react-router-dom';
import CampoInputText from 'components/campoTexto/campoInputText';
import BotaoOperacao from 'components/botoes/botaoOperacoes';

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
                                corIcon='#3D1A1D'
                                tipoIcon='CgMail'
                                tamanho='100%'
                            />
                            <br/>
                            <CampoInputText 
                                value=''
                                onchange={() => {}}
                                rotulo='Senha'
                                corIcon='#3D1A1D'
                                tipoIcon='CgKey'
                                tamanho='100%'
                            />
                        </div>
                        <div className={styles.formularioBotaoEntrar}>
                            <BotaoOperacao
                            type ='button'
                            onClick={() => navigate(`/PortalAdministrativo`)}
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