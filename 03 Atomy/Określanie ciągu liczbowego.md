---
created: 2025-11-22 17:09
tags:
  - matematyka/analiza
  - atom
modified date: 2025-11-22 17:12
---
[[Ciąg|Ciągi]] liczbowe mogą być określone:

### 1. Wzorem

Wyraz $a_n$ jest podany jako jawna funkcja wskaźnika $n$.

|**Przykład**|**Wzór**|**Opis**|
|---|---|---|
|a)|$a_n = 2^n$|Ciąg geometryczny|
|b)|$b_n = \frac{1}{\sin n}$||
|c)|$c_n = \sqrt{n+1} - \sqrt{n}$||
|d)|$d_n = 1 + 2^2 + 3^3 + \dots + n^n$|Definiowany przez sumę|
|e)|$e_n = \frac{1}{n} + \frac{1}{n+1} + \dots + \frac{1}{2n}$|Definiowany przez sumę|

### 2. Rekurencyjnie

Każdy wyraz ciągu wyraża się poprzez poprzednie.

| **Przykład** | **Wzór Rekurencyjny**     | **Warunki Początkowe** | **Opis**                                 |
| ------------ | ------------------------- | ---------------------- | ---------------------------------------- |
| a)           | $a_{n+1} = a_n + 3$       | $a_1 = 7$              | **Ciąg arytmetyczny** ($r=3$)            |
| b)           | $b_{n+1} = 2b_n$          | $b_1 = 1$              | **Ciąg geometryczny** ($q=2$)            |
| c)           | $c_{n+2} = c_{n+1} + c_n$ | $c_1=1, c_2=2$         | **Ciąg Fibonacciego** (lub jego wariant) |

### 3. Opisowo

Wyraz $a_n$ jest opisany słownie.

| **Przykład** | **Opis**                                                                 |
| ------------ | ------------------------------------------------------------------------ |
| a)           | $a_n$: $n$-ta cyfra po przecinku w rozwinięciu dziesiętnym liczby $\pi$. |
| b)           | $b_n$: $n$-ta liczba pierwsza.                                           |
| c)           | $c_n$: Przedostatnia cyfra w rozwinięcia dziesiętnego liczby $(n+3)^2$.  |
