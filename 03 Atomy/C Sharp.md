---
created: 2025-10-26 12:48
tags:
  - it
  - język_programowania/csharp
modified date: 2025-11-23 14:29
---
> [!note] Definicja
> C# należy do rodziny [[MOC Języki programowania|języków programowania]] opartych na C.

- Obiektowy język programowania.
- Słowa funkcja i [[Metoda (programowanie)|metoda]] są tu używane wymiennie. Metody są raczej w [[Klasa (programowanie)|klasach]], ale tu wszystko jest w klasach.


$\rightarrow$ [[Typy danych w C Sharp]]
$\rightarrow$ [[Składnia języka C Sharp]]



### Cheatsheet

```C#

Console.WriteLine("Hello, World!"); //Wyświetla i przechodzi do nowej linii.

Console.Write("Podaj swój wiek: "); //Wyświetla i zostaje - można pisać
string input = Console.ReadLine(); //Odczytuje co napisał użytkownik i przypisuje do zmiennej.
int wiek = int.Parse(input); //Deklaruje nową zmienną jako wynik formatowania zmiennej input.

wiek = Covert.ToInt32(Console.ReadLine()); //Bezpośrednie przerabianie odczytywanego stringa na int

int wiek; //Deklaracja zmiennej
wiek = 25; //Przypisanie wartości do zmiennej
string imie = "Martyna" //Powyższe dwa w 1 kroku

double pi = 3.14159;
decimal dupa = 9.977777; //Jak wyżej, ale nie zaokrągla. Wyższa precyzja.
float ass = 2.137 // Do 7 znaków.
bool jestGotowy = true;
char pojedynczyZnak = 'l'; //W pojedynczym cudzysłowie.


double Liczba_dublowa = 11.53;
int Liczba_calkowita;
Liczba_calkowita = Convert.ToInt32(Liczba_dublowa); //Konwersja na int, zaokrągla: tu do 12. 


if (ocena >= 5) 
{ 
	Console.WriteLine("Otrzymano wyróżnienie!"); 
} 
else if (ocena >= 3) 
{ 
	Console.WriteLine("Zaliczone."); 
} 
else 
{ 
	Console.WriteLine("Niezaliczone!"); 
}


|| // OR
&& // AND
! // NOT
```

## Łańcuchy znaków

### Metody łączenia
```csharp
// Konkatenacja 
Console.WriteLine("Cześć, nazywam się " + imie + " i mam " + wiek + " lat."); 
// Interpolacja (nowoczesna i czytelna) 
Console.WriteLine($"Cześć, nazywam się {imie} i mam {wiek} lat.");
```

### Długość stringa
```csharp
// Liczy znaki
Console.WriteLine(zmienna.Length); 

// Częsty sposób użycia
string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
Console.WriteLine("The length of the txt string is: " + txt.Length);
```

### Metody przeszukiwania
```csharp
// Indeksator
Vistula[0] // :V

// Pierwsze położenie litery (char)
VistulaWarszawa.IndexOf('a') //: 6
// Pierwsze położenie łańcucha ("")
IndexOf("String") 

// Ostatnie położenie litery
VistulaWarszawa.LastIndexOf('a') //: 14
// Ostatnie położenie łańcucha
VistulaWarszawa.LastIndexOf('wa') //: 13

//Fragment łańcucha od pozycji w pierwszym argumencie o długości podanej w drugim
"Vistula".Substring(0, 4) //: Vist

//Sprawdza, czy łańcuch rozpoczyna się lub kończy podanym fragmentem
"Vistula".StartsWith("Vi") //: True
"Vistula".EndsWith("Vi") //: False
```

### Metody porównania
```csharp
// Porównuje tyczasowy łańcuch z podanym w argumencie
"Vistula".Equals("Warszawa") //False

//Porównuje łańcuchy w zmiennych (bool)
s1.Equals(s2)
Equals(s1, s2)
```

