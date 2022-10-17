import styles from './BotaoOperacoes.module.scss';
import {CgLogIn} from 'react-icons/cg';
import {MdAddBox, MdSend} from 'react-icons/md';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    rotulo: string,
    corIcon: string,
    tipoIcon: string,
    tamanho: string,
    children?: React.ReactNode
  }

export default function BotaoOperacao({type, onClick, rotulo, corIcon, tipoIcon, tamanho}: Props){
    return(
        <button className={styles.corBotaoOperacao} 
            onClick={(onClick)}>
            {selecionarIcone()}
            {rotulo}
        </button>
    );

    function selecionarIcone(){
        switch (tipoIcon) {
            case 'login':
                return(
                    <CgLogIn size={20} color = {corIcon}/>
                );
            case 'MdAddBox':
                return(
                    <MdAddBox size={15} color = {corIcon}/>
                );
            case 'MdSend':
                return(
                    <MdSend size={20} color = {corIcon}/>
                );

            default:
                return null;
        }
    }
}