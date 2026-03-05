
#### Zmienne

```python
# style pisania zmiennych
camelCase = 'Pawulon'
PascalCase = 'Pawulon'
snake_case = 'Pawulon' # Nazwy metod i zmiennych
kebab-case = 'Pawulon'
UPPER = 'Pawulon'  # Nazwy stałych
# tych nazw nie wolno używać, bo są zarezerwowane dla Pythona
keyword.kwlist

```
#### Wiersze i spacje

```python
print("\tWstawia tabulator")
print("\t\t\tWincyj")
#        Wstawia tabulator
#                        Wincyj
print('Linijka\nniżej')
#Linijka
#niżej
print("""Drugi
sposób""")
print('It\'s way do wepchnięcia apostrofu w pojedynczy cudzysłów')

# %%
# W ten sposób byłby poszatkowany tekst przez znaki specjalne:
print('C:Path\to\something\new')
# Znaki specjalne znakami specjalnymi zwalczaj: zrób podwójny backslash
print('C:Path\\to\\something\\new')
# Ewentualnie r od raw text
print(r'C:Path\to\something\new')

# Dobrą praktyką jest nie wychodzić za linię po prawej. Max 79 znaków.
# Rozwiązanie: Python nie czyta spacji między cudzysłowami.
url = ('https://www.udemy.com/course/programowanie-w-'
'jezyku-python/learn/lecture/15714542#overview')

print('Cześć, ', end='')
print('świecie!')
# Wydrukuje "Cześć, świecie!".
# Domyslnie na końcu wydruku jest \n, czyli znak nowej linii.
# end=" " ustala co ma być końcu wydruku zamiast tego.
```
#### Różne

```python
# get current working directory get cwd
# Pokazuje gdzie się mieści plik, na którym pracujesz.
import.os
os.getcwd()

# Lista operacji do wykonania na stringach
print(dir(str))
# Lista operacji do wykonania na integerach
print(dir(a))
# Lista operacji do wykonania na floatach
print(dir(b))

# Informuje jakiego typu jest zmienna
type(a)
# Informuje co robi dana funkcja
help(str.count)

# Przekierowanie wydryku do innego miejsca, zamiast na konsole.
with open('plik.txt', 'w') as f:
    print('Cześć, świecie!', file=f)

imie = input('tekst zachęcający do inputu: ')

# Czy cos jes reprezentantem jakiejs klasy lub tuplą
isinstance(1, int)
```
#### Działania matematyczne

```python
2 ** 5  # Potęgowanie
pow(2, 5)  # Też potęgowanie.
10 / 3  # Dzielenie do float > 3,33
10 // 3  # Dzielenie do intów, resztę pomija > 3
10 % 3  # Dzielenie modulo, które podaje tylko resztę > 1
round(4.24324324)  # Zaokrąglanie do jednosci > 4
round(4.24324324, 2)  # Zaokrąglanie do n miejsc do przecinku > 4.24

saldo = 40
saldo += 30  # to samo co: saldo = saldo + 30
print(saldo)  # druknie 70
saldo -= 20  # analogicznie (druknie 50)
saldo /= 2  # Analogicznie
saldo **= 3  # Analogicznie
saldo %= 10  # analogicznie
```
Dzielenie modulo przez 2 dobre do sprawdzania parzystości.
#### Formatowanie liczb

