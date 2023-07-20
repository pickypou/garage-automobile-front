
# Garage V.Parrot

## Description du projet

Le projet se concentre sur la partie front-end d'une application dédiée à la vente de véhicules d'occasion. L'objectif principal est de permettre aux utilisateurs (clients potentiels) de visualiser les véhicules mis en vente par le garage de Monsieur PARROT.

Les utilisateurs ont la possibilité de contacter le service commercial via un formulaire de contact ou par téléphone pour prendre un rendez-vous.

Un système de recherche a été mis en place pour faciliter l'utilisateur dans sa recherche d'un véhicule. Le système offre au client la possibilité de cibler sa recherche par :

- Marque de véhicule
- Kilométrage
- Prix

## Technologie utilisée

Le projet Garage V.PARROT est une application qui comporte deux parties. La première partie du projet est une application back-end développée en Symfony 6.3 : [Lien du projet back-end](https://github.com/pickypou/garage-back.git). La deuxième partie est une application front-end développée avec Next.js, avec le CSS géré via React Bootstrap.

## Pourquoi Next.js et React Bootstrap ?

Next.js :

- Rendu côté serveur (SSR) et rendu côté client (CSR) pour des temps de chargement rapides.
- Optimisation pour les moteurs de recherche (SEO) pour une meilleure visibilité.
- Performances améliorées grâce à l'optimisation automatique.
- Routage simple et intuitif pour une navigation fluide.
- Prise en charge native des modules CSS et CSS-in-JS pour un style modulaire.
- Hot Module Replacement (HMR) pour un développement efficace.
- Support complet pour React et intégration facile des données.
- Déploiement simplifié pour une mise en production rapide.
- Communauté active pour un support et des ressources abondantes.

React Bootstrap :

- Intégration transparente avec les projets React existants.
- Composants réactifs adaptatifs aux différentes tailles d'écran.
- Personnalisation facile des styles pour correspondre à votre application.
- Bibliothèque complète de composants prêts à l'emploi.
- Support actif et maintenance régulière.
- Documentation détaillée pour une mise en œuvre rapide.
- Compatibilité avec Bootstrap pour des fonctionnalités étendues.

## GitHub

- [Lien du projet front-end](https://github.com/pickypou/garage-automobile-front.git)

## En local

1. Cloner le projet :

    git clone https://github.com/pickypou/garage-automobile-front.git

2. Se rendre à la racine du projet :
    cd garage-automobile-front

3. Installer les dépendances :
    npm install

4. Lancer le serveur de développement :
    npm run dev

Assurez-vous d'avoir Node.js et npm sur votre machine :
[Lien de téléchargement](https://nodejs.org/en/download)

Assurez-vous d'avoir installé la partie back-end du projet pour visualiser les annonces. Vous trouverez les renseignements pour cette partie plus bas.

Pour accéder à l'application, ouvrez votre navigateur et rendez-vous à l'URL indiquée par npm lors de l'exécution de la commande "npm run dev".

## Partie back-end

- [Lien du projet back-end](https://github.com/pickypou/garage-back.git)
