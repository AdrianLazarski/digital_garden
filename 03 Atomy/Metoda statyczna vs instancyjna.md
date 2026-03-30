---
created: 2026-03-30 17:17
tags:
  - atom
  - kod
  - język_programowania/csharp
  - it/programowanie/obiektowe
dojrzalosc: Krzak 🌿
status_epistemiczny: Prawdopodobny 🧪
modified date: 2026-03-30 17:17
---
[[Metoda instancyjna]] vs [[Metoda statyczna]]

```csharp
public class Robot
{
    // Metoda INSTANCYJNA
    // Każdy robot może mieć inne imię, więc musi to być konkretny egzemplarz.
    public void PrzedstawSie() 
    {
        Console.WriteLine("Jestem robotem.");
    }

    // Metoda STATYCZNA
    // Dotyczy wszystkich robotów jako gatunku. Nie potrzebujemy konkretnego robota.
    public static void PodajDefinicjeRobota()
    {
        Console.WriteLine("Robot to urządzenie mechaniczne...");
    }
}

// UŻYCIE:
Robot.PodajDefinicjeRobota(); // Wywołanie "na KLASIE"

Robot mojRobot = new Robot();
mojRobot.PrzedstawSie();      // Wywołanie na INSTANCJI
```

$\leftarrow$ [[Metoda (programowanie)]]
$\leftarrow$ [[MOC Programowanie obiektowe]]