### Metody formatowania tekstu
```csharp
string txt = "Hello World";
Console.WriteLine(txt.ToUpper()); //: "HELLO WORLD"
Console.WriteLine(txt.ToLower()); //: "hello world"

//Usuwa spacje z przodu i z tyłu łańcucha
" Vistula ".Trim() //: "Vistula"

//Uzupełnia łańcuch znakiem podanym w drugim argumencie, aż do osiągnięcia długości zadanej w pierwszym argumencie
"Vistula".PadLeft(10, ‘*’) //: Vistula***
```

### Metody podmieniania
```csharp
string Replace(string,string),
string Replace(char,char)

//Przykłady
"Vistula".Replace('V', 'W') //: Wistula

string s = "Siema, cyberpunku!" // Inicjalizacja zmiennej
s = s.Replace("punku", "gnojku"); // Podmiana
Console.WriteLine("After Replacing: " + s) //: Siema, cybergnojku!
```

### Metody wstawiania i wycinania
```csharp
//Wstawia łańcuch przed literą o podanej pozycji
"Vistula".Insert(5, "sra") //: Vistusrala

//Usuwa wskazany fragment od pozycji w pierwszym argumencie (włącznie), o długości podanej w drugim
"Vistula".Remove(5, 2) //: Vistu

//Wyświetla fragment łańcucha od pozycji w pierwszym argumencie o długości podanej w drugim
"Vistula".Substring(0, 4) //Vist
```

## Instrukcje warunkowe

### Instrukcja if
```csharp
// Ogólna forma
if (warunek) {
	instrukcja1;
	instrukcja2;
	...
}

if (warunek) instrukcja; //Przy jednej instrukcji można pominąć nawias klamrowy choć się nie zaleca

if (a>0 && b>10) // if ((a>0) && (b>10)) //Wewnętrzne nawiasy dowolne
```

### Instrukcja if-else
```csharp
if (warunek)
	{
	// Kod wykonywany po spełnieniu warunku
	}
else
	{
	// Kod wykonywany po niespełnieniu warunku
	}

//Pętle można wsadzać w pętle
int temperatura = 3;

if (temperatura < 15)
	{
	if (warunek)
		{
		Console.WriteLine("Jest bardzo zimno");
		}
	else
		{
		Console.WriteLine("Jest trochę zimno");
		}
	}
else
	{
	Console.WriteLine("Jest ciepło");
	}

//Gdy instrukcje zawierają tylko jedno polecenie, można pomijać nawiasy klamrowe. Może to nawet poprawiać czytelność.
if (temperatura < 15)
	if (warunek)
		Console.WriteLine("Jest bardzo zimno");
	else
		Console.WriteLine("Jest trochę zimno");
else
	Console.WriteLine("Jest ciepło");


//Jak chcemy więcej warunków, to w środku używame else if, else na końcu
if (temperatura < 15)
	if (warunek)
		Console.WriteLine("Jest bardzo zimno");
	else
		Console.WriteLine("Jest trochę zimno");
else if (temperatura < 25)
	Console.WriteLine("Jest ciepło");
else
	Console.WriteLine("Jest bardzo ciepło");
```

### Instrukcja switch
```csharp

//Gdy jest dużo warunków, nagromadzenie if-else mogłoby być nieczytelne.
//Można użyć wartości, jak niżej, albo zmiennych.
int day = 4;

switch (day) 
{
	case 1:
	    Console.WriteLine("Monday");
	    break;
	case 2:
	    Console.WriteLine("Tuesday");
	    break;
	case 3:
	    Console.WriteLine("Wednesday");
		break;
	case 4:
	    Console.WriteLine("Thursday");
		break;
	case 5:
	    Console.WriteLine("Friday");
		break;
	case 6:
	    Console.WriteLine("Saturday");
		break;
	case 7:
	    Console.WriteLine("Sunday");
		break;
	default
		Console.WriteLine("Nie ma takiego dnia, debilu.");
	    break;
```

