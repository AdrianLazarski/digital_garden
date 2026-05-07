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


![[Algorytm kompresji bezstratnej LZ77-1.webp|Przykład działania algorytmu LZ77]]


![[Algorytm kompresji bezstratnej LZ77-2.webp|Przykład działania algorytmu LZ77 od początku tj. z pustym słownikiem]]

![[Algorytm kompresji bezstratnej LZ77-3.webp|Dekompresja metodą LZ77]]


Algorytm ten ma też dużą wadę – jest to czas pamiętania elementów wzorca słownikowego. Przesuwanie okna o stałym rozmiarze powoduje, że z pamiętanej listy podstawień znikają ciągi, które nie mają odwzorowania w aktualnym obszarze słownika. Oznacza to, że szybkość kompresowania jest stała i wolna. Problem można byłoby usunąć, gdyby wzorce raz użyte były pamiętane do końca kodowania. Wtedy czas kompresji rósł by wraz z długością kodowanego ciągu.

Bezpośrednim rozwinięciem tego algorytmu była wersja LZSS. Algorytm LZSS wprowadzał formę drzewa binarnego, w którym na kolejnych węzłach umieszczano nowe, jeszcze nie zdefiniowane frazy. Do algorytmu w wersji LZSS dodano również rozróżnienie pomiędzy fazą krótką, zawierającą pojedyncze symbole i fazą długą, zawierającą więcej niż jeden symbol. Oznaczenie jakiej fazy dotyczy kolejne słowo kodowe uzyskano poprzez dodanie na początku każdego słowa dodatkowego bitu (0 lub 1).