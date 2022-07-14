package mx.com.gm.data;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import mx.com.gm.domain.Persona;

@Stateless
public class PersonaDaoImpl implements PersonaDao {
    
    @PersistenceContext (unitName = "PersonaPU")
    EntityManager em;
    
    @Override
    public List<Persona> findAllPeople()
    {
        return em.createNamedQuery("Persona.encontrarTodasPersonas").getResultList();
    }

    @Override
    public Persona findPerson(Persona persona)
    {
        return em.find(Persona.class, persona.getIdPersona());
    }

    @Override
    public void insertPerson(Persona persona)
    {
        em.persist(persona);
        em.flush();
    }

    @Override
    public void updatePerson(Persona persona)
    {
        em.merge(persona);
    }

    @Override
    public void deletePerson(Persona persona)
    {
        em.remove(em.merge(persona));
    }
    
}
