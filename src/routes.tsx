import Footer from 'components/Footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login/login';
import MenuSuperior from 'components/menu/menuSuperior';
import PortalAdministrativo from 'pages/portalAdministrativo/portalAdministrativo';
import CadastroDeCliente from 'pages/Cliente/gestaoCliente';
import GestaoDeVeiculo from 'pages/Veiculo/gestaoVeiculo';
import CadastroDeVeiculo from 'pages/Veiculo/cadastroVeiculo/cadastroVeiculo';
import { RecoilRoot } from 'recoil'

export default function AppRouter(){
    return(
        <RecoilRoot>
            <main className='container'>
                <Router>
                    <Routes>
                        <Route path='/' element={<MenuSuperior />}>
                            <Route path='PortalAdministrativo' element={<PortalAdministrativo />}/>
                        </Route>
                        <Route index element={<Login/>}/>
                        <Route path='Login' element={<Login/>}/>
                        <Route path='GestaoDeVeiculo' element={<GestaoDeVeiculo />} />
                        <Route path='CadastroDeCliente' element={<CadastroDeCliente />} />
                        <Route path='CadastroDeVeiculo' element={<CadastroDeVeiculo />}/>
                    </Routes>
                    <Footer />
                </Router>
            </main>
        </RecoilRoot>
    );
}