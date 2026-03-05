---
created: 2026-02-25 20:13
tags:
  - atom
  - definicja
  - matematyka/algebra/liniowa
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Prawdopodobny 🧪
modified date: 2026-02-25 20:13
---
## Macierz jako operator w przestrzeni $R^2$

Niech $v$ będzie wektorem w przestrzeni $\mathbb{R}^2$, na przykład:
$$v = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$$
Załóżmy, że mamy macierz rotacji $R(φ)$, która obraca wektory w przestrzeni $ℝ^2$ o kąt φ:
$$R(\phi) = \begin{bmatrix} \cos\phi & -\sin\phi \\ \sin\phi & \cos\phi  \end{bmatrix}$$
Obracając wektor $v$ przez $R(\phi)$, otrzymujemy:
$$R(\phi) * v= \begin{bmatrix} \cos\phi & -\sin\phi \\ \sin\phi & \cos\phi  \end{bmatrix} * \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} \cos\phi \\ \sin\phi \end{bmatrix}$$

![[Interpretacja macierzy jako operatorów liniowych.webp]]

## Właściwości operatorów rotacji

### Mnożenie operatorów rotacji

Jeśli mamy dwie rotacje $R(\phi)$ i $R(\psi)$, to ich iloczyn daje rotację o kącie $\phi + \psi$:

$$\begin{align} R(\psi)*R(\phi)=\begin{bmatrix} \cos\phi & -\sin\phi \\ \sin\phi & \cos\phi  \end{bmatrix}*\begin{bmatrix} \cos\psi & -\sin\psi \\ \sin\psi & \cos\psi  \end{bmatrix} = \\ \\
\begin{bmatrix} \cos\phi+\psi & -\sin\phi+\psi \\ \sin\phi+\psi & \cos\phi+\psi \end{bmatrix} =R(\psi + \phi)
\end{align}$$

$$R(\psi)*R(\phi)*v=\begin{bmatrix} \cos\phi+\psi & -\sin\phi+\psi \\ \sin\phi+\psi & \cos\phi+\psi \end{bmatrix} * \begin{bmatrix} 1 \\ 0 \end{bmatrix} =
\begin{bmatrix} \cos(\phi+\psi) \\ \sin(\phi+\psi) \end{bmatrix}$$

![[Interpretacja macierzy jako operatorów liniowych-1.webp]]


![[Interpretacja macierzy jako operatorów liniowych-2.webp]]

![[Interpretacja macierzy jako operatorów liniowych-3.webp]]

$\leftarrow$ [[Macierz]]
$\leftarrow$ [[Wektor]]