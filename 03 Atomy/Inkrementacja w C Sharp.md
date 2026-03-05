---
created: 2025-11-25 20:32
tags:
  - atom
  - it
  - język_programowania/csharp
  - implementacja
modified date: 2025-11-25 20:35
---
```csharp
int i = 0; //deklaracja wartości początkowej

i++; //zwiększenie licznika o 1 przy każdym wykonaniu operacji

i = i + 1; //Można osiągnąć to samo przy pomocy operatora dodawania.

++i //Inkrementuje przed wykonaniem innych operacji.
```

### Przykład

```csharp
int x = 2, y = 3; //deklaracja zmiennych
y = x++; //najpierw do zmiennej y zostanie przypisana wartość x, potem x zostanie zwiększone o 1
x = 3, y = 2 // Rezultat


int x = 2, y = 3; //deklaracja zmiennych
y = ++x; //najpierw zwiększona zostanie wartość x, potem ta nowa wartość x zostanie przypisana do zmiennej y
x = 3, y = 3 //Rezultat
```

$\leftarrow$ [[Operator inkrementacji]]
$\rightarrow$ [[Dekrementacja w C Sharp]]
