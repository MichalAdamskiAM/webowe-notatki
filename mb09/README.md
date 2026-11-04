# Galeria zdjęć

Aplikacja w React do przeglądania, filtrowania i dodawania zdjęć.

## Funkcjonalności

- przegladanie galerii z filterm po kategorii
- strona szczegolow pojedynczego zdjecia (`/zdjecie/:id`)
- dodawanie nowego zdjecia przez formularz (`/dodaj`)
- obsługa stanu ładowania i błędu przy pobieraniu danych

## Set-up

W folderze webowe-notatki/mb09/mb09 w terminalu wpisz:

```bash
npm i
npm run dev
```

Aby przetestować aplikację otwórz w przeglądarce adres http://localhost:5173/

## Struktura projektu

- `src/components/` - komponenty wielokrotnego użytku (karty, pasek kategorii itp.)
- `src/pages/` - strony podpięte pod routing (`GaleriaPage`, `DodajPage`, `SzczegolyPage`)
- `src/services/` - warstwa komunikacji z danymi (`zdjecia.js`)

## Tech stack

React, Bootstrap, Vite, JS