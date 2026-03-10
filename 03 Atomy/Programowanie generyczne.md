---
created: 2026-03-09 20:57
tags:
  - atom
  - definicja
  - it/programowanie
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-09 20:57
---
Znane także jako programowanie uogólnione.

> [!note] Definicja
> Metodyka oparta na założeniu, że wiele fragmentów kody jest niepotrzebnie powtarzanych tylko dlatego, że służą do przetwarzania danych różnych typów w sposób identyczny.

- Podejście generyczne pozwala na tworzenie uogólnionych wzorców konstrukcji kodu, które deklaruje się ze wstępnie nieokreślonymi typami zmiennych oraz pól. Dopiero przy definiowaniu konkretnej instacji wzorca deklaruje się podstawienia typów, które wstępnie zdefiniowane są jako typy nieokreślone.
- W zależności od używanego języka, wzorce określa się jako:
	- szablonami
	- funktorami
	- abstraktami
	- widmami
	- paczkami typowanymi
- Zaliczane do metodyk [[Programowanie typu imperatywnego|typu imperatywnego]], mimo że często stosuje się je w realizacjach opartych na językach wykorzystujących metodologię funkcyjną.

## Wady i zalety

### Zalety

- Skrócenie kodu dzięki możliwości definiowania konstrukcji programistycznych niezależnych od typów zmiennych.
- Tworzony kod jest w wysokim stopniu uniwersalny i pozwala na wielokrotnie wykorzystywanie jego fragmentów.

### Wady

- Trudności w poszukiwaniu błędów, związane ze zbyt ogólnymi podpowiedziami kompilatorów dla uogólnionych konstrukcji kodu.
- Problemy z błędami występującymi tylko przy określonych typach danych, a nieobecnymi przy innych typach.
- Brak odzwierciedlenia bezpośrednich definicji klas w typach tworzonych obiektów.
- Nadużywanie przez programistów konstrukcji generycznych, traktowanych jako zamienniki makr prekompilatora.


$\leftarrow$ [[MOC Metodyka programowania]]