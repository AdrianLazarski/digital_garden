---
created: 2026-04-07 13:01
tags:
  - atom
  - ai-generated
  - it/algorytmy/kompresja
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-04-07 13:01
---
Metoda bezstratnej kompresji danych, która zamienia cały ciąg symboli (wiadomość) w jedną liczbę rzeczywistą $n \in [0, 1)$. W przeciwieństwie do [[Kodowanie Huffmana|kodowania Huffmana]], nie przypisuje ona całkowitej liczby bitów poszczególnym znakom, co pozwala zbliżyć się do granicy entropii Shannona.


![[Kodowanie arytmetyczne.webp]]


### Mechanizm działania

1. **Podział przedziału:** Każdemu symbolowi $s \in S$ przypisuje się podprzedział $[low, high)$ o szerokości odpowiadającej jego prawdopodobieństwu wystąpienia $P(s)$.
2. **Iteracyjne zawężanie:** Dla każdego kolejnego symbolu w wiadomości, aktualny przedział roboczy jest dzielony proporcjonalnie do rozkładu prawdopodobieństwa całego alfabetu. Wybierany jest podprzedział odpowiadający danemu symbolowi.
3. **Reprezentacja binarna:** Po przetworzeniu wszystkich symboli, wynikiem jest najkrótszy ułamek binarny, który mieści się wewnątrz ostatecznego, bardzo wąskiego przedziału.

**Wydajność:** Pozwala na kodowanie symboli na ułamkowej liczbie bitów (np. $0,4$ bita na znak), co eliminuje marnotrawstwo występujące w kodach o stałej długości (ASCII) lub kodach prefiksowych (Huffman).

### Implementacja techniczna

- **Interpretacja bitów:** Plik wynikowy nie zawiera znaków "0" czy ",", a jedynie licznik (numerator) ułamka binarnego. Dekoder interpretuje strumień bitów jako pozycję na osi prawdopodobieństwa.
- **Renormalizacja:** Aby uniknąć problemów z precyzją (niedomiar bitów), procesory stosują arytmetykę całkowitą. Gdy przedział staje się zbyt mały, najbardziej znaczące bity są wysyłane do pliku, a przedział jest "rozciągany" (przesunięcie bitowe).
- **Zastosowania:** Standardy wideo (H.264/CABAC), obrazy (JPEG 2000), archiwizacja (LZMA w 7-Zip).
