---
created: 2025-11-23 14:10
tags:
dojrzalosc:
status_epistemiczny:
modified date: 2026-01-20 13:38
---
![[image-1.webp]]![[załączniki/image.webp]]

- Modelowanie danych to proces odkrywania jednostek (bytów), ich atrybutów oraz relacji pomiędzy nimi. 
- Słuchając mowy biznesowej, warto zwrócić uwagę na:
	- rzeczowniki - mogą to być byty lub atrybuty
	- przymiotniki i wyrażenia przyimkowe - atrybuty
	- czasowniki - relacje między bytami
- Należy prosić o dane wejściowe z wielu źródeł, bo model zbudowany na bazie wiedzy jednego eksperta najprawdopodobniej będzie niedokładny. Nikt nie rozumie wszystkich potrzeb organizacji w zakresie danych.

### Trzy rodzaje modeli w modelowaniu danych

#### Konceptualny model danych

1. Pomija niekrytyczne szczegóły techniczne i skupia się na najważniejszych najważniejszych jednostkach, atrybutach i relacjach. Jeśli coś komplikuje diagram, to na tym etapie można to pominąć.
2. Mogą występować tu relacje "wiele do wielu", ale w modelu logicznym wymagać to będzie przekształcenia.

#### Logiczny model danych

1. Każda jednostka jest w pełni znormalizowana
2. Każdy atrybut ma przypisany typ danych lub dziedzinę
3. Określone są klucze kandydujące dla identyfikacji jednostek.
4. Jednostki z wieloma kluczami kandydującymi mają wybrany jeden klucz podstawowy.
5. Każda jednostka, która jest w relacji z inną jednostką, ma jasno zdefiniowane klucze obce lub implikacje, wskazujące na tę relację.
6. Relacje „wiele do wielu” przekształcone są na jednostki stowarzyszone (np. jedno wiele-do-wielu zmienione na dwie jeden-do-wielu z jednostką stowarzyszoną po środku), które mogą zawierać dodatkowe atrybuty i identyfikatory. Zyskujemy miejsce na opis relacji.
7. Uwzględnione są liczność relacji i ich charakter (opcjonalne czy obowiązkowe).
8. Każda relacje jest jednoznacznie nazwana.

Logiczny model danych jest kompletnym dokumentem technicznym, który stanowi podstawę do stworzenia fizycznej bazy danych.

#### Fizyczny model danych

Implementacja logicznego modelu, dopasowana do specyfiki danej DBMS.

![[image-2.webp]]



Normalizacja danych to proces, który polega na uporządkowaniu danych w sposób
minimalizujący ich nadmiarowość i optymalizujący strukturę. 

Jej głównym celem jest dopilnowanie, że każda jednostka danych jest dobrze uformowana, a atrybuty są przypisane do odpowiednich jednostek.

Normalizacja jest procesem logicznym, więc nie musi bezpośrednio wpływać na implementację fizycznej bazy danych, która może zależeć od systemu zarządzania bazami danych.

Opracowana przez E. F. Codda w latach 70., normalizacja opiera się na zasadach teorii mnogości i choć powstała na potrzeby relacyjnych baz danych, może być stosowana także w innych rodzajach baz.

Codd w pracach z 1971 i 1972 opisał pierwsze trzy postaci normalne. Później Codd i inni opracowali kolejne.

Postulaty Codda dla relacyjnych baz danych:
1. Postulat informacyjny – dane są reprezentowane wyłącznie przez wartości atrybutów w wierszach tabel (krotkach).
2. Postulat dostępu – każda wartość w bazie jest dostępna poprzez nazwę tabeli, atrybut i wartość klucza podstawowego.
3. Postulat wartości NULL – dostępna jest wartość NULL do reprezentacji wartości nieokreślonych lub nieadekwatnych.
4. Postulat katalogu – baza musi mieć wbudowany katalog dostępny dla uprawnionych użytkowników za pomocą języka zapytań.
5. Postulat języka danych – baza musi wspierać język do definicji, manipulacji i zabezpieczeń danych oraz zarządzania transakcjami.
6. Postulat modyfikowalności perspektyw – system powinien umożliwiać modyfikację perspektyw, jeśli jest to semantycznie uzasadnione.
7. Postulat modyfikowalności danych – system powinien wspierać operacje INSERT, UPDATE i DELETE.
8. Postulat fizycznej niezależności – zmiany w fizycznej strukturze danych nie powinny wpływać na aplikacje.
9. Postulat logicznej niezależności – zmiany wartości danych w tabelach nie wpływają na aplikacje.
10. Postulat niezależności więzów spójności – więzy spójności są definiowane w bazie i niezależne od aplikacji.
11. Postulat niezależności dystrybucyjnej – działanie aplikacji nie zależy od modyfikacji czy dystrybucji danych.
12. Postulat bezpieczeństwa operacji niskiego poziomu – operacje niskiego poziomu nie mogą naruszać  modelu relacyjnego ani więzów spójności.

