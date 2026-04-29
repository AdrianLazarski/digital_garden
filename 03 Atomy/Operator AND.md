---
created: 2025-11-25 21:08
tags:
  - atom
  - it
  - język_programowania/csharp
  - implementacja
modified date: 2025-11-25 21:09
---
> [!note] Definicja
> Operator koniunkcji. Przyjmuje wartość logiczną `1`, gdy oba człony są prawdziwe.

### Implementacje

```csharp
x && y //Jeśli pierwszy warunek będzie fałszywy, program nie sprawdza już drugiego i idzie dalej.
x & y //Jeśli pierwszy warunek jest fałszywy, program dalej sprawdza drugi warunek. Może to mieć znaczenie np. gdy drugi warunek w ogóle nie istnieje - program wywaliłby błąd. 
```



### Zobacz też

$\leftarrow$ [[MOC Operator (Programowanie)]]
$\leftarrow$ [[Koniunkcja]]

$\rightarrow$ [[Operator OR]]
