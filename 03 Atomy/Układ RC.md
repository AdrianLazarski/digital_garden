---
created: 2026-01-08 15:22
tags:
  - it/elektronika
  - atom
  - definicja
modified date: 2026-01-08 15:22
---
ang. *Resistor Capacitor circuit*

> [!note] Definicja
>Obwód elektryczny złożony z [[Rezystor|rezystora]] i [[Kondensator|kondensatora]].
>

## Ładowanie kondensatora

Warunki początkowe:
$t = t_0$
$u_c = 0$

![[Układ RC.webp]]
Strzałka do góry przy $u_c$ oznacza umowny biegun dodatni kondensatora. Jakby była w dół, to wartość byłaby ta sama, tylko z minusem.


Kondensator ładuje się stopniowo w czasie. Powoduje to wzrost [[Napięcie prądu elektrycznego|napięcia]] na nim i spadek [[Natężenie prądu elektrycznego|natężenia]] prądu. Ten etap to stan nieustalony.

Prąd płynący w obwodzie jako funkcja czasu:
$$i = \frac {U_0} R \exp (- \frac t {RC})$$
Napięcie płynące w obwodzie jako funkcja czasu:
$$u_c = U_0 [1 - \exp (- \frac t {RC})]$$
$\exp(x) = e^x$ - [[Funkcja wykładnicza]]
$e$ – liczba Eulera, około 2,718


![[Układ RC-1.webp]]

$\tau = RC$ – stała czasowa, określa kiedy prąd i napięcie osiągną stan ustalony.
	Po jednym okresie $\tau$ prąd w obwodzie spada do około 37% wartości początkowej, a kondensator osiąga 63% pełnego napięcia naładowania.

Stan ustalony obwód osiąga w $t = 5\tau$.

## Rozładowanie kondensatora

Warunki początkowe:
$t = t_0$
$u_c = 0$
Prąd płynie w kierunku przeciwnym do zwrotu napięcia (strzałka do góry przy $u_c$ oznacza biegun dodatni o wyższym potencjale, a nie zwrot)
![[Układ RC-2.webp]]

Prąd płynący w obwodzie jako funkcja czasu:
$$i = -\frac {U_0} R \exp (- \frac t {RC})$$
Napięcie płynące w obwodzie jako funkcja czasu:
$$u_c = U_0 \exp (- \frac t {RC})$$

![[Układ RC-4.webp]]


$\rightarrow$ [[Odpowiedź układu RC na sygnał prostokątny]]
