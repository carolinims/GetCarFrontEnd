import stylesTemas from 'styles/Tema.module.scss';
import styles from './PortalAdministrativo.module.scss';
import {CgSmileMouthOpen} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

export default function PortalAdministrativo(){
    const navigate = useNavigate();
    return(
        <section>
            <div className={stylesTemas.divFundoDefault}>
                <div className={styles.divConteudo}>
                    <div className={stylesTemas.divTitulo}>
                        Portal Administrativo
                    </div>
                    <br/>
                    <table cellPadding={20}>
                        <td>
                            <button
                                onClick={() => navigate(`/GestaoDeVeiculo`)}
                                type='button'
                                className={styles.botao}>
                                    <img 
                                        className={styles.img} 
                                        src='/assets/carrinho.png' 
                                        alt='Carrinho' />
                                Veículos
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => navigate(`/CadastroDeCliente`)}
                                type='button'
                                className={styles.botao}>
                                <CgSmileMouthOpen size={50} color = {'#3D1A1D'}/>
                                Clientes
                            </button>
                        </td>
                    </table>
                    <br/>
                    <br/>
                </div>
            </div>
            <br/>
        </section>
    );

}