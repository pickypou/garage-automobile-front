# Diagramme de classes
``` mermaid
classDiagram
    Annonces "0..n" --> Options
    class Annonces {
        +int id
        +string title
        +string brand
        +string model
        +string price
        +string mileage
        +string year
        +string fuel
        +string description
        +Options? options
        +string imgUne
        +string imgDeux
        +string imgTrois
        +string imgQuatre
    }

    class Options {
        +int id
        +string gps
        +string regulateur
        +string limitateur
        +string clim
        +string sfu
        +string sac
        +string bluetooth
        +string camera
        +string sas
        +Annonces? annonce
    }

    class Comments {
        +int id
        +string title
        +string description
    }

    class User {
        +int id
        +string email
        +string[] roles
        +string password
        +string firstname
        +string lastname
    }

```