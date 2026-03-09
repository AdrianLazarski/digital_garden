---
created: 2026-03-09 15:13
tags:
  - atom
  - definicja
  - it/programowanie
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-09 15:13
---
> [!note] Definicja
> Metodyka programowania oparta na założeniu, że całość programu postrzegana jest jako jeden, ciągły blok.

Zaliczane do metodyk [[Programowanie typu imperatywnego|typu imperatywnego]].

## Struktura programu:

- Dane programu mogą znajdować się w tym samym bloku, w oddzielnym bloku lub oddzielnych fragmentach pamięci.
- Wykonanie programu jest procesem polegającym na kolejnych operacjach od początku bloku do końca.
- W metodyce tej nie istnieje pojęcie procedury, funkcji, metody czy podprogramu.
- W ramach bloku można tylko przemieszczać się poprzez instrukcje skoków warunkowych i bezwarunkowych, często związanych z instrukcjami sterującymi pętlą lub bezpośrednim skokiem do etykiety (czyli z wykorzystaniem rodziny instrukcji Go-To).
- Etykiety są stosowane w celu umożliwienia skoków do wybranych miejsc w kodzie.

## Charakerystyka

Programowanie liniowe jest często stosowane w:
- Programach pisanych assemblerem.
- Programowaniu mikrokomputerów.
- Przemysłowych układach sterowania.
- Starszych wersjach języków, takich jak Pascal czy Basic. Jest wspierane przez większość języków programowania od lat 70-tych.

## Wady i zalety

### Zalety

- Brak potrzeby korzystania ze [[Stos (pamięć)|stosu]] – zmniejsza złożoność zarządzania pamięcią.
- Kod źródłowy i maszynowy są bardzo podobne w formie, co ułatwia jego analizę.

### Wady

- Duże rozmiary kodu – programy często stają się trudne w utrzymaniu.
- Pogarszająca się czytelność kodu wraz ze wzrostem liczby etykiet.
- Trudności w analizie kodu – brak dedykowanych instrukcji do wyrażania bardziej zaawansowanych konstrukcji logicznych.
- Brak możliwości dekompozycji – każdy problem musi być traktowany całościowo, co utrudnia rozdzielenie zadań na mniejsze, wyspecjalizowane funkcje.


$\leftarrow$ [[MOC Metodyka programowania]]