## Pętle
### Pętla for
```csharp
//Postać ogólna pętli for
for (inicjalizacja; warunek; instrukcja_kroku)
{
	//Instrukcje do wykonania
}
// Inicjalizacja to pierwszy etap i wykonuje się tylko raz, tuż przed rozpoczęciem pętli. Deklaruje się tu wartość początkowej zmiennej.
//Zmienna ta ma zasięg tylko w pętli, nie jest dostępna poza nią.

//Przykład
for (int i=1; i<=5; i++)
{ //Przy jednej instrkcji nawiasy klamrowe opcjonalne
	Console.WriteLine(i);
}

//Możliwe jest przesunięcie instrukcji kroku do pętli
for (int i=1; i<=5;)
{ 
	Console.WriteLine(i);
	i++;
}

//Można inicjalizować więcej zmiennych i podać więcej warunków i instrukcji kroku
for (int a=1, b=1; a<100 && b<100; a=a*2, b=b*3 )
{ 
	($"a={a}, b={b}"); 
}
//Można też tak: Console.WriteLine("a={0}, b={1}", a, b);
```

### Break i continue
```csharp
//Poniższe rzykłady są dla pętli for, ale obu tych poleceń można używać w pętlach różnego rodzaju

//Przykład wcześniejszego zerwania pętli - break
int liczba;
for (int i =1; i <=5; i++)
{
	liczba=Convert.ToInt32(Console.ReadLine());
	if (liczba==0) break; //Zakończy program wcześniej, gdy ktoś wpisze 0
}
//W przypadku zagnieżdżenia, break zrywa tylko tę pętlę, w której się znajduje.

//Pomijanie iteracji bez zrywania pętli - continue
for (int i = 0; i <= 10; i++)
{
	if (i % 2 != 0)
	{
		continue; //Gdy liczba jest nieparzysta, pomija iterajcę. 
	}
	Console.WriteLine(i) //Wypisuje tylko parzyste
}
//W przypadku zagnieżdżenia, continue pomija iterację tylko w tej pętli, w której się znajduje.
```

### Pętla while
```csharp
while (warunek)
{
	instrukcja1;
	instrukcja2;
	...
}

// Przykład. Przy jednej instrukcji można pominąć klamry.
int liczba=5
while (liczba<=10)
	liczba = liczba + 2;
```

### Pętla do while
```csharp
//Jest to pętla while, która zostanie wykonana co najmniej raz przed sprawdzeniem warunku.
do
{
	instrukcja1;
	instrukcja2;
	...
} while (warunek);

//Przykład
int suma = 0, liczba = 0;
do
{
	Console.WriteLine("Podaj liczbę do zsumowania: );
	liczba = Convert.ToInt32(Console.ReadLine());
	suma = suma + liczba;
} while (liczba != 0); //Można to przekształcić na for+break
```

### Pętla foreach
- Pozwala przejść po wszystkich elementach kolekcji (np. tablicy) bez konieczności zarządzania wskaźnikami czy indeksami, co uodpornia na błędy. Jest też czytelniejsza.
	- Nawet jakbyśmy chcieli, to nie ma dostępu do indeksów.
- Nie pozwala modyfikować kolekcji podczas iteracji.
- Działają nie tylko na tablicach, ale też na innych kolekcjach.
```cs(typ harp
//Ogólna postać
foreach (typ element in kolekcja)
{
	//Instrukcja do wykonania na każdym elemencie
}
// typ - typ zmiennej np. int
// kolekcja - po której iterujemy np. tablica, lista, słownik
// element - zmienna, która przyjmuje wartość każdego elementu w kolekcji w trakcie iteracji

//Przykład
int[] tablica = {1, 2, 3, 4, 5};
foreach (int numer in tablica)
{
	Console.WriteLine(numer);
}
```

## Tablice

- Tablica w C#  to struktura danych, przechowująca elementy tego samego typu.
- Tablice są obiektami, co znaczy, że są dynamicznie alokowane tj. po zadeklarowaniu rozmiaru nie można go zmienić, bo komórki tablicy sąsiadują ze sobą w pamięci i dalsze "sąsiednie miejsce" komputer mógł już zarezerwować na coś innego.
- Dane w tablicach wielowymiarowych są przechowywane w formie macierzy, co pozwala na ich reprezentację w bardziej złożonych strukturach danych, takich jak tabele czy siatki.
- Tablice są referencyjne tzn. przypisanie jednej tablicy do innej za pomocą znaku = nie tworzy nowej kopii tablicy, a tylko przypisuje referencję do tej samej tablicy w pamięci. W związku z tym zmiany w jednej tablicy będą widoczne w drugiej.

