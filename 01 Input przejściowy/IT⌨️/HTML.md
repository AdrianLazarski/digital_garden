_HyperText Markup Language_, hipertekstowy [język znaczników](obsidian://open?vault=Obsidian%20Vault&file=IT%E2%8C%A8%EF%B8%8F%2FJ%C4%99zyk%20znacznik%C3%B3w), stosowany do tworzenia dokumentów hipertekstowych.

Składa się z <tagów> otaczających treść. Treść plus tag/i to element.


```html

Deklaracja używanej wersji. W obrębie tego boilerplate'a się daje całą treść (można przywołać w visual studio wykrzyknikiem!):
<!DOCTYPE html>
<html lang='pl'>
	Język treści nie jest istotny dla czytających, ale programy lektorskie dla niewidomych korzystają z tego typu informacji.

	<head>
	Tu się nie daje żadnych elementów do wyświetlania, ale umieszcza się informacje o stronie.
		<meta charset="UTF-8"> 
		<title> Tytuł strony</title>
	</head>

	<body>
	Cała treść strony.
	
		<h1>Nagłówki od 1 do 6 </h1>
		<p>Pargrafy</p>
	
		Void elements (nie mają closing tagów)
		<hr /> Horizontal rule, dodaje kreskę oddzielającą fragmenty strony. Slash też
		nieobowiązkowy.
		<br /> Breaking rule, przejście do następnego wiersza w obrębie paragrafu.
		<img src='link do obrazu' alt='Nazwa obrazu (pamiętaj o ślepych)/>


		<a href='https://www.google.com/'>Hiperłącze (anchor element)</a>
		

		<ul> Unordered list (with bullet points)
			<li>List element 1</li>
			<li>List element 1</li>
			<li>List element 1</li>
		</ul>
		
		<ol> Ordered list (z numeracją)
			<li>List element 1</li>
			<li>List element 1</li>
			<li>List element 1</li>
		</ol>
	</body>
</html>
```




#it