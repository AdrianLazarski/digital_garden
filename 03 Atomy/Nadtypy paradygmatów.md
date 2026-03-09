---
created: 2026-03-09 14:33
tags:
  - atom
  - definicja
  - it/programowanie
  - it/architektura
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-09 14:33
---
Podział [[Metodyka programowania|metodyk programowania]] według przetwarzania danych.


1. **Programowanie stacjonarne** – tworzenie programu, uwzględniającego obliczenia wykonywane przez jeden procesor, włókno, wątek lub proces na jednym lub więcej zbiorze danych.
2. **Programowanie rozproszone** – tworzenie programu, uwzględniającego obliczenia wykonywane bez współdzielenia zasobów obliczeniowych, ale ze współdzieleniem danych często rozproszonych geograficznie. Uwzględnia również niezbędne dodatkowe zadania związane z koniecznością nawiązania komunikacji między systemami oraz ich synchronizacji.
3. **Programowanie równoległe lub współbieżne** – tworzenie programu, uwzględniającego obliczenia wykonywane przez więcej niż jeden procesor, włókno, wątek lub proces w sposób równoczesny lub z przełączaniem. Pozwala na obsługę dodatkowych zadań związanych z komunikacją, synchronizacją oraz podziałem danych między procesorami, włóknami, wątkami lub procesami.

- Programowanie rozproszone jest szczególnym przypadkiem programowania równoległego.
- Programowanie równoległe nie musi być programowaniem rozproszonym!

- Nadtypy mogą wiązać się z konkretnymi architekturami systemów oraz określonymi sposobami przetwarzania danych, ale nie są z nimi równoznaczne. Są to jedynie podejścia zorientowane na tworzenie programów dla określonych rodzajów platform.  
- Nie mają one zazwyczaj wpływu na wybór metodyki, ale często wpływają na wybór algorytmu, formę, kolejność lub sposób złożenia instrukcji aby osiągnąć optymalny wynik na platformie docelowej.

