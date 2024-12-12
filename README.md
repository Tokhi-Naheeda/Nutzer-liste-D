# Nutzerliste

Das **Nutzerlisten-Projekt** zeigt, wie man Nutzerdaten mithilfe von Promises aus einer lokalen JSON-Datei lädt und sie dynamisch in einer Kartenansicht darstellt. Dieses Projekt legt den Fokus auf den Umgang mit Promises, einschließlich Datenabruf, Ladeanzeige und Fehlerbehandlung.

## Features
- Dynamisches Laden von Nutzerdaten aus einer JSON-Datei mit `fetch()`.
- Darstellung der Nutzerdaten in einer Reihe von Karten.
- Integration eines Lade-Indikators, der während des Datenabrufs angezeigt wird.
- Fehlerbehandlung für fehlgeschlagene Datenabrufe.

## Anforderungen
1. **Nutzerdaten:** Die Daten werden aus einer lokalen Datei `userdata.json` geladen.
2. **Angezeigte Informationen:** Du entscheidest, welche Daten (z.B. `firstName`, `lastName`, `age`, `email`) in den Karten angezeigt werden.
3. **Anzahl der Karten:** Bestimme, wie viele Karten gleichzeitig angezeigt werden sollen (z. B. 10).
4. **Lade-Indikator:** 
   - Während die Daten geladen werden (`Promise Status: pending`), wird ein Lade-Indikator (z. B. ein Spinner) angezeigt.
   - Nach erfolgreichem Laden (`Promise Status: resolved`) wird der Lade-Indikator ausgeblendet.
5. **Fehlerbehandlung:** Bei einem Fehler während des Datenabrufs (`Promise Status: rejected`, z. B. bei einem falschen Dateinamen) wird eine passende Fehlermeldung angezeigt.

## Technologien
- **HTML5**: Für die Struktur der Seite und Karten.
- **CSS**: Für die Gestaltung der Karten und des Lade-Indikators.
- **JavaScript (ES6)**: Für die Implementierung von Promises, Datenabruf und dynamische DOM-Manipulation.

## Getting Started
1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
  
