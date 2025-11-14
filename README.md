# Dis_Ident Website

Offizielle Website für das Dis_Ident Projekt - Ein bundesweites Präventions- und Forschungsprojekt gegen Desinformation und Extremismus.

## 🌐 Live Website

- **Hauptwebsite:** [https://DEIN-USERNAME.github.io/dis_ident/](https://DEIN-USERNAME.github.io/dis_ident/)
- **Alternative Design:** [https://DEIN-USERNAME.github.io/dis_ident/alternative.html](https://DEIN-USERNAME.github.io/dis_ident/alternative.html)

## 📁 Projekt-Struktur

```
dis_ident/
├── index.html              # Hauptwebsite (Original-Design)
├── alternative.html        # Alternative Website (Dunkles Design)
├── admin.html             # CMS Admin-Panel (nur lokal)
├── styles.css             # Styles für Original-Design
├── alternative-styles.css # Styles für Alternatives Design
├── admin-styles.css       # Styles für Admin-Panel
├── script.js              # JavaScript für beide Websites
├── admin.js               # CMS Logik
├── news-loader.js         # Dynamisches Laden von News
├── logo-*.svg             # Logo-Varianten
├── dis_ident RGB Logo (2).jpeg  # Original-Logo
└── CMS-ANLEITUNG.md       # CMS Dokumentation
```

## 🎨 Zwei Design-Varianten

### Original-Design
- Helles, freundliches Design
- Teal/Beige Farbschema
- Horizontale Navigation
- Zugriff: `index.html`

### Alternatives Design
- Dunkles, modernes Design
- Cyan/Lila Farbschema
- Sidebar-Navigation
- Vollbild-Hero
- Zugriff: `alternative.html`

## 🛠️ Lokale Entwicklung

### Voraussetzungen
- Python 3.x (für lokalen Server)
- Oder ein beliebiger anderer Web-Server

### Server starten

**Mit Python:**
```bash
python -m http.server 8000
```

**Mit Node.js (npx):**
```bash
npx http-server -p 8000
```

Dann öffne: `http://localhost:8000`

## 📝 Content Management

### CMS Admin-Panel
Das Projekt enthält ein einfaches CMS für News-Verwaltung.

**Zugriff (nur lokal):**
```
http://localhost:8000/admin.html
```

### ⚠️ Wichtig für Produktion:
Das CMS nutzt `localStorage` und funktioniert nur lokal. Für eine produktive Website empfehlen wir:

#### Option 1: Netlify CMS (Empfohlen)
- ✅ Kostenlos
- ✅ Git-basiert
- ✅ Automatisches Deployment
- ✅ Mehrbenutzer-fähig

#### Option 2: Strapi
- ✅ Open Source
- ✅ Vollständiges CMS
- ✅ API-basiert
- ⚠️ Benötigt Server

#### Option 3: WordPress
- ✅ Etabliert & einfach
- ✅ Viele Plugins
- ⚠️ Benötigt PHP-Hosting

Siehe `CMS-ANLEITUNG.md` für Details.

## 🚀 Deployment auf GitHub Pages

### 1. Repository erstellen
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/dis_ident.git
git push -u origin main
```

### 2. GitHub Pages aktivieren
1. Gehe zu Repository → Settings → Pages
2. Source: `main` branch
3. Folder: `/ (root)`
4. Save

### 3. Website ist live!
Nach 2-3 Minuten unter: `https://DEIN-USERNAME.github.io/dis_ident/`

## 📱 Responsive Design

Beide Designs sind vollständig responsive und optimiert für:
- 📱 Mobile Geräte
- 📱 Tablets
- 💻 Desktop
- 🖥️ Large Screens

## 🔧 Anpassungen

### Farben ändern
In `styles.css` oder `alternative-styles.css`:
```css
:root {
    --primary: #4A9B9B;  /* Hauptfarbe */
    --secondary: #6BBABA; /* Sekundärfarbe */
}
```

### Logo austauschen
Ersetze die Dateien:
- `logo-di.svg` - Header-Logo
- `dis_ident RGB Logo (2).jpeg` - Vollständiges Logo

## 📧 Kontakt

**E-Mail:** disident@mind-prevention.com  
**Telefon:** +49 30 863 169 51  
**Adresse:** Berliner Straße 45, 14169 Berlin

## 📄 Lizenz

© 2025 Dis_Ident. Alle Rechte vorbehalten.

Mansour-Initiative für Demokratieförderung und Extremismusprävention (MIND) gGmbH

---

**Gefördert durch das Bundesministerium für Forschung, Technologie und Raumfahrt (BMFTR) bis 2028**

