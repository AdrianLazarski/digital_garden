---
created: 2025-11-23 18:42
tags:
  - it/typ_danych
  - atom
  - język_programowania/csharp
  - implementacja
modified date: 2025-11-23 18:48
---

Wartość może być dodatnia lub ujemna.

| **Typ**     | **Rozmiar** | **Zakres**                                                        | **Default** |
| ----------- | ----------- | ----------------------------------------------------------------- | ----------- |
| **float**   | 4 bajty     | Od ok. **$1,5 \cdot 10^{-45}$** do ok. **$3,4 \cdot 10^{38}$**    | 0.0F        |
| **double**  | 8 bajtów    | Od ok. **$4,9 \cdot 10^{-324}$**, do ok. **$1,7 \cdot 10^{308}$** | 0.0D        |
| **decimal** | 16 bajtów   | Od **$10^{-28}$** do **$7,9 \cdot 10^{28}$**                      | 0.0M        |
`Decimal` ma mniejszy zakres od `double`, ale jest bardziej precyzyjny (mniej zaokrągla).

$\leftarrow$ [[Zmiennoprzecinkowy typ danych]]
$\leftarrow$ [[Typy danych w C Sharp]]

$\rightarrow$ [[Typy całkowitoliczbowe w C Sharp]]
