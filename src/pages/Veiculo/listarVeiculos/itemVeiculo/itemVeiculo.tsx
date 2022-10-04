import {Veiculo} from 'types/veiculo';
import { useNavigate } from 'react-router-dom';
import styles from './itemVeiculo.module.scss';
import classNames from 'classnames';
import { MdDelete, MdEdit, MdEditAttributes } from 'react-icons/md';


export default function ItemVeiculo(props: Veiculo) {
    const { idVeiculo, valorHodometro, renavam, placaVeiculo, imgVeiculo, statusVeiculo, 
        modeloDto} = props;

    const navigate = useNavigate();
    return (
      <div className={styles.item} onClick={() => /*navigate(`/prato/${id}`)*/{}}>
        <div className={styles.fundoImg}>
          <img src={imgVeiculo} alt={"Imagem veículo"} />
        </div>
        <div>
          <h3>{modeloDto.descrModelo}</h3>
          <div className={styles.tags}>
            <div className={styles.tags__marca}><b>Marca: </b>{modeloDto.marca}</div>
            <div className={styles.tags__placa}><b>Placa: </b>{placaVeiculo}</div>
            <div className={styles.tags__renavam}><b>Renavam:</b>{renavam}</div>
            <div className={styles.tags__combustivel}><b>Tipo Combustivel: </b>{modeloDto.tipoCombustivel}</div>
            <div className={styles.tags__categoria}><b>Categoria: </b>{modeloDto.categoria}</div>
          </div>
          <div className={styles.tags}>
            <div className={styles.tags__status}><b>Status do Veículo:</b>{statusVeiculo}</div>
          </div>
        </div>
        <div className={styles.operacoes}>
          <button className={styles.botaoOperacoes}
            onClick={() => {}}>
            <MdEdit color='green' size={30}/>
          </button>
          <button className={styles.botaoOperacoes}
            onClick={() => {}}>
            <MdDelete color='red' size={30}/>
          </button>
        </div>
      </div>
    );
  }