### Tablica jednowymiarowa
```csharp
//Ogólna forma deklaracji:
typDanych[] nazwaTablicy;

//Deklaracja tablicy o konkretym rozmiarze
int[] liczby = new int[5]; //new oznacza alokację miejsca w pamięci

//Inicjalizacja powyższej tablicy (wypełnienie danymi)
liczby[0] = 10;
liczby[1] = 20;
liczby[2] = 30;
liczby[3] = 40;
liczby[4] = 50;

//Deklaracja + inicjalizacja w jednym kroku
//Nie trzeba używać słowa kluczowego "new"
int[] liczby = {10, 20, 30, 40, 50};
```

### Aktualizacja tablicy za pomocą pętli
```csharp
//Zwiększenie każdego pola o 2 w pętli for
for (int = 0; i <5; i++)
{
	liczby[i] = liczby[i] + 2;
}

//Wypełnienie tablicy losowymi danymi
int[] wylosowane_liczby = new int[10];
Random rnd = new Random();
for (int i = 0; i < 10; i++)
{
	wylosowane_liczby[i] = rnd.Next(0, 101);
}

//Tablica jest typem referencyjnym. Wskazuje na pewne miejsce w pamięci. Jak zadeklaruję:
int[] tab1 = {1, 2, 3};
int[] tab2 = tab1;
//to nie powstały dwa odrębne byty, tylko obie te nazwy odnoszą się do jednego i tego samego miejsca w pamięci. Gdy napiszę:
for (int i = 0; i < 3; i++)
	tab1[i] = tab1[i] + 2
//to zmieni się także tab2.
//Żeby uniknąć nadpisywania, trzeba wykonać kopiowanie głębokie:
int[] tab1 = {1, 2, 3};
int[] tab2 = new int[3];
for (int = 0; i < 3; i++)
{
tab2[i] = tab1[i]
}
tab2[0] = 99 //Teraz zmiana w tab2 nie wpłynie na tab1.
```

### Tablice wielowymiarowe
```csharp
//Ogólna forma deklaracji:
typDanych[,] nazwaTablicy2D;

//Deklaracja tablicy o konkretym rozmiarze
int[,] nazwaTablicy2D = new int[3, 2]; //new oznacza alokację miejsca w pamięci

//Może być też więcej wymiarów
int[,,] tablica3D = new int[3, 2, 4];

//W wielowymiarowych też można od razu deklarować i inicjalizować za jednym zamachem
int[,] tablica2D = {{1, 2}, {3, 4}, {5, 6}}; //3 wiersze, 2 kolumny

//Nadpisywanie po indeksie
tablica2D[2,1] = 10 //Wiersz 2, kolumna 1 = 10 (dawne 6).

//Przy większej liczbie wymierów zagnieżdżamy pętle for
//Tyle pętli ile wymiarów
for (int i = 0; i < 3; i++)
{
	for (int j = 0; j < 2; j++)
	{
		Console.WriteLine("tablica2D[{0},{1}] = {2}", i, j, tablica2D[i,j]);
	}
}
// wyniki to iteracje po i, j oraz wartości z tablicy w indeksie i,j
//tablica2D[0,0] = 1
//tablica2D[0,1] = 2
//tablica2D[1,0] = 3
//tablica2D[1,1] = 4
//itd.

//Nie trzeba pamiętać ile tablica ma wierszy
//Używamy GetLenght dla poszczególnych wymiarów tablicy
for (int i = 0; i < tablica3D.GetLength(0); i++)
{
	for (int j = 0; j < tablica3D.GetLength(1); j++)
	{
		for (int k = 0; k < tablica3D.GetLength(2); k++)
		{
			Console.WriteLine("tablica3D[{0}, {1}, {2}] = {3}", i, j, k, tablica3D[i, j, k]);
		}
	}
```

