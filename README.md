# 💒 Sito Matrimonio Candice & Francesco

Sito web per il matrimonio di Candice e Francesco - 6 giugno 2026, Puglia, Italia.

## 🌟 Caratteristiche

- ✨ Design moderno e responsive
- 🌍 Multilingue (Italiano, Inglese, Francese)
- 🗺️ Mappa interattiva con marker personalizzati
- 📱 Ottimizzato per mobile
- 🎨 Palette colori elegante (marrone pugliese e viola)

## 🚀 Deployment su GitHub Pages

### Setup iniziale

1. **Crea un repository su GitHub** (se non l'hai già fatto)
2. **Collega il repository locale:**
   ```bash
   git remote add origin https://github.com/TUO_USERNAME/TUO_REPOSITORY.git
   ```

3. **Push iniziale:**
   ```bash
   git push -u origin master
   ```

### Attivazione GitHub Pages

1. Vai nelle **Settings** del tuo repository GitHub
2. Scorri fino alla sezione **Pages**
3. In **Source** seleziona:
   - **Deploy from a branch**
   - Branch: **master**
   - Folder: **/docs**
4. Clicca **Save**

### Deployment automatico

Per deployare il sito dopo ogni modifica:

```bash
./deploy.sh
```

Lo script automaticamente:
- Builda il sito con Middleman
- Copia i file nella cartella `docs/`
- Committa e pusha su GitHub
- GitHub Pages aggiornerà automaticamente il sito

## 🛠️ Sviluppo locale

### Installazione

```bash
bundle install
```

### Server di sviluppo

```bash
bundle exec middleman server
```

Il sito sarà disponibile su `http://localhost:4567`

### Build manuale

```bash
bundle exec middleman build
```

## 📁 Struttura

```
source/
├── _hero.erb           # Sezione hero
├── _wedding.erb        # Eventi matrimonio
├── _travel.erb         # Informazioni viaggio
├── _rsvp.erb          # RSVP
├── _faq.erb           # FAQ
├── en/index.html.erb   # Pagina inglese
├── fr/index.html.erb   # Pagina francese
├── images/            # Immagini
├── javascripts/       # JavaScript
├── stylesheets/       # CSS/SCSS
└── layouts/           # Layout

data/
├── translations.yml   # Traduzioni
└── wedding.yml       # Dati matrimonio

docs/                 # Build per GitHub Pages
```

## 🎨 Personalizzazione

### Colori

I colori principali sono definiti in `source/stylesheets/site.css.scss`:

```scss
:root {
  --puglia-brown: #8b4513;          // Marrone
  --puglia-orange: rgba(202, 43, 114, 1); // Viola
  --puglia-section-title: rgba(202, 43, 114, 1); // Titoli
}
```

### Traduzioni

Le traduzioni sono gestite in `data/translations.yml` per italiano, inglese e francese.

### Immagini

- Hero: `/images/hero8.jpg`
- Eventi: `/images/cards wedding/`
- Marker mappa: `/images/markers/`

## 🗺️ Google Maps

Il sito include una mappa interattiva con:
- Marker personalizzati per eventi
- Attrazioni turistiche
- Aeroporti
- API Key Google Maps inclusa

## 📱 Responsive Design

Il sito è completamente responsive e ottimizzato per:
- Desktop
- Tablet
- Mobile

## 🌐 URL del Sito

Una volta deployato, il sito sarà disponibile su:
`https://TUO_USERNAME.github.io/TUO_REPOSITORY`

---

Made with ❤️ per Candice & Francesco
