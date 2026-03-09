---
created: 2026-03-09 16:26
tags:
  - atom
  - definicja
  - it/programowanie
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-09 16:40
---
> [!note] Definicja
> Metodyka programowania stanowego polega na projektowaniu programów poprzez tworzenie diagramu, który opisuje zachowanie systemu.

- Zaliczane do metodyk [[Programowanie typu opisowego|typu opisowego]].
- Charakterystyka i rodzaj użytego diagramu determinuje, co będzie oprogramowywane. Mogą to być zarówno zjawiska, jak i procesy.

## Zastosowanie

- Raczej niespotykana w obszarze programowania komputerów osobistych. Za to jedna z głównych metodyk stosowanych w programowaniu elektroniki przemysłowej – głównie sterowniki PLC (programowalne sterowniki logiczne).

## Wady i zalety

### Zalety

- Bezpośrednie uzależnienie zachowania systemu od stanu własnego i stanu otoczenia.
- Praca oparta na idei automatów skończonych.
- Programista nie musi znać poleceń języka.

### Wady

- Wdrożenie złożoności obliczeniowej wymaga wsparcia innego paradygmatu, w konsekwencji często także i innego języka.
- Tworzony program nie ma formy tekstowej.
- Nawet proste programy zwykle są reprezentowane za pomocą bardzo skomplikowanych diagramów.

## Przykłady

![[Programowanie stanowe.webp|Prosty diagram sekwencyjny SFC]]

![[Diagram sekwencyjny SFC - Tranzycje.webp|Diagram sekwencyjny SFC - Tranzycje]]

![[Diagram drabinkowy (LD).webp|Diagram drabinkowy (LD)]]

Programowaniem stanowym określamy również opisywanie tabelą stanu wyjść układu elektronicznego na podstawie stanu jego wejść. Takie podejście również jest często stosowane przy programowaniu elementów typu PLD.


$\leftarrow$ [[MOC Metodyka programowania]]