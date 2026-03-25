# VASCO - pakiet wdrożeniowy pod Shoper

## Co jest w paczce
- `index.html` - nowa strona główna
- `kategoria.html` - listing kategorii / producenta
- `produkt.html` - karta produktu demo
- `kontakt.html`
- `o-firmie.html`
- `dostawa.html`
- `platnosci.html`
- `informacja-dla-konsumenta.html`
- `newsletter.html`
- `zwroty-i-reklamacje.html`
- `regulamin.html`
- `polityka-prywatnosci.html`

## Pliki techniczne
- `assets/css/style.css` - cały styl strony
- `assets/js/main.js` - mobile menu, render demo produktów, formularze demo
- `assets/js/products.js` - dane demo produktów i marek
- `assets/img/logo.png` - logo klienta
- `assets/img/placeholders/` - placeholdery zdjęć do podmiany
- `assets/img/badges/` - proste badge płatności i dostawców
- `assets/pdf/formularz-zwrotu-vasco.pdf` - formularz PDF do pobrania

## Jak wdrożyć do Shopera
1. Zrób kopię obecnego szablonu i pracuj na kopii.
2. Jeśli klient przechodzi na Storefront:
   - sekcje home przenieś jako moduły własne,
   - CSS wprowadź do stylów szablonu,
   - JS dodaj przez moduł własny / integrację,
   - treści stron informacyjnych wklej do stron dodatkowych lub odpowiednich sekcji.
3. Jeśli klient zostaje na starszym RWD:
   - wykorzystaj HTML jako bazę do cięcia TPL,
   - `style.css` podepnij do skórki,
   - `main.js` i `products.js` wstaw do szablonu lub modułów.
4. Produkty i ceny w `products.js` są demonstracyjne. Podmień je na realne dane albo podepnij pod listing Shopera.
5. Placeholdery SVG podmień na prawdziwe zdjęcia klienta.
6. Formularze kontaktu i newslettera w tym pakiecie są frontowe - podepnij je do mechanizmu Shopera.

## Kolorystyka
Paleta jest ustawiona pod logo VASCO i branżę torebek:
- czerń
- ecru / off-white
- taupe / camel
- czerwony akcent

## Najważniejsze przewagi tej wersji
- mobile-first
- lżejszy DOM i prostszy układ
- wyraźne CTA
- czytelne legal pages
- gotowa sekcja zwrotów z PDF
- przygotowane płatności i dostawa

## Co jeszcze warto zrobić po wdrożeniu
- podmiana placeholderów na realne zdjęcia
- podpięcie realnych produktów z Shopera
- ustawienie prawdziwego formularza kontaktowego
- dodanie banerów sezonowych
- test Lighthouse i Core Web Vitals po publikacji