### Tablice postrzępione (jagged arrays)
```csharp
int[][] Tpostrzępiona = new int[][]
{
	new int[] {1, 2, 3},
	new int[] {4, 5, 6, 7},
	new int[] {8, 9, 10, 11, 12}
}
//Wynik to tablica trójwierszowa, w której komórkach są trzy różne tablice o różnych długościach
//Od C#12 można to zrobić tak (uwaga na nawiasy):
```csharp
int[][] Tpostrzępiona = new int[][]
{
	[1, 2, 3],
	[4, 5, 6, 7],
	[8, 9, 10, 11, 12]
}

//Wyprintujmy
//i dotyczy głównej tabeli (3 kolumny, 1 wiersz)
//j to indeksy tabel, zawartych w tabeli wyższego poziomu
for (int i = 0; i < Tpostrzępiona.Length; i++)
{
	Console.Write($"Wiersz [{i}]: ");
	for (int j = 0; j < Tpostrzępiona[i].Length; j++)
		{
			Console.Write($"{Tpostrzępiona[i][j]} ");
		}
}
//Wynik:
//Wiersz [0]: 1 2 3   
//Wiersz [1]: 4 5 6 7   
//Wiersz [2]: 8 9 10 11 12

//Odwoływanie do komórek postrzępionej tablicy
Tpostrzępiona[2][1] = 37;
```
### Tablice – właściwości
```csharp
//Length zwraca liczbę wszystkich elementów tablicy, ze wszystkich wymiarów
int[] tablica = {1, 2, 3, 4, 5};
Console.WriteLine(tablica.Length); //Zwróci 5

//Rank zwraca liczbę wymiarów tablicy
int[,] tablica2D = {{1,2}, {3,4}};
Console.WriteLine(tablica2D.Rank); //Zwróci 2
```

### Tablice – metody
```csharp
//GetLength(d) zwraca liczbę elementów w danym wymiarze (d - nr wymiaru)
int[,] tablica2D = {{1,2}, {3,4}, {5,6}};
Console.WriteLine(tablica2D.GetLength(0)); //: 3 (l. wiersz)
Console.WriteLine(tablica2D.GetLength(1)); //: 2 (l. kolumn)

//Zwraca indeks pierwszego elementu w danym wymiarze
Console.WriteLine(tablica2D.GetLowerBound(0)); //: 0 (indeks 1 wiersza)
Console.WriteLine(tablica2D.GetLowerBound(1)); //: 0 (indeks 1 kolumny)

//Indeks ostatniego elementu
Console.WriteLine(tablica2D.GetUpperBound(0)); //: 2 (indeks ostatniego wiersza)
Console.WriteLine(tablica2D.GetUpperBound(1)); //: 1 (indeks ostatniej kolumny)

//Kopiowanie zawartości jednej tablicy do drugiej
int[] tablica = {1, 2, 3};
int[] nowaTablica = new int[5];
// Kopiuje zawartość tablicy od nowaTablica zaczynając od indeksu 1
tablica.CopyTo(nowaTablica, 1); 
Console.WriteLine(string.Join(", ", nowaTablica)); 
//Wynik: 0, 1, 2, 3, 0 – bo 0 były domyślne. 

//Clone - metoda płytka. Kopiuje odniesienia do obiektów, a nie same obiekty.
int[] tablica = {1, 2, 3};
int[] sklonowanaTablica = (int[])tablica.Clone();
Console.WriteLine(string.Join(", ", sklonowanaTablica));//: 1, 2, 3

//Sortowanie w porządku rosnącym
int[] liczby = {4, 2, 5, 1, 3};
Array.Sort(liczby); 

//Odwracanie kolejności
int[] liczby = {1, 2, 3, 4, 5}
Array.Reverse(liczby);

