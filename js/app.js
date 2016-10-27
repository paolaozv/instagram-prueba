var cargarPagina = function() {
	$("#camera").change(capturar);
	$("#visible").click(visible);
	$("#visto").click(mostrar);
	$("#camera-perfil").change(capturarPerfil);
	/*$(window).scroll(fixed);*/
};

$(document).ready(cargarPagina);

var contador = 1;
/*var altura = $(".menu").offset().top;*/
var foto = localStorage.getItem("fotoAlmacenada");

var capturar = function(event) {
	var user = crearElemento("<div>", ["user"]);
	
	var contact = crearElemento("<div>", ["contact"]);

	var image = crearElemento("<div>", ["image", "inline"]);

	var imageUser = crearElemento("<img>", ["image"]);
	imageUser.attr("src", "img/perfil/zuck.jpg")

	var nombre = crearElemento("<span>zuck</span>", ["tip-user"]);

	var contenedorImg = crearElemento("<div>", ["image-contenedor"]);

	var imageNotice = crearElemento("<img>", ["image-contact"]);
	imageNotice.attr("id", "notice" + contador);

	var like = crearElemento("<div>", ["like"]);

	var heart = crearElemento("<span>", ["icon-heart", "icon-coment"]);

	var bubble = crearElemento("<span>", ["icon-bubble", "icon-coment"]);

	$("#noticias").prepend(user);
	user.append(contact);
	contact.append(image);
	image.append(imageUser);
	contact.append(nombre);
	user.append(contenedorImg);
	contenedorImg.append(imageNotice);
	user.append(like);
	like.append(heart);
	like.append(bubble);

	subirFoto();
};

var capturarPerfil = function(event) {
	var user = crearElemento("<div>", ["user"]);
	
	var contact = crearElemento("<div>", ["contact"]);

	var image = crearElemento("<div>", ["image", "inline"]);

	var imageUser = crearElemento("<img>", ["image"]);
	imageUser.attr("src", "img/perfil/zuck.jpg")

	var nombre = crearElemento("<span>zuck</span>", ["tip-user"]);

	var contenedorImg = crearElemento("<div>", ["image-contenedor"]);

	var imageNotice = crearElemento("<img>", ["image-contact"]);
	imageNotice.attr("id", "notice" + contador);

	$("#lineal").prepend(user);
	user.append(contact);
	contact.append(image);
	image.append(imageUser);
	contact.append(nombre);
	user.append(contenedorImg);
	contenedorImg.append(imageNotice);

	subirFoto();
};

var subirFoto = function() {
	if(event.target.files && event.target.files[0]){
		var reader = new FileReader();

		reader.onload = function(event){
			var recuperar = event.target.result;
			$("#notice" + contador).attr("src", recuperar);
			localStorage.setItem("fotoAlmacenada", recuperar);
			contador++;
		}
		reader.readAsDataURL(event.target.files[0]);
	}
};

var visible = function() {
	$("#lineal").hide();
	$("#table").show();
};

var mostrar = function() {
	$("#table").hide();
	$("#lineal").show();
}

/*var fixed = function() {
	if ( $(window).scrollTop() > altura ){
		$(".menu").addClass("menu-fixed");
	} else {
		$(".menu").removeClass("menu-fixed");
	}
};*/

crearElemento = function(etiqueta, clases = []) {
	var elemento = $(etiqueta);
	var l = clases.length;
	if(l > 0) {
		for(var i = 0; i < l; i++) {
			elemento.addClass(clases[i]);
		}
	}
	return elemento;
};