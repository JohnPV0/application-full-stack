import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../persona-service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: []
})
export class PersonasComponent implements OnInit {

  personas:Persona[] = [];

  constructor(public personaService: PersonaService, 
    private router: Router, 
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.personaService.getPeople().subscribe(
      (personasObtenidas:any) => {
        //Cargamos los datos de persona obtenidos
        this.personas = personasObtenidas;
        this.personaService.setPeople(this.personas);
        console.log("personas obtenidas del subscriber: " + this.personas);
      }
    );
    this.personaService.isOpen = false;
  }

  irAgregar() {
    console.log("Yendo a agregar");
    this.router.navigate(['personas/agregar']);
    this.personaService.isOpen = true;
  }

  regresar() {
    this.router.navigate(['personas']);
    this.personaService.isOpen = false;
  }

}
