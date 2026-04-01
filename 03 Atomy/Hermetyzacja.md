---
created: 2026-04-01 16:14
tags:
  - atom
  - definicja
  - it/programowanie/obiektowe
  - ai-generated
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-01 16:14
---
ang. *encapsulation*

> [!note] Definicja
> Technika polegająca na zdefiniowaniu w [[Klasa (programowanie)|klasie]] takich zasad dostępu, które izolują wewnętrzny stan powstałych z niej [[Obiekt (programowanie)|obiektów]].

- **Cel:** Ochrona obiektu przed przejściem w "stan nielogiczny" (np. ujemny wiek, ujemne saldo) poprzez zablokowanie bezpośredniej modyfikacji pól.
- **Mechanizm:** Pola (dane) oznaczamy jako **prywatne**, a dostęp do nich dajemy tylko przez **publiczne** metody lub właściwości, które pilnują poprawności danych.
- **Zasada "Czarnej Skrzynki":** Inne części programu nie muszą wiedzieć, jak obiekt działa w środku; mają znać tylko jego "panel sterowania" (interfejs).
- **Zaleta architektoniczna:** Pozwala zmienić wewnętrzny kod klasy (np. sposób obliczeń) bez konieczności poprawiania reszty programu, o ile nie zmienimy nazw metod publicznych.

Czasem występuje jako kalka z angielskiego: [[Enkapsulacja]]

$\leftarrow$ [[MOC Programowanie obiektowe]]