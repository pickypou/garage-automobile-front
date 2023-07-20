# sequence commentaires

## sequence d'un commentaire

```mermaid
sequenceDiagram
    actor Utilisateur
    participant React
    participant API
    participant BDD

    Utilisateur ->> React: Entré su le site
    React ->> API: récupérer les données
    API ->> BDD: Récupérer les données
    BDD -->> API: 
    API -->>  React: 
    React ->> Utilisateur: affichage des commentaires
    
```