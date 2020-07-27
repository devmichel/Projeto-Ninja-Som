$(document).ready(function() {
   
    // Slider do banner
    $('#slider ul').cycle({
        speed: 1500,
        prev: '#setaLeft',
        next: '#setaRight',
        pager: '.pager',
        pagerAnchorBuilder: function(index, DOMelement) {
            return `<div></div>`
        }
    });
     
        let teste = $('.infor h4').innerHTML
        console.log(teste)

    // Efeito de Abrir o Modal
    // Evento de colocar o conteudo no Modal
    $('.card-highlights img.foto').click(function(){
        $('.modal').addClass('active')
        $('.modal-box').addClass('show')

        $('img.imgModal').attr({
            'src':'./src/img/'+ $(this).data('foto') +'.png'
        })

        let name = $(this).attr('alt')
        document.getElementById('name').innerHTML = name;
    })

    // Efeito de Fechar o Modal
    $('#btn-close-modal').click(function(){
        $('.modal').removeClass('active')
    })
   
    // Integração do JSON

    $.getJSON("produtos.json", function(data){
        console.log(data);
    })

});