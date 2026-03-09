---
created: 2026-03-09 15:16
tags:
  - atom
  - definicja
  - it/programowanie
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-09 15:16
---
> [!note] Definicja
> Metodyka programowania oparta na założeniu, że istnieje potrzeba dekompozycji problemów i tworzenia programów w taki sposób, że blok główny programu stanowi jedynie szkielet.

Zaliczane do metodyk [[Programowanie typu imperatywnego|typu imperatywnego]].
## Struktura programu

- Konstrukcja programu określa kolejność wykonywanych operacji, ale za wykonywanie poszczególnych operacji odpowiadają już wyszczególnione bloki podprogramów w postaci procedur oraz funkcji.
- W programach proceduralnych często spotyka się zarówno instrukcje [[Programowanie liniowe|programowania liniowego]] (na przykład Go-To użyte w celu opuszczenia zagnieżdżonych pętli) oraz [[Programowanie strukturalne|strukturalnego]] (do prostych konstrukcji warunkowych i pętli).

## Charakterystyka programu

- Dane mogą być umiejscawiane zarówno w samym bloku programu, jak i w wydzielonym obszarze, zależnym od platformy programistycznej.
- Cechą tego podejścia jest wykorzystywanie dużej liczby zmiennych, zarówno globalnych, jak i lokalnych, oraz częste korzystanie z tablic.
- W przeciwieństwie do programowania strukturalnego, danie są grupowane w postaci struktur, rekordów, krotek, czy inni zależnych od implementacji.

## Zastosowanie

Przy pisaniu programów wykorzystujących języki z rodziny assembler, mikrokomputery oraz przy tworzeniu programów analityczno-obliczeniowych w językach ogólnego przeznaczenia, takich jak Pascal lub C.

- Stosowane jest też w językach skryptowych, bo niektóre z nich nie mają możliwości tworzenia encji
	- np. JavaScript w przypadku kodu po stronie klienta
	- PHP w przypadku programowania po stronie serwera
- Nie oznacza to, że języki wspierające programowanie proceduralne nie mają możliwości tworzenia encji. Zwykle fakt ich użycia oznacza zmianę podejścia do rozwiązywanego problemu.

## Wady i zalety

### Zalety

- Możliwość dekompozycji kodu.
- Podobieństwo formy kodu źródłowego i maszynowego.

### Wady

- Duża liczba zmiennych
- Rozdzielenie danych od operacji na nich wykonywanych.
- Brak metodyki grupowania danych w logiczny sposób.


$\leftarrow$ [[MOC Metodyka programowania]]