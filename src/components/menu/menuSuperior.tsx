import stylesTemas from 'styles/Tema.module.scss';
import styles from './MenuSuperior.module.scss';
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                                        AQUI
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </div>
                    <div className={styles.divFundoCamposAgendamento}>
                        <div className={styles.divCamposAgendamento}>
                            <h3>teste</h3>
                        </div> 

                    </div>
          
                </div>
            </div>
            <Outlet />
        </header>
    );
}