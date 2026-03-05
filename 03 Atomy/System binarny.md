---
created: 2026-02-26 11:16
tags:
  - atom
dojrzalosc:
status_epistemiczny:
modified date: 2026-02-27 14:25
---

- Wagi w systemie binarnym są potęgami liczby dwa które rosną od prawej do lewej z $2^0 =1$:
  …$2^5, 2^4, 2^3, 2^2, 2^1, 2^0$
- Dla liczb ułamkowych, wagi kolumn są ujemnymi potęgami dwójki które maleją od lewej do prawej:
  $2^2, 2^1, 2^0, 2^{-1}, 2^{-2}, 2^{-3}, 2^{-4}$ …

- Odpowiednik dziesiętny liczby binarnej wyznacza się poprzez sumowanie wartości w kolumnach zawierających 1 opuszczając kolumny zawierające 0
	Przykład: zamiana liczby binarnej 100101.01 na dziesiętną:
		Zaczynamy od zapisania wag poszczególnych kolumn, następnie sumujemy wagi przy których stoją 1
		![[System binarny.webp]]

Przykład: zamiana liczby dziesiętnej 49 na binarną:
	Dzielimy zamienianą liczbę przez 2 i zapisujemy reszty z dzielenia:
	![[System binarny-1.webp]]

- Zamiana ułamka dziesiętnego na binarny polega na mnożeniu przez 2. W kolejnych działaniach zapisujemy część całkowitą wyniku mnożenia.
	Przykład: zamiana liczby dziesiętnej 0.188 na binarną:
	![[System binarny-2.webp]]
- $(0.188)_{10} \not = (0.00110000001)_2$
- Otrzymany ciąg zerojedynkowy jest nieskończony
- Wynika to z wartości przyjętego ułamka dziesiętnego, który w systemie binarnym jest liczbą niewymierną
- $(0.188)_{10} \thicksim (0.00110000001…)_2$
- Im więcej cyfr zastosujemy tym dokładniejsze przybliżenieotrzymamy


## Zasady dodawania w systemie binarnym:

| Cyfry      | Wynik                       |
| ---------- | --------------------------- |
| 0 + 0 = 00 | suma = 0, przeniesienie = 0 |
| 0 + 1 = 01 | suma = 1, przeniesienie = 0 |
| 1 + 0 = 01 | suma = 1, przeniesienie = 0 |
| 1 + 1 = 10 | suma = 0, przeniesienie = 1 |


- Kiedy mamy przeniesienie na wejściu = 1 z poprzedniego, działania, zasady są następujące:

| Cyfry          | Wynik                       |
| -------------- | --------------------------- |
| 1 + 0 + 0 = 01 | suma = 1, przeniesienie = 0 |
| 1 + 0 + 1 = 10 | suma = 0, przeniesienie = 1 |
| 1 + 1 + 0 = 10 | suma = 0, przeniesienie = 1 |
| 1 + 1 + 1 = 11 | suma = 1, przeniesienie = 1 |

![[System binarny-3.webp]]


### Zasady odejmowania w systemie binarnym:

0 - 0 = 0
1 - 1 = 0
1 - 0 = 1
10 - 1 = 1 z pożyczką 1

![[System binarny-4.webp]]

### Mnożenie w systemie binarnym

Mnożysz jak w systemie dziesiętnym, tyle że wynik jest dwójkowy.
![[System binarny-5.webp]]
 

### Dzielenie w systemie binarnym

Tu już jest nietypowo. Odejjmujesz zgodnie z zasadami odejmowania w systemie binarnym.
![[System binarny-6.webp]]

## Uzupełnienia systemu binarnego

Uzupełnienie do 1 (U1) liczby binarnej, to po prostu negacja jej bitów. Wszystkie 0 zmieniasz na 1 i odwrotnie.

Uzupełnienie do 2 (U2) liczby binarnej polega na uzupełnieniu jej do 1, a następnie na dodaniu 1 (jednej jedynki) do wyniku

![[System binarny-7.webp]]


## Arytmetyka zmiennopozycyjna

W komputerach liczby dodatnie są zapisywane w formie NKB - naturalnego kodu binarnego (0 w bicie znaku), liczby ujemne natomiast są zapisywane w formie uzupełnienia do 2 (1 w bicie znaku).

![[System binarny-8.webp]]

![[System binarny-9.webp]]

Sposobem odczytywania tak zapisanej liczby ze znakiem jest przypisanie bitowi znaku wagi= -128 (w przypadku liczby 8-bitowej). Następnie zsumowanie wag poszczególnych kolumn.
Przykład: zakładamy, że bit znaku $= -128$, wykazać, że poniższa liczba zapisana jako uzupełnienie do 2 wynosi -58 
$(11000110)_{U2} = (-58)_{10}$

![[System binarny-10.webp]]

- Stosowanie kodu U2 do reprezentacji liczb ze znakiem ułatwia arytmetyczne operacje sumowania i odejmowania.
- Zasady dodawania: dodajemy dwie liczby binarne ze znakiem. Pomijamy przeniesienia (nadmiary). Otrzymujemy wynik w formie liczby ze znakiem
![[System binarny-11.webp]]

![[System binarny-12.webp]]

![[System binarny-13.webp]]

![[System binarny-14.webp]]

![[System binarny-15.webp]]

![[System binarny-16.webp]]



