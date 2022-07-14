package mx.com.gm.domain;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@NamedQueries({
    @NamedQuery(name = "Persona.encontrarTodasPersonas", query = "SELECT p FROM Persona p ORDER BY p.idPersona")
})
@Table(name = "persona")
public class Persona implements Serializable{
    private static long serialVersionUID = 1L;
    
    @Id
    @Column(name = "id_persona")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPersona;
    
    private String nombre;

    public Persona()
    {
    }

    public Persona(int idPersona)
    {
        this.idPersona = idPersona;
    }

    public Persona(int idPersona, String nombre)
    {
        this.idPersona = idPersona;
        this.nombre = nombre;
    }

    public int getIdPersona()
    {
        return idPersona;
    }

    public void setIdPersona(int idPersona)
    {
        this.idPersona = idPersona;
    }

    public String getNombre()
    {
        return nombre;
    }

    public void setNombre(String nombre)
    {
        this.nombre = nombre;
    }

    @Override
    public String toString()
    {
        return "Persona{" + "idPersona=" + idPersona + ", nombre=" + nombre + '}';
    }
}