```python
number = 3.1415926
# Liczba sformatowana do float z dwoma liczbami po przecinku.
print("{:.2f}" .format(number))
# Liczba sformatowana do float z dwoma liczbami po przecinku ze znakiem. Zawsze piszesz plus, ale jak liczba jest ujemna, to wyprintuje minusa. 
print("{:+.2f}" .format(number))
# Liczba sformatowana do float, ale bez liczb bo przecinku i przecinka..
print("{:+.0f}" .format(number))

# %%
number = 1234567
# Zmień angielskie przecinki na normalne. 
print("{:,}" .format(number))
print("{:,f}" .format(number))  # Tak samo ale jeszcze sfloatuj
print("{:.2%}" .format(number))  # Razy 100% (przesuwa przecinek o dwa miejsca) i 2 miejsca po przecinku.
b = 0.25
print("{:.2%}" .format(b))  # To samo, ale lepiej widać.

# %%
# 10 długości, wyrównane do prawej.
print("{:10d}" .format(number))
# 10 długosci, wyrównane do lewej.
print("{:<10d}" .format(number))
# 10 długosci, scentrowane.
print("{:^10d}" .format(number))
# 10 długosci, dodane 0 z lewej.
print("{:0>10d}" .format(number))
# 10 długosci, dodane iksy z prawej.
print("{:x<10d}" .format(number))
```
#### Stringi
```python
text = "dupa"
print(text * 3) #dupadupadupa
print('-' * 20)  # spoko do oddzielania

text = "Jan"
print(text + ' Paweł')
print(text, 'Paweł')  # to samo, co wyżej. Z automatu wstawia spację.
print(imie, age, sep='|')  # Ustaw rodzaj separatora. Domyślnie spacja.

# %%
age = 28
imie = 'Adrian'
# Nie można dodawać str z int.
print(imie + ' ' + str(age)) #Dlatego zmieniamy int na str.
print(imie, age)  # To samo, co wyżej. Python automatycznie zmienia int w str. 
print('{} ma {} lat.' .format(imie, age))
# Indeksy się teraz odnoszą do pozycji. Czyli output będzie: 28 ma Adrian lat.
print('{1} ma {0} lat.' .format(imie, age))
# Można też po prostu dać f na początku a zmienne wpisać:
print(f'{imie} ma {age} lat.')

# Tylko pierwszą literę robi dużą, resztę małe
text.capitalize()
# Wszystkie pierwsze litery słów zrobi duże.
text.title()
# Robi wszystko małymi
text.lower()

# Połącz stringi. W cudzyłowie na początku jest to, co pomiędzy nimi
" ".join(["Python", "3.7"])
# Zastąp
'column name'.replace(" ", "_")
# Wycinanie wszystkich spacji wokół tekstu
'    pytong   '.strip()
# Wycinanie spacji po lewej
'    pytong   '.lstrip()
# Wycinanie spacji po prawej
'    pytong   '.rstrip()
# Dzielenie do listy (pusty nawias dzieli na podstawie spacji)
"#gym#fit#wielkichłop#prowit".split("#")
'To jest lista słów'.split()
# Dodaje zera z przodu, by była liczba w ilus znakach
"12".zfill(3)

# Wykonanie obliczeń w stringu
eval('2 * 3 + 5')

#Dodaje stringi w jeden string
haslo = ["a", "b", "c"]
final = ""
for i in haslo:
  final += i
```

#### Indeksy i przeszukiwanie stringów


```python
name = "Python Programming"
# Drukujemy 5 nr indeksu (liczy się od 0)
print(name[5])
# Drukujemy 1 znak od końca (nie liczy się od 0)
print(name[-1])
# Drukujemy od do (prawej strony nie drukuje)
print(name[2:4])
# Drukujemy do
print(name[:3])
# Drukujemy co drugą wartoć
print(name[::2])
# Sprawdzenie czy cos występuje w czyms. Wielkosc znakow ma znaczenie
'P' in name

text = 'Witaj na kursie Python, Python jest w pytę.'
# Ile razy dany ciąg liter występuje w tekcie
text.count("Python")
# wyrzuca T/F, jesli tekst sie (nie)zaczyna w podany sposób
text.startswith("Wi")
# Analogicznie z ends. Można też inny obiekt przed komendą.
"Python".endswith("du")
# Zwraca nr indeksu od którego dany ciąg liter się zaczyna
text.find("Python")
# Sprawdza czy tekst składa się ze znaków alfanumerycznych
"ardek123".isalpha()
# Sprawdza czy wszystkie znaki są cyframi
"997".isdigit()
# Czy wszystko jest małymi literami
text.islower()
# Czy wszystko dużymi
text.isupper()
```

