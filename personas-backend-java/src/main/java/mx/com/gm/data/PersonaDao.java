package mx.com.gm.data;

import java.util.List;
import mx.com.gm.domain.Persona;

public interface PersonaDao {
    public List<Persona> findAllPeople();
    public Persona findPerson(Persona persona);
    public void insertPerson(Persona persona);
    public void updatePerson(Persona persona);
    public void deletePerson(Persona persona);
}
