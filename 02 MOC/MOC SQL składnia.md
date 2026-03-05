---
created: 2026-01-24 12:23
tags:
  - moc
  - it/bazy_danych
  - język_programowania/sql
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Prawdopodobny 🧪
modified date: 2026-01-24 12:24
---
$\leftarrow$ [[SQL]]


## Bazy danych
```sql
--Tworzenie
CREATE DATABASE database_name;
CREATE DATABASE IF NOT EXISTS database_name;

--Przydatne do potwierdzenia, że db powstała.
SHOW DATABASES;

--Usuwanie
DROP DATABASE database_name; --Usuwanie
DROP DATABASE IF EXISTS database_name;

--Wybieranie
USE database_name;

--Zmiana nazwy
ALTER DATABASE [current_database_name]  
MODIFY NAME = [new_database_name];

--Zmiana nazwy PostgreSQL
ALTER DATABASE current_database_name RENAME TO new_database_name;

--Przenoszenie tabel do nowej db
RENAME TABLE old_database_name.table1 TO new_database_name.table1;  
RENAME TABLE old_database_name.table2 TO new_database_name.table2;
```

### Edycja bazy przy wielu użytkownikach
```sql
-- 1. Przełączenie w tryb jednego użytkownika i odcięcie połączeń
ALTER DATABASE [StaraNazwa] 
SET SINGLE_USER WITH ROLLBACK IMMEDIATE;

-- 2. Zmiana nazwy
ALTER DATABASE [StaraNazwa] 
MODIFY NAME = [NowaNazwa];

-- 3. Przywrócenie trybu wielu użytkowników
ALTER DATABASE [NowaNazwa] 
SET MULTI_USER;
```

## Tabela

### Tworzenie tabeli
```sql
-- Tworzy tabelę o nazwie.
--Każda linijka to kolejna kolumna.
--PRIMARY KEY może być w dowolnej kolumnie.
--PRIMARY KEY może być po nazwie kolumny tj. przed rodzajem zmiennej.
--NOT NULL = nie może być bez wartości
--UNIQUE = każda wartość musi być unikalna. Może być NULL
--PRIMARY KEY = UNIQUE and NOT NULL
--DEFAULT ustawia domyślną wartość w przypadku niewpisania jej.
--AUTO_INCREMENT będzie automatycznie numerować kolejne rzędy od 1.
CREATE TABLE nazwa (
nazwa_kolumny INT PRIMARY KEY AUTO_INCREMENT,--MySQL, Maria DB, zaczyna od 1
nazwa_kolumny INT IDENTITY(1,1) PRIMARY KEY, --T-SQL. Będzie automatycznie rosnąć o 1, zaczynając od 1. Dla tego konkretnego ustawienia można cały ten nawias można pominąć.
nazwa_b VARCHAR(20) NOT NULL,
nazwa_c VARCHAR(20) UNIQUE,
nazwa_d VARCHAR(20) DEFAULT 'coś tam' --Można też dla innych typów danych.
nazwa_e INT DEFAULT 5;
nazwa_f VARCHAR(20),
FOREIGN KEY (nazwa_f) REFERENCES nazwa_innej_tabeli(nazwa_kolumny) ON DELETE SET NULL --Robi FK z kolumny. Jeśli w oryginalnym miejscu FL zostanie usunięty, to tu się pojawi null.
--Na podobnej zasadzie (tj. na końcu komendy, odnosząc się do wcześniej zdefiniowanej kolumny) można zapisywać Primary Key
); 

--Tworzy tabelę jeśli jeszcze takiej nie ma
CREATE TABLE IF NOT EXISTS nazwa (...);

--Pokazuje nazwy kolumn, rodzaje przechowywanych zmiennych, i PRIMARY KEY.
DESCRIBE nazwa_tabeli;
```
#### Constraints
Nazywanie reguł pozwala łatwiej zarządzać nimi.
```sql
order_id INT CONSTRAINT PK_order PRIMARY KEY;
-- CONSTRAINT tworzy regułę (pk, uq itp.) i ją nazywa. Działa z regułami: UNIQUE, CHECK, DEFAULT, NOT NULL, FOREIGN KEY.

--Sprawdzenie istniejących reguł
EXEC sp_helpconstraint 'NazwaTabeli';

--Usunięcie reguły. 
ALTER TABLE NazwaTabeli DROP CONSTRAINT PK_order;

--Dodawnie nowej reguły
ALTER TABLE NazwaTabeli ADD CONSTRAINT PK_order PRIMARY KEY (id);
```
Przykładowo użyłem int dla PK. Baza rozrosła się szybciej, niż się spodziewano i chcę zmienić PK na bigint. Nie mogę po prostu zmienić typu kolumny, która jest częścią PK. Najpierw musze usunąć constraint.

### Edycja i usuwanie tabeli oraz kolumn
```sql
--Dodaje kolumnę. Trzy cyfry, z czego dwie po przecinku.
ALTER TABLE nazwa_tabeli ADD nazwa_kolumny DECIMAL(3, 2);

--Usuwa kolumnę
ALTER TABLE nazwa_tabeli DROP COLUMN nazwa_k;

--Usuwa tabelę.
DROP TABLE nazwa; 
```

## Wprowadzanie danych

```sql
INSERT INTO nazwa_tabeli VALUES(1, 'tekst', 'tekstt' );
--Dodaje rząd danych. W nawiasie dane pasujące do poszczególnych kolumn, oddzielone przecinkami. 
--Liczba danych musi się zgadzać z całkowitą liczbą kolumn.

INSERT INTO nazwa_tabeli(kolumnna_a, kolumna_b) VALUES(1, 'tekst');
--Dodaje rząd danych, ale tylko do wybranych kolumn.
--Pominięte kolumny uzyskają wartość NULL.

UPDATE nazwa_tabeli
SET nazwa_kolumny = 'dupa'
WHERE nazwa_kolumny = 'cyce';
--Zaktualizuj tabelę: jeśli w kolumnie nazwa_kolumny wartość to 'cyce', ustaw wartość 'dupa'.
```

