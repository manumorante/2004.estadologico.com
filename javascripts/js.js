




/*
     FILE ARCHIVED ON 20:10:06 mar 6, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:25:52 ago 14, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
// JavaScript Document

		function galeria(){
			url=prompt('Escribe la URL','http://');
			num=prompt('¿Cuantas fotos?','50');
			num0=prompt('Número de ceros','3');
			pre=prompt('¿Prefijo?','');
			tipo=prompt('¿JPG, GIF, PNG, ...?','jpg');
			inicio=prompt('Número inicial','1');
			for (var i=1;i<=num;i++) {
				largo = "" + i;
				ceros='';
				for (var n=0;n<num0-largo.length;n++) {
					ceros+='0';
				}
				document.write("<img src="+url+"/"+pre+ceros+i+"."+tipo+">")
			}
		}


		function win(theURL,winName,ancho,alto,barras) {
			var winl = (screen.width - ancho) / 2;
			var wint = (screen.height - alto) / 2;
			var paramet='top='+wint+',left='+winl+',width='+ancho+',height='+alto+',scrollbars='+barras+'';
			var splashWin=window.open(theURL,winName,paramet);
			splashWin.focus();
		}

		function imagen(ruta,ancho,alto,barras){
			win("/varios/imagen.asp?url="+ruta,"Imagen",ancho,alto,barras);
		}
		
		function popc(a){
			var enlace = a.getAttribute("href");
			var nombre = a.getAttribute("nombre");
			var ancho = a.getAttribute("ancho");
			var alto = a.getAttribute("alto");
			var barras = a.getAttribute("barras");
			if(isNaN(ancho)) ancho = 300;
			if(isNaN(alto)) alto = 250;
			if(isNaN(barras)) barras = 0;
			win(enlace,nombre,ancho,alto,barras);
		}
		
		function noEnFrames() {
			if(self.location != top.location) {
				top.location = self.location;
			}
		}

		// Gracias: Marc Palaueb.com
		try{
			void noEnFrames();
		}catch(unerror){}
