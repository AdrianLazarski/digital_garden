---
created: 2026-04-27 15:42
tags:
  - atom
  - implementacja
  - język_programowania/csharp
  - it/programowanie
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-27 15:42
---
## Rozwiązanie systemowe
Operator dodawania jest już [[Przeciążanie operatorów w C Sharp|przeciążony]].

```c sharp
using System.Numerics; // Wymagane do użycia Complex

Complex c1 = new Complex(2, 3);
Complex c2 = new Complex(3, 4);

// Dodawanie liczb zespolonych
Complex suma = c1 + c2; 

Console.WriteLine(suma); // Wypisze: (5, 7)
```

## Implementacja ręczna


```csharp
using System;

namespace MojaAplikacja
{
    // Definiujemy strukturę dla liczb zespolonych
    public struct Zespolone
    {
        private int _real; // Część rzeczywista
        private int _img;  // Część urojona

        // Konstruktor inicjalizujący pola
        public Zespolone(int real, int imaginary)
        {
            _real = real;
            _img = imaginary;
        }

        // Przeciążenie operatora +
        public static Zespolone operator +(Zespolone c1, Zespolone c2)
        {
            // Zwracamy nowy obiekt z sumą poszczególnych części
            return new Zespolone(c1._real + c2._real, c1._img + c2._img);
        }

        // Nadpisanie metody ToString(), aby wynik był czytelny w konsoli
        public override string ToString()
        {
            // Formatujemy tekst do postaci np. (5+7i)
            return string.Format("({0}+{1}i)", _real, _img);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Tworzymy dwie liczby zespolone
            Zespolone num1 = new Zespolone(2, 3);
            Zespolone num2 = new Zespolone(3, 4);

            // Wykorzystujemy przeciążony operator +
            Zespolone sum = num1 + num2;

            // Wyświetlamy wyniki w konsoli
            Console.WriteLine("Wynikiem dodawania dwóch liczb zespolonych o wartościach:");
            Console.WriteLine("{0} i {1}", num1, num2);
            Console.WriteLine("Jest liczba zespolona: {0}", sum);
            Console.ReadKey();
        }
    }
}
```


$\leftarrow$ [[MOC C Sharp]]