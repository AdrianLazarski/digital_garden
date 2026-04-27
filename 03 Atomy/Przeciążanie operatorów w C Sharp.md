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
	Dobre, gdy jakaś operacja jest bezpieczna dla kodu/danych i nie wymaga większego nadzoru
`explicit` - oznacza czy będzie to typ sprecyzowany (wymagane).
	każdorazowo trzeba będzie napisać coś w nawiasie, by zwrócić uwagę programisty

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
- Operatory relacji muszą być przeciążanie w parach: == i !=,. < i > oraz <= i >=
- W odniesieniu do operatorów (jest równe) i (jest różne) == i != należy pamiętać że wymagają one również nadpisania metod systemowych Equals() i GetHashCode().
	- Jeśli Equals() przyłożona do pary obiektów zwróci wartość true, to GetHashCode() musi zwracać te same wartości dla obydwu obiektów. Odwrotnej zależności nie ma, bo liczba hashcode'ów jest skończona i służą tylko do szybkiej filtracji, a nie unikalnej identyfikacji obiektów.
- Przeciążenie jawne i niejawne może dotyczyć dokładnie dowolnych typów, nawet tych definiowanych samodzielnie. Wyjątkiem od tej zasady jest sytuacja, gdy w składni języka istnieje na sztywno zdefiniowane przeciążenie jawne. Potocznie nazywa się ono rzutowaniem typów. Jeśli takie przeciążenie jest dostępne domyślnie, to samodzielne modelowanie tego działania nie ma po prostu sensu.


## Linki

$\leftarrow$ [[MOC C Sharp]]
$\leftarrow$ [[MOC Operator (Programowanie)]]
$\leftarrow$ [[Operator]]