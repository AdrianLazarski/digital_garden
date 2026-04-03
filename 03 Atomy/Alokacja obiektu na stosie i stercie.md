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
#### Sama deklaracja zmiennej
`Typ nazwa`

Na stosie (stack) rezerwowana jest przestrzeń na zmienną `nazwa`. Ma stały rozmiar.
- Zmienna ta nie ma żadnej wartości, a próba jej użycia wyrzuci błąd kompilacji.
- Nie ma referencji do żadnego adresu.
- Ten stały rozmiar to 4 baty w systemach 32-bitowych i 8 bajtów w 64-bitowych.


#### Jednoczesnej inicjalizacja i deklaracja zmiennej 
`Ssak baba = new Ssak();` 


1. Na stosie (stack) rezerwowana jest przestrzeń (8 bajtów) na zmienną `baba`. Ma stały rozmiar.
2. Słowo kluczowe `baba` sprawdza definicję klasy `Ssak`, sumuje jej rozmiary pól i rezerwuje odpowiedni blok pamięci na stercie.
	- Np. dla dwóch pól `int` i jednego `bool` to 2 * 4 + 1 bajtów. Oprócz tego narzut systemowy na nagłówek obiektu, zazwyczaj 8-16 bajtów.
3. Następnie system wypełnia pola na starcie wartościami `0` i `false`, na wypadek, gdyby w tym miejscu pamięci zostały jakieś 