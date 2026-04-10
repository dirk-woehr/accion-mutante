# accion-mutante
## Accion Mutante Homepage

* Statisches HTML, Vanilla JS & Web Components
* Kein Backend benötigt

## Clamp calculator
https://min-max-calculator.9elements.com/?24,48,320,1280


# Aufbau Artikel (siehe auch: im Verzeichnis ts für TypeScript defininition)

## Eigenschaften Artikel
* id: UUID als String
* startDate: Format: JJJJ-MM-TT (z.B.: 2026-11-27)
* endDate: Format: siehe startDate (optional)
  * News wird angezeigt wenn:
    * startDate kleiner heute
    * endDate größer heute oder nicht gesetzt
* title: Überschrift
* pinned: boolean (wenn "true", erscheint der Artikel auf der Startseite, sonst nur unter News)
* YouTube: Link zu YouTube-Video (nur eines pro Artikel)
paragraphs: Array mit Paragraphen im Artikel

## Eigenschaften Paragraph
* image: URL zu Bild (optional)
* elements: Array mit Elementen im Paragraphen
  * Mögliche Elemente: span, link, h2

## Eigenschaften span
* type: Muss `"span"` sein
* text: Text im Span. Wird mit innerHTML eingefügt, also `<br>`  etc. möglich, aber mit Vorsicht zu genießen!

## Eigenschaften link
* type: muss `"link"` sein
* title: Titel des Links
* url: URL für den Link

## Eigenschaften h2
* type: muss `"h2"` sein
* text: siehe span

span und link werden mit default display-typ verwendet. Also span & link = inline, h2 = block.

# Aufbau Gigs

## Eigenschaften Gig
* title: Name
* image: URL zu Bild
* date: Datum (siehe Artikel)
  *  Wenn Datum in Zukunt, erscheint der Gig auf der Startseite
* location: Eine `Location`
* timeOpen: Öffnungszeit (HH:MM - also z.B.: 19:30)
* timeStart: Startzeit (HH:MM - also z.B.: 19:30)
* description: Beschreibung
* bands: Liste mit `Bands`

# Aufbau Bands

## Eigenschaften Band
* name: Name
* url: URL der Homepage (optional)
* image: URL zum Logo (optional)

# Aufbau Location
## Eigenschaften Location
* name: Name
* url: Link zur Hompeage
* city: Stadt
* country: Land

