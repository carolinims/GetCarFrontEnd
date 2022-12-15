import stylesTemas from 'styles/Tema.module.scss';
import styles from './gestaoReserva.module.scss';
import stylesLogin from 'components/menu/MenuSuperior.module.scss'
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import {CgArrowLongLeft} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Buscador from './buscadorReserva/buscadorReserva';
import BotaoOperacao from 'components/botoes/botaoOperacoes';

export default function GestaoDeReserva(){
    const navigate = useNavigate();

    const [busca, setBusca] = useState('');

    function limpaBusca(){
        setBusca('');
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
                        Gestão de Reservas
                    </div>
                    <br/>
                    <br/>
                    <BotaoOperacao
                        type='button'
                        onClick={() => navigate(`/CadastroDeReservas`)}
                        rotulo='Cadastrar Reserva'
                        tipoIcon='MdAddBox'
                        corIcon='#28704D'
                        tamanho='100%'
                    />
                    {/* <button
                    onClick={() => navigate(`/CadastroDeVeiculo`)}
                    type='button'> 
                        <MdAddCircle size={20}/>
                        Cadastrar Veículo</button> */}
                    <br/>
                    <br/>
                    <Buscador busca={busca} setBusca={setBusca}/>  
                    <br/> 
                    <br/>
                    <>
                    {console.log(busca)}
                    </>
                    {/* <ListarVeiculos busca={busca} filtro={filtro} />  */}
                    <br/>
                    <br/>
                </div>
            </div>
            <br/>
            <br/>
        </section>
    );
}