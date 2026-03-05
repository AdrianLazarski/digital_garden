---
created: 2026-02-25 17:19
tags:
  - atom
  - definicja
  - matematyka/algebra/
dojrzalosc: Krzak 🌿
status_epistemiczny: Prawdopodobny 🧪
modified date: 2026-02-25 17:19
---
> [!note] Definicja
> Macierz odwrócona do macierzy kwadratowej $A$ stopnia $n$, oznaczaczana jako $A^{-1}$, to macierz, która spełnia warunek:
> $$AA{^-1}=A^{-1}A=I_n$$
> gdzie $I_n$ to macierz jednostkowa stopnia n. 

Jeśli [[macierz kwadratowa]] ma macierz odwrotną, to nazywamy ją odwracalną i wówczas $detA \not = 0$. 

Jeśli macierz kwadratowa nie ma macierzy odwrotnej, to nazywamy ją wtedy [[Macierz osobliwa|macierzą osobliwą]].

[[Twierdzenie o macierzy odwrotnej]]

### Własności macierzy odwrotnych

Niech macierze $A$ i $B$ tego samego stopnia będą odwracalne oraz niech $α ∈ ℝ \ {0}, n ∈ ℕ$. Wtedy macierze $A,−1, A^T, AB, αA, A^n$ także są odwracalne i prawdziwe są równości:

**Wyznacznik macierzy odwrotnej:**
$det(A-1) = (\det A)-1$

**Podwójna odwrotność:**
$(A^{-1})^{-1} = A$

**Transpozycja macierzy odwrotnej:**
$(A^T)^{-1} = (A^{-1})^T$

**Odwrotność iloczynu macierzy:**
$(AB)-1 = B^{-1} A^{-1}$

**Odwrotność macierzy przemnożonej przez skalar:**
$(αA)^{-1} = 1/α (A^{-1})$

**Odwrotność macierzy potęgowanej:**
$(A^n)^{-1} = (A{-1})n$

[[Bezwyznacznikowy algorytm znajdowania macierzy odwrotnej]]

$\leftarrow$ [[MOC Rodzaje macierzy]]