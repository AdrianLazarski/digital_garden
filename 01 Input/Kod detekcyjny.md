---
created: 2026-03-10 20:21
tags:
  - atom
  - definicja
  - it/technika_cyfrowa
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-10 20:21
publish: false
---
Kody wykrywające błędy zawierają informację dodatkową. Ogólnie kody te nazywają się kody detekcyjne lub kody z zabezpieczeniem i zawierają bity redundacyjne (kod redundacyjny albo słowa redundacyjne – nadmiarowe).

Kod detekcyjny używa słów n-bitowych, które nie zawierają 2n słów użytecznych.

Kod detekcyjny ma tę właściwość, że uszkodzenie słowa powoduje wytworzenie takiego ciągu bitów, który jest identyfikowany jako niepoprawne słowo kodowe.

## Sprawdzanie parzystości

Sprawdzanie parzystości jest metodą detekcji błędów wykorzystującą jeden bit lub nieparzystą liczbę bitów.

Bit parzystości jest to „extra” bit dołączony do ciągu bitów, aby wymusić parzystą liczbę bitów zawierających logiczną 1 (bit parzystości). Można też wymuszać nieparzystą liczbę bitów 1 (bit nieparzystości).

## Kod powtórzeniowy

W kodzie powtórzeniowym każdy bit jest przesyłany kilka razy, to znaczy bit ‘1’ jest przesyłany jako ‘111’, natomiast bit ‘0’ jako ‘000’.

Kod ten jest kodem samokorygującym się. Jeśli większość weźmiemy jako wartość poprawną, to znaczy: ‘010’ -> ‘0’

Kod powtórzeniowy jest wysoce nieefektywny, a przepustowość łącza spada tym szybciej, im więcej zastosujemy powtórzeń każdego bitu (aby uzyskać lepszą detekcję i korekcję błędów).

## Cykliczny kod redundacyjny

Cykliczne sprawdzanie redundancji (Cyclic Redundancy Check – CRC) jest metodą detekcji błędów, która umożliwia wykrycie wielu błędów w większych blokach danych.

W nadajniku wysyłającym dołączana jest suma kontrolna na końcu bloku danych. W odbiorniku również generowana jest suma kontrolna odebranego bloku danych i jest ona porównywana z sumą odebraną. Jeśli sumy kontrolne są identyczne, oznacza to, że błędy nie wystąpiły.

Liczba 8, 16, 24 lub 32-bitowa jest dodawana na końcu bloku danych. Powstają w ten sposób kody CRC-8, CRC-16, CRC-24 lub CRC-32.

CRC-16 wykrywa 99.99% błędów; to znaczy 1 z 10,000 błędów pozostaje niewykryty!