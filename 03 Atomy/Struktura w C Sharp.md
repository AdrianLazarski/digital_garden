---
created: 2026-04-17 16:31
tags:
  - atom
  - język_programowania/csharp
  - implementacja
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-17 16:32
---
> [!note] Definicja
> Złożony [[Typ danych|typ danych]], grupujący powiązane ze sobą dane różnego typu w jednym obszarze pamięci. 

- W językach z zatyp wartościowy, w związku z czym jej dane odkładane są na [[Stos (pamięć)|stosie]]. 
	- Dotyczy to języków z zarządzaną pamięcią typu C#, Java, Python. W C czy w C++ to programista decyduje gdzie lądują klasy i struktury. 
- Struktury stosuje się zamiast [[Klasa (programowanie)|klas]], gdy zarządzanie obiektami umiejscowionymi na stercie byłoby zupełnie nieopłacalne (np. nowo utworzona klasa miała by bardzo mało informacji).
- Struktura może mieć własne [[Pole (programowanie)|pola]], [[Metoda (programowanie)|metody]], a nawet [[konstruktor]], pod warunkiem, że implementuje wartości wszystkich pól zadeklarowanych w ciele struktury.
	- Jeśli w strukturze nie zostanie zdefiniowany żaden konstruktor, to kompilator stworzy własny konstruktor zawierający wszystkie zadeklarowane pola i wypełni je wartościami domyślnymi.
	- Gdy chcemy skorzystać ze struktury z własnym konstruktorem, ale nie chcemy deklarować wartości dla wszystkich pól, musimy odwołać się do konstruktora domyślnego za pomocą słowa kluczowego `this`.
- Struktury nie obsługują dziedziczenia, w przeciwieństwie do klas.


$\leftarrow$ [[MOC Programowanie obiektowe]]
$\leftarrow$ [[Typy danych w C Sharp]]