## Wybieranie danych

```sql
--Wybierz kolumny. Po ostatniej kolumnie nie może być przecinka!
SELECT kolumna, druga_kolumna 
FROM tabela; 

-- Wybierz wszystko.
SELECT * 
FROM tabela; 

-- Można dać prefiks w postaci nazwy tabeli przed kolumną dla przejrzystości, gdy pracuje się z wieloma tabelami.
SELECT tabela.kolumna
FROM tabela;

-- Wyświetla kolumnę, pod roboczą nazwą, ale nie zmienia jej nazwy w bazie danych.
SELECT prawdziwa_nazwa AS robocza
FROM tabela;

--Pokazuje wszystkie unikalne wartości z kolumny.
SELECT DISTINCT kolumna
FROM tabela;

-- Grupuje według kolumny1 i pokazuje liczbę unikalnych wartości w kolumnie2
SELECT kolumna1, COUNT(DISTINCT kolumna2)
FROM tabela
GROUP BY kolumna1;
```

#### Limitowanie i pomijanie
```sql
---Dla MySQL
SELECT * FROM T LIMIT 10; --Pierwsze 10
SELECT * FROM T LIMIT 10 OFFSET 5; --Pomiń 5, pokaż 10 pierwszych.
SELECT * FROM T LIMIT 5, 10; --Jw.


---Dla T-SQL
SELECT TOP 10 * FROM T ORDER BY Id; --Pierwsze 10
SELECT * FROM T ORDER BY Id OFFSET 5 ROWS;--Pomiń 5, weź resztę
SELECT * FROM T ORDER BY Id OFFSET 5 ROWS FETCH NEXT 10 ROWS ONLY;--Pomiń 5, weź kolejne 10
SELECT TOP 60 PERCENT kolumna FROM tabela ORDER BY kolumna; --Procent określony.
-- TOP musi być z ORDER BY inaczej pokaże przypadkowe wiersze.
SELECT TOP 3 WITH TIES * FROM Zawodnicy ORDER BY Wynik DESC; --W przypadku remisu na końcowym miejscu pokaże 4 pozycje, zamiast ucinać do trzech.
```

### Sortowanie
```sql
SELECT nazwa_kolumny1, nazwa_kolumny2
FROM nazwa_tabeli
ORDER BY nazwa_kolumny2 DESC;
-- ORDER BY sortuje ze względu na wartość wybranej kolumny 
-- ORDER BY domyślnie sortuje wzrastająco/alfabetycznie
-- Dodanie DESC sortuje malejąco. Tylko kolumnę po której stoi bezpośrednio!

--Zamiast nazwy kolumny można po prostu dać jej numer pozycji.
SELECT Imie, Nazwisko FROM Pracownicy ORDER BY 2;

-- Sortuje najpierw według jednego kryterium, a potem w ramach poszczególnych "grup" według drugiego. Np. najpierw według kierunku studiów, a potem według ID.
-- Do poszczególnej kolumny można dodać DESC lub ASC.
ORDER BY nazwa_b, nazwa c;
```

Kolejność w jakiej silnik SQL przetwarza dane.
1. **`FROM`** (+ `JOIN`) – Skąd bierzemy dane?
2. **`WHERE`** – Filtrowanie surowych wierszy.
3. **`GROUP BY`** – Grupowanie (agregacja).
4. **`HAVING`** – Filtrowanie grup (np. `COUNT(*) > 1`).
5. **`SELECT`** – Wybór kolumn i aliasy.
6. **`ORDER BY`** – Sortowanie końcowe.

> [!IMPORTANT] Aliasy zdefiniowane w `SELECT` nie są widoczne w `WHERE`, bo `WHERE` wykonuje się wcześniej.

## Złączenia (joins)

### Filtrowanie danych
```SQL
-- Bardziej intuicyjnie by było WHERE ('wartość w kolumnie') IN nazwa_kolumny, ale jest jak jest.
--Zamiast wartości w kolumnie, możemy szukać wartości w jakimś nested query.
-- Where służy do filtrowania wartości w pojedynczych rzędach. Do filtrowania zagregrowanych wartości służy HAVING.
-- Where używamy przed grupowaniem.
WHERE nazwa_kolumny IN ('wartosc w kolumnie', 'kolejna','itd')

<> -- Nie równa się
>= --Większe lub równe
<= -- Mniejsze lub równe
OR -- Lub. Zazwyczaj w parze z WHERE
NOT -- Nie. Zazwyczaj w parze z WHERE
BETWEEN x AND y -- Pomiędzy. x i y włącznie.

TOP 60 PERCENT kolumna FROM tabela
TOP 10 kolumna FROM tabela -- Ograniczenie liczby wyników


-- LIKE '%ośtam - szuka fragmentu tekstu w cudzysłowie w komórkach tabeli.
-- % zastępuje dowolną liczbę znaków
SELECT *
FROM tabela
WHERE kolumna LIKE '%ośtam';

-- Podłoga _ zastępuje jeden znak. Powyżej przykład szukania dat marcowych.
LIKE '____-03%'

--Negacja LIKE
NOT LIKE
```

### Funkcje agregacji

Jeśli wybieramy więcej, niż jedną kolumnę podczas stosowania funkcji agregracjji, obowiązkowe jest zastosowanie GROUP BY.

| **Przykład**                                                    | **Czy zadziała?** | **Dlaczego?**                                                                                                    |
| --------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| `SELECT AVG(Cena) FROM Produkty;`                               | **TAK**           | Chcesz jedną liczbę dla całej tabeli. To jest jasne dla bazy.                                                    |
| `SELECT Kategoria, AVG(Cena) FROM Produkty;`                    | **NIE**           | Baza nie wie, czy wypisać wszystkie kategorie (np. 100 wierszy), czy jedną średnią (1 wiersz).                   |
| `SELECT Kategoria, AVG(Cena) FROM Produkty GROUP BY Kategoria;` | **TAK**           | Baza wie, że ma stworzyć po jednym wierszu dla każdej kategorii i obok dopisać średnią dla tej konkretnej grupy. |

