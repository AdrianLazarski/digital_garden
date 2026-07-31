---
created: 2026-02-28 19:46
tags:
  - atom
  - definicja
  - logika/formalna
dojrzalosc: Sadzonka 🌱
status_epistemiczny: Spekulatywny ❓
modified date: 2026-07-31 20:25
---


Autorem [[Saul Kripke]].

W syntaktyce mamy: ~, ˄, ˅, →, □, (,) 
Æ - zbiór pusty


Semantyka:

- W-zbiór świat możliwych. W≠ Æ
- w, w', w'' - światy
- R - relacja dostępności:
	- wRw' - między światami w, w' zachodzi relacja dostępności/w' jest możliwy z punktu widzenia W
- R⊆WxW
- <W,R> - rama światów możliwych/rama Kripkego
- v - wartościowanie
- Zm-zmienne?
- v:Zm→ 2 do potęgi W
- M - model języka
- M=<W,R,v>
- (M,w) ⊨ A ↔ w∈v(A) tj. formuła A jest spełniona w modelu M i w świecie w.
- (M,w) ⊨ AÙB ↔ w∈v(A)˄w∈v(B)
- (M,w) ⊨ A®B ↔ w∈v(A)˅w∈v(B)
- (M,w) ⊨□A ↔ ∀w'[wRw'⇒w'∈v(A)]
- Prawda - spełnianie w świecie w.
- Formuła j jest prawdziwa w świecie w ramy <W,R> ↔ ∀v [(W,R,v),  w⊨ φ]
- ⊫ rodzina ram.
- Formuła j jest prawdziwa w świecie w, gdy F∈⊫
- Zbiór φ formuł prawdziwy w ⊫ jest logiką klasy F.
- F=<w1, Id= > ⊫{F} - logika klasyczna

