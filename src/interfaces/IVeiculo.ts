export default interface IVeiculo{
    idVeiculo: number;
    imgVeiculo: string;
    placaVeiculo: string;
    renavam: string;
    valorHodometro: number;
    statusVeiculo: string;
    cidadeVeiculo: string;
    estadoVeiculo: string;
    modeloDto: {
        idModelo: number;
        descrModelo: string;
        tipoCombustivel: string;
        tipoMotorizacao: string;
        marca: string;
        categoria: string;
    };
}
