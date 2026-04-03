---
created: 2026-04-03 16:05
tags:
  - atom
  - definicja
  - it/programowanie/obiektowe
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-03 16:06
---
> [!note] Definicja
> [[Metoda (programowanie)|Metoda]] klasy posiadająca taką samą nazwę jak [[Klasa (programowanie)|klasa]].

Klasa może mieć wiele konstruktorów o różnej budowie. Kompilatorowi zostawia się decyzję którego z nich użyć.

Podstawowe zadania konstruktora to:
	• obliczanie rozmiaru obiektu,
	• alokacja obiektu w pamięci,
	• wpisanie do obiektu informacji łączącej go z odpowiadającą mu klasą,
	• wykonanie kodu klasy bazowej, jeśli jest wymagane,
	• wykonanie kodu wewnętrznego użytego konstruktora.


Przykład najbardziej podstawowego konstruktora bezparametrowego:
```csharp
public Ssak()
{}
```

Przykład konstruktora z trzema parametrami (kolejność jest ważna)
```csharp
public Ssak(string animalName, string rząd, Color umaszczenie)
{ }
```


$\leftarrow$ [[MOC Programowanie obiektowe]]