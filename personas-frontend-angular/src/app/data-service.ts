import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Persona } from "./persona.model";

@Injectable()
export class DataService {

    urlBase = 'http://localhost:8080/personas-backend-java/webservice/personas';

    constructor(private httpClient: HttpClient) {}

    getPeople() {
        return this.httpClient.get(this.urlBase);
    }

    addPerson(persona: Persona) {
        return this.httpClient.post(this.urlBase, persona);
    }

    updatePerson(idPersona:number, persona: Persona) {
        let url = this.urlBase + '/' + idPersona;
        this.httpClient.put(url, persona).subscribe(
            (response) => {
                console.log("Resultado de modificar persona: " + response);
            },
            (error) => {
                console.log("Error al modificar persona:" + error);
            }
        );
    }

    deletePerson(idPersona: number) {
        let url = this.urlBase + '/' + idPersona;
        this.httpClient.delete(url).subscribe(
            (response) => {
                console.log("Resultado de eliminar persona: " + response);
            },
            (error) => {
                console.log("Error al eliminar persona:" + error);
            }
        );
    }
}
