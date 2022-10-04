import Footer from 'components/Footer/footer';
import CadastroVeiculo from 'pages/Veiculo/gestaoVeiculo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login/login';
import MenuSuperior from 'components/menu/menuSuperior';
import PortalAdministrativo from 'pages/portalAdministrativo/portalAdministrativo';
import CadastroDeCliente from 'pages/Cliente/gestaoCliente';

export default function AppRouter(){
    return(
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<MenuSuperior />}>
                        <Route path='PortalAdministrativo' element={<PortalAdministrativo />}/>
                    </Route>
                    <Route index element={<Login/>}/>
                    <Route path='CadastroDeVeiculo' element={<CadastroVeiculo />} />
                    <Route path='CadastroDeCliente' element={<CadastroDeCliente />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}