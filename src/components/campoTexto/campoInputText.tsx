import styles from './CampoInputText.module.scss';
import {CgMail} from 'react-icons/cg';
import {CgKey} from 'react-icons/cg';
import {CgLogIn} from 'react-icons/cg';

interface Props {
    value: string,
    onchange?: () => void,
    rotulo: string,
    cor: string,
    tipoIcon: string,
    tamanho: string,
    children?: React.ReactNode
  }

export default function CampoInputText({ value, onchange, rotulo, cor, tipoIcon, tamanho }: Props){
    return(
        <div className={styles.camposLogin}>
            {selecionarIcone()}
            <input 
                width={tamanho}
                value={value}
                onChange = {onchange}
                placeholder = {rotulo}
            />  
        </div>
    );

    function selecionarIcone(){
        switch (tipoIcon) {
            case 'CgMail':
                return(
                    <CgMail size={20} color = {cor}/>
                );
            case 'CgKey':
                return(
                    <CgKey size={20} color = {cor}/>
                );
            case 'CgLogIn':
                return(
                    <CgLogIn size={20} color = {cor}/>
                );
            default:
                return null;
        }
    };

}

