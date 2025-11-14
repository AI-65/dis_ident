# Dis_Ident - Content Management System (CMS)

## 📋 Übersicht

Ihr Dis_Ident Website verfügt jetzt über ein einfaches Content Management System (CMS), mit dem Sie News-Artikel selbst verwalten können - ohne Programmierkenntnisse!

## 🚀 Zugriff auf das Admin-Panel

1. Öffnen Sie im Browser: **`http://localhost:8000/admin.html`**
2. Das Admin-Panel erscheint mit einer Seitenleiste und Ihrem News-Dashboard

## ✨ Funktionen

### News-Artikel verwalten

#### ➕ Neuen Artikel erstellen
1. Klicken Sie auf den Button **"+ Neuer Artikel"** (oben rechts)
2. Füllen Sie das Formular aus:
   - **Titel**: Der Haupttitel des Artikels
   - **Datum**: z.B. "November 2025" oder "15. November 2025"
   - **Kurzbeschreibung**: Ein kurzer Text für die Übersicht (ca. 1-2 Sätze)
   - **Vollständiger Inhalt** (optional): Ausführlicher Text für eine Detailseite
   - **Kategorie**: Workshop, Forschung, Event, Presse oder Allgemein
   - **Als Highlight markieren**: Wenn aktiviert, wird der Artikel größer dargestellt
3. Klicken Sie auf **"Speichern"**

#### ✏️ Artikel bearbeiten
1. Finden Sie den Artikel in der Liste
2. Klicken Sie auf das **Stift-Symbol** (✏️)
3. Ändern Sie die gewünschten Felder
4. Klicken Sie auf **"Speichern"**

#### 🗑️ Artikel löschen
1. Finden Sie den Artikel in der Liste
2. Klicken Sie auf das **Papierkorb-Symbol** (🗑️)
3. Bestätigen Sie die Löschung

#### 🔍 Artikel suchen
- Nutzen Sie das Suchfeld oben rechts
- Geben Sie Titel oder Textteile ein
- Die Liste filtert sich automatisch

## 📊 Dashboard-Statistiken

Das Dashboard zeigt Ihnen:
- **Gesamt Artikel**: Alle veröffentlichten Artikel
- **Dieser Monat**: Artikel die diesen Monat erstellt wurden
- **Zuletzt bearbeitet**: Datum der letzten Änderung

## 🌐 Wie erscheinen die Artikel auf der Website?

### Automatische Synchronisation
- Alle Änderungen werden **sofort gespeichert**
- Die Artikel erscheinen **automatisch** auf beiden Website-Versionen:
  - Original-Design: `index.html#news`
  - Alternative-Design: `alternative.html#news`

### Highlight-Artikel
- Artikel mit **Highlight-Markierung** werden größer und prominenter angezeigt
- Ideal für wichtige Ankündigungen
- Empfohlen: Nur 1 Highlight-Artikel gleichzeitig

## 💾 Datenspeicherung

### Wo werden die Daten gespeichert?
- Die Artikel werden im **Browser-Speicher** (localStorage) gespeichert
- Die Daten bleiben erhalten, auch wenn Sie den Browser schließen

### ⚠️ Wichtig zu wissen:
- **Browser-spezifisch**: Die Daten sind nur in dem Browser sichtbar, in dem Sie sie erstellt haben
- **Kein automatisches Backup**: Für eine Produktiv-Website empfehlen wir:
  - Ein richtiges Backend (z.B. WordPress, Strapi, oder ein Custom CMS)
  - Eine Datenbank (MySQL, PostgreSQL)
  - Automatische Backups

## 🔄 Export/Backup (für Entwickler)

### Daten exportieren:
1. Öffnen Sie die Browser-Konsole (F12)
2. Führen Sie aus: 
```javascript
console.log(localStorage.getItem('disIdent_news'));
```
3. Kopieren Sie den ausgegebenen Text
4. Speichern Sie ihn in einer `.json` Datei

### Daten importieren:
```javascript
localStorage.setItem('disIdent_news', 'IHR_EXPORTIERTER_TEXT');
location.reload();
```

## 📱 Mobile Ansicht

Das Admin-Panel ist responsive:
- Auf kleinen Bildschirmen wird die Sidebar minimiert
- Alle Funktionen bleiben verfügbar
- Touch-optimierte Bedienung

## 🎨 Für beide Designs verfügbar

Die Artikel erscheinen automatisch in:
1. **Original-Design** (helles Design mit Teal-Farben)
2. **Alternative-Design** (dunkles Design mit Cyan-Farben)

## 🚀 Nächste Schritte für eine produktive Website

Für eine "echte" Website mit mehreren Administratoren empfehlen wir:

1. **Backend-System einrichten**:
   - WordPress (einfach, viele Plugins)
   - Strapi (modern, developer-friendly)
   - Custom Backend (Node.js, PHP, Python)

2. **Datenbank**:
   - MySQL oder PostgreSQL
   - Automatische Backups
   - Mehrbenutzerverwaltung

3. **Hosting**:
   - Webspace mit Datenbank
   - SSL-Zertifikat
   - Regelmäßige Backups

4. **Zusätzliche Features**:
   - Bildupload für Artikel
   - Benutzerrollen (Admin, Redakteur, etc.)
   - Veröffentlichungszeitpunkt planen
   - SEO-Optimierung

## ❓ Fragen?

Bei Fragen oder Problemen wenden Sie sich an Ihren Entwickler!

---

**Version 1.0** - Erstellt für Dis_Ident CMS