```sql
--Pokazuje liczbę wartości w danej kolumnie. Null się nie liczy.
SELECT COUNT(kolumna)
FROM tabela;

-- Liczy wartości w danej kolumnie oraz wyświetla wartości z tej kolumny, w efekcie pokazuje sumy unikalnych wartości.
--Inaczej: grupuje i liczy unikalne wyniki.
SELECT COUNT(kolumna), kolumna
FROM tabela
GROUP BY kolumna;

--Sumuje wartości z jednej kolumny i pokazuje sumy dla poszczególnych powtarzających się wpisów z drugiej kolumny.
--Np. wyniki sprzedażowe pracownika z kilku sprzedaży.
SELECT SUM(kolumna_a), kolumna_b
FROM tabela
GROUP BY kolumna_b;

-- Średnia arytmetyczna wartości z kolumny.
SELECT AVG(kolumna) 
FROM tabela;

--Zwraca wartość min.
MIN(kolumna) 
--Zwraca max.
MAX(kolumna) 

WHERE Price BETWEEN 10 AND 20;
--Wartość pomiędzy.

SELECT COUNT(kolumna1), kolumna2
FROM tabela  
GROUP BY kolumna2 
HAVING COUNT(kolumna1) > 5;
-- HAVING COUNT liczy liczbę wartości z kolumna1 w grupach kolumna2.

SELECT country 
FROM instagram_data 
GROUP BY country 
HAVING AVG(followers) > 100;
-- Przykład filtrowania po zagregowanej wartości AVG(followers)
-- HAVING zawsze po grupowaniu!
```

### Matematyka


```SQL
+ -- dodawanie 
a - b -- odejmowanie. 
-b -- liczba ujemna
* -- mnożenie

/ -- dzielenie. Zwraca tylko całości (int), chyba że dzielę decimala albo przez decimala.
CAST(10 AS DECIMAL(10,1))/4 --MySQL
CAST(CAST(10 AS DECIMAL(10,1))/4 AS DECIMAL(10,2)) --T-SQL. bez końcówki byłoby dużo miejsc po przecinku.
--Wynik to 2,5.
--Pierwsza liczba po decimalu (10) określa ile cyfr jest dopuszczalnych, druga ile cyfr po przecinku. Domyślnie jest 18 cyfr po przecinku.
10::DECIMAL/4 -- Jest to taki CAST, ale dla PostgresSQL, DuckDB, Snowflake, Redshift
10::FLOAT/4 -- Float da jedno miejsce po przecinku i jest szybciej liczony, ale może zaokrąglać. Decimal jest precyzyjniejszy. 

^ -- potęgowanie w PostgreSQL
POWER(liczba, wykładnik potęgi) --Potęgowanie w T-SQL, MySQL i także w PosgreSQL.

(part / total) * 100 -- Procenty

SELECT 23 % 6 --Dzielenie modulo. Zwraca reszty (5)
MOD(liczba, dzielnik) --To samo. Nie działa w T-SQL.

-- Nieparzyste
WHERE liczba % 2 = 1

-- Przykładowe polecenie z liczeniem
SELECT card_name, MAX(issued_amount) - MIN(issued_amount) AS difference
FROM monthly_cards_issued
GROUP BY card_name
ORDER BY difference DESC;

-- Wartości absolutne ignorują znak. Przydatne jak np. chcemy uchwycić 10% zmianę, niezaleznie czy w górę czy w dół.
SELECT date, nazwa, (close-open) AS difference, ABS(close-open) AS abs_difference

-- Zaokrągalanie do 2 miejsca po przecinku.
ROUND(AVG(kolumna), 2)
-- Zaokrąglanie do góry w PostgreSQL, MySQL
CEIL(kolumna)
--Zaokrągalnie do góry w T-SQL
CEILING(kolumna)
-- Zaokrąglanie do dołu.
FLOOR(kolumna)

```

### Łączenie kolumn

#### UNION
- Łączy wybrane kolumny z dwóch różnych tabel i wyrzuca jako jedną kolumnę (drugą dopisuje na dole pierwszej). 
- Liczba użytych kolumn z tabel musi się pokrywać. 
- Wartości muszą być tym samym typem danych. 
- Tytuł bierze z pierwszej kolumny.
- Można dodawać niżej kolejne UNION i dołączać kolumny z kolejnych tabel.
- UNION pomija duplikaty.
```sql
SELECT pracownicy
FROM dział1
UNION
SELECT pracownicy
FROM dział2;
```

#### JOIN (INNER JOIN)
- Zwraca część wspólną ([[Iloczyn zbiorów]]). Wyklucza rekordy bez dopasowania.
- Zazwyczaj łączona kolumna z pierwszej tabeli to PK, a z drugiej to FK.
```sql
SELECT 
	s.Imie, 
	s.Nazwisko,
	k.Nr_Karty
FROM Studenci AS s 
INNER JOIN KartyBiblioteczne AS k 
	ON s.ID = k.ID_Studenta;

--Przykład z trzema połączonymi kolumnami
SELECT 
	s.Imie, 
	s.Nazwisko,
	k.Nr_Karty
FROM Studenci AS s 
INNER JOIN KartyBiblioteczne AS k 
	ON s.ID = k.ID_Studenta; 
INNER JOIN Wypozyczenia AS w 
	ON k.Nr_Karty = w.Nr_Karty_Bibliotecznej;
```

