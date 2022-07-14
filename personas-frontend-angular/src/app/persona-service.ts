import { Injectable } from "@angular/core";
import { DataService } from "./data-service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService {
    personas:Persona[] = [];

    isOpen:boolean = false;

    constructor(private dataService:DataService) {}

    //Se usa para modificar el valor del arreglo devido a la llamada asincrona    
    setPeople(personas:Persona[]) {
        this.personas = personas;
    }

    addPerson(persona:Persona) {
        console.log("persona a agregar: " + persona.nombre);
        this.dataService.addPerson(persona).subscribe(
            (persona:any) => {
                //Recuperamos el objeto persona con el idPersoa recién agregado
                console.log('Se agrega al arreglo la persona recien insertada subscriber :' + persona.idPersona);
                this.personas.push(persona);
            }
        );
    }

    findPerson(idPersona:number) {
        const personaEncontrada = this.personas.find(persona => persona.idPersona == idPersona);
        if (personaEncontrada != null) {
            console.log('Persona encontrada: ' + personaEncontrada.idPersona + " " + personaEncontrada.nombre);
        } else {
            console.log("Pesona con el idPersona "  + idPersona + " no encontrada");
        }
        return personaEncontrada;
    }

    updatePerson(id:number, persona:Persona) {
        console.log('Persona a modificar: ' + persona.idPersona);
        //Se actualiza el objeto persona del arreglo
        const personaModidicadaLocal = this.personas.find(persona => persona.idPersona == id);
        if(personaModidicadaLocal != null) {
            personaModidicadaLocal.idPersona = persona.idPersona;
            personaModidicadaLocal.nombre = persona.nombre;
        }

        //Se guarda en la base de datos
        this.dataService.updatePerson(id, persona);
    }

    deletePerson(id:number) {
        console.log("Persona a eliminar con el id: " + id);
        const index = this.personas.findIndex(persona => persona.idPersona === id);
        this.personas.splice(index, 1);
        this.dataService.deletePerson(id);
    }

    getPeople() {
        return this.dataService.getPeople();
    }
}