Kluczowe cechy znormalizowanych tabel obejmują:
- Reprezentowanie jednego tematu – każda tabela powinna dotyczyć jednego tematu.
- Minimalna redundancja danych – dane przechowywane są tylko raz, co umożliwia aktualizacje w jednym miejscu i zwiększa spójność.
- Zależność od klucza podstawowego – wszystkie atrybuty zależą wyłącznie od klucza podstawowego, co zapewnia jednoznaczną identyfikację danych.
- Brak anomalii operacyjnych – tabele są wolne od anomalii związanych z operacjami INSERT, UPDATE oraz DELETE, co zapewnia integralność danych.

Anomalie w bazach danych występują, gdy struktura tabel nie jest znormalizowana, co prowadzi do problemów z integralnością danych. 

Do głównych rodzajów anomalii należą: 
1. Anomalie przy wstawianiu – dodanie nowego rekordu może dezaktualizować inne dane.
2. Anomalie przy usuwaniu – usunięcie rekordu powoduje przypadkowe usunięcie większej ilości danych, niż oczekiwano.
3. Anomalie przy modyfikacji – zmiana rekordu może wymagać kaskadowej aktualizacji innych rekordów.
4. Redundancja danych – te same dane są przechowywane w wielu tabelach, co może prowadzić do niespójności.


Zależność funkcjonalna to relacja między atrybutami, w której wartość jednego atrybutu
(determinanta) określa wartość drugiego (atrybutu zależnego). Atrybut B jest w pełni
funkcjonalnie zależny od atrybutu A, jeśli każda wartość A wskazuje dokładnie jedną wartość B. 
W uogólnionej zależności funkcjonalnej wszystkie wiersze z tą samą wartością A mają taką samą wartość B. 
W przypadku klucza złożonego, zależność funkcjonalna jest pełna, jeśli atrybut B zależy od całego klucza złożonego, a nie od jego części.


Konwersja do pierwszej postaci normalnej (1NF) obejmuje trzy kroki:
1. Eliminację powtarzających się grup danych 
	- Nieintuicyjne określenie. Chodzi o powtarzające się dane jednego typu 
		- np. kilka imion w jednej komórce należy rozbić na osobne wiersze.
		- albo danego jednego typu niepotrzebnie rozbite na kilka kolumny.
2. Identyfikację klucza podstawowego
3. Identyfikację wszystkich zależności między atrybutami.

Druga postać normalna (2NF):
1. Stworzenie nowych tabel w celu wyeliminowania częściowych zależności
2. Przypisanie odpowiednich atrybutów zależnych.

Wykonujemy tylko wtedy, gdy 1NF ma złożony klucz podstawowy. Jeśli posiada klucz podstawowy z jednym atrybutem, automatycznie jest 2NF.

Konwersja do trzeciej postaci normalnej (3NF):
1. Utworzenie nowych tabel, by wyeliminować częściowe zależności.
2. Przypisanie odpowiednich atrybutów zależnych.

Boyce-Codd Normal Form (BCNF):
1. Każda determinanta w tabeli musi być kluczem kandydującym.

Jeśli tabela zawiera tylko jeden klucz kandydujący, 3NF jest automatycznie BCNF.

Czwarta postać normalna (4NF)

Usuwa zależności wielowartościowe, czyli sytuację gdy atrybuty w tabeli są
niezależne od siebie, ale każdy z nich jest związany z kluczem podstawowym.

---
- W wyniku łączenia (sprzężenia) tabel bez określenia warunków WHERE powstaje iloczyn kartezjański.
- Podczas łączenia >2 tabel liczba warunków sprzężenia powinna wynosić N-1.
```SQL
SELECT A.column1, B.column2, C.column3
FROM tabelaA A, tabelaB B, tabelaC C
WHERE A.foreign_key = B.primary_key
AND B.foreign_key = C.primary_key;
```
- Należy unikać sprzężenia tabeli C z tabelą A, bo dojdzie do cyklicznego połączenia i błędnych wyników.


![[image-3.webp]]


Transakcja to jednostka atomowej pracy, gdzie wszystkie powiązane zadania muszą
zakończyć się sukcesem lub zostać anulowane jako całość (zasada "wszystko albo nic").
Kluczowe dla zachowania integralności danych, szczególnie podczas złożonych operacji na
wielu tabelach lub w środowiskach współbieżnych.
 COMMIT: zatwierdza transakcję po pomyślnym wykonaniu wszystkich operacji.
 ROLLBACK: cofa zmiany w przypadku błędów, przywracając dane do stanu początkowego.


