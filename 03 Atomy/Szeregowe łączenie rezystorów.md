---
created: 2025-11-01 15:06
tags:
  - fizyka/elektromagnetyzm
  - it/elektronika
  - atom
modified date: 2025-12-31 14:52
---

Rezystory ułożone jeden za drugim i prąd płynie przez nie po kolei.

![[Pasted image 20251101150732.png]]
$$R_{123} = R_1 + R_2 + R_3$$
$R_{123}$ oznacza rezystancję zastępczą.


Z [[Prawo Ohma|prawa Ohma]]:
$$
\begin{align} 
U=U_1+U_2+U_3= \\
IR_1+IR_2+IR_3= \\ 
I(R_1+R_2+R_3)= \\
IR_{123}
\end{align}
$$
- Elementy połączone szeregowo tworzą gałąź obwodu. Przez całą gałąź płynie prąd o tym samym [[Natężenie prądu elektrycznego|natężeniu]].
	- Dlatego jest tylko jedno I.
	- Wynika to z [[Pierwsze prawo Kirchoffa PPK|PPK]].
- Nadal spadki [[Napięcie prądu elektrycznego|napięć]] na elementach są różne i zależą od ich [[Opór|rezystancji]].
	- U=IR
	- Dlatego takie ułożenie rezystorów określa się jako **dzielnik napięcia**.

$$
U_{wyj} = U_{wej} * \frac {R_2} {R_1+R_2}
$$
Napięcie na wyjściu stanowi jakąś część napięcia wejściowego. Mnożymy po prostu tę „część” przez wartość napięcia wejściowego.