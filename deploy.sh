#!/bin/bash

echo "🚀 Déploiement de Overlay Pro TT..."
echo ""

# Vérifier qu'on est dans le bon dossier
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ Erreur: docker-compose.yml introuvable!"
    echo "Assure-toi d'être dans le dossier /opt/overlay-pro-website"
    exit 1
fi

# Arrêter les containers existants
echo "📦 Arrêt des containers existants..."
docker compose down

# Build et lancer
echo "🔨 Build de l'image Docker..."
docker compose up -d --build

# Nettoyer les images inutilisées
echo "🧹 Nettoyage des anciennes images..."
docker image prune -f

echo ""
echo "✅ Déploiement terminé!"
echo ""
echo "📊 Status du container:"
docker ps | grep overlay-pro-website

echo ""
echo "📝 Logs (Ctrl+C pour quitter):"
echo ""
docker logs -f overlay-pro-website

