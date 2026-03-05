
```excel
Lewy ALT + ENTER 
```
W pasku formuł pozwala zejść do niższego "wiersza", zostając cały czas w jednej komórce. Ewentualnie zawijaj tekst po prostu.

```excel
Lewy CTRL + DOWN ARROW
```
Zjeżdża do najniższej wypełnionej komórki. 

```excel
Lewy CTRL + Lewy SHIFT + DOWN ARROW
```
Zjeżdża i zaznacza kolumnę do najniższej wypełnionej komórki.

```excel
"stała:"&C4
```
Dynamiczne nazywanie. Stała część jest wiadomo jaka, a jak C4 się zmieni, to ten fragment tutaj też się zmieni.

```excel
=B2*C2+$D$8
```
Znak dolara zakotwicza jakaś wartość. Jak przeciągnę formułę w dół to się zrobi B3* C3 itd. ale D8 będzie w każdym kolejnym wierszu.

```excel
F5 + Specjalnie
```
Możesz zaznaczyć wszystkie komórki danego typu np. puste.

```excel
Dane + Poprawność danych + Lista + Zakres komórek/ręcznie wpisane wartości (np. tak/nie)
```
Drop-down list, takie listy do wybierania wartości.

```excel
=VLOOKUP(szukana_wartość; tabela; nr_kolumny; 0)
=WYSZUKAJ.PIONOWO(A2;B2:D10;2;0)
```
- szukana_wartość - wpisana ręcznie lub wybrana komórka
- tabela - zakres przeszukiwania
- nr kolumny - liczony od pierwszej kolumny w podanym zakresie
- 0 - oznacza dokładne dopasowanie. Stosowanie w 99,99% przypadków.
- W angielskim excelu czasem są przecinki zamiast średników.

```excel
=XLOOKUP(szukana_wartość, zakres_szukania; zakres_zwrotu,"jeśli_nie_znaleziono", 0, 1)
=X.WYSZUKAJ(A2;B2:B100;C2:C100)
```
- zakres_szukania - kolumna lub wiersz
- 0 - dokładne dopasowanie
- Tryb wyszukiwania:
	- -1 od końca (w górę)
	- 1 od początku (w dół)

```excel
=INDEKS(tablica; nr_wiersza; [nr_kolumny])
```
=INDEKS(A2:C10; 3; 2) zwróci wartość z 3. wiersza i 2. kolumny w zakresie A2:C10.

```excel
=PODAJ.POZYCJĘ("Jabłko"; A1:A10; 0)
```
 - Zwróci pozycję, na której znajduje się „Jabłko”.
 - 0 - dokładne dopasowanie
 - Po angielsku MATCH

```excel
=INDEKS(B2:B10; PODAJ.POZYCJĘ("Jabłko"; A2:A10; 0))
=INDEX(B2:B10; MATCH("Jabłko"; A2:A10; 0))
```
- PODAJ.POZYCJĘ szuka „Jabłka” w kolumnie A.
- INDEKS zwraca wartość z kolumny B, w tym samym wierszu, w którym znaleziono „Jabłko”.