#### Sets (zbiory)
```python
empty_set = set()
empty_dictionary = {}
techs = {'java', 'python', 'c++', 'sql'} #Nie ma par key-value, więc mimo klamerek jest to zbiór.
len(techs) #"długosc" zbioru, czyli liczba elementów.

# Rozbija obiekt na elementy i traktuje je jako elementy zbioru.
# Jesli cos sie powtarza, to pokazuje to tylko raz.
print(set('python'))

# Sprawdza czy cos jest w zbiorze
print('ruby' in techs) #False/True. Pamiętaj, że nie trzeba printować.
# Dodajemy cos do zbioru
techs.add('sas')
# Usuwamy cos ze zbioru
techs.remove('sas')
# Pokaze cos losowego ze zbioru i to z niego usuwa
techs.pop('java')
# Czysci zbior ze wszelkich elementów
techs.clear()

# %%
A = {1, 2, 3, 4, 5, 6, 7}
B = {5, 6, 7, 8, 9}
C = {5, 6}

# Sprawdzamy czy zbiór jest podzbiorem innego zbioru
C.issubset(A)
# Sprawdzamy czy jest nadzbiorem
A.issuperset(C)
# Suma zbiorów
A.union(B)
# Iloczyn zbiorów (przecięcie)
A.intersection(B)
# Różnica symetryczna (elementy niewspólne dla powiązanych zbiorow)
A.symmetric_difference(B)
```

#### Tuple/krotki
ang. tuple, pol. krotka, uporządkowany ciąg danych różnego typu
```python
# Dzięki tuplom można zdefiniować kilka rzeczy w jednej linijce
imię, nazwisko = ('Adrian', 'Lazarski') #Można bez nawiasów
# Rozpakowywanie tupli do stringów
amazon = ('Amazon', 'Usa', 'Technology', 1)
brand_name, country, sector, rank = amazon
# Zagnieżdżone tuple
nested = 'Europa', 'Polska', ('Warszawa', 'Kraków', 'Wrocław')
Kontynent, Kraj, Miasto = nested
print(Miasto) #O: ('Warszawa', 'Kraków', 'Wrocław')

# Z tuplami łatwiej pozamieniać wartosci
x, y = 10, 15
x, y = y, x
```

#### Listy

```python
# Listy mogą miec różne typy zmiennych
lista = ['python', 3.7, 4, True]
#Można je też zagnieżdżać wielokrotnie.
lista = ['python', 3.7, [1, 2, 4], True]

# Można co dodać do listy
lista += ['dupsko']
# Kolejne dodanie do listy
lista.append('costam')
# Można też dodać zagnieżdżoną listę
lista.append(['ein', 'zwei'])
# Z extend b nie będzie zagnieżdżenia, tylko jeden poziom
lista.extend(['drei', 'polizei'])
# Dodanie czegos na konkretnym miejscu indeksu
lista.insert(2, "hitler")
# Sprawdzanie jakie cos ma nr indeksu
lista.index('polizei')

# Wyrzuca cos do konsoli i usuwa to z listy. Można też podać nr indeksu
lista.pop()
lista.pop(2)
# Usunięcie z listy
lista.remove('ein')

# Sortowanie alfabetyczne
lista.sort()
# Też sortowanie
sorted(lista)
# Sortowanie alfabetyczbe od końca
lista.sort(reverse=true)
# Odwracanie listy względem nr indeksu
lista.reverse()
#Odwrócenie listy
reversed([5, 3, 7])
# Podmiana jakiegos elementu listy
lista[1] = 'dwa'

# Filtrowanie przechodzi przez każdy element listy i zostawia tylko te, dla których funkcja bool zwraca True. Produktem jest jest specjalny filter object, więc trzeba jeszcze go potraktować funkcją list, by był przydatny.
wynik = list(filter(bool, ['python', '', 'java']))
print(wynik) # O: ['python', 'java']

# Zmapowanie na każdy element funkcji zrobienia pierwszej litery wielką.
# Plus wyswietlenie jako lista.
names = ['pawel', 'janek', 'tomek']
list(map(str.title, names))
# Lepszy przykład mapowania
values = ['5', '2', '8', '1', '9', '3']
print(list(map(int, values)))
```

