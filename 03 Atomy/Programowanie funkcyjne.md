---
created: 2026-03-09 17:07
tags:
  - atom
  - definicja
  - it/programowanie
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-09 17:09
---
> [!note] Definicja
> Sposób programowania ściśle oparty na konstrukcjach matematycznych. Jego podstawę stanowią wyrażenia lambda oraz rachunek lambda z typami.

- W przeciwieństwie do programowania stanowego, stan maszyny obliczeniowej nie wpływa na działanie programu. 
- Rezultat powinien być otrzymany za pomocą złożenia funkcji. Oznacza to konieczność tworzenia wielokrotnie zagnieżdżonych konstrukcji, których wyniki, będące argumentami funkcji zewnętrznych, przekazywane są za pomocą wartości lub referencji. 
	- Czasami, ale rzadko, także poprzez wskaźniki.
- Pętle są zastępowane przez rekurencję, ponieważ użycie zmiennej licznikowej do pętli stanowiłoby zapamiętanie stanu części maszyny obliczeniowej. 
	- Rekurencja polega na wywołaniu funkcji przez tę samą funkcję, przez co zachowana jest forma zagnieżdżania wywołań funkcji jako własnych argumentów.



> [!warning] Uwaga!
> Nie mylić z [[Programowanie typu funkcyjnego|programowaniem typu funkcyjnego]], którego jest jedynym przedstawicielem.


## Wady i zalety

### Zalety

- Zależność budowy programu od złożenia funkcji matematycznych.
- Łatwość numerycznej weryfikacji modelu.
- Prostota przebiegu procedury testowania.

### Wady

- Złożoność zagnieżdżeń wywoływanych funkcji.
- Ograniczenie wykorzystania zmiennych, tak lokalnych, jak i globalnych.
- Duża zajętość [[Stos (pamięć)|stosu]] spowodowana kolejnymi wywołaniami, zarówno funkcji niezależnych, jak i rekurencji. 


## Kluczowe pojęcia:
[[Efekt uboczny]]
Wartościowanie zachłanne
Wartościowanie leniwe
Mechanizm wejścia-wyjścia oparty na monadach
Monady w programowaniu funkcyjnym to rodzaj konstruktorów abstrakcyjnych typów danych, które implementują funkcje wiążące (ang. *bind*) oraz jednostki (ang. *unit*).

## Języki z programowaniem funkcyjnym

- Klasyczne języki wspierające programowanie funkcyjne: Haskell, Lisp.
- Stosowane też przez Python, F#, Nemerle, Ruby.
- Większość języków stosujących metodykę strukturalną lub obiektową pozwala na stosowanie metodyki funkcyjnej, ale rzadko się spotyka.
- Za to popularne sąkody



$\leftarrow$ [[MOC Metodyka programowania]]