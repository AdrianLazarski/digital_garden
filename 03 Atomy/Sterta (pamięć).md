---
tags:
  - it/architektura
  - atom
  - definicja
created: 2025-12-10 13:04
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-03 16:45
---
ang. _heap_

> [!note] Definicja
> Nieuporządkowany, elastyczny obszar pamięci.


Od [[Stos (pamięć)|stosu]] różni się tym, że:
- Dane nie muszą być usuwane w kolejności, w jakiej zostały dodane.
- Dane mogą być duże i złożone.

Usuwanie danych w niektórych językach jest zautomatyzowane, a w niektórych trzeba robić to ręcznie.


- **Nieuporządkowanie:** Oznacza brak struktury "jeden na drugim". Obiekty są alokowane w dowolnych wolnych blokach pamięci.
- **Zarządzanie:** Wymaga dodatkowej pracy (Garbage Collector), aby znajdować nieużywane obiekty w tym "worku" i zwalniać miejsce.
- **Lokalizacja:** Pamięć RAM.



Nie mylić ze [[Sterta (struktura danych)]].


