Biblioteka do [[Python]] zbudowana na [[Numpy]]. Służy do analizy, oczyszczania i wizualizacji danych. 

```python
import numpy as np
import pandas as pd

labels = ['a','b','c']
my_list = [10,20,30]
arr = np.array([10,20,30])
d = {'a':10,'b':20,'c':30}

pd.Series(data=my_list) #Tworzenie serii. Jako data mogą być wykorzystane też stringi, czy nawet funkcje typu print, sum itd.
0    10
1    20
2    30
dtype: int64
#Automatycznie przyporządkowuje elementom my_list numery indeksu od 0.

pd.Series(data=my_list,index=labels) #Jako indeksów używamy teraz labels.
a    10
b    20
c    30
dtype: int64

pd.Series(my_list,labels) #Zapis równoważny.

pd.Series(arr) #Działa tak samo, jak zrobienie serii z pythonowej listy.
0    10
1    20
2    30
dtype: int64

pd.Series(d) #Jako wartości i indeksy bierze wartości i klucze słownika
a    10
b    20
c    30
dtype: int64
----
ser1 = pd.Series([1,2,3,4],index = ['USA', 'Germany','USSR', 'Japan'])
ser2 = pd.Series([1,2,5,4],index = ['USA', 'Germany','Italy', 'Japan'])

ser1 + ser2 #in
Germany    4.0 #out, z int robi float. Kolejność wyników alfabetyczna.
Italy      NaN
Japan      8.0
USA        2.0
USSR       NaN
dtype: float64
------
from numpy.random import randn
np.random.seed(101) #Ustawienie ziarna pozwoli na "losowanie" tego samego zestawu liczb

df = pd.DataFrame(randn(5,4),index='A B C D E'.split(),columns='W X Y Z'.split())
df = pd.DataFrame(randn(5,4),index=['A', 'B', 'C', 'D', 'E'],columns=['W', 'X', 'Y', 'Z']) # Alternatywny zapis
df #out:
```
![[Pasted image 20240503162510.png]]

Wiersze i kolumny w dataframe to serie.

