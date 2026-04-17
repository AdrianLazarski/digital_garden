---
created: 2025-11-23 19:53
tags:
  - język_programowania/csharp
  - język_programowania/python
  - atom
  - it/podstawy
modified date: 2025-11-23 20:03
---

Zwykle operatory zwracają wynik tego samego typu co argumenty, jednak operator dzielenia jest wyjątkiem i zachowuje się różnie w zależności od języka programowania.

### C Sharp

- Jeżeli argumenty są tego samego typu (np. `int`), wynik zachowuje ten typ np.
	- $1/2=0$
		- Zaokrągla wynik do liczby o mniejszej wartości bezwzględnej
	- $1.0/2.0=0.5$
- Jeśli dzielimy liczby różnych typów, wynik ma wartość tego typu, który spośród argumentów ma większą precyzję lub większy zakres np.
	- $1.0/2=0.5$

### Python

- W Pythonie (wersja 3.x): operator **$/$** zawsze zwraca wynik zmiennoprzecinkowy (`float`), niezależnie od typu argumentów:
	- Przykład (Python): $4 / 2 = 2.5$ (typ `float`).
 - Pythonie ma specjalny operator do dzielenia całkowitego, oznaczony jako **$\text{//}$** (_floor division_).
	 - Przykład (Python): $1 // 2 = 0$.


$\leftarrow$ [[MOC Operator (Programowanie)]]
$\leftarrow$ [[Typ danych]]
$\leftarrow$ [[C Sharp]]
$\leftarrow$ [[Python]]

