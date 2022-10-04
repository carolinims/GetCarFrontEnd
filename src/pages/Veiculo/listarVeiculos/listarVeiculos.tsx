import styles from './listaVeiculos.module.scss';
import { Veiculo } from 'types/veiculo';
import { useState, useEffect } from 'react';
import veiculo from 'components/data/veiculo.json';
import ItemVeiculo from './itemVeiculo/itemVeiculo';


interface Props {
    busca: string,
    filtro: number | null,
}
  
export default function ListarVeiculos(props: Props){
    const [lista, setLista] = useState(veiculo);
    const { busca, filtro} = props;

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        console.log("log aqui {}", regex.test(title));
        return regex.test(title);
    }
    
    function testaFiltro(id: number) {
        if(filtro !== null) 
            return filtro === id;
        return true;
    }

    useEffect(() => {
        console.log("useEffect");
        veiculo.filter(v => {
            switch (filtro) {
                case 1:
                    setLista(veiculo.filter(v => testaBusca(v.placaVeiculo) /*&& testaFiltro(1)*/));
                    console.log("case 1", veiculo);
                break;
                // case 2:    
                // break;
                case 3:  
                    setLista(veiculo.filter(v => testaBusca(v.modeloDto.descrModelo) /*&& testaFiltro(3)*/));
                break;
                case 4:   
                    setLista(veiculo.filter(v => testaBusca(v.modeloDto.marca) /*&& testaFiltro(4)*/));
                break;
                default:
                    setLista(veiculo.filter(item => item != null));
                    console.log("filtro default");
                    break;
            }
        });
        // setLista(novaLista);
        // lista.map(v => console.log("lista", v.modeloDto.marca));

    },[busca, filtro]);

    
    // useEffect(() => {
    //     setLista(veiculo.filter(v => testaBusca(v.placaVeiculo) /*&& testaFiltro(1)*/))
    //     // setLista(veiculo.filter(v => v != null));
    // },[busca, filtro]);

    return (
        <div className={styles.itens}>
          {lista.map(veiculo => (
            <ItemVeiculo key={veiculo.idVeiculo} {...veiculo} />
          ))}
        </div>
      );
}