# application-full-stack
En MySQL debe existir una base de datos llamada Persona con los siguientes campos:
  - id_persona
   -nombre
   -apellido
   -email
   -telefono
En la aplicación solo se utiliza el campo de nombre

En el servidor de glassfish se agrega la configuración y el driver de MySQL, para que se encargue de las transacciones

En el archivo de persistencia tiene el nombre de la unidad de persistencia, el cual es el nombre que se dió en el servidor de glaassfish

Configuración de glassfish
Antes de la configuración hay que añadir el driver MySQL a la siguiente ruta
C:/<RUTA_GLASSFISH>/glassfish/lib
Ir a
localhost:<port>(4848 default) 
    > Resources 
    > JDBC 
    > JDBC Connection Pools 
    > Click en "New"
      -> Config
        > Pool Name: PersonaPool (O el que se desee)
        > Resource Type: javax.sql.ConnectionPoolDataSource
        > Data Source Classmate: com.mysql.cj.jdbc.MysqlDataSource
        > El resto se queda por default
        > Additional properties:
                Name   /   Value
            - portNumber: 3306 (puerto de MySQL)
            - user: root (o el usuario deseado)
            - datasourceName: com.mysql.cj.jdbc.MysqlDataSource
            - serverName: localhost
            - databaseName: test (o el nombre del esquema en otro caso)
            - password: admin (o la contraseña puesta para el usuario)
            - useSSL: false
            - useTimezone: true
            - serverTimezone: UTC
      Omita los dos puntos : y agregue las propiedades necesarias y elimine las que no aparecen en la lista
  
      Regresar JDBC y posteriormente en 
      >JDBC Resources
 Se añadirá el nombre de unidad de persistencia jta que será el mismo que se encuentra en el archivo personas-backend-java/src/main/resources/META-INF/persistence.xml
 En este caso es PersonaPU
        -> Config
            > JNDI Name: jdbc/PersonaPU
            > Pool Name: PersonaPool (o la configurada en la configuración de JDBC Pool)
 
      
