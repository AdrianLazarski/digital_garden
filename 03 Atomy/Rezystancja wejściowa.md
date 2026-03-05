---
created: 2025-11-01 18:54
tags:
  - fizyka/elektromagnetyzm
  - it/elektronika
  - atom
  - definicja
modified date: 2025-12-31 14:45
---
> [!note] Definicja
> Określa jak duży [[Opór|opór]] stawia dany obwód lub element elektroniczny [[Natężenie prądu elektrycznego|prądowi]], gdy jest on podłączony do zewnętrznego źródła sygnału.

Wpływ rezystancji wejściowej na pomiar elektryczny:
- przyrząd pomiarowy staje się częścią obwodu
- fakt pomiaru zmienia mierzoną wielkość elektryczną
- producenci sprzętu pomiarowego podają parametr zwany rezystancją wejściową $R_{in}$.

### Skutek podłączenia przyrządu pomiarowego

Skutek podłączenia przyrządu pomiarowego do obwodu jest taki sam, jak skutek podłączenia rezystora o wartości $R_{in}$.

![[Pasted image 20251101185809.png]]
Zmiana obwodu spowodowana podłączeniem woltomierza równolegle do rezystora $R_0$ jest zminimalizowana dużą rezystancją wejściową tego przyrządu.
$$
\begin{align} 
\frac {R_0*R_{in}} {R_0+R_{in}} \to R_0 \\\\
\text { w miarę, jak } R_{in} \to \infty
\end{align}
$$
 

![[Pasted image 20251101191131.png]]
Zmiana obwodu spowodowana podłączeniem amperomierza szeregowo jest zminimalizowana małą rezystancją wejściową tego przyrządu:
$$
\begin{align} 
R_1 + R_0 + R_{in} \implies R_1 + R_0 \\\\
\text { w miarę, jak } R_{in} \to 0
\end{align}
$$
