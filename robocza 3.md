#### **Działania na liczbach rzeczywistych**

Zapoznaj się z poniższym przykładem:Pokażemy, że struktura algebraiczna (ℝ, +, ⋅) **tworzy ciało**, gdzie + jest działaniem zwykłego dodawania a ⋅ zwykłego mnożenia.

- Pokażemy, że (ℝ, +) tworzy grupę **abelową**:
    - dodawanie dwóch liczb rzeczywistych jest liczbą rzeczywistą, więc działanie jest wewnętrzne,
    - dodawanie jest łączne (_a_ + _b_)+_c_ = _a_ + (_b_ + _c_) dla dowolnych _a_, _b_, _c_ ∈ ℝ,
    - elementem neutralnym dodawania jest liczba 0, _a_ + 0 = 0 + _a_ = _a,_
    - dla dowolnej liczby rzeczywistej _a_ elementem odwrotnym względem dodawania jest −_a_, _a_ + ( − _a_)=(−_a_)+_a_ = 0,
    - dodawanie jest przemienne _a_ + _b_ = _b_ + _a._

- Pokażemy, że (ℝ \ {0}, ⋅ ) tworzy grupę **abelową**:
    - mnożenie dwóch liczb rzeczywistych jest liczbą rzeczywistą, więc działanie jest wewnętrzne,
    - mnożenie jest łączne (_a_ ⋅ _b_)⋅_c_ = _a_ ⋅ (_b_ ⋅ _c_) dla dowolnych _a_, _b_, _c_ ∈ ℝ,
    - elementem neutralnym mnożenia jest liczba 1, _a_ ⋅ 1 = 1 ⋅ _a_ = _a,_
    - dla dowolnej liczby rzeczywistej _a_, różnej od 0 elementem odwrotnym względem mnożenia jest 1/_a_, _a_ ⋅ (1/a) = (1/_a_) ⋅ _a_ = 1,
    - mnożenie jest przemienne _a_ ⋅ _b_ = _b_ ⋅ _a,_
- Działanie mnożenia jest rozdzielne względem dodawania. _a_ ⋅ (_b_ + _c_) = (_a_ ⋅ _b_) + (_a_ ⋅ _c_).

Zatem struktura algebraiczna (ℝ, +, ⋅) jest **ciałem**.

![[robocza 3.webp]]

**Sprawdzimy, czy działanie jest wewnętrzne:**  
Niech _a_, _b_, _c_, _d_ ∈ ℝ, wtedy:

(_a_, _b_) ⊕ (_c_, _d_) = (_a_ + _c_, _b_ + _d_)

wynikiem jest para liczb, gdzie, zarówno _a_ + _c_ ∈ ℝ jak i _b_ + _d_ ∈ ℝ.

Zatem działanie ⊕ jest **wewnętrzne**.

![[robocza 3-1.webp]]

![[robocza 3-2.webp]]

![[robocza 3-3.webp]]

![[robocza 3-4.webp]]
![[robocza 3-5.webp]]
![[robocza 3-6.webp]]

![[robocza 3-7.webp]]

![[robocza 3-8.webp]]

![[robocza 3-9.webp]]

![[robocza 3-10.webp]]

![[robocza 3-11.webp]]
![[robocza 3-12.webp]]

![[robocza 3-13.webp]]
![[robocza 3-14.webp]]
![[robocza 3-15.webp]]
![[robocza 3-16.webp]]
![[robocza 3-17.webp]]

![[robocza 3-18.webp]]
![[robocza 3-19.webp]]
![[robocza 3-20.webp]]

![[robocza 3-21.webp]]

![[robocza 3-22.webp]]

![[robocza 3-23.webp]]
![[robocza 3-24.webp]]

![[robocza 3-25.webp]]

![[robocza 3-26.webp]]
![[robocza 3-27.webp]]
![[robocza 3-28.webp]]
![[robocza 3-29.webp]]
![[robocza 3-30.webp]]
![[robocza 3-31.webp]]
![[robocza 3-32.webp]]
![[robocza 3-33.webp]]
![[robocza 3-34.webp]]
![[robocza 3-35.webp]]
![[robocza 3-36.webp]]
![[robocza 3-37.webp]]
![[robocza 3-38.webp]]
![[robocza 3-39.webp]]
![[robocza 3-40.webp]]![[robocza 3-41.webp]]
## materiał 4


W ramach algebry liniowej jednym z podstawowych pojęć jest **przestrzeń liniowa**, która stanowi strukturę algebraiczną umożliwiającą operacje dodawania wektorów i mnożenia ich przez skalary.

**Definicja przestrzeni liniowej** opiera się na własnościach algebraicznych oraz zgodności tych operacji z działaniami w ciele.

Niech 𝕂 będzie dowolnym **ciałem**.

**Przestrzenią liniową** (lub **przestrzenią wektorową**) nad ciałem 𝕂 nazywamy każdy zbiór _V_, którego elementy nazywamy **wektorami**, spełniający dwa podstawowe warunki:

1. **Struktura grupy abelowej  
    **W zbiorze _V_ określone jest działanie dwuargumentowe (**x**, **y**)→**x** + **y**, takie, że (_V_,+) jest **grupą abelową** (czyli dodawanie wektorów jest przemienne, łączne, istnieje element neutralny oraz element odwrotny względem dodawania).
2. **Mnożenie wektorów przez skalary  
    **Określona jest operacja: 𝕂 × **V** → **V,** zwana mnożeniem wektorów przez skalary, która spełnia następujące własności:

- **unitarność**: 1 ⋅ _x_ = _x_
- **łączność**: (αβ)_x_ = α(β_x_)
- **prawa rozdzielności**:

(α + β)x = αx + βx

α(x + y) = αx + αy

**Uwagi terminologiczne:**

- Elementy przestrzeni _V_ nazywamy **wektorami**.
- Element neutralny względem dodawania nazywamy **wektorem zerowym**, czyli _v_ + 0 = _v_
- Ciałem skalarów mogą być zarówno liczby **rzeczywiste** jak i **zespolone**;

#### **Własności przestrzeni liniowej**

Niech **V** będzie dowolną przestrzenią liniową, wtedy zachodzą poniższe własności:


**Mnożenie wektora przez zero**  
Dla każdego v∈ _V_ mamy:

0_v_ = 0


**Mnożenie zera przez skalar**  
Dla każdego α ∈ 𝕂 zachodzi:

α0 = 0


**Jednoznaczność skalara dla wektora niezerowego**  
Jeśli _av_ = _bv_ oraz _v_ ≠ 0, to:  

_a_ = _b_


**Jednoznaczność wektora przy skalarnym mnożeniu**  
Jeśli _av_ = _au_ oraz _a_ ≠ 0, to:  

_v_ = _u_

![[robocza 3-42.webp]]

![[robocza 3-43.webp]]

![[robocza 3-44.webp]]

![[robocza 3-45.webp]]

W **przestrzeni liniowej** można wyróżnić **szczególne podzbiory**, które same również posiadają **strukturę przestrzeni liniowej**. Takie zbiory nazywamy **podprzestrzeniami**. Ich znaczenie w analizie algebraicznej jest fundamentalne, ponieważ pozwalają badać właściwości przestrzeni przez analizę jej części.

![[robocza 3-46.webp]]

![[robocza 3-47.webp]]

![[robocza 3-48.webp]]

![[robocza 3-49.webp]]
![[robocza 3-50.webp]]

![[robocza 3-51.webp]]

