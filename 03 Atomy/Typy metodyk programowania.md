---
created: 2026-03-09 14:48
tags:
  - atom
  - definicja
  - it/programowanie
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Prawdopodobny 🧪
modified date: 2026-03-09 14:48
---
Podział [[Metodyka programowania|metodyk programowania]] według podejścia do tworzenia programów i sposobu, w jaki determinują one ich działanie. 


**Programowanie imperatywne** – mówi, jakie instrukcje wykonać na przetwarzanych danych, aby osiągnąć oczekiwany efekt.
	Polega ono na pisaniu ciągu instrukcji, które program ma wykonać w formie krok po kroku. Każdy z tych kroków, w jakimś stopniu modyfikuje stan systemu, a w wyniku zwracany jest pewien efekt.

Główne cechy programowania imperatywnego:
	1. Stan systemu zmienia się po każdej iteracji.
	2. Ważna jest kolejność wykonywania poleceń.
	3. Najczęściej używane są funkcje, pętle oraz warunki.

Programowanie typu imperatywnego jest często mylone z metodyką programowania proceduralnego.


**Programowanie funkcyjne** – determinuje, w jaki sposób złożyć wyrażenia, by osiągnąć pożądany rezultat.

Programowanie funkcyjne jest bardziej ekspresyjne i czytelne. W funkcjach traktowanych jako obiekty, możemy:
- przekazywać funkcje jako parametry do innych funkcji,
- zwracać funkcje z funkcji,
- przechowywać funkcje w zmiennych.

Dzięki temu podejściu unikamy wielu problemów prostszych metodyk, takich jak np. zakleszczenia (ang. *deadlocks*). Dodatkowo, często możemy odpuścić sobie konieczność wykonywania operacji w odpowiedniej kolejności. 

Główne cechy programowania funkcyjnego:
	1. Nie występuje pojęcie „stan”.
	2. Zdarza się, że kolejność operacji może być asynchroniczna.

Programowanie typu funkcyjnego jest często mylone z metodyką programowania funkcyjnego. 


**Programowanie opisowe** – wskazuje, dla jakiego stanu wejść oraz postaci systemu otrzymany zostanie pożądany rezultat.


**Programowanie logiczne** – skupia się na zastosowaniu odpowiednich twierdzeń w celu osiągnięcia pożądanego rezultatu.

