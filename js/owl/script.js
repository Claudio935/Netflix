/* dados elenco */
var tipo=['fantasia','Ação',
'Aventura',
'suspense',
'Romance',
'terror',
'ficção',
"dança"]

var elenco = ['Vivien Leigh',
'Clark Gable',
'Leslie Howard',
'Olivia de Havilland',
'Hattie McDaniel',
'Thomas Mitchell',
'Barbara O Neil',
'Evelyn Keyes']
var elenco1=['Leonardo DiCaprio',
'Kate Winslet','Billy Zane',
'Bernard Hill','Victor Garber',
'Kathy Bates']
var elenco2=[
    'Patrick', 
    'Demi Moore',
    'Whoopi Goldberg',	
    'Tony Goldwyn',	
    'Rick Aviles',	
    'Gail Boggs',	
    'Armelia McQueen',	
    'Vincent Schiavelli',	
    'Bruce Jarchow',	
    'Stephen Root',	
   'Laura Drake'	

]
var elenco3=[ 
'Humphrey Bogart', 
'Ingrid Bergman', 
'Paul Henreid',
'Claude Rains',
'Conrad Veidt',
'Sydney Greenstreet', 
'Peter Lorre',
'Dooley Wilson'
]
var elenco4=[
    "Matthew Broderick",
    "Mia Sara",
   "Alan Ruck",
    "Jeffrey Jones",
    "Jennifer Grey",
    "Charlie Sheen",
    "Kristy Swanson",
    "Edie McClurg",
    "Cindy Pickett",
    "Lyman Ward"
]
var elenco5=["Michael J. Fox",
    "Christopher Lloyd",
    "Lea Thompson",
    "Crispin Glover",
    "Thomas F. Wilson"]
    var elenco6=["Jack Nicholson",
    "Shelley Duvall",
    "Danny Lloyd",
    "Scatman Crothers"]
    var elenco7=[
    "Charlton Heston",
    "Roddy McDowall",
    "Kim Hunter"]
  

    var elenco8=["Marlon Brando",
    "Al Pacino",
    "James Caan",
    "Richard Castellano",
    "Robert Duvall",
    "Sterling Hayden",
    "John Marley",
    "Richard Conte",
    "Diane Keaton"]
    var elenco9=[	
    "John Travolta",
    "Samuel L. Jackson",
    "Uma Thurman",
    "Harvey Keitel",
    "Tim Roth",
    "Amanda Plummer",
    "Maria de Medeiros",
    "Ving Rhames",
    "Eric Stoltz",
    "Rosanna Arquette",
    "Christopher Walken",
    "Bruce Willis"]
    var elenco10=["Patrick Swayze",
    "Jennifer Grey",
    "Jerry Orbach",
    "Cynthia Rhodes"]


/* função para entrar em outra pagina */
function newPage(n){
    window.location.href="/style/info.html"
    var storage = localStorage;
    storage.setItem('escolha',n)
   
}
/* função para injetar as informações na nova pasta a depender do item clicado */

