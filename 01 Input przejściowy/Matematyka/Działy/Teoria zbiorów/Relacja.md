

Zbiór [[Para uporządkowana|par uporządkowanych]] albo podzbiór [[Iloczyn kartezjański|iloczynu kartezjańskiego]].

X∈rel ↔ ∃z∃y X ⊆ Z×Y  
 

- Relacją dwuargumentową określoną w zbiorze A nazwiemy dowolny podzbiór kwadratu kartezjańskiego.
- Lewe człony par uporządkowanych należących do relacji R nazywamy poprzednikami, a prawe następnikami.
- Zbiór poprzedników to dziedzina tej relacji,
	x∈Dl(R)≡∃y (xRy)
- a zbiór następników przeciwdziedzina:
	y∈Dp(R)≡∃x(xRy)
- Suma dziedziny i przeciwdziedziny to pole relacji.
- Konwers relacji: xR<sup>-1</sup> y ↔ yRx
- Iloczyn względny: xR;Sy ↔ ∃z(xRz˄zSy)

  
## Rodzaje relacji:

### Relacje proste:

- Relacja zwrotna: R∈zwr(X) ⇔ ∀x∈X (xRx)
	- Dowolny element zbioru pozostaje w relacji z samym sobą.
	- np. nauczanie w zbiorze samouków
- Relacja azwrotna: R∈azwr(X) ⇔ ∀x∈X ¬(xRx)
	- Np. bycie czyimś ojcem w zbiorze ludzi.
	- Nie wszystkie relacje muszą być zwrotne albo azwrotne!
- Relacja symetryczna: R∈Sym(X) ⇔ ∀x,y ∈X (xRy⇒yRx)
	- Np. równoznaczność, pokrewieństwo.
- Relacja asymetryczna: R∈Asym(X) ⇔ ∀x,y ∈X (xRy⇒¬yRx)
	- Np. poprzedzanie w czasie, podleganie władzy
- Relacja antysymetryczna: R∈Antsym(X) ⇔ ∀x,y∈X (xRy˄yRx⇒x=y)
	- albo R∈Antsym(X) ⇔ ∀x,y∈X (xRy˄yRx⇒x=y)
	- np. relacja niewiększości w zbiorze liczb, decyzje własne i podległych jednostek.
- Relacja przechodnia: R∈przech(X) ⇔ ∀x,y,z ∈X (xRy ∧ yRz ⇒ xRz)
	- np. równoważność, zawieranie się zbiorów
- Relacja spójności: R∈Spój(X) ⇔ ∀x,y∈X (xR ˅ yRx ˅ x=y)
	- np. relacja mniejszości w zbiorze liczb, następstwo w czasie
- Relacja funkcyjności: R∈funk(X) ⇔ ∀x,y,z(xRy˄xRz⇒y=z)
	- np. relacja bycia matką
- Relacja jednojednoznaczna: R∈1-1zn(X)⇔R∈funk(X)˄R^-1 ∈funk(X)
- Relacja odwrotna/konwers relacji : <x,y>∈R'⇔<x,y>∈R

Nie wszystkie relacje muszą być zwrotne albo azwrotne!

### Relacje złożone:

- Relacja równoważnościowa R∈równ(X)=zwrotna, symetryczna i przechodnia
	- np. identyczność, synonimiczność
- Relacja mocna porządkująca: porz.m: porzm(X)=azwr(X)∩przech(X)
	- lub inaczej: porz.m.: porzm(x)=asym(X)∩przech(X)
	- np. następstwo w czasie
- Relacja słabo porządkująca: porzs(X)=zwr(X)∩antys(X)∩przech(X)
- Porządek: porz(X)=porz.m(X) ∪ porz.s(X)
- Łancuch mocny: R∈chainm.(X)⇔RÎazwr(X)ÙRÎspój(XD)


#filozofia #logika #matematyka/podstawy/teoria_mnogości 