---
created: 2025-11-17 19:05
tags:
  - matematyka/dyskretna/kombinatoryka
  - matematyka/algebra
  - twierdzenie
  - atom
modified date: 2025-11-21 17:22
---
ang. *Binomial theorem*

> [!note] Def.
> Wzór na *n*-tą potęgę dwumianu $a+b$.


We wzorze używa się [[Symbol Newtona (Współczynnik dwumianowy)|symbolu Newtona]]:

> [!info] Wzór
> $$
> \dbinom{n}{k} = \frac {n!} {k!(n-k)!}
> $$

## Twierdzenie

> [!info] Twierdzenie
> Każdą naturalną potęgę dwumianu x+y można rozłożyć na sumę postaci:
> 
> $$\begin{flalign} (a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k} =
> \\
> a^{n} + \binom{n}{1} a^{n-1} b + \binom{n}{2} a^{n-2} b^{2} + \ldots + b^{n} \end{flalign}$$

Na początku jest "samo a", a na końcu "samo b", bo to już po wymnożeniu przez jeden (czyli drugą literkę z potęgą zerową). 

> [!info] Przykład
> $$\begin{align} (a + b)^3 = \sum_{k=0}^{3} \binom{n}{k} a^{n-k} b^{k} = \\
> \binom{3}{0}a^{3}b^0 + \binom{3}{1} a^{3-1} b +
> \binom{3}{2} a^{3-2} b^{2}  + \binom{3}{3}a^0b^{3} = \\  \\
> 1* a^3 + 3*a^2b + 3*ab^2 + 1*b^3
> \end{align}$$


$\leftarrow$ [[Symbol Newtona (Współczynnik dwumianowy)]]
$\rightarrow$ Współczynniki rozwinięcia *n*-tej potęgi dwumianu $a+b$ można znaleźć za pomocą [[Trójkąt Pascala|trójkąta Pascala]].
