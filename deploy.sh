#!/bin/bash

# Script per il deployment su GitHub Pages

echo "🚀 Inizio deployment su GitHub Pages..."

# Build del sito
echo "📦 Building del sito..."
bundle exec middleman build

# Copia i file nella cartella docs per GitHub Pages
echo "📁 Copiando i file nella cartella docs..."
rm -rf docs/
cp -r build/ docs/

# Aggiungi e committa le modifiche
echo "📝 Committando le modifiche..."
git add .
git commit -m "🚀 Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push su GitHub
echo "⬆️  Push su GitHub..."
git push origin master

echo "✅ Deployment completato!"
echo ""
echo "🌐 Il tuo sito sarà disponibile su:"
echo "   https://username.github.io/repository-name"
echo ""
echo "📋 Per attivare GitHub Pages:"
echo "   1. Vai nelle Settings del repository"
echo "   2. Scorri fino a 'Pages'"
echo "   3. Seleziona 'Deploy from a branch'"
echo "   4. Scegli 'master' branch e '/docs' folder"
echo "   5. Clicca 'Save'"