//Zwraca pierwsze wystąpienie elementu. Jak nie ma, to zwraca "-1".
int[] liczby = {1, 2, 3, 4, 5}
Array.IndexOf(liczby, 3); //: 2 (nr indeksu)
```

## Metody

### Ogólna postać metody
```csharp
//Ogólna postać metody
modyfikator_dostępu typ_zwracany Nazwa_metody(argumenty)
{
	// ciało metody
	...
}

1//Modyfikatory dostępu:
	//static - pozwala korzystać z metody bez tworzenia instancji danej   klasy. Można łączyć z innymi np.:
		public static int Dodaj(int a, int b)
	//public - metoda dostępna z każdego miejsca w programie
	//private - metoda dostępna tylko w obrębie tej samej klasy. Opcja domyślna, można ją pomijać.

2//Typ zwracany:
//Dowolny typ – int, string, char, bool itd.
//void – metoda nie zwraca żadnej wartości. Służy głównie do wykonania akcji typu wyświetlenie danych, zapis do pliku, czy modyfikacja stanu obiektu.

3//Nazwa metody
//Według konwencji powinna być z wielkiej litery

4//Argumenty
//Rozdzielane przecinkami
//Mogą być pominięte, gdy metoda nie przyjmuje żadnych danych wejściowych. Wtedy nawias zostaje pusty.

5//Ciało metody
//Czyli instrukcje. Jeśli zwracamy wartość, używamy słowa kluczowego np:
return a + b;
```

### Wywołanie metody
```csharp
public static int Dodaj(int a, int b)
{
	return a + b;
}

int wynik = Dodaj(2, 3);
Console.WriteLine(wynik); //:5

//Kolejność i liczba argumentów jest istotna
public double Wymnoz(int a, double b)
{
	return a * b;
}

double wynik = Wymnoz(2, 3.4) // Zadziała.
double wynik = Wymnoz(3.4, 2) //Nie zadziała!
```

Można przekazać parametry do metody z zewnątrz. 3 sposoby:
1. Przekazywanie przez wartość
	- Ewentualne zmiany wprowadzone w parametrach wewnątrz metody nie mają wpływu na parametry na zewnątrz. Innymi słowy do funkcji jest przekazywana kopia zmiennej, a nie oryginalny obiekt.
	- Domyślny sposób.
2. Przez referencję – metoda wpływa na oryginalny obiekt, który został przekazany do niej.
3. Przez wartość, ale z użyciem słowa kluczowego `out` – zwracana jest wartość znajdująca się w ciele funkcji po słowie kluczowym `return`, a także każdy parametr poprzedzony słowem kluczowym `out`.

```csharp
//Przekazanie parametru przez referencję
int x = 5;
static void ZwiekszWartosc(ref int x) //Słowo kluczowe ref
{
	x = x + 1;
	Console.WriteLine("Zmienna poza metodą wynosi teraz" + x); //: 6
}
```

```csharp
//Przekazywanie parametru przez typ wartościowy z użyciem słowa out
static void GetMinMax(int[] tablica, int rozmiar, out int min, out int max)
{
	min = int.MaxValue; //Największy możliwy int, czyli 2^31
	max = int.MinValue; //Najmniejszy możliwy int, czyli -2^31
	
	for (int i = 0; i < rozmiar; i++) 
	{ 
		if (tablica[i] < min) //Nadpisuje mniejszą napotkaną wartość
			min = tablica[i]; //Po przejściu całej tablicy min będzie faktycznie minumalne 
		if (tablica[i] > max) //Nadpisuje większą napotkaną wartość
			max = tablica[i]; 
	}
}

