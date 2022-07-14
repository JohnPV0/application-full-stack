import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../persona-service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: ['']
})
export class FormularioComponent implements OnInit {

  nombreInput:String;
  idPersona:number;

  @Input() isOpen:boolean;

  constructor(private personaService:PersonaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.personaService.isOpen = true;
    this.idPersona = this.route.snapshot.params['idPersona'];
    console.log("Recuperamos el parámetro: " + this.idPersona);
    if (this.idPersona != null){
      const persona = this.personaService.findPerson(this.idPersona);
      if (persona != null){
        this.nombreInput = persona.nombre;
      }
    }
  }

  onSavePerson() {
    const persona = new Persona(this.idPersona, this.nombreInput);
    if(this.idPersona != null) {
      this.personaService.updatePerson(this.idPersona, persona);
    } else {
      this.personaService.addPerson(persona);
    }
    console.log("redireccionando a lista de personas");
    this.router.navigate(['personas']);
    this.personaService.isOpen = false;
  }

  onDeletePerson() {
    if(this.idPersona != null) {
      console.log("Persona a eliminar: " + this.idPersona + " " + this.nombreInput);
      this.personaService.deletePerson(this.idPersona);
      this.router.navigate(['personas']);
      this.personaService.isOpen = false;
    }
  }
}
