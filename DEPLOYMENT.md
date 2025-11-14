# 🚀 Deployment Guide - Dis_Ident Website

## GitHub Pages Deployment (Kostenlos & Einfach)

### Schritt 1: Repository auf GitHub erstellen

1. Gehe zu [GitHub](https://github.com) und logge dich ein
2. Klicke auf "New Repository" (grüner Button)
3. Repository-Name: `dis_ident` (oder ein anderer Name)
4. Beschreibung: "Dis_Ident - Demokratiebildung im digitalen Zeitalter"
5. **Public** auswählen (für GitHub Pages kostenlos)
6. ✅ NICHT "Add README" anklicken (haben wir schon)
7. Klicke "Create repository"

### Schritt 2: Lokales Projekt zu GitHub pushen

Öffne die Kommandozeile im Projektordner:

```bash
# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Dis_Ident Website with CMS"

# Branch umbenennen (falls nötig)
git branch -M main

# Remote Repository hinzufügen (ERSETZE mit deinem GitHub-Username!)
git remote add origin https://github.com/DEIN-USERNAME/dis_ident.git

# Hochladen
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (oben rechts)
3. Im Menü links: **Pages**
4. Bei "Source": 
   - Branch: **main**
   - Folder: **/ (root)**
5. Klicke **Save**

### Schritt 4: Warten & Öffnen

- ⏱️ Nach 2-3 Minuten ist die Website live!
- 🌐 URL: `https://DEIN-USERNAME.github.io/dis_ident/`
- Du bekommst die URL auch oben auf der Pages-Seite angezeigt

---

## 📝 Content Management Optionen

### ⚠️ Problem mit localStorage auf GitHub Pages:

Das aktuelle CMS nutzt `localStorage`, was bedeutet:
- ❌ Änderungen sind nur lokal auf deinem Computer
- ❌ Andere sehen deine Änderungen nicht
- ❌ Nicht für Produktiv-Nutzung geeignet

### ✅ Lösung 1: Netlify CMS (Empfohlen für GitHub)

**Vorteile:**
- ✅ Kostenlos
- ✅ Direkt in GitHub integriert
- ✅ Git-basiert (alle Änderungen werden committed)
- ✅ Mehrbenutzer-fähig
- ✅ Einfaches Setup

**Setup:**

1. Erstelle `admin/config.yml`:
```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "images/uploads"
public_folder: "/images/uploads"

collections:
  - name: "news"
    label: "News"
    folder: "content/news"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Date", name: "date", widget: "string"}
      - {label: "Excerpt", name: "excerpt", widget: "text"}
      - {label: "Content", name: "body", widget: "markdown"}
      - {label: "Category", name: "category", widget: "select", options: ["Workshop", "Forschung", "Event", "Presse"]}
      - {label: "Highlight", name: "highlight", widget: "boolean", default: false}
```

2. Erstelle `admin/index.html`:
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

3. Auf [Netlify](https://netlify.com) deployen statt GitHub Pages
4. Netlify Identity aktivieren
5. Git Gateway aktivieren
6. Zugriff über: `https://deine-seite.netlify.app/admin/`

### ✅ Lösung 2: JSON-Datei + Manuelles Bearbeiten

**Einfach, aber weniger komfortabel:**

1. Erstelle `news.json`:
```json
[
  {
    "id": 1,
    "title": "Neue Workshop-Reihe",
    "date": "November 2025",
    "excerpt": "Ab diesem Monat...",
    "category": "Workshop",
    "highlight": true
  }
]
```

2. Bearbeite die Datei direkt auf GitHub:
   - Gehe zu `news.json` auf GitHub
   - Klicke auf Stift-Symbol (Edit)
   - Änderungen machen
   - Commit changes

3. `news-loader.js` anpassen um JSON zu laden statt localStorage

### ✅ Lösung 3: Headless CMS

**Für professionelle Projekte:**

#### **Strapi** (Self-Hosted oder Cloud)
- Kostenlos & Open Source
- API-basiert
- Sehr flexibel
- Benötigt Server (z.B. Heroku, Railway)

#### **Contentful** (Cloud)
- Kostenloser Plan verfügbar
- Sehr benutzerfreundlich
- API-basiert
- Keine Server-Verwaltung

#### **Sanity.io** (Cloud)
- Kostenloser Plan
- Echtzeit-Kollaboration
- Sehr modern
- GraphQL API

---

## 🔄 Updates veröffentlichen

Nach Änderungen am Code:

```bash
# Änderungen hinzufügen
git add .

# Commit mit Beschreibung
git commit -m "Beschreibung der Änderung"

# Zu GitHub pushen
git push
```

GitHub Pages aktualisiert automatisch nach ca. 1-2 Minuten!

---

## 🎨 Custom Domain (Optional)

Wenn du eine eigene Domain hast (z.B. `dis-ident.de`):

1. In Repository Settings → Pages
2. "Custom domain" eingeben: `dis-ident.de`
3. Bei deinem Domain-Provider:
   - A-Record auf: `185.199.108.153`
   - CNAME-Record: `DEIN-USERNAME.github.io`
4. ✅ "Enforce HTTPS" aktivieren

---

## 📊 Analytics (Optional)

### Google Analytics
Füge in `<head>` beider HTML-Dateien ein:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ❓ Troubleshooting

### Website zeigt 404
- Warte 5 Minuten nach dem ersten Push
- Überprüfe ob GitHub Pages aktiviert ist
- Branch muss "main" sein, nicht "master"

### CSS/JavaScript lädt nicht
- Überprüfe Pfade in HTML (relativ, nicht absolut)
- Hard-Refresh: Strg+Shift+R (Windows) / Cmd+Shift+R (Mac)

### Änderungen nicht sichtbar
- GitHub Pages braucht 1-2 Minuten zum Update
- Browser-Cache leeren

---

## 🆘 Support

Bei Problemen:
1. GitHub Pages Docs: https://docs.github.com/pages
2. Netlify Docs: https://docs.netlify.com
3. Netlify CMS Docs: https://www.netlifycms.org/docs/

---

**Viel Erfolg beim Deployment! 🚀**