jQuery(function($) {
var sinopse = document.getElementsByClassName("sinopse")[0];
var imagem =document.getElementsByClassName("imagem")[0];
var titulo = document.getElementsByClassName("titulo")[0];
var atores = document.getElementsByClassName("elenco")[0]
var diretor = document.getElementsByClassName("direitor")[0]
var genero = document.getElementsByClassName("genero")[0]
var lancamento = document.getElementsByClassName("lancamento")[0]
var tempo = document.getElementsByClassName("tempo")[0]
var indicacao = document.getElementsByClassName("indicacao")[0]

switch(localStorage.getItem('escolha')){
    case '1':
        titulo.innerHTML="<h1>E o vento levou ...<h1>"
        sinopse.innerHTML= "<p>Scarlett O'Hara é uma jovem mimada que consegue tudo o que quer. No entanto, algo falta em sua vida: o amor de Ashley Wilkes, um nobre sulista que deve se casar com a sua prima Melanie. Tudo muda quando a Guerra Civil americana explode e Scarlett precisa lutar para sobreviver e manter a fazenda da família.<p>"
        imagem.innerHTML="<img src=/img/vento2.jpg></img>"
        diretor.innerHTML="<h5>Victor Fleming<h5>"
        lancamento.innerHTML="<h4>1940<h4>"
        indicacao.innerHTML="<h4>L</h4>"
        tempo.innerHTML="<h4>238 min</h4>"
        for(c=2;c<5;c++){
            genero.innerHTML += `<h5>${tipo[c]}</h5>`
        }
        elenco.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        
        break
        
        
    case '2':
        titulo.innerHTML="<h1>Titanic<h1>"
        sinopse.innerHTML = "<p>Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica jornada do Titanic, em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.<p>"
        imagem.innerHTML="<img src=/img/Titanic.jpg></img>"
        diretor.innerHTML="<h5>James Cameron<h5>"
        lancamento.innerHTML="<h4>1998<h4>"
        indicacao.innerHTML="<h4>12</h4>"
        tempo.innerHTML="<h4>194 min</h4>"
        for(c=2;c<5;c++){
            genero.innerHTML += `<h5>${tipo[c]}</h5>`
        }
        elenco1.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
    case '3':
        titulo.innerHTML="<h1>Ghost - Do Outro Lado da Vida<h1>"
        sinopse.innerHTML= "<p>Sam Wheat é um jovem executivo apaixonado por sua namorada, Molly. Ele acaba morto em um assalto, mas seu espírito não vai para o outro plano e descobre que Molly também corre perigo. Para salvá-la, Sam pede ajuda a uma médium que consegue ouvi-lo.<p>"
        imagem.innerHTML="<img src=/img/ghost.jpg></img>"
        diretor.innerHTML="<h5>Jerry Zucker</h5>"
        lancamento.innerHTML="<h4>1990</h4>"
        indicacao.innerHTML="<h4>12</h4>"
        tempo.innerHTML="<h4>127 min</h4>"
        for(c=2;c<5;c++){
            genero.innerHTML += `<h5>${tipo[c]}</h5>`
        }
        elenco2.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
    case '4':
        titulo.innerHTML="<h1>O Magico de OZ<h1>"
        sinopse.innerHTML = "<p>Dorothy e seu cachorro Totó são levados para a terra mágica de Oz quando um ciclone passa pela fazenda de seus avós no Kansas. Eles viajam em direção à Cidade Esmeralda para encontrar o Mago Oz e no caminho encontram um Espantalho, que precisa de um cérebro, um Homem de Lata sem um coração e um Leão Covarde que quer coragem. O Mago pede ao grupo que tragam a vassoura da Bruxa Malvada do Oeste a fim de ganharem sua juda.<p>"
        imagem.innerHTML="<img src=/img/oz.jpg></img>"
        diretor.innerHTML="<h5>JVictor Fleming</h5>"
        lancamento.innerHTML="<h4>1939</h4>"
        indicacao.innerHTML="<h4>L</h4>"
        tempo.innerHTML="<h4>101 min</h4>"
        for(c=0;c<3;c=c+2){
            genero.innerHTML += `<h5>${tipo[c]}</h5>`
        }
        elenco3.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
    case '5':
        titulo.innerHTML="<h1>Casablanca</h1>"
        sinopse.innerHTML= "<p>Durante a Segunda Guerra, um exilado norte-americano encontra refúgio na cidade de Casablanca e passa a administrar uma casa noturna. Ele reencontra uma antiga paixão, que agora está casada e precisa de ajuda para fugir dos nazistas.<p>"
        imagem.innerHTML="<img src=/img/casablaca2.jpg></img>"
        diretor.innerHTML="<h5>	Michael Curtiz</h5>"
        lancamento.innerHTML="<h4>1942</h4>"
        indicacao.innerHTML="<h4>12</h4>"
        tempo.innerHTML="<h4>102 min</h4>"
        for(c=3;c<5;c=c+2){
            genero.innerHTML += `<h5>${tipo[c]}</h5>`
        }
        elenco4.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
    case '6':
        titulo.innerHTML="<h1>Curtindo a vida Adoidado<h1>"
        sinopse.innerHTML = "<p>O adolescente Ferris Bueller decide sair da rotina e engana seus pais fingindo estar doente para poder matar aula. Ele convence sua namorada, Sloane, e seu melhor amigo, Cameron, a se juntarem a ele no passeio até Chicago, usando a Ferrari do pai de Cameron. Mas nem tudo é perfeito: o diretor da escola sabe que Ferris está mentindo e vai atrás dele.<p>"
        imagem.innerHTML="<img src=/img/curtindo.jpg></img>"
        diretor.innerHTML="<h5>	John Hughes</h5>"
        lancamento.innerHTML="<h4>1986</h4>"
        indicacao.innerHTML="<h4>L</h4>"
        tempo.innerHTML="<h4>102 min</h4>"
        genero.innerHTML = `<h5>${tipo[2]}</h5>`
        
        
        elenco5.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
    case '7':
        titulo.innerHTML="<h1>De volta ao futuro<h1>"
        sinopse.innerHTML = "<p>Marty McFly, um adolescente de uma pequena cidade californiana, é transportado para a década de 1950 quando a experiência do excêntrico cientista Doc Brown dá errado. Viajando no tempo em um carro modificado, Marty conhece versões jovens de seus pais e precisa fazer com que eles se apaixonem, ou então ele deixará de existir. Para complicar, Marty precisa voltar para casa a tempo de salvar o cientista.<p>"
        imagem.innerHTML="<img src=/img/devolta.jpg></img>"
        diretor.innerHTML="<h5>Robert Zemeckis</h5>"
        lancamento.innerHTML="<h4>1985</h4>"
        indicacao.innerHTML="<h4>L</h4>"
        tempo.innerHTML="<h4>116 min</h4>"
    
        for(c=2;c<7;c=c+4){
            genero.innerHTML += `<h5>${tipo[c]}</h5>`
        }
        
        elenco6.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
    case '8':
        titulo.innerHTML="<h1>O Iluminado<h1>"
        sinopse.innerHTML = "<p>Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições. Jack não consegue escrever e as visões de Danny se tornam mais perturbadoras. O escritor descobre os segredos sombrios do hotel e começa a se transformar em um maníaco homicida, aterrorizando sua família.<p>"
        imagem.innerHTML="<img src=/img/iluminado.jpg></img>"
        diretor.innerHTML="<h5>Stanley Kubrick</h5>"
        lancamento.innerHTML="<h4>1980</h4>"
        indicacao.innerHTML="<h4>18</h4>"
        tempo.innerHTML="<h4>144 min</h4>"
    
        for(c=3;c<6;c=c+2){
            genero.innerHTML += `<h5>${tipo[c]}</h5>`
        }
        
        elenco8.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
    case '9':
        titulo.innerHTML="<h1>O Planeta dos Macacos<h1>"
        sinopse.innerHTML = "<p>O astronauta Brent (James Franciscus) é enviado em busca de Taylor (Charlton Heston) e seus companheiros. Ele encontra Nova (Linda Harrison), a companheira de Taylor, e juntos acabam por encontrar uma sociedade de humanos mutantes que moram no subterrâneo e adoram uma bomba que é capaz de destruir todo o planeta.<p>"
        imagem.innerHTML="<img src=/img/PlanetodosMacacos.jpg></img>"
        diretor.innerHTML="<h5>Ted Post</h5>"
        lancamento.innerHTML="<h4>1970</h4>"
        indicacao.innerHTML="<h4>12</h4>"
        tempo.innerHTML="<h4>95 min</h4>"
    
        for(c=2;c<7;c=c+4){
            genero.innerHTML += `<h5>${tipo[c]}</h5>`
        }
        
        elenco9.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
    
    case '10':
        titulo.innerHTML="<h1>O Poderoso Chefão<h1>"
        sinopse.innerHTML = "<p>Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.<p>"
        imagem.innerHTML="<img src=/img/chefe.jpg></img>"
        diretor.innerHTML="<h5>Francis Ford Coppola</h5>"
        lancamento.innerHTML="<h4>1972</h4>"
        indicacao.innerHTML="<h4>18</h4>"
        tempo.innerHTML="<h4>175 min</h4>"
    
    
            genero.innerHTML = `<h5>${tipo[6]}</h5>`
        
        
        elenco10.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
    case '11':
        titulo.innerHTML="<h1>Pulp Fiction<h1>"
        sinopse.innerHTML = "<p>Vincent Vega (John Travolta) e Jules Winnfield (Samuel L. Jackson) são dois assassinos profissionais trabalham fazendo cobranças para Marsellus Wallace (Ving Rhames), um poderosos gângster. Vega é forçado a sair com a garota do chefe, temendo passar dos limites; enquanto isso, o pugilista Butch Coolidge (Bruce Willis) se mete em apuros por ganhar luta que deveria perder.<p>"
        imagem.innerHTML="<img src=/img/pulpfiction.jpg></img>"
        diretor.innerHTML="<h5>	Quentin Tarantino</h5>"
        lancamento.innerHTML="<h4>1994</h4>"
        indicacao.innerHTML="<h4>18</h4>"
        tempo.innerHTML="<h4>154 min</h4>"
    
    
            genero.innerHTML = `<h5>${tipo[1]}</h5>`
        
        
        elenco10.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break
        case '12':
        titulo.innerHTML="<h1>Ritmo quente<h1>"
        sinopse.innerHTML = "<p>Na esperança de curtir sua juventude, uma jovem fica decepcionada ao descobrir que vai passar o verão de 1963 com os pais em um resort na sonolenta região de Catskills. Mas sua sorte muda quando ela conhece o instrutor de dança do resort, Johnny, um rapaz com um passado bem diferente do dela. Quando ele a coloca como sua nova parceira, os dois acabam se apaixonando.<p>"
        imagem.innerHTML="<img src=/img/ritmoquente.jpg></img>"
        diretor.innerHTML="<h5>	Quentin Tarantino</h5>"
        lancamento.innerHTML="<h4>1987</h4>"
        indicacao.innerHTML="<h4>L</h4>"
        tempo.innerHTML="<h4>100 min</h4>"
    
    
            genero.innerHTML = `<h5>${tipo[7]}</h5>`
        
        
        elenco10.forEach(person =>{
            atores.innerHTML += `<h5>${person}</h5>` 
        })
        break


}
});

