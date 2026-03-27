---
created: 2026-02-28 19:46
tags:
  - atom
  - definicja
  - logika/matematyczna
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-03-27 18:11
---
Głównymi działaniami w algebrze Boole’a są:
- **koniunkcja**: and, i , · , ∧                 (iloczyn)
- **dysjunkcja**: or_,_ lub , + , ∨               (suma)
- **negacja**: not_,   ̅  ,  ‘  , _                    (nie)


- Dopełnienie danego wyrażenia otrzymuje się przez zmianę i negację wszystkich literałów, to znaczy wszystkie „·” zamieniamy na „+”, wszystkie „+” na „·”, wszystkie „0” na „1”, a „1” na „0”, wszystkie zmienne poddajemy negacji.
- Wyrażenie: A’·B + A·B’
	- Jego dopełnienie to: (A + B’)·(A’ + B).
- Suma wyrażenia i jego dopełnienia zawsze daje „1”, natomiast iloczyn wyrażenia z jego dopełnieniem zawsze daje „0”.

- Boolowskie wyrażenie dualne otrzymuje się, zamieniając wszystkie operacje „·” na „+”, natomiast wszystkie „+” na „·”, wszystkie wartości „0” na „1”, natomiast „1” na „0”, zaś literały (zmienne) pozostają niezmienione.
- Do wyrażenia: A’·B + A·B’ wyrażeniem dualnym jest: (A’ + B)·(A + B’).
- Nie istnieje bezpośrednia zależność między wartościami wyrażeń dualnych. Obydwa wyrażenia mogą przyjąć wartość 1 lub 0. Może też jedno wyrażenie przyjąć wartość 1, a drugie wartość 0.

## Postulaty algebry Boole'a

|   |   |   |
|---|---|---|
|(1)|1·1 = 1|0 + 0 = 0|
|(2)|1·0 = 0·1 = 0|0 + 1 = 1 + 0 = 1|
|(3)|0·0 = 0|1 + 1 = 1|
|(4)|1’ = 0|0’ = 1|

## Twierdzenia algebry Boole'a

**Element neutralny sumy i iloczynu**  

X + 0 = X                                              X·1 = X


**Tożsamość**

X + 1 = 1                                               X·0 = 0


**Idempotentność**  

X + X + X +···+ X = X        X·X·X· …… ·X = X


**Komplementarność**  

X + X’ = 1                             X·X’ = 0


**Przemienność**

X + Y = Y + X                        X·Y = Y·X


**Łączność**

X + (Y + Z) = Y + (Z + X) = Z + (X + Y)     X·(Y·Z) = Y·(Z·X) = Z·(X·Y)


**Rozdzielność**

X + Y·Z = (X + Y)·(X + Z)               X·(Y + Z) = X·Y + X·Z


**Absorpcja**

(X + Y’)·Y = X·Y                                   X·Y’ + Y = X + Y


**Absorpcja trzech zmiennych**

Z·X + Z·X’·Y = Z·X + Z·Y                    (Z + X)·(Z + X’ + Y) = (Z + X)·(Z + Y)


**Sklejanie**  

X·Y + X·Y’ = X                                     (X + Y)·(X + Y’) = X


**Pochłanianie**

X + X·Y = X                                           X·(X + Y) = X


**Zgodność**

X·Y + X’·Z + Y·Z = X·Y + X’·Z           (X + Y)·(X’ + Z)·(Y + Z) = (X + Y)·(X’ + Z)


**Transpozycja**

X·Y + X’·Z = (X + Z)·(X’ + Y)            (X + Y)·(X’ + Z) = X·Z + X’·Y


**Podwójna odwrotność**

X’’ = X


**Prawa De Morgana**

(X + Y)’ = X’·Y’                    (X1 + X2 + X3 + …· +Xn)’ = X1’·X2’·X3’· …· ·Xn’

(X·Y)’ = X’+ Y’                     (X1·X2·X3· …· ·Xn)’ = (X1’ + X2’ + X3’ + …· + Xn’)




Ośmioelementowa

![[Pasted image 20240616140244.png]]

#logika #matematyka 