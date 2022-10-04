import React from 'react';
import { MdSearch } from 'react-icons/md';
import { MdFilterListAlt } from 'react-icons/md';
import styles from './buscadorVeiculo.module.scss';

interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
  }

export default function Buscador({ busca, setBusca }: Props) {
    return (
        <div className={styles.buscador}>
            <input
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                placeholder="Buscar"
            />
            <MdSearch size={20} color="#3D1A1D" />
        </div>
    );
  }