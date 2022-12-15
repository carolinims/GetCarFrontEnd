import Footer from 'components/Footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login/login';
import MenuSuperior from 'components/menu/menuSuperior';
import PortalAdministrativo from 'pages/portalAdministrativo/portalAdministrativo';
import CadastroDeCliente from 'pages/Cliente/gestaoCliente';
import GestaoDeVeiculo from 'pages/Veiculo/gestaoVeiculo';
import CadastroDeVeiculo from 'pages/Veiculo/cadastroVeiculo/cadastroVeiculo';
import EdicaoDeVeiculo from 'pages/Veiculo/editarVeiculo/editarVeiculo';
import GestaoDeReserva from 'pages/Reserva/gestaoReserva';
import GestaoDeUsuario from 'pages/Usuario/gestaoUsuario';
import CadastroDeUsuario from 'pages/Usuario/cadastroDeUsuario/cadastroDeUsuario';
import CadastroDeReserva from 'pages/Reserva/CadastroDeReserva.tsx/CadastroDeReserva';
import { RecoilRoot } from 'recoil'

export default function AppRouter(){
    return(
        <main className='container'>
            <RecoilRoot>
            <Router>
                <Routes>
                    <Route path='/' element={<MenuSuperior />}>
                        <Route path='PortalAdministrativo' element={<PortalAdministrativo />}/>
                        <Route path='CadastroDeReserva' element={<CadastroDeReserva />}/> 
                    </Route>
                    <Route index element={<Login/>}/>
                    <Route path='Login' element={<Login/>}/>
                    <Route path='GestaoDeVeiculo' element={<GestaoDeVeiculo />} />
                    <Route path='CadastroDeCliente' element={<CadastroDeCliente />}/>
                    <Route path='CadastroDeVeiculo' element={<CadastroDeVeiculo />}/>
                    <Route path='GestaoDeReserva' element={<GestaoDeReserva />}/>
                    <Route path='GestaoDeUsuario' element={<GestaoDeUsuario />}/>
                    <Route path='CadastroDeUsuario' element={<CadastroDeUsuario />}/>
                    <Route path='EdicaoDeVeiculo' element={<EdicaoDeVeiculo idVeiculo={0} imgVeiculo={''} placaVeiculo={''} renavam={''} valorHodometro={0} statusVeiculo={''} cidadeVeiculo={''} estadoVeiculo={''} modeloDto={{
                        idModelo: 0,
                        descrModelo: '',
                        tipoCombustivel: '',
                        tipoMotorizacao: '',
                        marca: '',
                        categoria: ''
                    }} />}/>
                </Routes>
                <Footer />
            </Router>
            </RecoilRoot>
        </main>
    );
}