import stylesTemas from 'styles/Tema.module.scss';
import styles from './MenuSuperior.module.scss';
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CampoInputText from 'components/campoTexto/campoInputText';
import BotaoOperacao from 'components/botoes/botaoOperacoes';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

export default function MenuSuperior(){
    return(
        <header>
            <div className={stylesTemas.divFundoDefault}>
                <div className={styles.divLogo}>
                    <Logo />
                </div>
                <div className={styles.divMenuSuperior}>

                </div>
                <div className={styles.divFundoMenuAgendamento}>
                    <div>
                        <table className={styles.divFundoAcessoLateral}>
                            <tr>
                                <td width={'80%'}>
                                    <div className={styles.divFundoTituloAgendamento}>
                                        <div>Simule um aluguel aqui</div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.divAcessoLateral}>
                                        {/* <Link to='/CadastroDeVeiculo'></Link> */}
                                        {/* COLOCAR AQUI LOGICA PARA ALTERAR ENTRE 
                                        USUARIO LOGADO E LINK PARA LOGIN */}
                                        
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </div>
                    <div className={styles.divFundoCamposAgendamento}>
                        <div className={styles.divCamposAgendamento}>
                            {/* <div>
                                teste
                            </div> */}
                            <table cellSpacing={10}>
                                <td width={'40%'}>
                                    <CampoInputText 
                                        value=''
                                        onchange={() => {}}
                                        rotulo='Informe local de retirada'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgPin'
                                        tamanho='70%'
                                    />
                                </td>
                                <td width={'15%'}>
                                    <CampoInputText 
                                        value=''
                                        onchange={() => {}}
                                        rotulo='Retirada'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgCalendar'
                                        tamanho='100%'
                                    />
                                </td>
                                <td width={'10%'}>
                                    <CampoInputText 
                                        value=''
                                        onchange={() => {}}
                                        rotulo='10:00'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgTime'
                                        tamanho='100%'
                                    />
                                </td>
                                <td width={'15%'}>
                                    <CampoInputText 
                                        value=''
                                        onchange={() => {}}
                                        rotulo='Devolução'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgCalendar'
                                        tamanho='100%'
                                    />
                                </td>
                                <td width={'10%'}>
                                    {/* <Calendar value={new Date()}/> */}
                                    <CampoInputText 
                                        value=''
                                        onchange={() => {}}
                                        rotulo='12:00'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgTime'
                                        tamanho='100%'
                                    />
                                </td>
                                <td width={'10%'}>
                                    <BotaoOperacao
                                    type='button'
                                    onClick={()=>{}}
                                    rotulo='Simular'
                                    tipoIcon=''
                                    corIcon=''
                                    tamanho='100%'
                                    />
                                </td>

                                {/* <BotaoOperacao
                            type ='button'
                            onClick={() => navigate(`/PortalAdministrativo`)}
                            rotulo='Entrar'
                            tipoIcon='login'
                            corIcon='#28704D'
                            tamanho='30%'
                            /> */}
                            </table>
                        </div> 

                    </div>
          
                </div>
            </div>
            <Outlet />
        </header>
    );
}