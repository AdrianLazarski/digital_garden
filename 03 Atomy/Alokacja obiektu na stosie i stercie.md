---
created: 2026-04-03 14:52
tags:
  - atom
  - definicja
  - it/podstawy
  - it/programowanie/obiektowe
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-03 14:52
---
## Alokacja dla typów referencyjnych
### na przykładzie klasy

#### Sama deklaracja zmiennej
`Ssak baba``

Na **stosie** rezerwowana jest przestrzeń na zmienną `baba`. Ma stały rozmiar.
- Zmienna ta nie ma żadnej wartości, a próba jej użycia wyrzuci błąd kompilacji.
- Nie ma referencji do żadnego adresu.
- Ten stały rozmiar to 4 bajty w systemach 32-bitowych i 8 bajtów w 64-bitowych.


#### Jednoczesna deklaracja i inicjalizacjazmiennej 
`Ssak baba = new Ssak();` 


1. Na [[Stos (pamięć)|stosie]] (stack) rezerwowana jest przestrzeń (8 bajtów) na zmienną `baba`. Ma stały rozmiar.
2. Słowo kluczowe `baba` sprawdza definicję [[Klasa (programowanie)|klasy]] `Ssak`, sumuje jej rozmiary pól i rezerwuje odpowiedni blok pamięci na [[Sterta (pamięć)|stercie]] (heap).
	- Np. dla dwóch pól `int` i jednego `bool` to 2 * 4 + 1 bajtów. Oprócz tego narzut systemowy na nagłówek obiektu: 8 bajtów w systemach 32-bitowych i 16 bajtów w 64-bitowych.
		- Nagłówek składa się zazwyczaj z dwóch elementów:
			- **Sync Block Index:** Służy do synchronizacji wątków (żeby dwa wątki nie zmieniały obiektu naraz)
			- **Type Object Pointer:** Wskaźnik do "dowodu osobistego" klasy. Dzięki temu system wie, że ten konkretny kawałek pamięci to `Ssak`, a nie np. `Samochod`.
3. Następnie system wypełnia pola na **stercie** wartościami `0` dla liczb  i `false` dla booli, na wypadek, gdyby w tym miejscu pamięci zostały jakieś śmieci z innego jej zastosowania.
4. Następnie procesor przeskakuje do kodu [[Konstruktor|konstruktora]], który wykonuje instrukcje przypisania wartości do konkretnych [[Pole (programowanie)|pól]] na **stercie**. 
5. Następnie adres początkowy bloku pamięci na **stercie** zostaje wpisany do zmiennej `baba` na **stosie**.
	- Dopiero w tym momencie mamy działającą zmienną na stosie, która referuje do wypełnionego danymi obiektu na stercie.

### Na przykładzie tablicy

#### Sama deklaracja i rezerwacja miejsca
`int[] liczby = new int[3];`
1. Powstaje zmienna `liczby` i na a stosie rezerwowane jest 8 bajtów na adres, niezależnie od rozmiarów tablicy.
2. Na stercie zarezerwowany jest blok pamięć na 3 liczby + nagłówki
3. Cały blok na stercie wypełniony jest zerami.
	- Gdyby to była tablica instancji jakiejś klasy, to komórki wypełniłoby `null`, bo to domyślna wartość dla adresów (takie potencjalne obiekty, do których byśmy się odnosili, już by gdzieś istniały w stercie, więc wystarczyłoby je adresować, zamiast wstawiać drugi raz).
4. Adres początku bloku na stercie trafia do zmiennej `liczby` na stosie.

#### Deklaracja plus inicjalizacja
`int[] liczby = new int[3] { 1, 2, 3 };`
`int[] liczby = { 1, 2, 3 };` //to samo co wyżej

Proces wygląda jak przy samej deklaracji, przy czym przed wpisaniem adresu bloku pamięci **na stercie** do zmiennej `liczby` **na stosie** (punkt 4), zachodzi inicjalizacja tj. procesor wpisuje liczby w puste miejsca na **stercie**.

## Alokacja dla typów prostych

1. Deklaracja `int nazwa;` zajmuje 4 bajty na **stosie** (dla innych typów danych inny rozmiar, ale też generalnie stały).
2. Przypisanie `nazwa = 5;` wpisuje binarną reprezentację liczby 5 bezpośrednio do tego miejsca na **stosie**. 


$\leftarrow$ [[MOC Programowanie obiektowe]]