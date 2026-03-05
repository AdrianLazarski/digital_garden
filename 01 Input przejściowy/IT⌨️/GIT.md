System kontroli wersji.

```git

# Utwórz folder
mkdir nazwa

# tworzy puste repozytorium
git init

# wyświetla wszystkie pliki w folderze
ls

# Wyświetla wszystkie pliki, również te ukryte
ls -a

# Change directory
cd nazwa_folderu

# Status repozytorium
git status

# Utwórz plik i dodaj go do repozytorium
touch nazwa.rozszerzenie

# Dodaj untracked plik do staging area
git add nazwa.rozszerznie

# Dodaj wszystkie untracked pliki do staging area
git add -A

# Zrób commit. m od message - komentarz do commitu
git commit -m"BAJO JAJO"

# Pokazuje historię commitów na danym branchu
git log
#Wyjście z git loga To po prostu wciśnięcie q

# Wpisałem git log i mam hash commita oraz info na jakim brancju się znalazł
commit 37615606a3263d0d0e51ee7bbb2ff8e49641d177 (HEAD -> master)
Author: Adrian Lazarski <adrian.lazarski7@gmail.com>
Date:   Sat Feb 17 14:04:51 2024 +0100

    bajo jajo


# Dodajemy do stagingu i commitujemy jednocześnie
git commit -am"komentarz"

# Przełączamy na/tworzymy nowy branch. Jeśli tworzyymy, to będą już na nim kopie commitów z brancha, na którym wpisujemy tę komendę.
git checkout -b"nazwa"

# Przełączamy na ostatni branch, na którym byliśmy
git checkout -

# Pokazuje jakie mamy branche w repozytorium
git branch

# Łączymy naszego brancha master(main) z jakimś roboczym branchem
git merge nazwa

# Lepiej na naszym feature branchu wpisać to, jeśli chodzi o łączenie:
git rebase master

# Wypychamy nasze lokalne repozytorium do jakiegoś zewnętrznego
git push -u origin master

# Jak aktualizujemy istniejące zew. repozytorium, to potem wystarczy już samo
git push

# Klonujemy zewnętrzne repozytorium do naszego folderu
git clone www.adres

# Pobieramy zmiany z zew. repo
git pull

# Git checkout nazwa.pliku
Cofa zmiany w pliku dodanym do stagingu.

# Cofnięcie zmian w scommitowanych plikach i cofnięcie commita
git reset --hard

``` 



#it