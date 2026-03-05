
Rozszerzenie dla [[Klasyczny rachunek predykatów]].
  
## Słownik:

1. Zmienne zdaniowe: p, q, r itd.
2. Zmienne nazwowe (indywiduowe - imiona własne): x, y, z, x1, y1, z1 itd.
3. Stałe nazwowe (indywiduowe): a, b, c itd. Nie występują w tezach. Występują w dowodach.
4. Litery predykatywne P, G, F itd. W interpretacji podstawieniowej odpowiadają im predykaty, w interpretacji przedmiotowej własności indywiduów. O ilości argumentów informuje kontekst.
5. Kwantyfikatory: ogólny ( ∀x  lub Λ – „dla każdego”) i szczegółowy ( ∃x lub V – „istnieje takie”)  
    Definiuje się też potem kwantyfikator jednostkowy: ∃!x = istnieje dokładnie jedno takie x.  
    Def. $∃!$x ↔ ∃φ(x) ˄ ∀x∀y(φ(x) ˄ φ(y)→ x=y)
6. Spójniki logiczne:  ~, ˄, ˅, / , →, ↔
7. Nawiasy.
8. Predykat identyczności =

  
## Wyrażenia sensowne:

1. Zmienne zdaniowe: p, q, r
2. Wyrażenia atomowe: A(x), B(x), R (x1, ..., xx), xRy lub R (x, y) czyli wyrażenia zbudowane z litery predykatywnej oraz następującego po niej ciągu zmiennych lub stałych indywiduowych.
3. Jeżeli φ, ψ są wyrażeniami sensownymi, a v jest zmienną indywiduową, to wyrażeniami sensownymi są:  ~ φ, φ ˄ ψ, φ ˅ ψ, φ → ψ, φ ↔ ψ, ∃vφ, ∀vφ, φ = ψ

  
## [[System dedukcji]]

- Zbiór aksjomatów: x=x
- Reguły pierwotne: te co w CLS plus 5 nowych z KRP

1. Odrywania kwantyfikatora ogólnego ∀vα┞ α (v/w) [przy czym co było zmienną wolną, musi pozostać wolną, a co związaną to związaną]
2. Dołączanie kwantyfikatora ogólnego α(v)┞ ∀vα(v) [o ile v nie jest zmienną w założeniach dowodu]
3. Odrywanie kwantyfikatora szczegółowego ∃vα(v)┞ α (v/s) przy czym w danym dowodzie przechodzą zawsze na inną stałą. 
4. Dołączanie kwantyfikatora szczegółowego α(w)┞∃vα(w/v)
5. Reguła ekstensjonalności dla identyczności EI: t=t*, φ┞ φ (t//t*) [2 ukośniki oznaczają, że nie trzeba podstawiać za wszystkie, choć można]

v, v' - zmienna indywiduowa
s, s' - stała indywiduowa
w, w' - zmienna lub stała indywiduowa

t,t* - termy

Def: x≠y ↔ ~x=y
Def. $∃!$x ↔ ∃xφ(x) ˄ ∀x∀y(φ(x) ˄ φ(y)→ x=y)


#logika #filozofia