# Sequences liste des véhhicules d'occasion

## La liste des véhicules d'occasion
``` mermaid
sequenceDiagram
    actor Utilisateur
    participant React
    participant API
    participant BDD
    Utilisateur ->> React: Entrée sur le site
    React ->> API: Récupère la liste des Annonces
    API ->> BDD: Tout récupérer de la table annonces
    BDD ->> API: Liste des annonces
    API ->> React: Liste des annonces
    React ->> API: Chargement des images
    API -->> React: 
    React ->> Utilisateur: Affichage de la liste des annonces
```