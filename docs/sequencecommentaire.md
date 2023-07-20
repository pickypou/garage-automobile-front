# sequence commentaires

## sequence d' un commentaire

```mermaid
sequenceDiagram
actor Utilisateur
participant React
participant API
participant BDD
Utilisatuer ->> React: entrée sur le site
React ->> API: envoie des données
API ->> BDD: envoi des données
BDD ->> API: recupérer le commentaire
API ->> React: le commentaire
React ->> Utilisateur: affichage du commentaire
```