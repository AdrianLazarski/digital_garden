---
created: 2026-03-30 14:27
tags:
  - atom
  - definicja
  - it/programowanie
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-30 14:27
---
ang. *event-driven programming*

> [!note] Definicja
> Metodyka programowania w której przepływ programu jest determinowany przez zdarzenia zewnętrzne lub wewnętrzne, takie jak kliknięcia myszą, naciśnięcia klawiszy, sygnały z czujników czy komunikaty z innych wątków.

- Zaliczane do metodyk [[Programowanie typu imperatywnego|typu imperatywnego]].

- Jest to jedna z najczęściej wykorzystywanych współcześnie metodyk przy tworzeniu aplikacji z [[GUI]]. 
- Stanowi podstawę środowisk programistycznych klasy RAD (ang. Rapid Application Development)
- Równie często metodyka ta jest wykorzystywana do programowania układów scalonych dysponujących systemem przerwań z możliwością wywołania podprogramu w odpowiedzi na wystąpienie określonego zdarzania.
- W ostatnich latach zyskuje też popularność w programowaniu aplikacji webowych.
- W systemach wykorzystujących programowanie zdarzeniowe może być dodatkowo zdefiniowany mechanizm ustalający priorytety kolejności obsługi. Może również występować mechanizm blokowania zdarzeń niepożądanych. 
	- Przykładem może być ograniczenie możliwości wprowadzania danych do kontrolki typu `<input>` znaków innych niż cyfry.

## Wady i zalety

### Zalety

- Ograniczenie kodu do opisu tylko obsługiwanych zdarzeń,
- Łatwość opisania interakcji z otoczeniem,
- Możliwość zastosowania w trybie hybrydowym innych niezbędnych metodologii.

### Wady

- Programowanie zdarzeniowe opiera się na nieustannej pracy procesora w tle (tzw. pętla komunikatów), która nasłuchuje sygnałów z systemu. Zużywa to zasoby.
- Konieczność przewidzenia wszystkich możliwych zdarzeń oraz sposobu dostarczenia ich parametrów,
- Wysoki stopień skomplikowania kodu wynikowego związany z koniecznością wyszczególnienia, zdefiniowania i implementacji obsługi wszelkich możliwych nadchodzących zdarzeń, przerwań i komunikatów.


$\leftarrow$ [[MOC Metodyka programowania]]