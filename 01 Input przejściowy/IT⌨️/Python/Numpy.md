Biblioteka do [[Python]] dodająca obsługę wielowymiarowych tablic ([[Array]]): [[Tabela|tabel]] i [[01 Input przejściowy/Matematyka/Działy/Algebra/Macierz|macierzy]].


```python
import numpy as np

----
my_list = [1, 2, 3]
arr = np.array(my_list)

arr #In
array([1, 2, 3]) #out
----
my_mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
mat = np.array(my_mat)

mat #in 
array([
	  [1, 2, 3],
	  [4, 5, 6],
	  [7, 8, 9]]
) #out
-------
np.arange(0, 10) #in 
array([0, 1, 2, 3, 4, 5, 6, 7 , 8, 9]) #out

np.arange(0, 10, 2) #in 
array([0, 2, 4, 6, 8, 10]) #out
----
np.zeros(3) #in 
array([0., 0., 0.]) #out

np.zeros((4, 4)) #in 
array([[0., 0., 0., 0.],
	   [0., 0., 0., 0.],
	   [0., 0., 0., 0.],
	   [0., 0., 0., 0.]]) #out

np.ones((2, 3))  #in 
arrary([
		[1, 1, 1],
		[1, 1, 1]]) #out
-----
np.linspace(0, 5, 10) #in
array([0. , 0.55555556, 1.11111111, 1.66666667, 2.22222222, 2.77777778, 3.33333333, 3.88888889, 4.44444444, 5. ]) #out 

----
np.eye(4) #in Macierz jednostkowa

array([
	   [ 1., 0., 0., 0.], 
	   [ 0., 1., 0., 0.], 
	   [ 0., 0., 1., 0.], 
	   [ 0., 0., 0., 1.]]) #out
------
np.random.rand(5,5) #in

array([[ 0.66660768, 0.87589888, 0.12421056, 0.65074126, 0.60260888], 
	   [ 0.70027668, 0.85572434, 0.8464595 , 0.2735416 , 0.10955384], 
	   [ 0.0670566 , 0.83267738, 0.9082729 , 0.58249129, 0.12305748], 
	   [ 0.27948423, 0.66422017, 0.95639833, 0.34238788, 0.9578872 ], 
	   [ 0.72155386, 0.3035422 , 0.85249683, 0.30414307, 0.79718816]]) #out

np.random.randn(2) #Losuje próbkę z rozkładu normalnego. Znaczy to, że mogą też być liczby ujemne.
array([-0.27954018, 0.90078368]) #out

np.random.randint(1,100,10) #in Zakres 1-99 włącznie, 10 wyników
array([13, 64, 27, 63, 46, 68, 92, 10, 58, 24]) #out
-----
arr = np.arange(25) #Do zmiennej przypisujemy listę od 0 do 24 włącznie.
arr.reshape(5,5) #in Liczba elementów musi się zgadzać, inaczej wyskoczy błąd.
array([[ 0, 1, 2, 3, 4], 
	   [ 5, 6, 7, 8, 9], 
	   [10, 11, 12, 13, 14], 
	   [15, 16, 17, 18, 19], 
	   [20, 21, 22, 23, 24]]) #out
---
ranarr = np.random.randint(0,50,10)
ranarr #in
array([10, 12, 41, 17, 49, 2, 46, 3, 19, 39]) #out

ranarr.max() #in
49 #out

np.max(ranarr)#to samo

ranarr.argmax() #in 
4 #out Numer indeksu maksymalnego argumentu

ranarr.min() #in
2 #out
----------------
arr = np.arange(25)

arr.shape #in
(25,) #out Wynik wskazuje, że arr to jednowymiarowy wektor. I wciąż lista, ale jeszcze nie macierz.

arr.reshape(1,25)
([[ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24]]) #Out Jednowymiarowa macierz o 1 wierszu i 25 kolumnach. Specyfika Numpy, w matematyce macierze są raczej min. dwuwymiarowe.

arr.reshape(25,1) #25 wierszy, jedna kolumna
array([[ 0],
       [ 1],
       [ 2],
       [ 3],
       [ 4],
       [ 5],
       [ 6],
       [ 7],
       [ 8],
       [ 9],
       [10],
       [11],
       [12],
       [13],
       [14],
       [15],
       [16],
       [17],
       [18],
       [19],
       [20],
       [21],
       [22],
       [23],
       [24]])

arr.dtype #sprawdzanie typu danych dla danego obiektu
dtype('int32') #przykładowy wynik
------
arr = np.arange(0,11)

arr #in 
array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10]) #out

arr[0:5]=100 #broadcasting, czyli podmiana w tym przypadku pierwszych pięciu elementów
arr #in
array([100, 100, 100, 100, 100,   5,   6,   7,   8,   9,  10])
----
slice_of_arr = arr[0:6] #Wycięcie od do
slice_of_arr #in 
array([ 0,  1,  2,  3,  4,  5]) #out
----
slice_of_arr[:] = 99 #Podmiana wszystkich elementów na 99.
slice_of_arr #in 
array([ 99, 99, 99, 99, 99]) #out
arr #in 
array([99, 99, 99, 99, 99, 6, 7, 8, 9, 10]) #out UWAGA! PODMIENIA TEŻ W ORYGINALNEJ ZMIENNEJ, Z KTÓREJ POCHODZI SLICE

arr_copy = arr.copy #Po prostu pracuj na kopiach, jak nie chcesz zmieniać oryginału.
---
arr_2d = np.array([[5,10,15],[20,25,30],[35,40,45]])
arr_2d #in
array([[ 5, 10, 15],
       [20, 25, 30],
       [35, 40, 45]]) #out
 
arr_2d[1][0] #in
20 #out 
arr_2d[1,0] #To samo

arr_2d[2] #in 
[35, 40, 45] #out Pojedynczy wiersz

arr_2d[:, 2] #in 
[15, 30, 45] #out Pojedyncza kolumna

arr_2d[:2,1:] #in Wszystko do drugiego rzędu (bez niego oczywiście), wszystko od pierwszej kolumny (tu już włącznie) w górę 
array([[10, 15],
       [25, 30]]) #out
-----
arr = np.arange(0,11)
arr #in 
array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10])

bool_arr = arr > 5 
bool_arr #in
array([ False,  False,  False,  False,  False,  False,  True,  True,  True,  True, True], dtype=bool) #out

arr[bool_arr] #in Indeksujemy arr za pomocą prawdziwych wartości bool_arr
array([6, 7, 8, 9, 10]) #out 

arr[arr>5] #in Dokładnie to samo, w końcu to się kryje pod zmienną bool_arr
array([6, 7, 8, 9, 10]) #out 
----
arr = np.arange(0,11)
arr + arr #in Dodawanie arrayów
array([ 0,  2,  4,  6,  8,  10,  12,  14,  16,  18, 20]) #out 

arr * arr #Pomnoży jedną komórkę przez jedną komórkę
array([ 0,  1,  4,  9, 16, 25, 36, 49, 64, 81]) #out

#W Numpy da się dzielić przez zero
arr/arr
array([ nan,   1.,   1.,   1.,   1.,   1.,   1.,   1.,   1.,   1.]) #Te kropki znaczą, że z int zrobił się float. Jest tak zawsze przy dzieleniu w Numpy.
nan #to Non a number

1/arr
array([        inf,  1.        ,  0.5       ,  0.33333333,  0.25      ,
        0.2       ,  0.16666667,  0.14285714,  0.125     ,  0.11111111]) #inf to nieskończoność

np.sqrt(arr) #in Pierwiastek (square root)
array([ 0.        ,  1.        ,  1.41421356,  1.73205081,  2.        ,
        2.23606798,  2.44948974,  2.64575131,  2.82842712,  3.        ]) #out

np.exp(arr) # Eksponent czyli 2.71828 (liczba eulera) do potęgi danej liczby
array([  1.00000000e+00,   2.71828183e+00,   7.38905610e+00,
         2.00855369e+01,   5.45981500e+01,   1.48413159e+02,
         4.03428793e+02,   1.09663316e+03,   2.98095799e+03,
         8.10308393e+03])

np.sin(arr) #sinusy
array([ 0.        ,  0.84147098,  0.90929743,  0.14112001, -0.7568025 ,
       -0.95892427, -0.2794155 ,  0.6569866 ,  0.98935825,  0.41211849])

np.log(arr) #logarytmy
array([       -inf,  0.        ,  0.69314718,  1.09861229,  1.38629436,
        1.60943791,  1.79175947,  1.94591015,  2.07944154,  2.19722458])
---
mat = np.arange(1,26).reshape(5,5)
mat
array([[ 1,  2,  3,  4,  5],
       [ 6,  7,  8,  9, 10],
       [11, 12, 13, 14, 15],
       [16, 17, 18, 19, 20],
       [21, 22, 23, 24, 25]])

mat.sum(axis=0) #Sumowanie kolumn
array([55, 60, 65, 70, 75])
np.sum(mat, axis=0) #Równoważny zapis
mat.sum(axis=1) #Sumowanie wierszy

```






#it #python #biblioteka #data_science