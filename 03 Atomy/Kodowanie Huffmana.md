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




1. W pierwszym kroku wykonywana jest statystyka wystąpień poszczególnych znaków, a na jej podstawie generowana jest uporządkowana rosnąco tablica zawierająca w jednej kolumnie pojedyncze znaki, a w drugiej ich liczności.
2. Z tak utworzonej tabeli konstruowana jest struktura drzewiasta podobna w wyglądzie do drzewa binarnego. Korzeniem tej struktury jest zawsze znak z największa ilością wystąpień, a liśćmi znaki, z mniejszą ilością. Elementom tej struktury przypisuje się wartości ‘0’ lub ‘1’ tak, że każdy liść znajdujący się po lewej stronie od korzenia, ma wartość ‘0’ a liściom znajdującym się po prawej stronie przypisywane są wartości ‘1’.
3. Ustalanie wartości słowa kodowego dla poszczególnych znaków występujących w materiale źródłowym odbywa się tak, że odnajduje się dany znak w strukturze, a następnie dopisuje się do treści słowa kolejne wartości elementów po których trzeba przejść do góry w kierunku korzenia głównego.
