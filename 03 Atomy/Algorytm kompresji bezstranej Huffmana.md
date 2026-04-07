---
created: 2026-04-07 12:10
tags:
  - atom
  - it/programowanie
  - it/algorytm
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

