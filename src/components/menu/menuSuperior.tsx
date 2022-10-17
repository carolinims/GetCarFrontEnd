import stylesTemas from 'styles/Tema.module.scss';
import styles from './MenuSuperior.module.scss';
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CampoInputText from 'components/campoTexto/campoInputText';
import BotaoOperacao from 'components/botoes/botaoOperacoes';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { useState, useEffect } from 'react';
import {MdAccountCircle} from 'react-icons/md';
import {useCookies} from 'react-cookie';


export default function MenuSuperior(){
    const[localRetirada, setLocalRetirada] = useState('');
    const[dtRetirada, setDtRetirada] = useState('');
    const[hrRetirada, setHrRetirada] = useState('');
    const[dtDevolucao, setDtDevolucao] = useState('');
    const[hrDevolucao, setHrDevolucao] = useState('');
    const [cookies, setCookie] = useCookies(['userLogado']);

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
                                <td width={'90%'}>
                                    <div className={styles.divFundoTituloAgendamento}>
                                        <div>Simule um aluguel aqui</div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.divAcessoLateral}>
                                        <div>
                                            <MdAccountCircle size={30} color={'white'}/>
                                        </div>
                                        <div>
                                            {/* {sessionStorage.getItem("userLogado")}  */}
                                            {cookies.userLogado}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </div>
                    <div className={styles.divFundoCamposAgendamento}>
                        <div className={styles.divCamposAgendamento}>
                            <table cellSpacing={10}>
                                <td width={'40%'}>
                                    <CampoInputText 
                                        value={localRetirada}
                                        rotulo='Informe local de retirada'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgPin'
                                        tamanho='70%'
                                        setValue={setLocalRetirada}
                                    />
                                </td>
                                <td width={'15%'}>
                                    <CampoInputText 
                                        value={dtRetirada}
                                        rotulo='Retirada'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgCalendar'
                                        tamanho='100%'
                                        setValue={setDtRetirada}
                                        type='Date'
                                    />
                                </td>
                                <td width={'10%'}>
                                    <CampoInputText 
                                        value={hrRetirada}
                                        rotulo='10:00'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgTime'
                                        tamanho='100%'
                                        setValue={setHrRetirada}
                                    />
                                </td>
                                <td width={'15%'}>
                                    <CampoInputText 
                                        value={dtDevolucao}
                                        rotulo='Devolução'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgCalendar'
                                        tamanho='100%'
                                        setValue={setDtDevolucao}
                                        type='Date'
                                    />
                                </td>
                                <td width={'10%'}>
                                    {/* <Calendar value={new Date()}/> */}
                                    <CampoInputText 
                                        value={hrDevolucao}
                                        rotulo='12:00'
                                        corIcon='#3D1A1D'
                                        tipoIcon='CgTime'
                                        tamanho='100%'
                                        setValue={setHrDevolucao}
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