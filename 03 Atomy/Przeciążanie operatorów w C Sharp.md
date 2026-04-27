---
created: 2026-04-27 14:30
tags: [atom, definicja]
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date : 2026-04-27 14:31
---

TypZwr
- to jest to typ zwracany przez operator
TypArg
- oznacza typy argumentu wejściowego
TypWyj
- ten zapis oznacza typ wyjściowy operatora konwersj
TypWej
- typ wejściowy operatora konwersji,
arg
- oznacza tu nazwę argumentu wejściowego (wymagane),
opUnarny - oznacza operator unarny, czyli (jednowartościowy) Operatorami
unarnymi, dostępnymi do przeciążania są: +, -, !, ~, ++, --, true, false. Ten
element też jest wymagany,
opBinarny - oznacza operatory binarne, czyli (dwuwartościowe). Tu dostępne
do przeciążania są: +, -, *, /, %, <<, >>, <, >, <=, >=, ==, !=, &, |, ^ (wymagane),
implicit - to jest słowo kluczowe oznaczające, że będzie to typ
domniemany (wymagane),
explicit - oznacza czy będzie to typ sprecyzowany (wymagane).

```csharp
public static TypZwr operator opUnarny(TypArg arg),
public static TypZwr operator opBinarny(TypArg1 arg1,
TypArg2 arg2),
public static implicit operator TypWyj(TypWej arg),
public static explicit operator TypWej(TypWyj arg)
```