#### Słownik
Po lewej klucz, po prawej wartość.
```python
# Klucze są unikalne w obrębie jednego słownika
pol_to_eng = {'jeden': 'one', 'dwa': 'two', 'trzy': 'three'}
# Ile jest elementów w słowniku (par)
len(pol_to_eng)
# Dodawanie elementów do słownika/również nadpisywanie.
pol_to_eng['cztery'] = 'four'
#Robienie słownika ze zmiennych
name = input("What is your name?: ")  
bid = int(input("What is your bid?: "))  
bids[name] = bid
# Usuwanie
del pol_to_eng['dwa']
# Czysci słownik do zera
pol_to_eng.clear()
# Kopiowanie słownika
pol_to_eng_copied = pol_to_eng.copy()
# Pokaż liste kluczy ze słownika
pol_to_eng.keys()
# Pokaż liste wartosci ze słownika
pol_to_eng.values()
# Pokaż elementy słownika w formie listy tupli
pol_to_eng.items()
#Niezbędne dla iteracji po k,v zamiast tylko po k:
{k, v for k, v in pol_to_eng.items()}

# Pokazanie pojedynczej wartości ze słownika
pol_to_eng['jeden']
# Tak samo, ale z ustawieniem tekstu, gdy czegos nie ma w słowniku
pol_to_eng.get('zero', 'dupa')
# Wyrzuca i kasuje cos konkretnego ze słownika
pol_to_eng.pop('dwa') #Tu nie można indeksem, tylko kluczem.
# Usuwa i zwraca ostatnią dodaną parę k-v
pol_to_eng.popitem()
# Podmiana w obrębie słownika, ale też dodawanie, nawet innych słowników
pol_to_eng.update({'jeden': 1}) #Podmiana
d1 = {'a': 1, 'b': 2} 
d2 = {'b': 3, 'c': 4} 
d1.update(d2) # d1 teraz: {'a': 1, 'b': 3, 'c': 4}
d3 = d1 | d2 # Łączenie słowników: {'a': 1, 'b': 3, 'c': 4}
d3 = {**d1, **d2} #Tworzy nowy słownik. Jeśli klucze się powtarzają, bierze wartości z ostatniego.
for k, v in d2.items(): #Nadpisuje d1. d2 bez zmian
	d1[k] = v

winner = max(bids, key=bids.get) # klucz z maksymalną wartością

#Dictionary comprehension
sentence = "What is the Airspeed Velocity of an Unladen Swallow?"
lista_słów = sentence.split()
długości = [(len(słowo)) for słowo in lista_słów]
result = {key: value for key,value in zip(lista_słów,długości)}
# W jednej linijce:
result = {word: len(word) for word in sentence.split()}
```

#### Instrukcja warunkowa if-elif-else
```python
number = 12
# Sprawdzanie czy równe
number == 10
# Sprawdzanie czy różne
number != 12
# %%
# Instrukcje warunkowe
if number == 10:
    print('dupa')
elif number < 10:
    print('siurak')
else:
    print('cyce')
# Można też w jednym wierszu
print('dupa') if number == 10 else print('cyce')
```

#### Pętla for
```python
# W pętlach "i" oznacza iterator
for i in 'python':
# Iterujemy po literach (w tym przypadku efekt ten sam, co powyżej)
for character in "python":
# Zwiększanie jakiejs wartości w trakcie wykonywania
index = 0
for character in "python":
    print(index, character)
    index = index + 1
# Określanie liczby powtórzeń (od indeksu 0, czyli tu do 9)
for index in range(10):
# Określanie od którego indeksu zaczynamy, na którym kończymy
for index in range(10, 20):
# Określanie od którego indeksu zaczynamy, na którym kończymy i co ile skok
for index in range(10, 20, 2):
# Odliczanie w dół
for index in range(100, 0, -1):
# Wyliczenie wartości i podanie nru indeksu (i)
for i, value in enumerate([4, 5, 6, 8, 6]):
    print(i, value)
# Mozna spakować dwa stringi w tuple podczas iteracji
for char in zip('abcde', 'python'):
    print(char)
```

#### Otwieranie i zapisywanie plików
```python
open('plik.txt', 'r')  # Otwórz do odczytu
open('plik.txt', 'a')  # Otwórz do dopisania, tworzy jesli nie istnieje
open('plik.txt', 'w')  # Otwórz do zapisu, tworzy jesli nie istnieje
# Drukowanie czegos z pliku. Na koncu pusty string by nie był /n
for line in file:
    print(line, end='')
file.close()

# Otwiera plik i przyporządkowuje go do zmiennej (?)
with open('plik.txt', 'r') as file:
    line = file.readline()
    print(line)  # Wyprintuje pierwszą linię z pliku
# %%
with open('plik.txt', 'r') as file:
    lines = file.readlines()
    print(lines)  # Wyprintuje wszystkie linie z pliku
# %% Przykładowe zapisanie elementow słownika w pliku
with open('products.txt', 'w') as file:
    for product in products:
        file.write(f"{product['name']},{product['price']}\n")


from art import logo #importuje konkretną zmienną z sąsiednego pliku z tego folderu. Nie wpisuję formatu pliku.
print(logo)
```

