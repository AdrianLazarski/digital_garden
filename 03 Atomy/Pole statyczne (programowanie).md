---
created: 2026-04-20 12:55
tags:
  - atom
  - definicja
  - it/programowanie/obiektowe
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-20 12:58
---
> [!note] Definicja
> Składowa [[Klasa (programowanie)|klasy]], która należy do samej tej klasy, a nie do jej konkretnych [[Obiekt (programowanie)|instancji]]. 
> 

- Oznacza to, że w całej pamięci programu istnieje tylko jedna kopia tego pola, do której referują wszelki potencjalnie utworzone instancje. 
- Zmiana wartości tego pola w jednym miejscu oznacza, że zmiana będzie widoczna we wszystkich innych instancjach.

## Implementacja

$\rightarrow$ [[Pole statyczne w C Sharp]]

## Zastosowanie

- Definiowanie stałych.
- Wywoływanie bez tworzenia instancji danej klasy. 

$\rightarrow$ [[Klasa statyczna]]
$\leftarrow$ [[MOC Programowanie obiektowe]]