import stylesTemas from 'styles/Tema.module.scss';
import styles from './cadastroDeReserva.module.scss';
import stylesLogin from 'components/menu/MenuSuperior.module.scss'
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import {CgArrowLongLeft} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { datasReserva } from 'state/reserva/reservaAtom';

import BotaoOperacao from 'components/botoes/botaoOperacoes';

export default function CadastroDeReserva(){
    const navigate = useNavigate();
    const [datas, setDatas] = useRecoilState(datasReserva);
    const [dtHrRetirada, setDtHrRetirada] = useState(String);
    const [dtHrDevolucao, setDtHrDevolucao] = useState('');

    function limpaBusca(){
        // setDtHrRetirada(datas.dataRetirada);
        // setDtHrDevolucao(datas.dataDevolucao);
    }

    return(
        <section>
            <div className={stylesTemas.divFundoDefault}>
                <div className={stylesLogin.divLogo}>
                    <Logo />
                </div>
                <div className={stylesLogin.divMenuSuperior}>

                </div>
                <div className={styles.divConteudo}>
                    <div>
                        <Link onClick={() => {
                            limpaBusca()
                            navigate(-1);
                        }} to={''}>
                            <CgArrowLongLeft/>
                            Voltar
                        </Link>
                    </div>
                    <br/>
                    <br/>
                    <div className={stylesTemas.divTitulo}>
                        Reservas
                        <br/>
                        <button onClick={() => limpaBusca()} >Clique aqui para testar recoil</button>
                        {dtHrRetirada}
                        <br/>
                        {dtHrDevolucao}
                    </div>
                    <br/>
                    <br/> 
                    <br/> 
                    <br/>
                    <>
                    </>
                    
                    <br/>
                    <br/>
                </div>
            </div>
            <br/>
            <br/>
        </section>
    );
}