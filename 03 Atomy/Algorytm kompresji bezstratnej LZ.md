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
2. Forma quasi statyczna – zawiera definicje zbudowane na podstawie analizy danych z kompresowanego pakietu. 
	- Zastosowanie takiego słownika wymusza konieczność przesyłania treści słownika jako część skompresowanego pakietu do dekodera.
3. Forma dynamiczna – zawartość słownika tworzona jest na podstawie dekodowanych danych. Proces aktualizacji zawartości ma charakter adaptacyjny i jest wykonywany po każdym dekodowanym znaku.
	- Zastosowanie tego typu słownika nie wymaga doklejania jego zawartości do skompresowanej treści. 
	- Minusem jest konieczność poświęcenia dużych mocy obliczeniowych tak w procesie kompresji jak i dekompresji.
