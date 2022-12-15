export default interface IUsuario{
    id: number;
    login: string;
    senha: string;
    perfil:{
        idPerfil: number;
        tipoUsuario: string;
    };
}