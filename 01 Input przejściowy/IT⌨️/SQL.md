---
created: 2025-09-27 12:24
tags:
  - język_programowania/sql
  - atom
  - definicja
  - it/bazy_danych
dojrzalosc: Krzak 🌿
status_epistemiczny: Prawdopodobny 🧪
modified date: 2026-01-24 11:59
---
Structured Query Language
Query – zapytanie

- Język programowania zaprojektowany do pracy z relacyjnymi [[Baza danych|bazami danych]].
- Wykonuje zarówno [[C.R.U.D]] na danych, jak i zadania typowe administracyjne (zarządzanie użytkownikami, bezpieczeństwo, backupy itp) oraz tworzenie i zarządzanie bazami danych.

- SQL to język hybrydowy, bo w pewnym sensie składają się na niego 4 różne języki:
	1. Data Query Language (DQR)
		- Tworzenie zapytań do bazy danych w celu uzyskania informacji.
		- Uzyskuje informacje wcześniej zgromadzone.
	2. Data Definition Language (DDL)
		- Definiuje schemat bazy danych.
	3. Data Control Language (DCL)
		- Kontroluje dostęp do danych w bazie danych.
		- Zarządza użytkownikami i uprawnieniami.
	4. Data Manipulation Language (DML)
		- C.R.U.D

### Zastosowania:
- Data science i analiza danych - zapytania na dużych zbiorach danych, czyszczenie danych, analiza.
- Uczenie maszynowe i SI - czyszczenie, przekształcanie, ekstrakcja danych.
- Web Development - zarządzanie danymi użytkowników i treściami na stronach i w aplikacjach zbudowanych na frameworkach: Django, Node.js i Ruby on 
- Bazy danych w chmurach – Amazon RDS, Microsoft Azure SQL
- Big Data np. Apache Hive
- Blockchain – SQL pomaga zarządzać danymi, które nie muszą znajdować się bezpośrednio w łańcuchu bloków, ale są niezbędne dla funkcjonowania aplikacji w ekosystemie blockchain

- VARCHAR(n) - napis(liczba znaków)
- nvarchar(n) - przechowuje znaki w formacie Unicode, co pozwala na obsługę różnych języków z dziwnymi znakami
- TEXT - napis bez limitu znaków
- surrogate key - nie ma odniesienia do prawdziwego świata
- natural key - ma odniesienie
- composite key - PRIMARY KEY, który składa się z dwóch atrybutów![[Pasted image 20250927154836.png]]
	- Pojedynczy atrybut się może powtarzać w kolumnie, dlatego nie nadawałby się na PRIMARY KEY.
- **FOREIGN KEY** - odnosi nas do PRIMARY KEY w innej tabeli
	- Dwa FOREIGN KEY mogą służyć razem jako jeden PRIMARY KEY w tabeli ujmującej np. relacje między kluczami z dwóch różnych tabel.
	- Może to też być jeden FOREIGN KEY i jeden zwykły key.


[[MOC SQL składnia]]