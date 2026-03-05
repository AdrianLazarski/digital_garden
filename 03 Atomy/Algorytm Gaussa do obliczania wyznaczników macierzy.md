---
created: 2026-02-23 21:22
tags:
  - atom
  - matematyka/algebra/liniowa
dojrzalosc: Krzak 🌿
status_epistemiczny: Prawdopodobny 🧪
modified date: 2026-02-23 21:22
---
[[Reguły obliczania wyznaczników macierzy|Sposób obliczania wyznacznika]] macierzy kwadratowych stopnia $n \ge 3$:

![[Algorytm Gaussa do obliczania wyznaczników macierzy.webp]]
1. Odejmujesz/dodajesz między sobą wiersze tak, by osiągnąć zera pod jakimś wybranym niezerowym elementem (tutaj 5). Jakby liczby się różniły, to możesz też np. podzielić wiersz 1 przez $a_{11}$ i potem dodawać/odejmować wielokrotności jedynki.
2. Jak już masz te zera pod tą piątką, korzystasz z [[Rozwinięcie Laplace'a wyznacznika]], co się będzie równało $a_{11}*(-1)^{i+j}$.
3. Po redukcji macierzy do 3x3 możesz użyć reguł Sariusa.

