# Cas d'utilisation
``` mermaid
    flowchart LR
        usr((Utilisateurs))
        adm((Administrateurs))
        emp((Employés))

        subgraph Site web
            voir(Voir les annonces)
            vc(Voir les commentaires)
            com(Poster un commentaire)
            contact(Contacter l'entreprise)
        end

        subgraph Espace admin
            cnx(Connexion)
            va(Voir les annonces)
            ca(Créer une annonce)
            sa(Supprimer une annonce)
            ccpt(Créer un compte)
            sc(Supprimer un commentaire)
        end

        usr --> voir
        usr --> vc
        usr --> com
        usr --> contact

        emp --> cnx
        emp --> va
        emp --> ca
        emp --> sa

        adm --> cnx
        adm --> cnx
        adm --> va
        adm --> ca
        adm --> sa
        adm --> ccpt
        adm --> sc
```