#### LEFT JOIN
- Pokazuje wszystkie wyniki dla pierwszej tabeli, a w tych wierszach, gdzie ma pokrycia w drugiej i kolejnych tabelach, wstawi null. 
- Kolumna po której łączymy nie musi być SELECT!
- Inaczej LEFT OUTER JOIN.
```sql
SELECT 
	s.Imie, 
	s.Nazwisko, 
	k.Nr_Karty
FROM Studenci AS s 
LEFT JOIN KartyBiblioteczne AS k 
	ON s.ID = k.ID_Studenta;

--Różnica zbiorów. Pokazujemy te wiersze z lewej, które nie znalazły dopasowania z prawej.
SELECT 
	s.Nazwisko 
FROM Studenci AS s 
LEFT JOIN KartyBiblioteczne AS k 
	ON s.ID = k.ID_Studenta 
WHERE k.ID_Studenta IS NULL;

--Różnicę zbiorów można też pokazać za pomocą EXCEPT.
-- Zwraca unikalne wiersze, które są w pierwszym zapytaniu, a których nie ma w drugim. Liczba kolumn i typ danych muszą się zgadzać.
--Do porównywania bardzo podobnych tabel. Np. poniższe pokaże pracowników, którzy nie pracują już w firmie w 2025.
SELECT kolumna1, kolumna2
FROM pracownicy2024
EXCEPT 
SELECT kolumna1, kolumna2
FROM pracownicy2025;
```

#### FULL OUTER JOIN
- Da wszystko z obu kolumn, niezależnie od pokrycia.
	- Jeśli wiersze mają odpowiedniki, to są scalane. Jak wiersz z lewej nie ma odpowiednika, to z prawej jest null (i odwrotnie.)
	- Jest to suma zbiorów.
	- $A \text{ FULL JOIN } B = (A \cap B) \cup (A \setminus B) \cup (B \setminus A)$
- Nie ma takiego polecenia w MySQL. Trzeba użyć UNION+LEFT+RIGHT
- Łączone kolumny nie muszą się tak samo nazywać, nie muszą mieć też takiego samego przeznaczenia, ale typ danych musi się zgadzać.
```sql
--Syma zbiorów
SELECT 
	p.Nazwa_Produktu, 
	s.Data_Transakcji 
FROM Produkty AS p 
FULL OUTER JOIN Sprzedaz AS s 
	ON p.ID = s.ID_Produktu;

--Różnica symetryczna. Możemy ustalić co nie ma pary dla obu stron.
SELECT * FROM 
Tabela1 AS a 
FULL JOIN Tabela2 AS b 
	ON a.id = b.id 
WHERE a.id IS NULL OR b.id IS NULL;
```

#### SELF JOIN

##### SELF JOIN with INNER JOIN

```sql
--"Klucz obcy" to w tym przypadku ten sam primary key.
SELECT a.kolumna1, b.kolumna2 
FROM tabela1 a 
INNER JOIN tabela1 b 
ON a.klucz_obcy = b.klucz_glowny;

--Przykład
SELECT 
	pracownik.nazwisko AS Podwladny, 
	menedzer.nazwisko AS Przelozony 
FROM Pracownicy pracownik 
INNER JOIN Pracownicy menedzer 
ON pracownik.id_menedzera = menedzer.id_pracownika;
```

##### SELF JOIN with LEFT JOIN

1. Początkowa tabela

| id_pracownika (PK) | nazwisko | id_menedzera (FK) |
| ------------------ | -------- | ----------------- |
| 1                  | Kowalski | NULL              |
| 2                  | Nowak    | 1                 |

2. Kod

```sql
SELECT 
	pracownik.id_pracownika, 
	pracownik.nazwisko AS Podwladny, 
	pracownik.id_menedzera,
	przelozony.nazwisko AS Przelozony 
FROM pracownicy pracownik 
LEFT JOIN pracownicy przelozony
	ON pracownik.id_menedzera = przelozony.id_pracownika; 
```
Do id_menedzera dopasuje id_pracownika będącego menedżerem. Dlatego kolejna kolumna z nazwiskiem idzie za id menadżera i da:

3. Wyjście

| id_pracownika | Podwladny  | id_menedzera | Przelozony |
| ------------- | ---------- | ------------ | ---------- |
| 1             | Kowalski   | NULL         | NULL       |
| 2             | Nowak      | 1            | Kowalski   |
| 3             | Wisniewski | 1            | Kowalski   |

## Funkcje okna, RANK

  - Funkcja okna: OVER otwiera funkcję, PARTITION BY ustala sposób podziału na okna.
```SQL
SELECT 
	spend, 
	SUM(spend) OVER ( 
	PARTITION BY product 
	ORDER BY transaction_date) AS running_total 
FROM product_spend;

-- Używa się z funkcjami agregacji oraz z
FIRST_VALUE(kolumna) OVER (PARTITION BY kolumna1 ORDER BY kolumna2)
LAST_VALUE(product) OVER (PARTITION BY kolumna1 ORDER BY kolumna2)

 -- Numeracja wierszy
ROW_NUMBER() OVER (PARTITION BY kolumna1 ORDER BY kolumna2)

--Nadanie rangi wierszom według wartości z pominięciem po remisie - po dwóch 4 będzie 6.
RANK() OVER (PARTITION BY kolumna1 ORDER BY kolumna2)

--Nadanie rangi wierszom według wartości bez pomijania - po dwóch 4 będzie 5.
DENSE_RANK() OVER (PARTITION BY kolumna1 ORDER BY kolumna2)
```

### Przykłady
```sql
SELECT 
	Produkt, 
	Kategoria, 
	Cena, 
	FIRST_VALUE(Produkt) OVER ( 
		PARTITION BY Kategoria 
		ORDER BY Cena ASC 
	) AS NajtanszyWKategorii, 
	LAST_VALUE(Produkt) OVER ( 
		PARTITION BY Kategoria 
		ORDER BY Cena ASC 
		ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING 
	) AS NajdrozszyWKategorii 
FROM Sprzedaz;
```

