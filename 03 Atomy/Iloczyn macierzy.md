---
created: 2026-02-23 13:32
tags:
  - atom
  - definicja
  - matematyka/algebra/liniowa
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Prawdopodobny 🧪
modified date: 2026-02-23 13:33
---
> [!note] Definicja
> Iloczynem macierzy $A$ i $B$ nazywamy macierz $C = [c_{ij}]$ wymiaru $m \times k$, której elementy określone są wzorem:
> $$c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{in}b_{nj} = \displaystyle\sum_{k=1}^n a_{ik}b_{kj}$$

> [!warning] Uwaga!
> Iloczyn macierzy $A$ i $B$ można policzyć tylko jeśli $A$ ma tyle samo kolumn co $B$ wierszy. 

![[Iloczyn macierzy.webp]]
- $i$-ty wiersz macierzy $A$ jest przemnażany przez $j$-tą kolumnę macierzy $B$;
- Każdy element wiersza macierzy $A$ jest mnożony przez odpowiadający mu element z kolumny macierzy $B$;
- Wynikowe wartości są sumowane, tworząc końcowy element $c_{ij}$ w macierzy wynikowej $C = AB$.

#### Własności iloczynu macierzy

**Rozdzielność mnożenia względem dodawania**
Jeśli macierz $A$ ma wymiar $m \times n$, a macierze $B$ i $C$ mają wymiar $n \times k$, to:  
$A(B+ C)=AB+ AC$

**Rozdzielność mnożenia względem dodawania** (druga postać)
Jeśli macierze A i B mają wymiar m × n, a macierz C ma wymiar n × k, to:
$(A+B)C = AC + BC$

**Przemieszczanie skalara w iloczynie macierzy**
Jeśli macierz A ma wymiar m × n, macierz B ma wymiar n × k, a α jest liczbą rzeczywistą, to:  
$A(\alpha B)=(\alpha A)B=\alpha(AB)$

**Łączność mnożenia macierzy**
Jeśli macierz A ma wymiar m × n, macierz B ma wymiar n × k, a macierz C ma wymiar k × l, to:
$(AB)C = A(BC)$

**Mnożenie macierzy przez macierz jednostkową**
Jeśli macierz A ma wymiar m × n, to wtedy:
$AI = IA = A$
[[Macierz jednostkowa]] **I** działa jak element neutralny dla mnożenia macierzy, co oznacza, że każda macierz pomnożona przez **I** pozostaje niezmieniona.

Mnożenie macierzy nie musi być przemienne, to znaczy, że na ogół nie zachodzi równość: $AB=BA$.


$\leftarrow$ [[MOC Działania na macierzach]]