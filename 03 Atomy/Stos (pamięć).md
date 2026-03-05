---
created: 2025-12-09 17:06
tags:
  - ai-generated
  - atom
  - it/pamięć
modified date: 2025-12-10 12:53
---
ang. *stack*

> [!note] Definicja
> Uporządkowany, szybki rodzaj pamięci, w którym dane dokładane są na wierzch stosu i z wierzchołka stosu są pobierane (bufor typu LIFO, _Last In, First Out_; _ostatni na wejściu, pierwszy na wyjściu_).

#### Co przechowuje?

Stos przechowuje małe, proste, "automatyczne" dane, takie jak:

- **Lokalne Zmienne Wartościowe:** Wszelkie liczby (`int`, `bool`, `char`) zdefiniowane wewnątrz metod.
- **Struktury (`struct`):** Cała zawartość struktur jest umieszczana bezpośrednio na Stosie.
- **Adresy Powrotu:** Informacje, gdzie program ma wrócić po zakończeniu metody.

#### Szybkość

Operacje na stosie są bardzo szybkie, ponieważ system operacyjny/CLR (środowisko uruchomieniowe C#) dokładnie wie, ile miejsca potrzebuje i gdzie jest "góra" stosu. Alokacja (dodawanie) i dealokacja (usuwanie) są niemal natychmiastowe.



![[Rodzaje prądu.webp|300]]


Nie mylić ze [[Stos (struktura danych)]]

$\leftarrow$ [[Bufor]]
