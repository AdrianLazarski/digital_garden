---
created: 2026-02-28 19:46
tags:
  - ref
  - matematyka/analiza
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-07-27 18:15
Rok oryginału: "2001"
Miejsce wydania: Wrocław
---

# 0 zbiory i funkcje liczbowe

## 0.1 Zbiór liczb rzeczywistych
str.11
### 0.1.x Zadania

0.1.1 Uzasadnić, że podane liczby są niewymierne

a) $\sqrt{2}$
$$
\begin{flalign} 
\text{1.} \quad & \mathbb{Q} = \frac{p}{q} : p, q \in \mathbb{Z}, q \neq 0 && \text{Z.d.} \\  
\text{2.} \quad & x^2 = 2 && \text{Z.d.n.} \\
\text{3.} \quad & \exists{p, q} \in \mathbb{Z}, x = \frac p q, q \neq 0  && \text{1, 2}\\
\text{4.} \quad & 2=x^2= \frac{p^2} {q^2} && \text{2, 3} \\
\text{5.} \quad &  NWD(p, q) = 1&& \text{Z.d} \\
\text{6.} \quad &  2q^2 = p^2 && \text{4} \\
\text{7.} \quad &  \forall p \in \mathbb{Z}: (2 \mid p^2) \implies (2 \mid p) &&\text{Z.d.d.} \\
\text{8.} \quad &  p = 2k && \text{6, 7} \\
\text{9.} \quad &  (2k)^2 = 2q^2 && \text{8, 6} \\
\text{10.} \quad &  4k^2 = 2q^2 && \text{9} \\
\text{11.} \quad &  2k^2 = q^2 && \text{9} \\
\text{12.} \quad &  (2 \mid q^2) \implies (2 \mid q) && \text{7, 11} \\
\text{13.} \quad &  q=2k && \text{12} \\
\quad & \text{Sprzeczność 8,13 z 5} \\
\end{flalign}
$$

b) $\log_{2}3$
$$
\begin{flalign} 
\text{1.} \quad & \mathbb{Q} = \frac{p}{q} : p, q \in \mathbb{Z}, q \neq 0 && \text{Z.d.} \\  
\text{2.} \quad & \log_{2}3 = \frac p q && \text{Z.d.n.} \\
\text{3.} \quad & 2^{\frac p q} = 3 && \text{2, def. log} \\
\text{4.} \quad & (2^{\frac p q})^q = 3^q && \text{3} \\
\text{5.} \quad & 2^p =3^q && \text{4} \\
\text{6.} \quad & 2^p \text{ jest parzysta a }3^q \text{ nieparzysta} \\
\quad & \text{co jest niemożliwe dla liczb } \mathbb{Z} && \text{5} \\
\quad &\text{Sprzeczność 1, 6}
\end{flalign}
$$

c) $\cos \frac \pi 8$
$$
\begin{flalign} 
\text{1.} \quad & \mathbb{Q} = \frac{p}{q} : p, q \in \mathbb{Z}, q \neq 0 && \text{Z.d.} \\  
\text{2.} \quad & \cos \frac \pi 8 \in \mathbb{Q} && \text{Z.d.n.} \\
\text{3.} \quad & x \in \mathbb{Q} \implies x^2 \in \mathbb{Q} \\
\text{4.} \quad & \cos(2\alpha) = 2\cos^2\alpha - 1 \\
\text{5.} \quad & \cos\left(2 \cdot \frac{\pi}{8}\right) = 2\cos^2\left(\frac{\pi}{8}\right) - 1 && \text{4} \\
\text{6.} \quad & \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2} && \text{wł.} \\
\text{7.} \quad & \frac{\sqrt{2}}{2} = 2\cos^2\left(\frac{\pi}{8}\right) - 1 && \text{5, 6} \\
\text{8.} \quad & 2\cos^2\left(\frac{\pi}{8}\right) = 1 + \frac{\sqrt{2}}{2} = \frac{2 + \sqrt{2}}{2} && \text{7} \\
\text{9.} \quad & \cos^2\left(\frac{\pi}{8}\right) \in \mathbb{Q} && \text{2} \\
\text{10.} \quad & \frac{2 + \sqrt{2}}{4} \in \mathbb{Q} && \text{8, 9} \\
\text{11.} \quad & 4 \cdot \left(\frac{2 + \sqrt{2}}{4}\right) - 2 \in \mathbb{Q} && \text{kom.} \\
\text{12.} \quad & (2 + \sqrt{2}) - 2 \in \mathbb{Q} && \text{11} \\
\text{13.} \quad & \sqrt{2} \in \mathbb{Q} && \text{12} \\
\quad &\text{Sprzeczność 1, 13}
\end{flalign}
$$
Komentarz do 11: Liczba wymierna pomnożona przez 4 (wymierne) powinna dać liczbę wymierną. Podobnie liczba wymierna, od której odjęto 2 (wymierne). Tutaj zrobiono dwie operacje w jednym kroku. 

## 0.2 Zbiory ograniczone
str. 12![[Zbiór ograniczony z dołu.webp|Zbiór ograniczony z dołu]][[Zbiór ograniczony od dołu]]
![[Zbiór ograniczony z góry.webp|Zbiór ograniczony z góry|840x360]]
[[Zbiór ograniczony od góry]]

![[Zbiór ograniczony.webp|Zbiór ograniczony|854x420]][[Zbiór ograniczony]]

