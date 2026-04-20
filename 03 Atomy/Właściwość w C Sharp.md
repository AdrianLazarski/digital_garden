---
created: 2026-04-20 10:40
tags:
  - atom
  - język_programowania/csharp
  - it/programowanie/obiektowe
  - implementacja
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
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

