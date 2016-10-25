var cargarPagina = function() {
	$("#camera").change(capturar);
	$("#camera-perfil").change(capturarPerfil);
};

$(document).ready(cargarPagina);

var capturar = function(event) {
	var user = crearElemento("<div>", ["user"]);
	
	var contact = crearElemento("<div>", ["contact"]);

	var image = crearElemento("<div>", ["image", "inline"]);

	var imageUser = crearElemento("<img>", ["image"]);
	imageUser.attr("src", "img/perfil/zuck.jpg")

	var nombre = crearElemento("<span>zuck</span>", ["tip-user"]);

	var contenedorImg = crearElemento("<div>", ["image-contenedor"]);

	var imageNotice = crearElemento("<img>", ["image-contact"]);
	imageNotice.attr("id", "notice");

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

subirFoto = function() {
	if(event.target.files && event.target.files[0]){
		var reader = new FileReader();

		reader.onload = function(event){
			var recuperar = event.target.result;
			$("#notice").attr("src", recuperar);
		}
		reader.readAsDataURL(event.target.files[0]);
	}
};

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