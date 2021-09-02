
var elenco = ['Vivien Leigh',
'Clark Gable',
'Leslie Howard',
'Olivia de Havilland',
'Hattie McDaniel',
'Thomas Mitchell',
'Barbara O Neil',
'Evelyn Keyes']
function newPage(n){
    window.location.href="/style/info.html"
    var storage = localStorage;
    storage.setItem('escolha',n)
   
}

jQuery(function($) {
var sinopse = document.getElementsByClassName("sinopse")[0];
var imagem =document.getElementsByClassName("imagem")[0];
var titulo = document.getElementsByClassName("titulo")[0];
var elenco1 = document.getElementsByClassName("elenco")[0]
switch(localStorage.getItem('escolha')){
    case '1':
        titulo.innerHTML="<h1>E o vento levou ...<h1>"
        sinopse.innerHTML= "<p>Scarlett O'Hara é uma jovem mimada que consegue tudo o que quer. No entanto, algo falta em sua vida: o amor de Ashley Wilkes, um nobre sulista que deve se casar com a sua prima Melanie. Tudo muda quando a Guerra Civil americana explode e Scarlett precisa lutar para sobreviver e manter a fazenda da família.<p>"
        imagem.innerHTML="<img src=/img/vento2.jpg></img>"
        elenco.forEach(person =>{
            elenco1.innerHTML += `<h5>${person}</h5>` 
        })
        ele
        break
        
        
    case '2':
        sinopse.innerHTML = "<p>Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica jornada do Titanic, em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.<p>"
        imagem.innerHTML="<img src=/img/Titanic.jpg></img>"
        break
    case '3':
        sinopse.innerHTML= "<p>Sam Wheat é um jovem executivo apaixonado por sua namorada, Molly. Ele acaba morto em um assalto, mas seu espírito não vai para o outro plano e descobre que Molly também corre perigo. Para salvá-la, Sam pede ajuda a uma médium que consegue ouvi-lo.<p>"
        imagem.innerHTML="<img src=/img/ghost.jpg></img>"
        break
    case '4':
        sinopse.innerHTML = "<p>Dorothy e seu cachorro Totó são levados para a terra mágica de Oz quando um ciclone passa pela fazenda de seus avós no Kansas. Eles viajam em direção à Cidade Esmeralda para encontrar o Mago Oz e no caminho encontram um Espantalho, que precisa de um cérebro, um Homem de Lata sem um coração e um Leão Covarde que quer coragem. O Mago pede ao grupo que tragam a vassoura da Bruxa Malvada do Oeste a fim de ganharem sua juda.<p>"
        imagem.innerHTML="<img src=/img/oz.jpg></img>"
        break
    case '5':
        sinopse.innerHTML= "<p>Durante a Segunda Guerra, um exilado norte-americano encontra refúgio na cidade de Casablanca e passa a administrar uma casa noturna. Ele reencontra uma antiga paixão, que agora está casada e precisa de ajuda para fugir dos nazistas.<p>"
        imagem.innerHTML="<img src=/img/casablaca2.jpg></img>"
        break
    case '6':
        sinopse.innerHTML = "<p>O adolescente Ferris Bueller decide sair da rotina e engana seus pais fingindo estar doente para poder matar aula. Ele convence sua namorada, Sloane, e seu melhor amigo, Cameron, a se juntarem a ele no passeio até Chicago, usando a Ferrari do pai de Cameron. Mas nem tudo é perfeito: o diretor da escola sabe que Ferris está mentindo e vai atrás dele.<p>"
        imagem.innerHTML="<img src=/img/curtindo.jpg></img>"
        break
    case '7':
        sinopse.innerHTML = "<p>iae<p>"

        break
    case '8':
        sinopse.innerHTML = "<p>iae<p>"
        break
    case '9':
        sinopse.innerHTML = "<p>iae<p>"
        break
    case '10':
        sinopse.innerHTML = "<p>iae<p>"
        break
    case '11':
        sinopse.innerHTML = "<p>iae<p>"
        break
    case '12':
        sinopse.innerHTML = "<p>iae<p>"
        break

}
});

