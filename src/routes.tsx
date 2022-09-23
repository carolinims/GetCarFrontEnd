import Footer from 'components/Footer/footer';
import CadastroVeiculo from 'pages/cadastroVeiculo/cadastroVeiculo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login/login';
import MenuSuperior from 'components/menu/menuSuperior';
import PortalAdministrativo from 'pages/portalAdministrativo/portalAdministrativo';

export default function AppRouter(){
    return(
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<MenuSuperior />}>
                        <Route path='PortalAdministrativo' element={<PortalAdministrativo />}/>
                    </Route>
                    <Route path='CadastroDeVeiculo' element={<CadastroVeiculo />} />
                    <Route index element={<Login/>}/>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}