package mx.com.gm.service;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import java.util.List;
import javax.ejb.Stateless;
import mx.com.gm.data.PersonaDao;
import mx.com.gm.domain.Persona;

@Stateless
@Path("/personas")
public class PersonaServiceRS {
    @Inject
    private PersonaDao personaDao;
    
    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public List<Persona> listPeople() {
        List<Persona> personas = personaDao.findAllPeople();
        System.out.println("Personas encontradas: " + personas);
        return personas;
    }
    
    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    @Path("{id}")// hace refrencias personas/{id}
    public Persona findPerson(@PathParam("id") int id) {
        Persona persona = personaDao.findPerson(new Persona(id));
        System.out.println("Persona encontrada: " + persona);
        return persona;
    }
    
    @POST
    @Consumes(value = MediaType.APPLICATION_JSON)
    @Produces(value = MediaType.APPLICATION_JSON)
    public Persona addPerson(Persona persona) {
        personaDao.insertPerson(persona);
        System.out.println("Persona agregada: " + persona);
        return persona;
    }
    
    @PUT
    @Consumes(value = MediaType.APPLICATION_JSON)
    @Produces(value = MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response updatePerson(@PathParam("id") int id, Persona personaModificada) {
        Persona personaEncontrada = personaDao.findPerson(new Persona(id));
        if (personaEncontrada != null) {
            personaDao.updatePerson(personaModificada);
            System.out.println("Persona modificada: " + personaModificada);
            return Response.ok().entity(personaModificada).build();
        } else {
            return Response.status(Status.NOT_FOUND).build();
        } 
    }
    
    @DELETE
    @Produces(value = MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response deletePerson(@PathParam("id") int id) {
        Persona personaEncontrada = personaDao.findPerson(new Persona(id));
        if (personaEncontrada != null) {
            personaDao.deletePerson(new Persona(id));
            System.out.println("Persona eliminada con el id: " + id);
            return Response.ok().build();
        } else {
            return Response.status(Status.NOT_FOUND).build();
        } 
    }
}
