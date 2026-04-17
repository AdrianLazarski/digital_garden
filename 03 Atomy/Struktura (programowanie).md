---
created: 2026-04-03 18:42
tags:
  - atom
  - definicja
  - it/programowanie/obiektowe
  - it/typ_danych
  - przerob
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-03 18:42
---
> [!note] Definicja
> Złożony [[Typ danych|typ danych]], grupujący powiązane ze sobą dane różnego typu w jednym obszarze pamięci. 

- Jest to złożony typ wartościowy, w związku z czym jej dane odkładane są na [[Stos (pamięć)|stosie]]. 
	- Dotyczy to językó z
- Struktury stosuje się zamiast [[Klasa (programowanie)|klas]], gdy zarządzanie obiektami umiejscowionymi na stercie byłoby zupełnie nieopłacalne (np. nowo utworzona klasa miała by bardzo mało informacji).
- Struktura może mieć własne [[Pole (programowanie)|pola]], [[Metoda (programowanie)|metody]], a nawet [[konstruktor]], pod warunkiem, że implementuje wartości wszystkich pól zadeklarowanych w ciele struktury.
	- Jeśli w strukturze nie zostanie zdefiniowany żaden konstruktor, to kompilator stworzy własny konstruktor zawierający wszystkie zadeklarowane pola i wypełni je wartościami domyślnymi.
- Struktury nie obsługują dziedziczenia, w przeciwieństwie do klas.

> [!warning] Uwaga!
> Ten opis ma zastosowanie głównie do struktur w C Sharpie.

