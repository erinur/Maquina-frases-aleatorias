// se carga el documento y comienza la funcion jQuery
$(document).ready(function(){
  // se carga una primera frase y autor de forma aleatoria llamando a la funcion correspondiente
  randomQuote(0, 500)

  //esta es la funcion que carga las frases y autores de forma aleatoria
  function randomQuote(x, y){
    //primero llama al achivo JSON donde se encuentran las frases y autores, y ejecuta una funcion
    $.getJSON('./frases.json', function (frases) {
      //la funcion siguiente arroja una numero aleatorio que se corresponderá con una de las posiciones del objeto JSON, donde hay una frase y un autor concreto, y a continuacion declara las variables frase escogida(chosedQuote), y autor escogido(chosedAuthor)
      let randomNumber = Math.floor(Math.random()*frases.quotes.length);
      let chosedQuote = frases.quotes[randomNumber].quote.toString();
      let chosedAuthor = frases.quotes[randomNumber].author.toString();
      //a continuación inserta las variables creadas anteriormente en su posición en el archivo html
      $('#quote-box').animate({opacity:0}, x, function(){
        $('#quote').html(chosedQuote);
        $('#author').html(chosedAuthor);
      });
      $('#quote-box').animate({opacity:1}, y);
    });
  };

  //esta es la funcion que hace cambiar los colores en la web
  function randomColor(){
    //se declaran 3 variables aleatorias, con valor entre 0 y 255, que se corresponderan con los valores a asignar al color en formato rgb, p.e., rbg(255, 255, 0)
    var R = Math.floor(Math.random()*256);
    var G = Math.floor(Math.random()*256);
    var B = Math.floor(Math.random()*256);
    var colors = 'rgb('+R+','+G+','+B+')';
    //a continuacion se cambian los colores de fondo de la web y el color de los textos, así como los de los botones de redes sociales y de la nueva frase
    $('body').animate({backgroundColor: colors, color: colors}, 1000);
    $('.button').animate({backgroundColor: colors}, 1000);
  };
  //con este evento establecemos que cuando se haga click en el boton 'new quote' se carge una nueva frase y autor, y cambien los colores de la web
  $('#new-quote').click(function(){  
    randomQuote(500, 1500)
    randomColor()
  })

});