//Wywołanie
public static void Main()
{
    int[] dane = { 10, 5, 20, 3, 15 };
    
    // Zmienne 'minimalna' i 'maksymalna' nie muszą być inicjalizowane przed wywołaniem.
    int minimalna; 
    int maksymalna; 
    
    GetMinMax(dane, dane.Length, out minimalna, out maksymalna);
    
    // Ostateczne wartości są dostępne po wykonaniu metody
    Console.WriteLine($"Min: {minimalna}, Max: {maksymalna}"); 
    // Wynik: Min: 3, Max: 20
}
```

### Przeciążanie metody

- Technika pozwalająca na definiowanie kilku metod o tej samej nazwie, ale z różnymi sygnaturami.
- W C Sharp metody mogą być przeciążone, gdy różnią się między sobą w co najmniej jednym z tych aspektów:
	- Liczba parametrów
	- Typ parametrów
	- Kolejność parametrów
- Ich różnica nie może polegać wyłącznie na innym typie zwracanym.
```csharp
//Przeciążenie typem parametru
public void Print(int number)
{
	Conole.WriteLine(number);
}
public void Print(double number)
{
	Conole.WriteLine(number);
}
public void Print(string text)
{
	Conole.WriteLine(text);
}
//Wywoływanie:
Print(42);
Print(3.14);
Print("Siema, Eniu!");

//Przeciażenie liczbą parametrów
public int Multiply(int a, int b)
{
	return a * b;
}
public int Multiply(int a, int b, int c)
{
	return a * b * c;
}
public int Multiply(int a, int b, int c, int d)
{
	return a * b * c * d;
}
//Wywoływanie:
Console.WriteLine(Multiply(2, 3));
Console.WriteLine(Multiply(2, 3, 4));
Console.WriteLine(Multiply(2, 3, 4, 5));
```

#### Przeciążanie z domyślnymi parametrami
```csharp
public static void PrintMessage(string wiadomosc, int ileRazy = 1)
{
	for (int i = 0; i < ileRazy; i++)
	{
		Console.WriteLine(wiadomosc);
	}
}

PrintMessage("Jeden raz"); //Przy niewpisaniu korzysta z domyślnego
PrintMessage("Trzy razy", 3); //Powtarza tyle razy, ile każe parametr
```

## Kolekcje

Kolekcje to struktury danych, które pozwalają na przechowywanie, przetwarzanie oraz manipulowanie zbiorami danych w sposób efektywny.

Najpopularniejsze są dostępne w System.Collection.Generic:
- List – przypomina dynamiczne tablice i może automatycznie zwiększać swoje rozmiary. Nie ma indeksów, wszystkie jej elementy są po prostu połączone liniowo.
- Dictionary<TKey,TValue>
- HashSet – przechowuje unikalne elementy i nie zachowuje porządku


```csharp
//Wymóg dla użycia kolekcji ogólnego przeznaczenia
using System.Collections.Generic;
```

### Lista

```csharp
//Deklaracja listy
List<typ> listName = new List<typ>();

//Dodanie elementu do listy
listName.Add(10);

//Czyszczenie listy
listName.Clear();

//Zwraca ostatni index
listName.LastIndexOf();

//Sprawdzanie czy lista instacji klasy zawiera taki znak, jak zmienna stringZeZnakami
public class WykrytyZnak
{
	public int Liczebnosc { get; set; }
    public string Znak { get; set; }
}
List<WykrytyZnak> listaZnakow = new List<WykrytyZnak>();
//f.Znak odnosi się do cechy obiektów klasy WykrytyZnak
listaZnakow.FindIndex(f => f.Znak == stringZeZnakami)
```

### Słownik
```csharp
Dictionary<int, string> studentDictionary = new //Deklaracja
//Inicjalizacja
Dictionary<int, string>
{
	{1, "Jan"},
	{2, "Adam"},
	{3, "Tomasz"}
};

//Pętla foreach po słowniku:
foreach (var student in studentDictionary)
{
	Console.WriteLine($"ID: {student.Key}, Name: {student.Value}");
}
```


## Testowanie
```csharp
//Postać ogólna
try
{
	//Kod, który może wyrzucić wyjątek
}
catch (ExceptionType exception)
{
	//Kod, który obsługuje wyjątek
}

