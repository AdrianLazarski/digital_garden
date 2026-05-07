---
created: 2026-05-04 13:07
tags:
  - atom
  - it/algorytmy/kompresja
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-05-04 13:07
---
Algorytm LZ77 został stworzony przez Abrahama Lempela i Jackoba Ziva w 1977 roku.


- Metoda ta wykorzystuje dynamiczny słownik oparty o model przyczynowy.
- Oznacza to, że zawartość słownika zależy od treści ostatnio zakodowanej sekwencji. 
- W tej wersji algorytmu kompresującego rozmiar aktywnego bufora frazy jest ograniczony, a indeksy zastępujące kompresowane frazy składają się z:
	- wskaźnika położenia frazy w słowniku;
	- wartości określającej długość frazy;
	- pierwszego symbolu występującego bezpośrednio po zakodowanej frazie
- W tak skonstruowanym algorytmie, słownik został potraktowany dynamicznie co znaczy, że do pliku wynikowego nie jest nic więcej doklejane. Można powiedzieć, że **zawartość pliku była sama dla siebie kodem kompresującym.**

![[Algorytm kompresji bezstratnej LZ77.webp]]

**Przebieg logiczny algorytmu LZ77:**
1. ustaw okno słownika na początku danych źródłowych;
2. wyszukaj najdłuższy łańcuch danych w buforze, który ma dokładny odpowiednik w słowniku;
3. utwórz słowo kodu kompresji w formacie: indeks wejścia, długość frazy, następny symbol;
4. przesuń okno słownika do przodu o wartość długości frazy + 1;
5. powtarzaj czynności od punktu 2, aż do zakodowania wszystkich symboli.


![[Algorytm kompresji bezstratnej LZ77-1.webp]]

