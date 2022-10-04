import styles from './CampoInputText.module.scss';
import {CgMail} from 'react-icons/cg';
import {CgKey} from 'react-icons/cg';
import {CgLogIn} from 'react-icons/cg';
import {CgPin} from 'react-icons/cg';
import {CgCalendar} from 'react-icons/cg';
import {CgTime} from 'react-icons/cg';

interface Props {
    value: string,
    onchange?: () => void,
    rotulo: string,
    corIcon?: string,
    tipoIcon?: string,
    tamanho: string,
    children?: React.ReactNode,
    type?: "text" | undefined,
    name?: string,
    id?: string
  }

export default function CampoInputText({ value, onchange, rotulo, corIcon, tipoIcon, tamanho, type, name, id }: Props){
    return(
        <div className={styles.camposLogin}>
            {selecionarIcone()}
            <input 
                width={tamanho}
                value={value}
                onChange = {onchange}
                placeholder = {rotulo}
                type = {type}
                name = {name}
                id = {id}
            />  
        </div>
    );

    function selecionarIcone(){
        switch (tipoIcon) {
            case 'CgMail':
                return(
                    <CgMail size={20} color = {corIcon}/>
                );
            case 'CgKey':
                return(
                    <CgKey size={20} color = {corIcon}/>
                );
            case 'CgLogIn':
                return(
                    <CgLogIn size={20} color = {corIcon}/>
                );
            case 'CgPin':
                return(
                    <CgPin size={20} color = {corIcon}/>
                );
            case 'CgCalendar':
                return(
                    <CgCalendar size={20} color = {corIcon}/>
                );
            case 'CgTime':
                return(
                    <CgTime size={20} color = {corIcon}/>
                );
            default:
                return null;
        }
    };

}

