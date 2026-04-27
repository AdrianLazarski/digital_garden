---
created: 2026-04-23 16:53
tags:
  - atom
  - definicja
  - język_programowania/csharp
  - it/programowanie/obiektowe
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-23 16:53
---
> [!note] Definicja
> Element który pozwala indeksować [[Obiekt (programowanie)|instancje]] danej [[Klasa (programowanie)|klasy]] lub [[Struktura (programowanie)|struktury]] tak, jak [[Tablica|tablice]]. 

Nawet gdy nie zawiera żadnej tablicy.

- Musi zawierać przynajmniej jeden [[akcesor]] get lub set. 
	- W akcesorze set występuje niejawnie zadeklarowana zmienna przechowująca wartość przypisywaną do indeksera. 

## Przykład

`this` – Słowo kluczowe wskazujące, że definiujemy dostęp do bieżącej instancji obiektu.
```csharp
// konstruktor klasy
public LessionHours()
{
// zainicjalizowanie tablicy
lessionHours = new string[10];
lessionHours[0] = "08:00 - 08:45";
lessionHours[1] = "08:50 - 09:35";
lessionHours[2] = "09:40 - 10:25";
lessionHours[3] = "10:40 - 11:25";
lessionHours[4] = "11:30 - 12:15";
lessionHours[5] = "12:20 - 13:05";
lessionHours[6] = "13:35 - 14:20";
lessionHours[7] = "14:25 - 15:10";
lessionHours[8] = "15:15 - 16:00";
lessionHours[9] = "16:05 - 16:50";
}

// definicja indeksera
public string this[int indeks]
{
get { return lessionHours[indeks - 1]; }
set { lessionHours[indeks - 1] = value; }
}

```

### Wywołanie

Nie muszę używać słów kluczowych get, lub set, bo robi to za mnie kompilator.

```csharp
class Program
{
	static void Main(string[] args)
	{
		LessionHours hours = new LessionHours();
		Console.WriteLine(„\n Która lekcja Cię interesuje?\n ");
		int lessionNb = 0;
		Int32.TryParse(Console.ReadLine(), out lessionNb);
		Console.WriteLine(„\n Lekcja " + lessionNb.ToString() + "
		odbywa się w godzinach - " +
		hours[lessionNb]);
		Console.ReadKey();
	}
}
```

Jakbym chciał coś ustawić, a nie odczytać, to napisałbym po prostu
```csharp
hours[1] = "08:00 - 09:00"
```


