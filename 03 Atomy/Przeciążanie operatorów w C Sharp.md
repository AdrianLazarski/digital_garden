---
created: 2026-04-27 14:30
tags: [atom, definicja]
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date : 2026-04-27 14:31
---
## Składnia

TypZwr – typ zwracany przez operator
TypArg – typy argumentu wejściowego
TypWyj – typ wyjściowy operatora konwersji
TypWej –typ wejściowy operatora konwersji,
arg – nazwa argumentu wejściowego


opUnarny - oznacza operator unarny, czyli (jednowartościowy) Operatorami unarnymi, dostępnymi do przeciążania są: +, -, !, ~, ++, --, true, false. 
opBinarny - oznacza operatory binarne, czyli (dwuwartościowe). Tu dostępne do przeciążania są: +, -, * , /, %, <<, >>, <, >, <=, >=, == , !=, &, |, ^
```csharp
public static TypZwr operator opUnarny(TypArg arg),
public static TypZwr operator opBinarny(TypArg1 arg1,
TypArg2 arg2),
```


`implicit` - to jest słowo kluczowe oznaczające, że będzie to typ domniemany
`explicit` - oznacza czy będzie to typ sprecyzowany (wymagane).

```csharp

public static implicit operator TypWyj(TypWej arg),
public static explicit operator TypWej(TypWyj arg)
```

Zobacz przykład:
$\rightarrow$ [[Implementacja liczb zespolonych w C Sharp]]
## Operatory, których nie wolno przeciążać

indeksacji: [ ] – zastosowanie mają jedynie indeksery;
• konwersji: ( ) – zastosowanie maja jedynie słowa kluczowe `implicit`
(domniemany) i `explicit` (sprecyzowany);
• logiczne i warunkowe: &&, ||;
• przypisania: +=, -=, * =, %=, <<=, >>=, |=, ^=, &=, /=;
• pozostałe: =, ., new, is, sizeof, typeof, ?:.


## Informacje ogólne

- Nie da się zmienić kolejności wykonywania operatorów. Wynika to z faktu, że kolejność działań bazuje na symbolu operatora a nie na zwracanym typie.
- Nie ma możliwości wymyślania i definiowania nowych operatorów, ponieważ kod programu nie zostanie zrozumiany przez interpreter środowiska.
- Nie można nadpisać cech operatorów dla wbudowanych typów. Oznacza to, że dodawanie dla typu wbudowanego int będzie zawsze wykonywać dodawanie;


## Linki

$\leftarrow$ [[MOC C Sharp]]
$\leftarrow$ [[MOC Operator (Programowanie)]]
$\leftarrow$ [[Operator]]