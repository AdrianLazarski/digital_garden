_Cascading Style Sheets_ (kaskadowe arkusze stylu) - język do opisu formy prezentacji stron internetowych. 



```html

Inline styling
<html style="background: blue">
</html>
Każda linijka musi być formatowana osobno. Rzadko się z tego korzysta.

Internal styling
<html>
	<head>
		<style>
			html {
			background: red;
			}
		</style>
	</head>
</html>
Przed nawiasem klamrowym jest selector.
Stylizacja dotyczy jednej strony.

External styling
<html>
	<head>
		<link
			rel='stylesheet'
			href='./styles.css'
		/>
	</head>
</html>
rel - relationship (jaka rola pliku)
href- lokalizacja treści
```



```css

/*CSS w osobnym pliku (tutaj o nazwie styles.css), który wygląda np. tak: */

html {
	background: red;
}


/*Element selector, który formatuje wszystkie h2 */

h2 {
	color: red;
}

/* Class selector 
Elementy w pliku html się grupuje w klasy poprzez nadanie im atrybutu w open tagu np.
<h2 class="nazwa">
*/

.nazwa-klasy{
	color: red
}

/* Id selector
Działa jak class selector ale tylko do klas jednoelementowych
np. <h2 id="main">
*/
#main{
	color: red;
}

/* Attribute selector
Wybierasz elementy o danym atrybucie. W przykładzie wybór paragrafów, które można podnosić kliknięciem <p draggable='true>
*/
p[draggable]{
	color: red;
}

/* Universal selector
Wybiera wszystko */
*{
	color: red;
}

```



#it