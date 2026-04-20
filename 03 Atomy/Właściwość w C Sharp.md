---
created: 2026-04-20 10:40
tags:
  - atom
  - język_programowania/csharp
  - it/programowanie/obiektowe
  - implementacja
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Prawdopodobny 🧪
modified date: 2026-04-20 10:40
---
## Deklaracja
Z przykładowym warunkiem dla poprawnej zawartości pola `_wzrost`
```csharp
class Woman
{
	private int _wzrost; //Prywatna zmienna
	public void UstawWzrost(int wzrost)
	{
		if (wzrost >= 160 && wzrost <= 176)
		{
			_wzrost = wzrost;
		}
	}
	public int PobierzWzrost()
	{
		return _wzrost;
	}
}
```

### Wywołanie
```csharp
class Program  
{  
    static void Main(string[] args)  
    {  
        Woman marysia = new Woman();  
        marysia.UstawWzrost(160);  // Ustawiamy wzrost za pomocą setera  
        Console.WriteLine(marysia.PobierzWzrost() + " cm");  // Odczytujemy wzrost za pomocą getera  
        Console.ReadKey();  
    }  
}
```

## Deklaracja zalecana

```csharp
public int Wzrost { get; set; }
```

Interpreter języka C# sam to rozwinie do normalnej postaci podczas kompilacji. 

### Wywołanie

```csharp
class Program  
{  
    static void Main(string[] args)  
    {  
        Woman marysia = new Woman();  
        marysia.Wzrost = 160;  
        Console.WriteLine(marysia.Wzrost + " cm");  
        Console.ReadKey();  
    }  
}
```