| **Produkt** | **Kategoria** | **Cena** | **NajtanszyWKategorii** | **NajdrozszyWKategorii** |
| ----------- | ------------- | -------- | ----------------------- | ------------------------ |
| Myszka      | IT            | 50       | Myszka                  | Laptop                   |
| Monitor     | IT            | 800      | Myszka                  | Laptop                   |
| Laptop      | IT            | 3000     | Myszka                  | Laptop                   |
| Chleb       | Food          | 5        | Chleb                   | Stek                     |
| Stek        | Food          | 60       | Chleb                   | Stek                     |

## Nested queries vs Common Table Expression

### Nested queries
- Najpierw wykona zagnieżdżoną instrukcję, a potem w oparciu o jej wynik wykona instrukcję wyższego poziomu.
```sql
--Przykładowe zapytanie, które najpierw wybiera pracowników z jednej tabeli na podstawie kryterium sprzedażowego, a następnie wybór ten stanowi kryterium wyboru z tabeli zewnętrznej, której PK jest FK tabeli środokowej.
SELECT employee.firstname, employee.lastname
FROM employee
WHERE employee.emp_id IN(
	SELECT works_with.emp_id
	FROM works_with
	WHERE works_with.total_sales > 30000
);

--Akurat to samu lepiej byłoby zapiać joinem z przyczyn wydajnościowych
SELECT DISTINCT 
	e.firstname, 
	e.lastname 
FROM employee AS e 
INNER JOIN works_with AS w 
	ON e.emp_id = w.emp_id 
WHERE w.total_sales > 30000;
```

```sql



WITH  
  cteReports (EmpID, FirstName, LastName, MgrID, EmpLevel) 
  AS  --Definiuję kolumny CTE. Ostatniej nie było w tabeli, więc ją tworzy roboczo. To definiowanie jest opcjonalne. Można od razu przejść do AS.
  (  
    SELECT EmployeeID, FirstName, LastName, ManagerID, 1 
    -- Wybieram prawdziwe kolumny z tabeli. W miejscu gdzie jest ta nowo utworzona, wybrałem konkretną wartość (1)
    FROM Employees  
    WHERE ManagerID IS NULL  --W ćwiczebnej tabeli tylko jeden rekord ma null w tej kolumnie. Jest to więc wybór tzw. anchor member, na którym będzie oparta funkcja rekurencyjna.
    UNION ALL  --Łączę powyższy wynik z nastepującymi
    SELECT e.EmployeeID, e.FirstName, e.LastName, e.ManagerID,   
      r.EmpLevel + 1
      -- W miejscu utworzonej roboczo kolumny definiujemy kolejne wartości.
    FROM Employees e
    INNER JOIN cteReports r  
	    ON e.ManagerID = r.EmpID  
  )  
SELECT FirstName + ' ' + LastName AS FullName, EmpLevel,  
  (SELECT FirstName + ' ' + LastName FROM Employees   
    WHERE EmployeeID = cteReports.MgrID) AS Manager  
FROM cteReports   
ORDER BY EmpLevel, MgrID

WITH concerts_CTE AS ( -- Bez definiowania kolumn przed AS.
    SELECT
      artist_name,
      concert_revenue,
      genre, 
      number_of_members, 
      concert_revenue / number_of_members AS revenue_per_member --W tym przykładzie to nowa kolumna
    FROM concerts),
max_revenue_per_genre AS ( -- Można zadeklarować więcej CTE
  SELECT
    genre,
    MAX(revenue_per_member) AS max_rpm -- Używam koumny z pierwszego CTE
  FROM concerts_CTE
  GROUP BY genre
)
SELECT c.*
FROM concerts_CTE AS c
JOIN max_revenue_per_genre m -- Łączę dwa CTE
  ON c.genre = m.genre AND c.revenue_per_member = m.max_rpm
ORDER BY c.revenue_per_member DESC, artist_name ASC;

WITH ranked_concerts_cte AS ( 
	SELECT 
		artist_name, 
		concert_revenue, 
		genre, 
		number_of_members, 
		(concert_revenue / number_of_members) AS revenue_per_member, 
		RANK() OVER ( 
			PARTITION BY genre ORDER BY (concert_revenue / number_of_members)
			DESC) AS ranked_concerts 
	FROM concerts) 

SELECT * 
FROM ranked_concerts_cte;
```
## Brakujące wartości

```sql
-- Jeśli coś odnosi się do wpisu, który został usunięty, wstawia NULL.
ON DELETE SET NULL

-- Jeśli coś odnosi się do wpisu, który został usunięty, samo zostanie usunięte.
ON DELETE CASCADE

-- Wyrzuca pierwszą NOT NULL wartość z tej listy. Więc jeśli w kolumnie będzie NULL, to wyrzuci 'podstawione vwyrażenie'.
COALESCE(column_name, kolumna_b, 'podstawione wyrażenie')

-- Bardzo podobnie do COALESCE ale rozważa tylko dwie wartości. Działa w mniejszej liczbie systemów.
IFNULL(kolumna, 'coś')
```

## CASE
- Najczęściej używamy do tworzenia nowych kolumn, obliczeń i kategoryzacji danych.
- CASE otwiera, END zamyka.
```SQL
-- Przykład
SELECT 
	column_1, 
	column_2, 
	CASE 
		WHEN condition_1 THEN result_1 
		WHEN condition_2 THEN result_2 
		ELSE result_3
	END AS column_3_name
FROM table_1;

-- Użycie CASE na istniejących kolumnach, bez tworzenia nowej
SELECT 
	column_1, 
	column_2 
FROM table_1 
WHERE CASE 
	WHEN condition_1 THEN result_1 
	WHEN condition_2 THEN result_2 
	ELSE result_3
END;

--Simple CASE z nazwą kolumny
SELECT 
	GradeId, 
	StudentId, 
	CourseId,
	case Grade --GRADE tutaj to nazwa kolumny wybranej z tabeli
		WHEN 5 THEN 'A'
		WHEN 4 THEN 'B'
		WHEN 3 THEN 'C'
		WHEN 2 THEN 'D'
		WHEN 1 THEN 'E'
		WHEN 0 THEN 'F'
		ELSE '-'
	END AS Ocena --Alias
FROM GRADE --Nazwa tabeli (zawierającej kolumnę o tej samej nazwie)
```

