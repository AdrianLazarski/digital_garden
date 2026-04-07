---
created: 2026-04-07 12:10
tags:
  - atom
  - it/programowanie
  - it/algorytmy/kompresja
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-07 12:10
---
- Najczęściej stosowany algorytm kompresji bezstratnej.
- Opracowany w 1952 roku przez Dawida Huffmana.
- Nie jest zbyt efektywny obliczeniowo, więc nie stosuje się go zazwyczaj samodzielnie. Najczęściej używany jako ostatni etap w różnych systemach kompresji, zarówno bezstratnej, jak i stratnej.

## Podstawowe właściwości

- jest przykładem algorytmu prefiksowego, ponieważ żadne słowo kodowe nie jest naturalnym początkiem innego słowa,
- charakteryzuje się najkrótszą średnią długością słowa z pośród wszystkich algorytmów prefiksowych,
- nawet jeśli prawdopodobieństwa wystąpienia elementów A i B są różne, to długość kodu wynikowego dla tych znaków nie jest różna,
- długość słowa kodowego dla dwóch elementów o najniższym prawdopodobieństwie wystąpienia jest równa.

Biorąc to wszystko pod uwagę, można kodowanie Huffmana zaliczyć również do grupy algorytmów probabilistycznych.


## Przebieg

1. W pierwszym kroku wykonywana jest statystyka wystąpień poszczególnych znaków, a na jej podstawie generowana jest uporządkowana rosnąco tablica zawierająca w jednej kolumnie pojedyncze znaki, a w drugiej ich liczności.
2. Z tak utworzonej tabeli konstruowana jest struktura drzewiasta podobna w wyglądzie do drzewa binarnego. Korzeniem tej struktury jest zawsze znak z największa ilością wystąpień, a liśćmi znaki, z mniejszą ilością. Elementom tej struktury przypisuje się wartości ‘0’ lub ‘1’ tak, że każdy liść znajdujący się po lewej stronie od korzenia, ma wartość ‘0’ a liściom znajdującym się po prawej stronie przypisywane są wartości ‘1’.
3. Ustalanie wartości słowa kodowego dla poszczególnych znaków występujących w materiale źródłowym odbywa się tak, że odnajduje się dany znak w strukturze, a następnie dopisuje się do treści słowa kolejne wartości elementów po których trzeba przejść do góry w kierunku korzenia głównego.

### Przykład

Przykład kompresji metodą Huffmana dla zadanej sekwencji znaków.

Załóżmy, że koder otrzymuje następującą sekwencję znaków:
###### XADJSOSDAOUAZADXSXODJAOUAOADAOXAAJSAXADOAOADO

Tworzymy statystykę ilości wystąpień znaków.

![[Kodowanie Huffmana.webp|Uporządkowana tablica słownikowa]]

Następnie tworzone jest drzewo binarne według następującego schematu:
1. Pobieramy dwa elementy o najmniejszej ilości wystąpień i tworzymy z nich drzewo, którego korzeniem będzie suma ich wystąpień.
![[Kodowanie Huffmana-1.webp|Algorytm Huffmana dla zadanej sekwencji znaków KROK 1]]

2. Tak utworzony węzeł dodajemy do listy w miejsce wskazane przez sumę wartości liści. W tym przypadku będzie to początek listy.

![[Kodowanie Huffmana-2.webp|Algotyym Huffmana dla zadanej sekwencji znaków KROK 2]]

3. W kolejnym kroku ponownie pobieramy dwa elementy o najmniejszej ilości wystąpień, i tworzymy z nich drzewo, dodając korzeń z sumą wartości wystąpień na liściach.

![[Kodowanie Huffmana-3.webp|Algorytm Huffmana dla zadanej sekwencji znaków KROK 3]]

Nowo powstały węzeł ponownie dodajemy do listy w miejsce wskazane
przez jego liczebność.

![[Kodowanie Huffmana-4.webp|Algorytm Huffmana dla zadanej sekwencji znaków KROK 4]]

I ponownie do dwóch elementów o najmniejszych wartościach dodajemy korzeń, przypisujemy im wartości binarne pamiętając, że wartość binarna elementu po lewej ma to 0 a elementu po prawej to 1.

![[Kodowanie Huffmana-5.webp|Algorytm Huffmana dla zadanej sekwencji znaków KROK 5]]

Kolejne kroki wykonujemy dokładnie na tej samej zasadzie, aż do momentu uzyskania korzenia o wartości równej początkowej ilości znaków.

![[Kodowanie Huffmana-6.webp|Algorytm Huffmana dla zadanej sekwencji znaków KROK n]]

Normalnie zapis tych danych zajął by aż 45 bajtów, czyli 360 bitów. Skompresowanie wskazanego ciągu wejściowego za pomocą metody Huffmana pozwoliło na uzyskanie pliku wynikowego o wielkości zaledwie 30,55% oryginału.

![[Kodowanie Huffmana-7.webp]]


Na podobnej zasadzie jak metoda Huffmana działa algorytm Shanon-Fano. Różnica pomiędzy nimi polega na innym, mniej efektywnym sposobie budowania drzewa binarnego. A ponieważ uzyskiwane za jej pomocą drzewo jest dokładnie takie samo jak w metodzie Huffmana, to jest to metoda nieużywana.

## Wady metody Hufmana

- Odkodowanie wymaga obecności w treści pliku skompresowanego opisu wyglądu drzewa binarnego. Taka informacja, za każdym razem zajmuje minimum kilkaset bajtów, dlatego stosowanie jej do małych plików jest nieopłacalne, ponieważ pliki wynikowe przeważnie są większe niż źródłowe;
- Każdorazowo proces kodowania musi rozpocząć się od odczytania zawartości całego pliku źródłowego i stworzenia tablicy statystycznej występowania znaków, co przy większych plikach może trwać naprawdę długo.


Rozwiązaniem problemów statycznych metod kodowania, do których zaliczana jest metoda Huffmana jest kodowanie adaptacyjne. Polega ono na wykorzystaniu modelu statystycznego, w którym znane są tylko dwa symbole:
- EOS 118 - znacznik końca strumienia bitowego
- ESC 119 - znacznik wystąpienia nowego znaku.

ESC przekazuje informację programowi dekompresującemu o tym, że następny znak nie będzie zakodowany według budowanego modelu, ale jako informacja o stałym rozmiarze. Model statystyczny wykorzystywany do kodowania jest modyfikowany po nadejściu każdego nowego symbolu. Dzięki temu można pełniej oddać charakterystykę źródła i dostosować się do jej lokalnych zmian.
