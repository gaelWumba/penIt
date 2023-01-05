(function($){
    $.fn.wysiwyg = function(){
        var settings = {
            btns : [
                bold = '<button class="btn btn_bold" type="button"></button>',
                italic = '<button class="btn btn_italic" type="button"></button>',
                striked = '<button class="btn btn_striked" type="button"></button>',
                color = '<input type="color" id="colorPicker" class="btn btn_color" value="#f5f5f5"></input>',
                fontSize = '<input type="text" class="btn btn_fontSize" placeholder="16"></input>',
                links = '<button class="btn btn_link" type="button"></button>',
                gauche = '<button class="btn btn_gauche" type="button"></button>',
                droite = '<button class="btn btn_droite" type="button"></button>',
                left = '<button class="btn btn_left" type="button"></button>',
                right = '<button class="btn btn_right" type="button"></button>',
                center = '<button class="btn btn_center" type="button"></button>',
                justify = '<button class="btn btn_justify" type="button"></button>',
            ],
            userinput : '<input type="link" id="li" class="btn btn_color" ></input>',
        };
        return this.append(
            settings.btns
        );
    }
    $('.bare').wysiwyg()
})(jQuery);

$(document).ready(function() {
    /* Style du texte selectioner - Gras - Italique - Barré -  */
    $('.btn_bold').click(function(){
        if ($('textarea').css("font-weight") == "100") {
            $('textarea').css("font-weight", "600");
        } else {
            $('textarea').css("font-weight", "100");
        }
        
    })

    $('.btn_italic').click(function(){
        if ($('textarea').css("font-style") == "normal") {
            $('textarea').css("font-style", "italic");
        } else {
            $('textarea').css("font-style", "normal");
        }
    })

    $('.btn_striked').click(function(){
        if($('textarea').css('text-decoration', 'none')){
            $('textarea').css('text-decoration', 'line-through');
        }
        $('.btn_striked').click(function(){
            if($('textarea').css('text-decoration', 'line-through')){
                $('textarea').css('text-decoration', 'none');
            }
        })

        /* if ($('textarea').css("text-decoration") == "none") {
            $('textarea').css("text-decoration", "line-through");
        } else {
            $('textarea').css("text-decoration", "none");
        } */
        
    })
  
    /* deplacement du textes */
    $('.btn_gauche').click(function(){
        $('textarea').css('text-indent', '0px');
    })
    $('.btn_droite').click(function(){
        $('textarea').css('text-indent', '50px');
    })

    /* choix de la couleur */
    $('.btn_color').on('input change',function(){
        $('textarea').css('color', $(this).val());
    });

    /* taille du texte */
    $('.btn_fontSize').on('input change',function(){
        $('textarea').css('font-size', $(this).val() + 'px');
    });

    
    /* Changer le text en lien */
    $('.btn_link').click(function(){
        var pattern = new RegExp(/^http([s]?):\/\/.*/)
        var userInput = prompt("Veillez entrer un lien");
        
        var links = $('<a>',{
            href: userInput,
            target: '_blank',
            click: function(){ BlahFunc( options.rowId );return false;}
        }).prop('href');


        if(pattern.test(userInput)){
            $('textarea').val($('textarea').val() + ' ' + links);
        }
    })
    /* Alignement du textes selectioner - Gauche - Droite - Centre - Jistufier - */
    $('.btn_left').click(function(){
        $('textarea').css('text-align', 'left');
    })
    $('.btn_right').click(function(){
        $('textarea').css('text-align', 'right');
    })
    $('.btn_center').click(function(){
        $('textarea').css('text-align', 'center');
    })
    $('.btn_center').click(function(){
        $('textarea').css('text-align', 'center');
    })
    $('.btn_justify').click(function(){
        $('textarea').css('text-align', 'justify');
    })



    let check = true;
    window.addEventListener("beforeunload", function (e) {
        /* Pour que cette action soit annulée il faut au moins un clic de l'utilisateur sur la page */
        /* Annule l'action */
        if(check == false){
            e.preventDefault();
            e.returnValue = 'Le texte que vous avez entré n\'a pas été enregistré !';
        }
    });

    var timerID = setInterval(function() {
        localStorage.clear();
        localStorage.setItem("valeur",document.getElementsByTagName("textarea")[0].value);
        check = true;
    }, 20 * 1000);

    let texte = localStorage.getItem("valeur");
    document.getElementsByTagName("textarea")[0].value = texte;


    document.getElementById("save").addEventListener("click", () =>{
        localStorage.clear();
        localStorage.setItem("valeur",document.getElementsByTagName("textarea")[0].value);
        check = true;
    })

    document.getElementsByTagName("textarea")[0].addEventListener("input", () =>{
        check = false;
    })
    
});
