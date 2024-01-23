
$(document).ready(function(){
    $('#formulario').submit(function(event){
        event.preventDefault(); // prevent default impede o comportamento normal do formulario de atualizar;
        
        const tarefa= $('#tarefa').val(); // obtendo o nome da tarefa que foi inserida do imput

        $('#itensLista').append('<li>' + tarefa + '</li>'); // adiciona a tarefa a lista

        $('#tarefa').val(''); // limpa o campo de entrada

    // para cada elemento da lista adiciona um toggle para
    // adicionar / remover classe "completed"

        $('li').each(function(){
            console.log(this)
            $(this).on('click',function(){
                $(this).toggleClass('completed')
            })
        })
    
    });


});


// para comitar uma linhas ou mais Ctrl + K + C

