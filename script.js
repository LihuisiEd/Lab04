function convertir(){
			var valore = parseInt(document.getElementById("valor").value);
			var resultado = 0;
			var dolar = 3.70;
			var  euro = 4.04;
			
			if (document.getElementById("uno").checked) {
				resultado = valore / dolar;
				alert("El cambio de soles a dólares es: $" + resultado.toFixed(2));
			} else if (document.getElementById("dos").checked) {
				resultado = valore / euro;
				alert("El cambio de soles a euros es: €" + resultado.toFixed(2));
			} else{
				alert("Completa el formulario")
			}
}