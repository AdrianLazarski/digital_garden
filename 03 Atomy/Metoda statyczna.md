---
tags:
  - atom
  - definicja
  - it/programowanie/obiektowe
created: 2025-12-09 15:38
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-30 16:44
---
ang. *Static method*

> [!note] Definicja
> [[Metoda (programowanie)|Metoda]] danej [[Klasa (programowanie)|klasy]], która nie jest wykonywana na jej [[Obiekt (programowanie)|obiekcie]]. Może wywoływać jedynie pola i metody statyczne tej samej klasy.

Potocznie mówi się, że to metoda "wykonywana na klasie", ale nie chodzi o zmianę stanu lub zachowania klasy, a po prostu zapis w kodzie:
```csharp
klasa.metoda();
```


Pojęcie dla odróżnienia [[Metoda instancyjna|metody instancyjnej]].

- W metodach statycznych nie można używać słów kluczowych this, self, ani me, ponieważ metody statyczne nie odnoszą się do konkretnego obiektu.
	- C Sharp


## Zobacz

$\leftarrow$ [[MOC Programowanie obiektowe]]
$\rightarrow$ [[Metoda statyczna vs instancyjna]]
