abrirJanela();
    function abrirJanela(){
    
      $('.btn').click(function(e){
          e.stopPropagation();
          $('.bg').show();
      });
    }
//função para abrir modal2 página de projetos
    abrirJanela2();
    function abrirJanela2(){
    
      $('.btn5').click(function(e){
          e.stopPropagation();
          $('.bg5').show();
      });
    }

//função para fechar modal página de projetos
    verificarCliqueFechar();
    function verificarCliqueFechar(){
      var el = $('.closeBtn');
      el.click(function(){
        $('.bg').fadeOut();
        $('.bg2').fadeOut();
        $('.bg3').fadeOut();
        $('.bg4').fadeOut();
      });
      $('.form').click(function(e){
        e.stopPropagation();
      });
    }


//função para fechar modal2 página de projetos

    verificarCliqueFechar2();
    function verificarCliqueFechar2(){
      var el = $('.closeBtn2');
      el.click(function(){
        $('.bg5').fadeOut();
        $('.bg6').fadeOut();
        $('.bg7').fadeOut();
        $('.bg8').fadeOut();

      });
      $('.form2').click(function(e){
        e.stopPropagation();
      });
    }

   
      

//comferindo cada conteúdo do modal
      
      $( ".a1" ).click(function(event) {
        if ($( this ).is( ".btn2" ) ) {
            $('.bg2').show();
        }
        event.preventDefault();
      });

      $( ".a2" ).click(function(event) {
        if ($( this ).is( ".btn3" ) ) {
            $('.bg3').show();
        }
        event.preventDefault();
      });

      $( ".a3" ).click(function(event) {
        if ($( this ).is( ".btn4" ) ) {
            $('.bg4').show();
        }
        event.preventDefault();
      });

      $( ".a4" ).click(function(event) {
        if ($( this ).is( ".btn5" ) ) {
            $('.bg5').show();
        }
        event.preventDefault();
      });

      $( ".a5" ).click(function(event) {
        if ($( this ).is( ".btn6" ) ) {
            $('.bg6').show();
        }
        event.preventDefault();
      });

      $( ".a6" ).click(function(event) {
        if ($( this ).is( ".btn7" ) ) {
            $('.bg7').show();
        }
        event.preventDefault();
      });

      $( ".a7" ).click(function(event) {
        if ($( this ).is( ".btn8" ) ) {
            $('.bg8').show();
        }
        event.preventDefault();
      });
