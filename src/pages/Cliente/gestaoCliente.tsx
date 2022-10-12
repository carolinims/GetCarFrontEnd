import stylesTemas from 'styles/Tema.module.scss';
import styles from './CadastroCliente.module.scss';
import stylesLogin from 'components/menu/MenuSuperior.module.scss'
import {ReactComponent as Logo} from 'assets/meulogo.svg';
import {CgArrowLongLeft} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CampoInputText from 'components/campoTexto/campoInputText';
import stylesCampoTexto from 'components/campoTexto/CampoInputText.module.scss';
import { MdFilterListAlt} from 'react-icons/md';


export default function CadastroDeCliente(){
    const navigate = useNavigate();
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
                        <Link onClick={() => navigate(-1)} to={''}>
                            <CgArrowLongLeft/>
                            Voltar
                        </Link>
                    </div>
                    <br/>
                    <br/>
                    <div className={stylesTemas.divTitulo}>
                        Cadastro de Clientes
                    </div>
                    <form onSubmit={()=>{}}>
                        <label>
                            Nacionalidade: 
                        </label>
                    <select className={stylesCampoTexto.camposLogin}>
                        <option selected value="Brasileira">Brasileira</option>
                        <option value="Norteamericano">Norte americano</option>
                        <option value="Africano">Africano</option>
                        <option value="todos"> <MdFilterListAlt/></option>
                    </select>
                        <label htmlFor="email">
                            E-mail: 
                        </label>
                        {/* <CampoInputText 
                            value=''
                            rotulo='E-mail'
                            corIcon='#3D1A1D'
                            tipoIcon='CgMail'
                            tamanho='80%'
                            type='text'
                            name="email"
                            id="email"
                        />
                        <CampoInputText 
                            value=''
                            rotulo='Senha'
                            corIcon='#3D1A1D'
                            tipoIcon='CgKey'
                            tamanho='100%'
                            type='text'
                        /> */}
                    </form>
                </div>
            </div>
            <br/>
            <br/>
        </section>
    );
}