## Triggery

- Wyzwalacze (triggers) to specjalne przechowywane procedury, które uruchamiają się automatycznie po wystąpieniu określonego zdarzenia w bazie danych. 
- Istnieją trzy rodzaje wyzwalaczy:
	- DML (Data Manipulation Language): uruchamiają się przy modyfikacjach danych (INSERT, UPDATE, DELETE).
	- DDL (Data Definition Language): uruchamiają się przy zdarzeniach zmieniających strukturę bazy danych (CREATE, ALTER, DROP).
		- Wyzwalacze DML są częścią transakcji, co zapewnia ich wycofanie w przypadku błędów, chroniąc spójność danych.
	- Logon triggers: uruchamiają się przy zdarzeniu LOGON podczas ustanawiania sesji użytkownika. 
- Wyzwalacze mogą być tworzone za pomocą Transact-SQL lub CLR (Microsoft.NET Framework). 
- Można tworzyć wiele wyzwalaczy dla jednej instrukcji.
- W wyzwalaczach ważną rolę odgrywają te dwie tymczasowe tabele:

|**Tabela**|**Funkcja**|**Stan danych**|
|---|---|---|
|**deleted**|Przechowuje kopie wierszy, które zostały usunięte (`DELETE`) lub zmienione (`UPDATE`), zanim doszło do modyfikacji danych.|Przed operacją|
|**inserted**|Przechowuje kopie nowych wierszy wstawionych (`INSERT`) lub zmienionych (`UPDATE`) po wykonaniu operacji.|Po wprowadzeniu zmian|
Sekwencja operacji dla instrukcji `UPDATE`:
	1. Oryginalny wiersz kopiowany jest z tabeli wyzwalacza do tabeli `deleted`.
	2. Tabela wyzwalacza aktualizowana jest o nowe wartości.
	3. Zaktualizowany wiersz kopiowany jest do tabeli `inserted`.

```sql
DELIMETER $$ 
--Zmienia separator na wybrany znak. Tylko w konsoli.
--Potrzebne przy definiowaniu triggera, żeby nie kończyło aktualnej instrukcji w trakcie definicji.

CREATE TABLE tabela2 (
	kolumna VARCHAR(20)
);

DELIMETER $$
CREATE
	TRIGGER nazwa_triggera BEFORE INSERT
	ON tabela1
	FOR EACH ROW BEGIN
		INSERT INTO tabela2 VALUES('Dodano nowego pracownika');
	END$$
DELIMETER $$
--Przed każdym dodaniem czegoś do tabela1, triggeruje akcję w tabela2, w postaci wprowadzenia wartości.

DELIMETER $$
CREATE
	TRIGGER nazwa_triggera2 BEFORE INSERT
	ON tabela1
	FOR EACH ROW BEGIN
		INSERT INTO tabela2 VALUES(NEW.nazwa_kolumny);
	END$$
DELIMETER $$
--Jw., ale teraz dodaje wartość z nazwa_kolumny.
--NEW to komenda, która odnosi się do ostatniego wpisu.

DELIMETER $$
CREATE
	TRIGGER nazwa_triggera2 BEFORE INSERT
	ON tabela1
	FOR EACH ROW BEGIN
		IF NEW.sex = 'M' THEN
			INSERT INTO tabela2 VALUES('Dodano chłopa');
		ELSEIF NEW.sex = 'F' THEN
			INSERT INTO tabela2 VALUES('Dodano babe')
		ELSE
			INSERT INTO tabela2 VALUES('Dodano aktywiszcze')
	END$$
DELIMETER $$
--Warunki if-else. Wiadomo ocb.

BEFORE UPDATE
BEFORE DELETE
AFTER INSERT/UPDATE/DELETE
-- Inne opcje.
```

## Czas

```SQL
CURRENT_DATE AS current_date, -- Wyrzuca aktualną datę
CURRENT_TIME AS current_time, -- Wyrzuca aktualną godzinę
CURRENT_TIMESTAMP AS current_timestamp -- Wyrzuca aktualną datę i godzinę

SELECT * 
FROM tabela
WHERE sent_date > '2022-08-10 00:00:00';
-- Przykład filtrowania po dacie

WHERE EXTRACT(YEAR FROM kolumna) = 2022
-- Ekstrakt pozwala wyciągnąć informację z kolumnyz danymi typu DATE, DATETIME, TIMESTAMP lub INTERVAL:
	-- MONTH – miesiąc,
	-- DAY – dzień miesiąca,
	-- DOW – dzień tygodnia (np. 0 = niedziela, 1 = poniedziałek),
	-- HOUR – godzina,
	-- MINUTE – minuta,
	-- SECOND – sekunda,
	-- MILLISECOND, MICROSECOND – milisekundę lub mikrosekundę (w niektórych systemach),
	-- TIMEZONE_HOUR, TIMEZONE_MINUTE – godziny i minuty strefy czasowej,
	-- DECADE – dekadę.

DATE_TRUNC('month', kolumna_z_datą) AS truncated_to_month,
--08/14/2022 zaokrągli do 08/01/2022 00:00:00

DATE_TRUNC('day', sent_date) AS truncated_to_day, 
--08/14/2022 zaokrągli do 08/14/2022 00:00:00

DATE_TRUNC('hour', sent_date) AS truncated_to_hour
--08/14/2022 16:43:00 zaokrągli do 08/14/2022 16:00:00

sent_date + INTERVAL '2 days' AS add_2days,
-- Hours and minutes też działa.

TO_CHAR(kolumna_z_datą, 'format')
'YYYY-MM-DD HH24:MI:SS' --'2023-08-27 14:30:00'
'YYYY-MM-DD HH:MI:SS AM' --'2023-08-27 02:30:00 PM'
'Month DDth, YYYY'` --'August 27th, 2023'
'Mon DD, YYYY'` --'Aug 27, 2023'
'DD Month YYYY'` --'27 August 2023'
'Month'` --'August'
'Day'` --'Saturday'

