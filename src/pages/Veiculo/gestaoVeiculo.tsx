import stylesTemas from 'styles/Tema.module.scss';
import styles from './gestaoVeiculo.module.scss';
import stylesLogin from 'components/menu/MenuSuperior.module.scss'
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import {CgArrowLongLeft} from 'react-icons/cg';
import {MdAddCircle} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Buscador from './buscadorVeiculos/buscadorVeiculo';
import Filtros from './buscadorVeiculos/filtros/filtro';
import ListarVeiculos from './listarVeiculos/listarVeiculos';

export default function GestaoDeVeiculo(){
    const navigate = useNavigate();

    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');

    function limpaBuscaEFiltro(){
        setBusca('');
        setFiltro(null);
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
                            limpaBuscaEFiltro()
                            navigate(-1);
                        }} to={''}>
                            <CgArrowLongLeft/>
                            Voltar
                        </Link>
                    </div>
                    <br/>
                    <br/>
                    <div className={stylesTemas.divTitulo}>
                        Gestão de Veiculos
                    </div>
                    <br/>
                    <br/>
                    <button
                    onClick={() => navigate(`/CadastroDeVeiculo`)}
                    type='button'> 
                        <MdAddCircle size={20}/>
                        Cadastrar Veículo</button>
                    <br/>
                    <br/>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Buscador busca={busca} setBusca={setBusca}/>  
                    <br/> 
                    <br/>
                    <>
                    {console.log(busca + filtro)}
                    </>
                    <ListarVeiculos busca={busca} filtro={filtro} /> 
                    <br/>
                    <br/>
                </div>
            </div>
            <br/>
            <br/>
        </section>
    );
}