#### Funkcje
```python
# Definiowanie funkcji
def funkcja_1(x, y):
    print('Podane argumenty to: x={} y={}'.format(x, y))
funkcja_1(3, 7)  # Jakby argumenty były okreslone wczesniej, to nie trzeba tu

# Inny przykład
def add(x, y):
    return x + y
add(2 + 6)

# Tak wygląda dokumentowanie kodu
def add(x: int, y: int):
    """
    Dodaje do siebie dwie liczby
    """
    return x + y
add(2, 6)
help(add)  # Wyswietla ten komentarz spomiędzy potrójnych cudzysłowów

# Definiowanie funkcji w jednej linii
funkcyja = lambda x: x**2 + 3
# Defniowanie w jednej linii większej liczby argumentow
f_4 = lambda slowo1, slowo2: slowo1 + ' ' + slowo2
#Mapowanie funkcji na liste
map(lambda word: word.upper(), lista)
#Okreslenie klucza sortowania
def sort_by_length(slowa):
    return sorted(slowa, key=lambda x: len(x))

# %%
#Funkcja *args - dowolna liczba argumentów
def funkcja1(x, y, *args):
    print('x=', x)
    print('y=', y)
    print('*args=', args)
funkcja1(1, 2, 3, 4, 5) #Wyurzuci osobno x i y, a potem zrobi tuple z reszty

# %%
#Key word args do nazywania argumentów
def funkcja2(**kwargs):
    for kwarg in kwargs:
        print(kwarg)
funkcja2(**{'a' : 1, 'b' : 2}) #Wyrzuci klucze ze słownika

# %% Miniprojekt dziennika logów
import datetim
def log(message, dt=datetime.datetime.utcnow):
    print(dt(), message)
 
def logi(*args):
    for command in args:
        log(command)
 
logi('Uruchomienie systemu', 'Logowanie', 'Restart', 'Wylogowanie')

# %%
x = 5 #Global
def fun1():
    x = 4
    print(x) #Globalny x to nadal 5. 
# %%
x = 5
def fun1():
    global x #Zmieni x globalnie
    x = 4
    print(x)
# %%
level = 0 #Global
def fun1():
    level = 1
    print('Poziom 1', level) #Local
    def fun2():
        nonlocal level #Zmieni x też w rodzicu zagnieżdżenia, ale nie globalnie
        level = 2
        print('Poziom 2', level)
    fun2()
    print('Poziom 1', level) #Zmienione przez nonlocal
fun1()
print('Poziom 0 global', level)

# %%
files = ['script_1.py', 'script_2.py', 'text.txt']
def gen_files(lista):
    for item in lista:
        if item.endswith('.py'):
            yield item#"Pauzuje funkcję zamiast wyrzucać całą na raz
gen = gen_files(files)
next(gen) #Każde odpalenie wyrzuca jeden obiekt

# %% List comprehension
result = []
for i in range(100):
    if i % 5 == 0:
        result.append(i**2)
#To samo, co wyżej, ale w jednej linijce
result_2 = [i**2 for i in range(100) if i % 5 == 0]

# %% Dict comprehension
#Przykładowa operacja na kluczach
{key.lower() :value for (key, value) in slownik.items() }
#Można też key zapisac jako k, a value jako v, mniej miesca zajmie
#Filtrowanie danych
stock_a = {k:v for (k, v) in stocks.items() \
           if v.startswith('A') if len(v) < 13}
#Przekształcanie wybranych kluczy, w przykładzie na typy spółek
{key: 'Corp' if "Corp" in val else "Inc" for (key,val) in stocks.items()}
# %% Przykładowy set comprehension
{word for word in words if len(word) > 4}
{word.capitalize() if word.startswith('pyt') else word for word in words}

# %% Moduły
import rocket_science #Importuje wszystkie funkcje
rocket_science.calculate_mean([3, 4])
#Import konkretnej funkcji
from rocket_science import calculate_mean
calculate_mean([2, 5]) #Nie trzeba pisać nazwy na początku
```