//Przykład
try
{
	int licznik = 10;
	int mianownik = 0;
	int result = licznik / mianownik; //Dzielenie przez 0
}
catch (DivideByZeroException ex)
{
	Console.WriteLine($"Wystąpił wyjątek: {ex.Message}");
}
//: Wystąpił wyjątek: Attempted to divide by zero.
```

Po try może być kilka bloków catch. Ustawiamy je od najbardziej szczegółowych na początku do najogólniejszych.
### Popularne wyjątki
```csharp
System.Exception //Najogólniejszy typ wyjątku
DivideByZeroException
FileNotFoundException
ArgumentException //Nieprawidłowy argument
NullReferenceException //Gdy próbujemy uzyskać dostęp do obiektu, który jest null
IndexOutOfRangeException
```

### Try-catch-finally
```csharp
try
{
	//Kod, który może wyrzucić wyjątek
}
catch (ExceptionType exception)
{
	//Kod, który obsługuje wyjątek
}
finally
{
	//Kod, który zasze zostanie wykonany
}
```

## Klasy

```csharp
//Ogólna budowa klas
modyfikator_dostępu class nazwa klasy
{
	//pola klasy
	modyfikator_dostępu typ_danych zmienna1;
	modyfikator_dostępu typ_danych zmienna2;
	...
	modyfikator_dostępu typ_danych zmiennaN;
	
	//metody klasy
	modyfikator_dostępu zwracany_typ metoda1(lista_parametrów)
	{
		wnętrze_metody
	}
	...
	modyfikator_dostępu zwracany_typ metodaN(lista_parametrów)
	{
		wnętrze_metody
	}
}

//Przykład
using System;

namespace Klasy
{
    class Program
    {
        public static void Main(string[] args)
        {
            // Definicja obiektów typu Pudelko
            Pudelko pudelko1 = new Pudelko();
            Pudelko pudelko2 = new Pudelko();

            // Specyfikacja 1
            pudelko1.dlugosc = 5.5;
            pudelko1.wysokosc = 6.0;
            pudelko1.szerokosc = 3.0;

            // Specyfikacja 2
            pudelko2.dlugosc = 3.5;
            pudelko2.wysokosc = 2.0;
            pudelko2.szerokosc = 1.0;

            // Objętość 1
            double obj1 = pudelko1.ObliczObjetosc(pudelko1.dlugosc, pudelko1.szerokosc, pudelko1.wysokosc);
            Console.WriteLine("Objętość pudełka nr 1: {0}", obj1);

            // Objętość 2 (Obliczenie bez użycia powyższej metody)
            double obj2 = pudelko2.dlugosc * pudelko2.szerokosc * pudelko2.wysokosc;
            Console.WriteLine("Objętość pudełka nr 2: {0}", obj2);

            Console.ReadKey();
        }
    }
    class Pudelko
	{
	    // Pola publiczne (właściwości)
	    public double dlugosc;
	    public double szerokosc;
	    public double wysokosc;
    
	    // Metoda do obliczania objętości zdefiniowana jako składowa klasy
	    public double ObliczObjetosc(double dl, double szer, double wys)
	    {
	        return dl * szer * wys;
	    }
	}
}


// <T> to parametr typu. Pełni rolę placeholdera.
// T parametr przyjmie argument takiego typu, jakiego jest cała klasa.
public class GenericClass<T>
	public void AddNewElementToList(T parametr)
	{
	    Console.WriteLine("New List " + parametr.GetType() +
	    " created element with value: " + parametr + " added.");
	}
class Program
{
    // W metodzie Main klasy Program tworzymy dwa przykładowe obiekty. Pierwszy będzie typu znakowego CHAR, a drugi zmiennoprzecinkowy FLOAT

    static void Main(string[] args)
{
    GenericClass<char> newGenericClassObject01
                       = new GenericClass<char>();
    newGenericClassObject01.AddNewElementToList('P');
    GenericClass<float> newGenericClassObject02
                        = new GenericClass<float>();
    newGenericClassObject02.AddNewElementToList(25.0F);
    Console.ReadKey();
}
}

//Można powyższy trick ograniczyć do konkretnego typu danych za pomocą `where`
public class GenericClass<T> where T : Enum
{
// . . .
}
// Działa to dla elementów pochodnych do klas Object, Array, ValueType, oraz dla klas Enum, Delegate, MulticastDelegate

```