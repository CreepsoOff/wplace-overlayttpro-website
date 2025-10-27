# 🚀 Guide de Déploiement - install.creepso.com

## 📦 Étape 1: Préparer les fichiers pour le transfert

### Fichiers à transférer sur ton VPS:
```
✅ Tous les fichiers du projet SAUF:
   ❌ node_modules/
   ❌ .next/
   ❌ .git/
   ❌ other_website/
```

## 📤 Étape 2: Transfert via SFTP (WinSCP, FileZilla, etc.)

### Avec WinSCP:
1. Connecte-toi à ton VPS
2. Crée le dossier: `/opt/overlay-pro-website`
3. Glisse-dépose TOUT le projet dans ce dossier
4. Vérifie que ces fichiers sont bien présents:
   - ✅ Dockerfile
   - ✅ docker-compose.yml
   - ✅ .dockerignore
   - ✅ next.config.mjs (modifié)
   - ✅ package.json
   - ✅ app/ (dossier complet)

## 🐳 Étape 3: Sur le VPS - Déploiement

### SSH dans ton VPS et exécute:

```bash
# 1. Aller dans le dossier
cd /opt/overlay-pro-website

# 2. Vérifier que tout est là
ls -la

# 3. Build et lancer
docker compose up -d --build

# 4. Vérifier les logs (attendre ~2-3 minutes pour le build)
docker logs -f overlay-pro-website

# 5. Vérifier que ça tourne
docker ps | grep overlay

# 6. Tester l'accès (attendre 30s pour le certificat SSL)
curl -I https://install.creepso.com
```

## ✅ Vérifications

### Si tout fonctionne:
- ✅ `docker ps` montre le container "overlay-pro-website"
- ✅ Les logs montrent "ready started server on 0.0.0.0:3000"
- ✅ https://install.creepso.com est accessible

### En cas de problème:

```bash
# Voir les logs détaillés
docker logs overlay-pro-website

# Redémarrer
docker compose restart

# Rebuild complet
docker compose down
docker compose up -d --build

# Vérifier le réseau Traefik
docker network ls
docker inspect overlay-pro-website | grep Networks
```

## 🔄 Étape 4: Mises à jour futures

### Option A: Via SFTP
1. Modifie les fichiers localement
2. Re-transfert les fichiers modifiés via SFTP
3. Sur le VPS:
```bash
cd /opt/overlay-pro-website
docker compose down
docker compose up -d --build
```

### Option B: Script automatique (Recommandé)
Crée le fichier `/opt/overlay-pro-website/deploy.sh`:
```bash
#!/bin/bash
cd /opt/overlay-pro-website
docker compose down
docker compose up -d --build
docker image prune -f
echo "✅ Déploiement terminé!"
docker logs -f overlay-pro-website
```

Rends-le exécutable:
```bash
chmod +x deploy.sh
```

Pour mettre à jour après transfert SFTP:
```bash
cd /opt/overlay-pro-website
./deploy.sh
```

## 🎯 URLs

- **Production**: https://install.creepso.com
- **Logs**: `docker logs -f overlay-pro-website`
- **Status**: `docker ps | grep overlay`

## 🔧 Commandes Utiles

```bash
# Voir les logs en temps réel
docker logs -f overlay-pro-website

# Redémarrer
docker compose restart

# Arrêter
docker compose down

# Relancer
docker compose up -d

# Rebuild complet
docker compose up -d --build

# Nettoyer les images inutilisées
docker image prune -f

# Voir l'utilisation des ressources
docker stats overlay-pro-website
```

## 🆘 Troubleshooting

### Le site ne charge pas:
```bash
# 1. Vérifier que le container tourne
docker ps

# 2. Vérifier les logs
docker logs overlay-pro-website

# 3. Vérifier le réseau
docker inspect overlay-pro-website | grep Networks
# Doit afficher "aiostreams_default"
```

### Erreur de certificat SSL:
```bash
# Attendre 30-60 secondes pour que Let's Encrypt génère le certificat
# Vérifier les logs Traefik
docker logs traefik | grep install.creepso.com
```

### Port déjà utilisé:
```bash
# Changer le container_name dans docker-compose.yml
# ou arrêter le service qui utilise le port
```

---

## 📝 Notes

- Le build initial prend ~2-3 minutes
- Le certificat SSL se génère automatiquement en ~30 secondes
- Les logs sont persistants (docker logs)
- Pas besoin de node_modules sur le VPS, Docker s'en occupe

