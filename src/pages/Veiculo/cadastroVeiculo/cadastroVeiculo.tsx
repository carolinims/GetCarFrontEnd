import stylesTemas from 'styles/Tema.module.scss';
import styles from './cadastroVeiculo.module.scss';
import stylesLogin from 'components/menu/MenuSuperior.module.scss'
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import { Link } from 'react-router-dom';
import {CgArrowLongLeft} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import {MdImageSearch, MdOutlineSentimentVerySatisfied, MdOutlineSentimentVeryDissatisfied} from 'react-icons/md';
import { useState, useEffect } from 'react';
import CampoInputText from 'components/campoTexto/campoInputText';
import BotaoOperacao from 'components/botoes/botaoOperacoes';
import axios from 'axios';
import {useCookies} from 'react-cookie';

export default function CadastroDeVeiculo(){
    const navigate = useNavigate();
    const [msgRetornoErro, setMsgRetornoErro] = useState('');
    const [msgRetornoSucesso, setMsgRetornoSucesso] = useState('');
    const [submitFormulario, setSubmitFormulario] = useState(Boolean);
    const [cookies, setCookie] = useCookies(['access_token']);

    const [idVeiculo, setIdVeiculo] = useState();
    const [imgVeiculo, setImgVeiculo] = useState('');
    const [placaVeiculo, setPlacaVeiculo] = useState('');
    const [renavam, setRenavam] = useState('');
    const [valorHodometro, setValorHodometro] = useState(Number);
    const [statusVeiculo, setStatusVeiculo] = useState('DISPONIVEL');
    const [cidadeVeiculo, setCidadeVeiculo] = useState('');
    const [estadoVeiculo, setEstadoVeiculo] = useState('');
    const [modeloDto, setModeloDto] = useState({
        idModelo: 1
    })
    const [agAutomotiva, setAgAutomotiva] = useState({
        idAgenciaAuto: 1
    })


    function enviarFormulario(){
        setMsgRetornoErro("");
        setMsgRetornoSucesso("");
        const headers = {
            'Content-Type': 'application/json',
            // Authorization: cookies.access_token,
            Authorization: sessionStorage.getItem("token"),
        };

        setImgVeiculo('/assets/carrinho.png');
        const bodyParameters = {
            // idVeiculo: idVeiculo,
            agAutomotiva: agAutomotiva,
            imgVeiculo: '/assets/carrinho.png',
            placaVeiculo: placaVeiculo,
            renavam: renavam,
            valorHodometro: valorHodometro,
            statusVeiculo: statusVeiculo,
            cidadeVeiculo: cidadeVeiculo,
            estadoVeiculo: estadoVeiculo,
            modelo: modeloDto 
        };
        console.log(bodyParameters);

        axios.post( 
            'http://getcar.eba-ztmgvkte.us-west-2.elasticbeanstalk.com/veiculo/cadastrar',
            bodyParameters,  {headers}
        )
        .then(resp => {
            console.log("Post de cadastro de veiculos retornou sucesso");
            setMsgRetornoSucesso(" - Cadastro realizado com sucesso");
            setPlacaVeiculo("");
            setRenavam("");
            setValorHodometro(0);
            setStatusVeiculo("DISPONIVEL");
            setCidadeVeiculo("");
            setEstadoVeiculo("");
        })
        .catch(erro => {
            if(erro.response.status === 403){
                // se der acesso negado significa que o token expirou, então retorna para login
                sessionStorage.removeItem("token");
                navigate('/Login');
                console.log("Identificado 403");
            }

            console.log("Post de cadastro de veículos retornou erro: " + erro.response.data.mensagem);
            setMsgRetornoErro(erro.response.data.mensagem);
        })
    }

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
                    {
                        msgRetornoErro !== null && msgRetornoErro.length !== 0 ?
                        <div className={styles.msgErro}>
                            <h3><MdOutlineSentimentVeryDissatisfied size={20}/>{ " - " + msgRetornoErro}</h3>
                        </div>
                        :
                        <br/>
                    }
                    {
                        msgRetornoSucesso !==null && msgRetornoSucesso.length !== 0 ?
                        <div className={styles.msgSucesso}>
                            <h3><MdOutlineSentimentVerySatisfied size={20}/>{msgRetornoSucesso}</h3>
                        </div>
                        :
                        <br/>
                    }
                    
                    <br/>
                    <div className={styles.form} >
                    <br/>
                    <br/>
                    <div className={styles.fundoImg}>
                        <img id={'imgVeiculo'} src={'/assets/carrinho.png'} alt={"Imagem veículo"} />
                        <br/>
                        <br/>
                        {/* <button
                            onClick={() => {}}
                            type='button'> 
                        <MdImageSearch size={20}/>
                        Carregar imagem
                        </button> */}
                    <br/>
                    </div>
                    <div className={styles.camposForm}>
                        <label>Placa: </label>
                        {/* <CampoInputText
                            value={placaVeiculo}
                            rotulo="Ex: GEV-8A19"
                            setValue={setPlacaVeiculo}
                            tamanho='100px'
                        /> */}
                        <input className={styles.camposLogin}
                        name='placaVeiculo'
                        placeholder='ex: GEV-8U19'
                        onChange = {(evento) => setPlacaVeiculo(evento.target.value)}
                        value={placaVeiculo}
                        type={'text'}>
                        </input>

                        <label>Renavam: </label>
                        <input className={styles.camposLogin}
                        name='reanvam'
                        placeholder='ex: 00113356847'
                        onChange = {(evento) => setRenavam(evento.target.value)}
                        value={renavam}
                        type={'text'}>
                        </input>

                        <br/>
                        <br/>

                        <label>Valor hodômetro: </label>
                        <input className={styles.camposLogin}
                        name='valorHodometro'
                        placeholder='ex: 20000'
                        onChange = {(evento) => setValorHodometro(parseInt(evento.target.value))}
                        value={valorHodometro}
                        type={'text'}>
                        </input>

                        <label>Status: </label>
                        <select 
                            name={'statusVeiculo'} 
                            className={styles.camposLogin}
                            onChange = {(evento) => setStatusVeiculo(evento.target.value)}
                            value={statusVeiculo}
                            >
                            <option value="DISPONIVEL">Disponivel</option>
                            <option value="ALUGADO">Alugado</option>
                            <option value="INDISPONIVEL">Indisponivel</option>
                        </select>

                        <label>Estado: </label>
                        <input className={styles.camposLogin}
                        name='estadoVeiculo'
                        placeholder='ex: São Paulo'
                        onChange = {(evento) => setEstadoVeiculo(evento.target.value)}
                        value={estadoVeiculo}
                        type={'text'}>
                        </input>
                        <br/>
                        <br/>
                        <label>Cidade: </label>
                        <input className={styles.camposLogin}
                        name='cidadeVeiculo'
                        placeholder='ex: Guarulhos'
                        onChange = {(evento) => setCidadeVeiculo(evento.target.value)}
                        value={cidadeVeiculo}
                        type={'text'}>
                        </input>

                        <label>Modelo: </label>
                        <select 
                            name={'modeloDto'} 
                            className={styles.camposLogin}
                            onChange = {(evento) => setModeloDto({idModelo: parseInt(evento.target.value) })}
                            value={'modeloDto'}
                            >
                            <option value={1}>Toyota Etios 2019 X 1.3</option>
                            <option value={2}>Carrinho Honda getcar</option>
                            <option value={3}>FIAT Mobi 2022</option>
                            <option value={4}>Corolla Toyota 2022 Elegance</option>
                        </select>
                    </div> 
                    <div className={styles.divBtn}>
                        <BotaoOperacao
                            type='button'
                            rotulo='Enviar'
                            tipoIcon='MdSend'
                            corIcon='#28704D'
                            tamanho='40%'
                            onClick={() => enviarFormulario()}
                        />
                    </div>
                    </div>
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