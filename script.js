// variaveis:

const menuList = document.getElementById("menu-list") /* Aqui determinei uma variavel e chamei do html*/

menuList.style.maxHeight = "0px" /* alterei o estilo aqui pelo css usando media-responsive*/


// A BAIXO CRIO ENTÃO AGORA, UMA FUNÇÃO DO JAVA SCRIPT

function clicarMenu(){
    // vou criar uma verificação

   /*(se)*/ if(menuList.style.maxHeight == "0px"){
               menuList.style.maxHeight = "120px"}

            else{
              menuList.style.maxHeight = "0px"
            }   


}


// cuidado com os sinais de igual 1 igual atribui um valor 2 sinais de igual compara os valores 