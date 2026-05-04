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


- Kompresowanie przy pomocy takiego słownika polega na umieszczaniu w pliku wynikowych wskaźników do indeksu utworzonego w czasie kompresji słownika. 

Trzy formy słowników:
1. Forma statyczna – wszystkie pozycje zdefiniowane są odgórnie np. słownik języka polskiego PWN.
	- Nie ma potrzeby doklejenia jego zawartości do treści kompresowanego pliku. 
2. Forma quasi statyczna – zawiera definicje zbudowane na podstawie analizy danych z kompresowanego pakietu. 
	- Zastosowanie takiego słownika wymusza konieczność przesyłania treści słownika jako część skompresowanego pakietu do dekodera.
3. Forma dynamiczna – zawartość słownika tworzona jest na podstawie dekodowanych danych. Proces aktualizacji zawartości ma charakter adaptacyjny i jest wykonywany po każdym dekodowanym znaku.
	- Zastosowanie tego typu słownika nie wymaga doklejania jego zawartości do skompresowanej treści. 
	- Minusem jest konieczność poświęcenia dużych mocy obliczeniowych tak w procesie kompresji jak i dekompresji.


Efektywność kompresowania metodą słownikową mierzy się jako stosunek bitowej długości frazy słowa kodowanego do bitowej długości indeksu słownika. Zależy więc ona wprost proporcjonalnie od odpowiedniego doboru słownika ponieważ:
- krótkie indeksy oznaczają mały słownik,
- długie frazy dają lepszą efektywność,
- każda nowa fraza wymaga aktualizacji słownika.

Na przestrzeni lat, metoda ta doczekała się wielu wersji rozwojowych. Różnice między kolejnymi odmianami polegają na zastosowaniu odmiennych struktur danych do konstruowania słownika, od liniowej tablicy po rozbudowanych konstrukcje drzewiaste.


[[Algorytm kompresji bezstratnej LZ77]]