kolumna_z_datą::DATE AS casted_date 
--Zmienia stringa w datę z 00:00:00
TO_DATE('2023-08-27', 'YYYY-MM-DD') AS converted_to_date 
--Zmienia podanego stringa w datę
kolumna_z_datą::TIMESTAMP AS casted_timestamp,
--Zmienia stringa w datę z dokładną godziną, jeśli była
TO_TIMESTAMP('2023-08-27 10:30:00', 'YYYY-MM-DD HH:MI:SS') AS converted_to_timestamp
--Analogicznie

--SQL SERVER
CONVERT(VARCHAR(8), birthdate, 112)
```

## Zmienne

### Zmienne lokalne @
```SQL
--Deklaracja zmiennej
DECLARE @nazwa_zmiennej typ_danych;
--Deklaracja kilku zmiennych na raz
DECLARE @zmienna1 typ_danych, @zmienna2 typ_danych, ...;

--Po co tego użuwać?
DECLARE @threshold INT;
IF (SELECT COUNT(*) FROM CUSTOMER) > 1000
    SET @threshold = 50; -- Jeśli klientów jest dużo, szukaj tylko top 50
ELSE
    SET @threshold = 100;

-- Późniejsze zapytanie używa @threshold
SELECT TOP (@threshold) * FROM CUSTOMER ORDER BY LastOrderDate DESC;

--By przypisać wartości do zmiennej, należy użyć instrukcji SET lub SELECT.
--SET
declare @moja int
set @moja=4
print @moja
--SELECT
declare @mylastname varchar(50)
select @mylastname=LastName from CUSTOMER where CustomerId=2
print @mylastname
```

### Wbudowane zmienne globalne
```SQL
@@ERROR --numer ostatniego błędu
@@FETCH_STATUS --czy kursor pobrał wiersz (0 gdy pobrał)

@@IDENTITY 
--Po zakończeniu instrukcji INSERT, SELECT INTO lub instrukcji kopiowania zbiorczego @@IDENTITY zawiera ostatnią wartość

@@ROWCOUNT --zwraca liczbę wierszy, na których operowała ostatnia instrukcja
@@VERSION --zwraca informację o serwerze SQL
```

## Pętle

```SQL
--Pętla if
DECLARE @customerNumber INT;
SELECT @customerNumber=CustomerNumber FROM KLIENT WHERE Id=2
IF @customerNumber > 1000
PRINT 'większy od 1000'
ELSE
PRINT 'Mniejszy1000'

--Pętla if z więcej, niż 1 instrukcja
IF (Warunek1)
BEGIN
    SELECT 'Początek bloku 1';
    IF (Warunek2)
    BEGIN
        UPDATE KLIENT SET Status = 'SuperPremium';
        SELECT 'To tylko jeśli W1 i W2 są prawdziwe';
    END
END
SELECT 'Ta instrukcja wykona się zawsze'

--Pętla while
--To akurat strasznie głupi przykład aktualizujący 20 razy jednego klienta
WHILE (SELECT AreaCode FROM KLIENT WHERE Id=1) < 20 BEGIN
UPDATE KLIENT SET AreaCode = AreaCode + 1
END --BEGIN i END opcjonalne, bo tu była tylko 1 instrukcja
SELECT * FROM KLIENT
```

## Cursor
- To taka pętla foreach. Można procesować po rekordach po kolei, zamiast na wszystkich na raz.
```SQL
--- Przykład ---
DECLARE @CustomerId int, @phone varchar(50) --Deklaracja zmiennych

DECLARE db_cursor CURSOR
FOR SELECT CustomerId FROM CUSTOMER --Deklaracja kursora z zapytaniem, które tworzy zbiór wynikowy, zawierający wszystkie CustomerId z tabeli `CUSTOMER`.

OPEN db_cursor --Otwarcie kursosa i załadowanie zbioru wynikowego do pamięci

FETCH NEXT FROM db_cursor INTO @CustomerId --Przenosi kursor do pierwszego wiersza zbioru wynikowego i przypisuje wartość kolumny `CustomerId` do zmiennej lokalnej `@CustomerId`.

WHILE @@FETCH_STATUS = 0 BEGIN --Pętla wykonywana dopóki warunek spełniony
--@@FETCH_STATUS to funkcja systemowa T-SQL, która zwraca status ostatniej instrukcji `FETCH`. 0 oznacza, że ostatnie pobranie powiodło się.
-- -1 nie powiodło się lub wiersz poza zakresem
-- -2 brak wiersza (np. usunięty)
ELECT @phone=Phone FROM CUSTOMER WHERE CustomerId=@CustomerId
IF LEN(@phone) < 8
UPDATE CUSTOMER SET Phone='Phone number is not valid' WHERE
CustomerId=@CustomerId
FETCH NEXT FROM db_cursor INTO @CustomerId
END

CLOSE db_cursor --Zamyka kursor
DEALLOCATE db_cursor --Usuwa definicję kursora z pamięci, uwalniając powiązane zasoby systemowe. OBOWIĄZKOWE!
-------------------------------------------------

