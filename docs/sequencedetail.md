# sequences detail

## sequences detail d'une annonce

```mermaid
sequenceDiagram
    actor Utilisateur
    participant React
    participant API
    participant BDD
    Utilisateur ->> React: entrée sur le site
    React ->> Api: recupérer lesdonnées 
    API ->> BDD: récupérer l'annonce + les options
    BDD ->> API: Détail de l'annonce
    API ->> React: Détail de l'annonce
    React ->> API: chargement des images
    API -->> React: 
    React ->> Utilisateur: Affichage du détail de l'annonce 
```
