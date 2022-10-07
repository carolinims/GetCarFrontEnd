import stylesTemas from 'styles/Tema.module.scss';
import styles from './cadastroVeiculo.module.scss';
import stylesLogin from 'components/menu/MenuSuperior.module.scss'
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import { Link } from 'react-router-dom';
import {CgArrowLongLeft} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import {MdImageSearch} from 'react-icons/md';

export default function CadastroDeVeiculo(){
    const navigate = useNavigate();

    return(
        <section>
            <div className={stylesTemas.divFundoDefault}>
                <div className={stylesLogin.divLogo}>
                    <Logo />
                </div>
                <div className={stylesLogin.divMenuSuperior}>

                </div>
                <div className={stylesTemas.divConteudo}>
                    <div>
                        <Link onClick={() => navigate(-1)} to={''}>
                            <CgArrowLongLeft/>
                            Voltar
                        </Link>
                    </div>
                    <br/>
                    <br/>
                    <div className={stylesTemas.divTitulo}>
                        Cadastro de Veiculos
                    </div>
                    <br/>
                    <br/>
                    <form className={styles.form}>
                    <div className={styles.fundoImg}>
                        <img src={'/assets/carrinho.png'} alt={"Imagem veículo"} />
                        <br/>
                        <br/>
                        <button
                            onClick={() => {}}
                            type='button'> 
                        <MdImageSearch size={20}/>
                        Carregar imagem</button>
                    <br/>
                    </div>
                    <div className={styles.camposForm}>
                        <label>Placa: </label>
                        <input className={styles.camposLogin}
                        id='placa'
                        placeholder='ex: GEV-8U19'
                        type={'text'}>
                        </input>

                        <label>Renavam: </label>
                        <input className={styles.camposLogin}
                        id='reanvam'
                        placeholder='ex: 00113356847'
                        type={'text'}>
                        </input>

                        <br/>
                        <br/>

                        <label>Valor hodômetro: </label>
                        <input className={styles.camposLogin}
                        id='hodometro'
                        placeholder='ex: 20.000'
                        type={'text'}>
                        </input>

                        <label>Status: </label>
                        <select className={styles.camposLogin}>
                            <option selected value="disponivel">Disponivel</option>
                            <option value="alugado">Alugado</option>
                            <option value="indisponivel">Indisponivel</option>
                        </select>

                        <label>Estado: </label>
                        <input className={styles.camposLogin}
                        id='estado'
                        placeholder='ex: São Paulo'
                        type={'text'}>
                        </input>

                        <br/>
                        <br/>

                        <label>Cidade: </label>
                        <input className={styles.camposLogin}
                        id='cidade'
                        placeholder='ex: Guarulhos'
                        type={'text'}>
                        </input>

                        <label>Modelo: </label>
                        <select className={styles.camposLogin}>
                            <option selected value="1">Toyota Corolla plus 2020 2.0</option>
                            <option value="2">Toyota Etios 2019 X 1.3</option>
                            <option value="3">Carrinho honda getcar</option>
                        </select>
                    </div> 
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        </section>
    );
}