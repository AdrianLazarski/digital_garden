---
created: 2025-11-23 16:54
tags:
  - it/typ_danych
  - język_programowania/csharp
  - implementacja
  - atom
modified date: 2025-11-23 16:55
---

| **Nazwa typu (słowo kluczowe, alias klasy)** | **Liczba zajmowanych bitów**  | **Możliwe wartości (zakres)**                                     | **Domyślna wartość** |
| -------------------------------------------- | ----------------------------- | ----------------------------------------------------------------- | -------------------- |
| **bool**                                     | 1 bajt = 8 bitów              | true, false                                                       | false                |
| **sbyte**                                    | 8 bitów ze znakiem            | od -128 do 127                                                    | 0                    |
| **byte**                                     | 8 bitów bez znaku             | od 0 do 255                                                       | 0                    |
| **short**                                    | 2 bajty = 16 bitów ze znakiem | od -32 768 do 32 767                                              | 0                    |
| **int**                                      | 4 bajty = 32 bity ze znakiem  | od -2 147 483 648 do 2 147 483 647                                | 0                    |
| **long**                                     | 8 bajtów = 64 bity ze znakiem | od -9 223 372 036 854 775 808 do 9 223 372 036 854 775 807        | 0                    |
| **ushort**                                   | 2 bajty = 16 bitów bez znaku  | maks. 65 535                                                      | 0                    |
| **uint**                                     | 4 bajty = 32 bity bez znaku   | maks. 4 294 967 295                                               | 0U                   |
| **ulong**                                    | 8 bajtów = 64 bity bez znaku  | maks. 18 446 744 073 709 551 615                                  | 0UL                  |
| **char**                                     | 2 bajty = 16 bitów            | Znaki Unicode od U+0000 do U+FFFF (od 0 do 65 535), np. '\0'      | '\0'                 |
| **float**                                    | 4 bajty                       | Od ok. **$1,5 \cdot 10^{-45}$** do ok. **$3,4 \cdot 10^{38}$**    | 0.0F                 |
| **double**                                   | 8 bajtów                      | Od ok. **$4,9 \cdot 10^{-324}$**, do ok. **$1,7 \cdot 10^{308}$** | 0.0D                 |
| **decimal**                                  | 16 bajtów                     | Od **$10^{-28}$** do **$7,9 \cdot 10^{28}$**                      | 0.0M                 |


$\leftarrow$ [[MOC Typy danych]]
$\leftarrow$ [[C Sharp]]
$\leftarrow$ [[Składnia języka C Sharp]]

$\rightarrow$ [[Typy całkowitoliczbowe w C Sharp]]
$\rightarrow$ [[Typy zmiennoprzecinkowe w C Sharp]]
$\rightarrow$ [[Znakowy typ danych w C Sharp]]
$\rightarrow$ [[Typy tekstowe w C Sharp]]