## 0.3 Kresy zbiorów
str. 13
[[Kresy zbiorów]]![[Element najmniejszy zbioru.webp|Element najmniejszy zbioru|814x398]]![[Element największy zbioru.webp|Element największy zbioru|816x299]]
[[Kres dolny zbioru]]![[Kres dolny zbioru.webp|Kres dolny zbioru|834x412]]
[[Kres górny zbioru]]![[Kres górny zbioru.webp|Kres górny zbioru|805x368]]
[[Aksjomat ciągłości]]![[Aksjomat ciągłości.webp|Aksjomat ciągłości|570x96]]
## 0.4 Funkcje podstawowe określenia
str. 15
[[Funkcja]]![[Definicja funkcji.webp|Definicja funkcji|829x594]]
[[Dziedzina funkcji]]
[[Przeciwdziedzina funkcji]]
[[Zbiór wartości funkcji]]![[Dziedzina, przeciwdziedzina funkcji.webp|Dziedzina, przeciwdziedzina, zbiór wartości funkcji|836x633]]
[[Równość funkcji]]![[Równość funkcji.webp|Równość funkcji|795x163]][[Wykres funkcji]]![[04 Źródła/załączniki/Wykres funkcji.webp|Wykres funkcji|785x520]]
[[Funkcja na]]![[04 Źródła/załączniki/Funkcja na.webp|Funkcja na|811x489]]
## 0.5 Funkcje okresowe, parzyste i nieparzyste
str. 18
[[Funkcja okresowa]]![[Gewert, Skoczylas, Analiza matematyczna 1 Definicje, twierdzenia, wzory-1.webp|799x369]]![[Gewert, Skoczylas, Analiza matematyczna 1 Definicje, twierdzenia, wzory-2.webp|759x63]]
[[Funkcja parzysta]]![[04 Źródła/załączniki/Funkcja parzysta.webp|Funkcja parzysta|768x511]]
[[Funkcja nieparzysta]]![[04 Źródła/załączniki/Funkcja nieparzysta.webp|Funkcja nieparzysta|788x225]]
## 0.6 Funkcje ograniczone
str. 20

[[Funkcja ograniczona z dołu]]![[Funkcja ograniczona z dołu.webp|Funkcja ograniczona z dołu|784x467]]
[[Funkcja ograniczona z góry]]![[Funkcja ograniczona z  góry.webp|Funkcja ograniczona z  góry|790x243]]
[[Funkcja ograniczona]]![[Funkcja ograniczona.webp|784x620]]
## 0.7 Funkcje monotoniczne

[[Funkcja rosnąca]]![[04 Źródła/załączniki/Funkcja rosnąca.webp|Funkcja rosnąca|781x492]]
[[Funkcja malejąca]]![[04 Źródła/załączniki/Funkcja malejąca.webp|Funkcja malejąca|781x222]]
[[Funkcja niemalejąca]]![[04 Źródła/załączniki/Funkcja niemalejąca.webp|797x504]]
[[Funkcja nierosnąca]]![[04 Źródła/załączniki/Funkcja nierosnąca.webp|Funkcja nierosnąca|801x241]]
[[Funkcja monotoniczna]]![[Funkcja monotoniczna.webp|Ustalanie monotoniczności funkcji|763x322]]![[Ustalanie monotoniczności funkcji.webp|Ustalanie monotoniczności funkcji|763x322]]
## 0.8 Złożenia funkcji
str. 24
[[Złożenie funkcji]]![[Funkcja złożona.webp|Funkcja złożona|786x413]]
![[Składanie funkcji monotonicznych.webp|Składanie funkcji monotonicznych|781x162]]
## 0.9 Funkcje odwrotne

[[Funkcja różnowartościowa]]![[04 Źródła/załączniki/Funkcja różnowartościowa.webp|Funkcja różnowartościowa|790x75]]
![[Warunek wystarczający różnowartościowości.webp|Warunek wystarczający różnowartościowości|790x75]]
![[Gewert, Skoczylas, Analiza matematyczna 1 Definicje, twierdzenia, wzory-3.webp|380x159]]
[[Funkcja odwrotna]]![[04 Źródła/załączniki/Funkcja odwrotna.webp|Funkcja odwrotna|811x597]]
![[Gewert, Skoczylas, Analiza matematyczna 1 Definicje, twierdzenia, wzory-4.webp|684x155]]
## 0.10 Funkcje cyklometryczne
str. 27

![[Funkcje cyklometryczne.webp|Funkcje cyklometryczne|827x681]]![[Gewert, Skoczylas, Analiza matematyczna 1 Definicje, twierdzenia, wzory-5.webp|762x414]]
## 0.11 Funkcje elementarne
str. 28

[[Funkcje elementarne]]![[Gewert, Skoczylas, Analiza matematyczna 1 Definicje, twierdzenia, wzory-6.webp|794x414]]
[[Wartość bezwzględna]]![[Gewert, Skoczylas, Analiza matematyczna 1 Definicje, twierdzenia, wzory-7.webp|798x277]]
[[Wielomian]]![[Wielomian.webp|Wielomian|789x258]]
[[Funkcja wymierna]]![[Funkcja wymierna.webp|Funkcja wymierna|789x258]]
[[Funkcje hiperboliczne]]![[Funkcje hiperboliczne.webp|795x1116]]![[Gewert, Skoczylas, Analiza matematyczna 1 Definicje, twierdzenia, wzory-8.webp|804x607]]
## 0.12 Niektóre funkcje nieelementarne
str. 31
[[Funkcja część całkowita]]![[Funkcja część całkowita.webp|Funkcja część całkowita|784x456]]

[[Funkcja signum]]
![[Funkcja signum.webp|Funkcja signum|773x276]]
[[Funkcja Dirichleta]]![[Funkcja Dirichleta.webp|Funkcja Dirichleta|765x244]]

[[Funkcja Riemanna]]![[Funkcja Riemanna.webp|Funkcja Riemanna|744x465]]
