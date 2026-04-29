---
created: 2026-04-29 16:33
tags:
  - atom
  - definicja
  - it/algorytmy/kompresja
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-29 16:34
---
> [!note] Definicja
> Właściwie jest to cała rodzina algorytmów opartych na kodowaniu słownikowym.

Algorytm LZ77 został stworzony przez Abrahama Lempela i Jackoba Ziva w 1977 roku.

- Kompresowanie przy pomocy takiego słownika polega na umieszczaniu w pliku wynikowych wskaźników do indeksu utworzonego w czasie kompresji słownika. 

Trzy formy słowników:
1. Forma statyczna – wszystkie pozycje zdefiniowane są odgórnie np. słownik języka polskiego PWN.
	- Nie ma potrzeby doklejenia jego zawartości do treści kompresowanego pliku. 
2. Forma quasi statyczna
3. Forma dynamiczna
