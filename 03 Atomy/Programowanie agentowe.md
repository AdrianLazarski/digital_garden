---
created: 2026-03-30 15:01
tags:
  - atom
  - definicja
  - it/programowanie
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-30 15:01
---
ang. *agent-oriented programming*

> [!note] Definicja
> Metodyka programowania zakładająca tworzenie programów w taki sposób, by wykonowanie różnych operacji powierzyć wyodrębnionym, automatycznym podprogram, wątkom lub osobnym procesom lub procedurom.

- Zaliczane do metodyk [[Programowanie typu imperatywnego|typu imperatywnego]].

- Żaden z agentów nie jest w stanie wykonywać czynności innych, niż zostały mu powierzone. Ale aby w pełni wykonać postawione zadanie może być konieczne zdefiniowanie wielu agentów z różnymi obszarami odpowiedzialności i zadaniami. 
- Oznacza to, że do pełnego i poprawnego działania systemu konieczna jest współpraca wielu niezależnych agentów.
	- Systemy tak zorganizowane nazywane są wieloagentowymi.
- W systemach wieloagentowych, często projektuje się specjalne kanały służące do komunikowania się pomiędzy poszczególnymi agentami.
- Jeśli komunikacja nie zostaje zaimplementowana, to zadaniem agentów jest najczęściej utrzymanie pewnego stanu lub podtrzymanie działania w nierozwijanym przez agenty systemie.

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