---Powyższy przykład jest absurdalny, bo należałoby to wykonać tak:
UPDATE CUSTOMER 
SET Phone = 'Phone number is not valid' 
WHERE LEN(Phone) < 8;
```

Tworzenie i używanie KURSORA obejmuje następujące kroki:
1. Zadeklaruj zmienne SQL, aby zawierały dane zwrócone przez kursor. Zadeklaruj jedną zmienną dla każdej kolumny zestawu wyników.
2. Powiąż kursor SQL z instrukcją SELECT za pomocą instrukcji DECLARE CURSOR. Instrukcja DECLARE CURSOR definiuje również cechy kursora, takie jak nazwa kursora i czy kursor jest tylko do odczytu.
3. Użyj instrukcji OPEN, aby wykonać instrukcję SELECT i wypełnić kursor.
4. Użyj instrukcji FETCH INTO, aby pobrać poszczególne wiersze i przenieść dane dla każdej kolumny do określonej zmiennej. Inne instrukcje SQL mogą następnie odwoływać się do tych zmiennych, aby uzyskać dostęp do pobranych wartości danych.
5. Po zakończeniu korzystania z kursora użyj instrukcji CLOSE. Zamknięcie kursora uwalnia niektóre zasoby, takie jak zestaw wyników kursora i jego blokady w bieżącym wierszu. Instrukcja DEALLOCATE całkowicie zwalnia wszystkie zasoby przydzielone kursorowi, w tym nazwę kursora.

## Widoki (views)

- Widok zapisuje zapytanie w słowniku danych. 
- Nazwy widoku można używać w zapytaniach jako nazwy tabeli.
- Widoki są dynamicznie aktualizowane.
- Można ich używać do zarządzania dostępem do danych.
```sql
CREATE VIEW SchoolView AS --tworzy wirtualną, tymczasową tabelę
SELECT
SCHOOL.SchoolName,
CLASS.ClassName
FROM
SCHOOL
INNER JOIN CLASS ON SCHOOL.SchoolId = CLASS.SchoolId
```

## Procedury

```sql
--Ogólna postać
CREATE procedure [dbo].[name] --Tworzenie nowego obiektu procedury
@ variable1 typ, @ variable2 typ,... --Parametry wejściowe
@ variable1_out typ output, variable2_out typ output, ... --Parametry wyjściowe
AS
BEGIN --Początek instrukcji procedury
SET NOCOUNT ON --Wyłączenie komunikatu o liczbie przetworzonych wierszy
DECLARE @ variablex1 typ_ variablex1, @ variablex2 typ_ variablex2, ......
procedure code
SET NOCOUNT OFF --W sumie chyba opcjonalne, bo i tak się wyłączy.
END

--Wywołanie procedur
EXEC name_procedure arg1_in, arg2_in,....., @ variable1 output, @ variable2
output, .......
-- Funkcja się nazywa EXECUTE, ale EXEC to akceptowalny skrót.
--@ variable1 output, @ variable2 output to zmienne, które odbierają wartości zwrócone przez odpowiednie parametry wyjściowe procedury.
```

### Przykład procedury
```SQL
-- Mamy tabelę `Produkty` i chcemy stworzyć procedurę, która na podstawie ID produktu (wejście) zwróci jego aktualną cenę (wyjście) i zwiększy zapas.
CREATE PROCEDURE [dbo].[PobierzCeneZwiekszZapas]
    -- PARAMETR WEJŚCIOWY: ID produktu, dla którego chcemy działać
    @ProduktID INT, 
    
    -- PARAMETR WYJŚCIOWY: Zwraca cenę produktu do wywołującego skryptu
    @Cena DECIMAL(10, 2) OUTPUT 
AS
BEGIN
    -- 1. Deklaracja zmiennej LOKALNEJ (używana tylko wewnątrz tej procedury)
    DECLARE @AktualnyZapas INT;

    -- 2. Pobranie aktualnej ceny i zapasu (do zmiennych)
    SELECT 
        @Cena = CenaJednostkowa,
        @AktualnyZapas = IloscZapasowa
    FROM 
        Produkty
    WHERE 
        ID = @ProduktID;

    -- Zwiększamy zapas o 1
    UPDATE 
        Produkty
    SET 
        IloscZapasowa = IloscZapasowa + 1
    WHERE 
        ID = @ProduktID;

    -- 3. Opcjonalny komunikat (tylko wewnątrz procedury)
    PRINT 'Zapas produktu ' + CAST(@ProduktID AS VARCHAR) + ' został zwiększony do ' + CAST(@AktualnyZapas + 1 AS VARCHAR);

    -- UWAGA: Procedura nie musi zawierać instrukcji RETURN z wartością,
    -- bo wartość wyjściowa jest zwracana przez @Cena OUTPUT.
END
GO -- Instrukcja Go oznacza koniec partii kodu T-SQL

--Wywołanie procedury
-- Krok 1: Deklaracja zmiennej w skrypcie wywołującym, która odbierze wynik
DECLARE @ZwroconaCena DECIMAL(10, 2); 
DECLARE @IdDoPobrania INT = 101;

-- Krok 2: Wywołanie procedury
EXEC [dbo].[PobierzCeneZwiekszZapas]
    @ProduktID = @IdDoPobrania,
    @Cena = @ZwroconaCena OUTPUT; -- KLUCZOWE: Użycie słowa OUTPUT

-- Krok 3: Użycie zwróconej wartości w dalszym kodzie
SELECT 'Procedura zakończona. Otrzymana Cena: ' AS Komunikat, @ZwroconaCena AS Cena;

-- Sprawdzenie, co stało się w tabeli:
SELECT * FROM Produkty WHERE ID = @IdDoPobrania;
```

## Funkcje skalarne

```SQL
--Funkcje skalarne
CREATE FUNCTION [dbo].[name]
(
--Dodaj parametry funkcji
@parm1 int, @parm2 int, .......
)
RETURNS returned_typ
AS
BEGIN
-- Deklaracja zmiennej wyjściowej
DECLARE @ variable1 typ_ variable1, .......;
RETURN result;
END

--Wywołanie funkcji
SELECT dbo.name_function(arg1,arg2,.....)
```
