---
tags:
  - ai-generated
  - atom
  - it/architektura
created: 2025-12-09 17:06
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-03 16:51
---
ang. *stack*

> [!note] Definicja
> Wydzielony, uporządkowany obszar w pamięci **RAM** przydzielony procesowi przez system operacyjny. Jest to fizyczna implementacja [[Stos (struktura danych)|struktury stosu]], służąca do automatycznego zarządzania czasem życia zmiennych lokalnych oraz przepływem sterowania programu (wywoływaniem metod).

#### Co przechowuje?

Stos przechowuje małe, proste, "automatyczne" dane, takie jak:

- **Lokalne Zmienne Wartościowe:** Wszelkie liczby (`int`, `bool`, `char`) zdefiniowane wewnątrz metod.
- **Struktury (`struct`):** Cała zawartość struktur jest umieszczana bezpośrednio na Stosie.
- **Adresy Powrotu:** Informacje, gdzie program ma wrócić po zakończeniu metody.

#### Szybkość

Operacje na stosie są bardzo szybkie, ponieważ system operacyjny/CLR (środowisko uruchomieniowe C#) dokładnie wie, ile miejsca potrzebuje i gdzie jest "góra" stosu. Alokacja (dodawanie) i dealokacja (usuwanie) są niemal natychmiastowe.


- **Dostęp:** Mimo modelu LIFO, procesor ma dostęp swobodny (_Random Access_) do dowolnego miejsca w aktualnej ramce stosu za pomocą wskaźnika bazy (EBP/RBP) i przesunięcia.
- **Lokalizacja:** Pamięć RAM.
- **Zależność:** Usuwanie danych musi odbywać się w kolejności odwrotnej do dodawania.



Nie mylić ze [[Stos (struktura danych)]]

$\leftarrow$ [[Bufor]]
