import { Pais } from "./pais";

export class Persona {

    id:string;
    nombre:string;
    pwd:string;
    paisNace:Pais;
    paisReside:Pais;

    constructor(id:string,nombre:string,pwd:string,paisNace:Pais,paisReside:Pais){
        this.id = id;
        this.nombre = nombre;
        this.pwd = pwd;
        this.paisNace = paisNace;
        this.paisReside = paisReside;
    }
}