Mechanizm blokad chroni dane przed modyfikacjami przez inne transakcje w tym samym
czasie. Blokady są zwalniane po zakończeniu transakcji, co minimalizuje wpływ na
wydajność.

ACID to zbiór czterech kluczowych właściwości transakcji:
o Atomowość:
o Spójność
o Izolacja
o Trwałość

 Stany transakcji:
o Transakcja aktywna (Active)
o Transakcja częściowo zatwierdzona (Partially Committed)
o Transakcja zatwierdzona (Committed):
o Transakcja zakończona niepowodzeniem (Failed)
o Transakcja przerwana (Aborted)

![[image-4.webp]]

- Każda instrukcja T-SQL jest automatycznie zatwierdzana po pomyślnym zakończeniu. W przypadku niepowodzenia instrukcji transakcja zostaje automatycznie wycofana. 
- Użycie instrukcji BEGIN TRANSACTION, COMMIT TRANSACTION, i ROLLBACK TRANSACTION zmienia tryb na transakcję jawną.

- Transakcje jawne: wymagają ręcznego rozpoczęcia (BEGIN), zakończenia (COMMIT), lub wycofania (ROLLBACK).
- Transakcje niejawne: aktywowane przez polecenie SET IMPLICIT_TRANSACTIONS ON. Transakcja rozpoczyna się automatycznie, ale jej zakończenie lub wycofanie musi być wyraźnie wskazane.

Gdy opcja MARS jest włączona, transakcje jawne lub niejawne z wieloma partiami
uruchomionymi jednocześnie działają w trybie transakcji wsadowych. Jeśli taka transakcja
nie zostanie jawnie zakończona lub wycofana, aparat SQL Server automatycznie ją wycofa po zakończeniu partii.


 Transakcje lokalne dotyczą jednego lokalnego serwera bazy danych.
 Transakcje rozproszone przetwarzają dane z wielu serwerów baz danych i wymagają użycia
Microsoft Distributed Transaction Coordinator (MSDTC) do koordynacji operacji.

Begin transaction
```sql
--Dla SQL Server i Azure SQL Database
BEGIN { TRAN | TRANSACTION }
    [ { transaction_name | @tran_name_variable }
      [ WITH MARK [ 'description' ] ]
    ]
[ ; ]
```
- **transaction_name**: nazwa przypisana do transakcji. Musi być zgodna z regułami dotyczącymi identyfikatorów, ale identyfikatory dłuższe niż 32 znaki są niedozwolone. Należy pamiętać, że nazwy transakcji są rozróżniane wielkością liter, nawet jeśli instancja SQL Server nie wymusza tej zasady.
- **@tran_name_variable**: Zmienna użytkownika zawierająca nazwę transakcji. Musi być zadeklarowana z typem danych `char`, `varchar`, `nchar` lub `nvarchar`. Jeśli zmienna zawiera więcej niż 32 znaki, zostaną zachowane tylko pierwsze 32 znaki.
- **WITH MARK [ 'description' ]**: Opcjonalnie można dodać opis transakcji. Opis dłuższy niż 128 znaków zostanie obcięty do 128 znaków przed zapisaniem w dzienniku.

Oznaczone transakcje w SQL Server pozwalają na zapisanie nazwy transakcji w dzienniku
transakcji dzięki opcji WITH MARK.

BEGIN TRANSACTION nazwa_transakcji 
WITH MARK 'opis_co_to_za_zmiana'; -- To tutaj tworzy punkt przywracania


 Punkty zapisu (savepoints) w SQL Server to mechanizm umożliwiający kontrolę nad
wycofywaniem zmian w obrębie jednej transakcji. Pozwalają one na określenie punktu, do
którego można powrócić, co zwiększa elastyczność w zarządzaniu operacjami. Składnia:
SAVE TRANSACTION savepoint_name

```sql
SET IMPLICIT_TRANSACTIONS ON;

-- Aktualizacja danych w tabeli 'Person'
UPDATE Person
SET
    Lastname = 'Sawyer',
    Firstname = 'Tom'
WHERE
    PersonID = 2;

-- Sprawdzenie trybu transakcji
SELECT
    IIF(@@OPTIONS & 2 = 2,
    'Implicit Transaction Mode ON',
    'Implicit Transaction Mode OFF'
    ) AS 'Transaction Mode';

-- Liczba otwartych transakcji
SELECT @@TRANCOUNT AS OpenTransactions;

-- Zatwierdzenie transakcji
COMMIT TRAN;

-- Liczba otwartych transakcji po zatwierdzeniu
SELECT @@TRANCOUNT AS OpenTransactions;

--Punkt zapisu
SAVE TRANSACTION savepointname
--Załadowanie go
ROLLBACK TRANSACTION savepointname
```

