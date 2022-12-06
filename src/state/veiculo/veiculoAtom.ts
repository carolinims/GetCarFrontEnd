import { atom } from "recoil";
import IVeiculo from 'interfaces/IVeiculo';


export const listaDeVeiculosState = atom<IVeiculo[]>({
    key: 'listaDeVeiculosState',
    default: [],
})