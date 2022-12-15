import stylesTemas from 'styles/Tema.module.scss';
import styles from './PortalAdministrativo.module.scss';
import {CgSmileMouthOpen} from 'react-icons/cg';
import {MdStickyNote2, MdAccountCircle, MdSentimentVerySatisfied} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useCookies} from 'react-cookie';


export default function PortalAdministrativo(){
    const navigate = useNavigate();
    const [disabledButton, setDisabledButton] = useState(Boolean);
    const [cookies, setCookie] = useCookies(['access_token','userLogado','perfil']);

    // if(sessionStorage.getItem("perfil") != 'ADMINISTRADOR'){
    //     setDisabledButton(true);
    // } else {
    //     setDisabledButton(false)
    // }

    return(
        <section>
            <div className={stylesTemas.divFundoDefault}>
                <div className={styles.divConteudo}>
                    <div className={stylesTemas.divTitulo}>
                        Portal Administrativo
                    </div>
                    <br/>
                    <br/>
                    <div className={styles.divBotoes}>
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
                        <button
                            onClick={() => navigate(`/CadastroDeCliente`)}
                            type='button'
                            className={styles.botao}>
                            <MdSentimentVerySatisfied size={50} color = {'#3D1A1D'}/>
                            Clientes
                        </button>
                        <button
                            onClick={() => navigate(`/GestaoDeReserva`)}
                            type='button'
                            className={styles.botao}>
                            <MdStickyNote2 size={50} color = {'#3D1A1D'}/>
                            Reservas
                        </button>
                        <button
                            onClick={() => navigate(`/GestaoDeUsuario`)}
                            type='button'
                            className={styles.botao}
                            // disabled={disabledButton}
                            >
                            <MdAccountCircle size={50} color = {'#3D1A1D'}/>
                            Usuarios
                        </button>
                    <div/>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </section>
    );

}