#### Klasy
```python
class Drzewo: #Klasa
    
    nazwa = 'Sosna'
    wiek = 40
    wysokosc = 25


drzewo1 = Drzewo() #Obiekt/instancja klasy
drzewo2 = Drzewo()

drzewo1.nazwa #Wyswietla zmienną. Domyslnie ta dla calej klasy.
drzewo2.stan = "Dobry" #Dodaje zmienną do obiektu.
Drzewo.miejsce = "Las" #Dodaje zmienną do calej klasy i istniejacych obiektow

# %%
class Drzewo:
    
    def wyswietl_info_o_drzewie(self):
        self.nazwa = 'Sosna'
        self.wiek = 30
        print(f'Drzewo {self.nazwa} ma {self.wiek} lat.')
        
        
drzewo = Drzewo()

wyswietl_info_o_drzewie() #To samo V
Drzewo.wyswietl_info_o_drzewie(drzewo) #To samo ^

# %%
class Drzewo:
    
    lista_drzew = []
    
    def __init__(self, nazwa, wiek, wysokosc): #to sie nazywa konstruktor
        self.nazwa = nazwa
        self.wiek = wiek
        self.wysokosc = wysokosc
        self.lista_drzew.append(self)
        
    def czy_chronione(self):
        if self.wiek >= 20 and self.wysokosc >= 20:
            print(f'Drzewo o nazwie {self.nazwa} jest chronione')
        else:
	        print(f'Drzewo o nazwie {self.nazwa} nie jest objęte ochroną')
    def liczba_drzew():
	    print('Liczba drzew', len(Drzewo.lista_drzew))

drzewo_1 = Drzewo('Sosna', 25, 30)
drzewo_2 = Drzewo('Brzoza', 20, 15)

Drzewo.liczba_drzew()

    @staticmethod #dzieki temu bez self i metode do całej klasy odnosi np. @staticmethod 
    #def kwalifikuje_sie_do_ochrony(wiek, wysokosc): 
    #    return wiek >= 20 and wysokosc >= 20


# %% Dziedziczenie klas
class Człowiek:
    
    def __init__(self, imie, nazwisko):
        self.imie = imie
        self.nazwisko = nazwisko

    def info(self):
        print(f'{self.imie} {self.nazwisko}')


class Piłkarz(Człowiek):
    
    def __init__(self, imie, nazwisko, klub):
        super().__init__(imie, nazwisko) #Pobiera z wyższej klasy
        self.klub = klub
    
    def info(self):
        super().info() #Wie, że musi najpierw wykonać funkcje w wyższej klasie
        print(f'{self.klub}')


# public zmienna
# protected _zmienna nie ruszamy poza klasą i klasą pochodną
# private __zmienna nie ruszamy



# %%
dimensions = '10x5x2'
# Enter your solution here
l = int(dimensions[0:2])
w = int(dimensions[3])
h = int(dimensions[5])

print('lenght =', l)
print('width =', w)
print('height =', h)
```


## Testowanie
```python
try:
    4 + '4'
except TypeError:
    print('Nie można dodawać tekstu do liczby')

raise TypeError('Błąd') #Podniesienie błędu samemu (?)

try:
    1 / 0
except ZeroDivisionError:
    print('Nie dzieli się przez zero')

# %%
def test_sum():
    assert sum ([1, 2, 3]) == 7, 'Powinno być 6'
#Testowanie dokumentacji
if __name__ == '__main__':
    import doctest
    doctest.testmod() #Wykona test docstringów, czyli zawartości potrójnych cudzysłowów zaraz po def funkcji. Fragmenty zaczynające się od >>> symulują kod i normalnie je wykona i porówna w wynikiem pod tą linijką np. sprawdzi czy 2+3 to 5.

def dodaj(a, b): 
	""" 
	Funkcja dodaje dwie liczby.
	
	>>> dodaj(2, 3) 
	5 
	>>> dodaj(-1, 1) 
	0 
	""" 
	return a + b

```



#it #python #język_programowania