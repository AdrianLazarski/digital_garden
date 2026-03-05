---
created: 2025-11-17 19:50
tags:
  - matematyka/dyskretna/kombinatoryka
  - atom
  - właściwość
modified date: 2025-11-21 17:40
---

Można za jego pomocą znaleźć współczynniki rozwinięcia [[Twierdzenie Dwumian Newtona|*n*-tej potęgi dwumianu a+b.]]

 0                            1
 1                          1   1
 2                        1   2   1
 3                     1    3   3   1
 4                 1    4    6    4   1
 **5              1   5   10  10   5  1**
 6            1   6   15  20  15   6   1
 7         1   7   21  35  35   21  7   1
 8      1   8   28   56  70   56   28   8  1
 9   1   9  36   84  126 126  84  36  9   1

Na bokach trójkąta znajdują się liczby 1, a pozostałe powstają jako suma dwóch bezpośrednio znajdujących się nad nią.

Liczby stojące w _n_-tym wierszu to kolejne współczynniki rozwinięcia $(a+b)^n$.


> [!info] Przykład
> **$(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$
> **
**1, 5, 10, 10, 5, 1**

$\leftarrow$ [[Twierdzenie Dwumian Newtona]]
$\leftarrow$ Opiera się na [[Tożsamość Pascala|Tożsamości Pascala]].
