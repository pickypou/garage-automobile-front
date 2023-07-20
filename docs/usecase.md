# Cas d'utilisation
``` mermaid
    flowchart LR
        usr((Utilisateurs))
       
        subgraph Site web
            voir(Voir les annonces)
            vc(Voir les commentaires)
            com(Poster un commentaire)
            contact(Contacter l'entreprise)
        end

        
        usr --> voir
        usr --> vc
        usr --> com
        usr --> contact
```