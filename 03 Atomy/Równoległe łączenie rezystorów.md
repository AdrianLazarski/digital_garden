---
created: 2025-11-01 15:27
tags:
  - fizyka/elektromagnetyzm
  - it/elektronika
  - atom
modified date: 2025-12-31 14:51
---
Oba końce każdego rezystora są połączone ze sobą, co tworzy kilka równoległych ścieżek prądu.

![[Pasted image 20251101152816.png]]
Zgodnie z [[Pierwsze prawo Kirchoffa PPK|PPK]]:
$$
I = I_1+I_2+I_3
$$
[[Napięcie prądu elektrycznego|Napięcie]] na każdym z rezystorów jest takie samo i zgodnie z [[Drugie prawo Kirchoffa NPK|NPK]] równe napięciu zasilania:
$$
U=I_1R_1 \implies I_1= \frac U R_1
$$
$$
U=I_2R_2 \implies I_2 = \frac U R_2
$$
$$
U=I_3R_3 \implies I_3= \frac U R_3
$$

$$
\begin{align} 
I = \frac U{R_1} + \frac U{R_2} + \frac U{R_3} = \\
U(\frac 1 R_1 + \frac 1 R_2 + \frac 1 R_3) = \frac U R_{123}
\end{align}
$$

Natomiast [[Natężenie prądu elektrycznego|natężenia]] są różne, bo zależą od rezystancji elementów, przez które przepływają. Dlatego taki układ określa się jako **dzielnik prądu**.
$$
I_1 = I \frac {R_2} {R_1+R_2}
$$



Jeśli węzły są połączone bezpośrednio przewodem, to traktuje się je, jako jeden węzeł.
![[Pasted image 20251101160955.png]]

### Rezystancja zastępcza

$$
\frac 1 R_{123} = \frac 1 R_1 + \frac 1 R_2 + \frac 1 R_3
$$
czyli
$$
(R_{123} < R_1) \land (R_{123} < R_2) \land (R_{123} < R_3)
$$

Rezystancja zastępcza jest równa odwrotności [[Konduktacja|konduktacji]] zastępczej.
$$
\frac 1 R_1 + \frac 1 R_2 + \frac 1 R_3 = \displaystyle\sum_{i=1}^n \frac 1 R_i = G_{zas}
$$
$$
R_{zas} = \frac 1 G_{zas}
$$

#### Dla dwóch rezystorów równoległych:

$$
R_{12} = \frac {R_1R_2} {R1+R2}
$$
bo
$$
\begin{align} 
\frac 1 R_{12} = \frac 1 R_1 + \frac 1 R_2 = \\\\
\frac {R_1} {R_1R_2} + \frac {R_2} {R_1R_2} = 
\frac {R_1+R_2} {R_1R_2}
\end{align}
$$

#### Dla równych rezystorów

$$
R_1 = R_2 = R_n \implies R_{zas} = \frac {R_n} n
$$
czyli dowolny rezystor dzielimy przez liczbę rezystorów. 