```python
df['W'] #Wywołanie kolumny W
df[['W', 'X']] #Wywołanie więcej, niż jednej kolumn

df['new'] = df['W'] + df['Y'] #Dodanie nowej kolumny
df.drop('new',axis=1) #Usunięcie KOLUMNY. Domyślny axis, którego nie trzeba pisać =0 i odpowiada za wiersze. Nie podmienia jednak dla danego df w innych kontektsach.
df.drop('new',axis=1,inplace=True) #Usuwa WSZĘDZIE, na stałe.

df.loc['A'] #Wywołanie wiersza
df.iloc['0'] #To samo, ale zamiast labela używam indeksu danego wiersza.

df.loc['A', 'Z'] #Wybranie konkretnej komórki. 
df.loc[['A', 'B'], ['Y', 'Z']] #Wybranie konkretnego zakresu.

df > 0 # Wyrzuca "tabelkę" z wartościami logicznymi w komórkach: true or false/
booldf = df > 0 # Przypisuje ten dataframe do zmiennej
df[booldf] #Wywołuję znów df z wartościami liczbowymi, ale tam, gdzie był false, teraz jest NaN
df[df > 0] #Skrócenie dwóch poprzednich do jednego kroku.

df[(df['W']>0) & (df['Y'] > 1)] #Łączenie warunków. Symbol, nie napis and!
df[(df['W']>0) | (df['Y'] > 1)] #Or 
sal[sal['EmployeeName']=='JOSEPH DRISCOLL'] #Przykład wybierania po stringu
sal[sal['TotalPayBenefits']==sal['TotalPayBenefits'].max()]

df.reset_index() #Poprzedni indeks trafi do kolumny o nazwie index, a z boku zostanie dodany wyjściowy indeks numeryczny. Pamiętaj o inplace.
df.set_index('Nazwa kolumny', inplace=True) #Robi indeks z zawartości wybranej kolumny.

# Index Levels
outside = ['G1','G1','G1','G2','G2','G2'] #Pierwsza kolumna
inside = [1,2,3,1,2,3] #Druga kolumna
hier_index = list(zip(outside,inside)) #Lista tupli [('G1', 1), ('G1', 2), ('G1', 3), ('G2', 1), ('G2', 2), ('G2', 3)]
hier_index = pd.MultiIndex.from_tuples(hier_index) #Tworzy multiindeks z tupli
df = pd.DataFrame(np.random.randn(6,2),index=hier_index,columns=['A','B']) #Data frame z losowych liczb o wymiarach 6x2. Za indeks bierze zdefiniowany wyżej multiindeks, kolumnom nadaje nazwy A i B.

#Efekt taki
|    |   A     |   B    |
------------------------
|G1|1|0.153661 |0.167638|
   |2|-0.765930|0.962299|
   |3|0.902826 |-0.537909|
|G2|1|-1.549671|0.435253|
   |2|1.259904 |-0.447898|
   |3|0.266207 |0.412580|

df.loc['G1'] #Wywoła cała G1
df.loc['G1'].loc[1] #Wywoła wiersz nr 1 z sekcji G1

df.index.names = ['Group','Num']

|         |   A     |   B    |
|Group|Num|
------------------------
|G1   |1  |0.153661 |0.167638|
      |2  |-0.765930|0.962299|
      |3  |0.902826 |-0.537909|
|G2   |1  |-1.549671|0.435253|
      |2  |1.259904 |-0.447898|
      |3  |0.266207 |0.412580|

df.xs(1,level='Num') #Wybierze jedynki z kolumny Num

df.dropna() #wyrzuca wiersze bez brakujących danych
df.dropna(axis=1) #wyrzuca kolumny bez brakujących danych
df.dropna(tresh=2) #wyrzuca wiersze bez co najmniej dwoch wypełnionych komórek
------
df = pd.DataFrame({'A':[1,2,np.nan],#tak wyglądającą brakujące dane
                  'B':[5,np.nan,np.nan],
                  'C':[1,2,3]})

|  |A  |B  |C| #tak mniej więcej będzie wyglądać tabelka
|--|---|---|--|
|0| 1.0|5.0|1|
|1| 2.0|NaN|2|
|2| NaN|NaN|3|


df.fillna(value='FILL VALUE') #Wypełniamy brak danych wartością
df['A'].fillna(value=df['A'].mean()) #Wypełniamy kolumnę A wartością średniej z kolumny A
---------
data = {'Company':['GOOG','GOOG','MSFT','MSFT','FB','FB'],
       'Person':['Sam','Charlie','Amy','Vanessa','Carl','Sarah'],
       'Sales':[200,120,340,124,243,350]}
df = pd.DataFrame(data) #Dataframe z powyzszego słownika

||Company|Person|Sales| #wywołanie df
|-|---   |---    |---|
|0|GOOG  |Sam    |200|
|1|GOOG  |Charlie|120|
|2|MSFT  |Amy    |340|
|3|MSFT  |Vanessa|124|
|4|FB    |Carl   |243|
|5|FB    |Sarah  |350|

df.groupby('Company') #Grupowanie w dataframe po wartości z kolumny Company
by_comp = df.groupby("Company") #Przypisanie pogrupowanego df do zmiennej
by_comp.mean() #użycie metody "średnia" na zmiennej:
|Company|Sales| 
|FB     |296.5|
|GOOG   |160.0|
|MSFT   |232.0|

df.groupby('Company').mean() #Powyższe kroki w jednej linijce.

by_comp.std() #Odchylenie standardowe
by_comp.min() #Wartość minimalna
by_comp.max() #Wartość maksymalna
by_comp.count() #Liczba wartości
by_comp.describe() #Cały zestaw statystycznych własności. Wszystkie poprzednie plus kwartyle.
by_comp.describe().transpose() #Jw. ale poziomo
by_comp.describe().transpose()['GOOG'] #Jw. ale dla konkretnej firmy
```

