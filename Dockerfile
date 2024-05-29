# Utilisation d'une image officielle Node.js
FROM node:22

# Copie du code source Node.js dans l'image
COPY . /app

# Définition du répertoire de travail
WORKDIR /app

# Installation des dépendances
RUN npm install

# Exposition du port 3000 pour le serveur de développement
EXPOSE 3000

# Commande de démarrage pour exécuter l'application Node.js
CMD ["npm", "start"]