![[Pasted image 20250402195534.png]]
```python
pd.concat([df1,df2,df3]) #Konkatenacja (połączenie). Kolumny zgadzają się co do liczby i nazw, więc po prostu wydłuży je o kolejne dane.
```
![[Pasted image 20250402222033.png|200]]

```python
pd.concat([df1,df2,df3],axis=1) #Konkatencja poziomo. Idzie po skosie, bo tak były podane indeksy dla df2 i df3. Skoro są wiersze do numeru 11, to dla np. df1 po prostu wstawia brak wartości.
```
![[Pasted image 20250402222400.png|]]


```python
left = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],
                     'A': ['A0', 'A1', 'A2', 'A3'],
                     'B': ['B0', 'B1', 'B2', 'B3']})
   
right = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],
                          'C': ['C0', 'C1', 'C2', 'C3'],
                          'D': ['D0', 'D1', 'D2', 'D3']})

pd.merge(left,right,how='inner',on='key') #Scala 2 dfy. Inner jest domyślny, nie trzeba pisać.

  |A | B|key|C |D |
  |--|--|- -|--|--|
|0|A0|B0|K0 |C0|D0|
|1|A1|B1|K1 |C1|D1|
|2|A2|B2|K2 |C2|D2|
|3|A3|B3|K3 |C3|D3|
-------------------------------------------------------------------
left = pd.DataFrame({'key1': ['K0', 'K0', 'K1', 'K2'],
                     'key2': ['K0', 'K1', 'K0', 'K1'],
                        'A': ['A0', 'A1', 'A2', 'A3'],
                        'B': ['B0', 'B1', 'B2', 'B3']})
    
right = pd.DataFrame({'key1': ['K0', 'K1', 'K1', 'K2'],
                               'key2': ['K0', 'K0', 'K0', 'K0'],
                                  'C': ['C0', 'C1', 'C2', 'C3'],
                                  'D': ['D0', 'D1', 'D2', 'D3']})
print(pd.merge(left, right, on=['key1', 'key2'])) #Łączy ale tylko pasujące wersy
  |A |B |key1|key2|C |D |
|-|--|--|----|--- |--|--|
|0|A0|B0|K0  |K0  |C0|D0|
|1|A2|B2|K1  |K0  |C1|D1|
|2|A2|B2|K1  |K0  |C2|D2|
-------------------------------------------------------------------
print(pd.merge(left, right, how='outer', on=['key1', 'key2'])) #Podobne do poprzedniego, ale pokazuje też kombinacje z brakującymi wartościami
  |A  |B  |key1|key2|C  |D  |
  |---|---|----|----|---|---|
|0|A0 |B0 |K0  |K0  |C0 |D0 |
|1|A1 |B1 |K0  |K1  |NaN|NaN|
|2|A2 |B2 |K1  |K0  |C1 |D1 |
|3|A2 |B2 |K1  |K0  |C2 |D2 |
|4|A3 |B3 |K2  |K1  |NaN|NaN|
|5|NaN|NaN|K2  |K0  |C3 |D3 |

pd.merge(left, right, how='right', on=['key1', 'key2']) #Tylko kombinacje bez brakujących wartości w right
-------------------------------------------------------------------
left = pd.DataFrame({'A': ['A0', 'A1', 'A2'],
                     'B': ['B0', 'B1', 'B2']},
                      index=['K0', 'K1', 'K2']) 

right = pd.DataFrame({'C': ['C0', 'C2', 'C3'],
                    'D': ['D0', 'D2', 'D3']},
                      index=['K0', 'K2', 'K3'])
left.join(right) #Do left dołącza pasujące, ale kolumnami.
   |A |B |C  |D  |
   |--|--|---|---|
|K0|A0|B0|C0 |D0 |
|K1|A1|B1|NaN|NaN|
|K2|A2|B2|C2 |D2 |

left.join(right, how='outer') #Wydłuży indeks lewego o brakujące elementy z indeksu drugiego
-------------------------------------------------------------------
df = pd.DataFrame({'col1':[1,2,3,4],'col2':[444,555,666,444],'col3':['abc','def','ghi','xyz']})
| |col1|col2|col3|
  |----|----|----|
|0|   1|444 |abc |
|1|   2|555 |def |
|2|   3|666 |ghi |
|3|   4|444 |xyz |

df['col2'].unique() #Pokazuje listę unikalnych wartości z col2, czyli 444 pokaże tylko raz.
len(df['col2'].unique()) #Ile jest unikalnych wartości
df['col2'].nunique() #To samo, co len, ale funkcja wbudowana w pandas
df['col2'].value_counts() #Pokazuje ile razy występuje poszczególna wartość z col2
df['col2'].value_counts().head(5)#Jw. 5 pierwszych wartości

df[(df['col1']>2) & (df['col2']==444)] #Wybiera wiersze z wartością col1 większą od 2 i z wartością col2 równą 444. Df na zewnątrz istotny, bo inaczej nie będzie dataframe a będą wartości boolowskie.
-------------------------------------------------------------------
def times2(x): #Przykład prostej customowej funkcji
    return x*2
df['col1'].apply(times2) #Apply pozwala nam użyć customowej funkcji.
df['col3'].apply(len) #Wbudowane funkcje też można tak aplikować (ale nie trzeba).
df['col2'].apply(lambda x: x*2) #Można też tu doraźnie wpisać funkcję, jeśli nie mamy jej wcześniej zdefiniowanej
-------------------------------------------------------------------
del df['col1', axis=1] #Usuwa kolumnę col1. Do wierszy axis=0
df.columns #Wyrzuca listę nazw kolumn

df.index #Wyrzuca listę numerów indeksu
RangeIndex(start=0, stop=4, step=1) #Zero wlicza, 4 nie!

df.sort_values(by='col2') #Sortuje df ze względu na wartości w col2. W tym przypadku 444, 444, 555 itd. Oryginalne indeksy zachowane, więc kolejnośc 0, 3, 1, 2.
df.fillna('FILL') #Wypełnia braki w df stringiem.
-------------------------------------------------------------------
data = {'A':['foo','foo','foo','bar','bar','bar'],
     'B':['one','one','two','two','one','one'],
       'C':['x','y','x','y','x','y'],
       'D':[1,3,2,5,4,1]}
df = pd.DataFrame(data)
  |A  |B  |C|D|
  |---|---|-|-|
|0|foo|one|x|1|
|1|foo|one|y|3|
|2|foo|two|x|2|
|3|bar|two|y|5|
|4|bar|one|x|4|
|5|bar|one|y|1|
df.pivot_table(values='D',index=['A', 'B'],columns=['C']) #Tabela przestawna
    | C:| x | y | 
|---|---|---|---|
| A | B |---|---|
|---|---|---|---|
|bar|one|4.0|1.0|
    |two|NaN|5.0|
|foo|one|1.0|3.0|
    |two|2.0|NaN|
#Z D pobiera wartości, z A i B robi indeksy, z C kolumny.
--------------------------------------
df = pd.read_csv('example.csv') #Odczytuje plik (dużo formatów do wyboru), ale musi być w tym folderze, co plik, w którym piszę kod.
df.to_csv('sejw.csv') #Zapisuje w to samo miejsce. Też różne formaty do wyboru.
df.to_csv('sejw.csv',index=False) #Jw. ale nie dodane kolumny z pandasowym indeksem do danych w pliku.
--------------------------------------
#Wymaga biblioetki xlrd, w Anacondzie jest automatycznie zainstalowana z Pandas
pd.read_excel('Excel_Sample.xlsx', sheetname=="Sheet1") #Da się wybrać konkretny arkusz z excela
--------------------------------------
# HTML wymaga zainstalowanych bibliotek htmllib5,lxml i BeautifulSoup4
df = pd.read_html('http://www.fdic.gov/bank/individual/failed/banklist.html')

```


#it #python #biblioteka #data_science