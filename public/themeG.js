window.onload = ()=>{
    document.querySelector('nav').style.backgroundColor='transparent';
    document.querySelector('#root').style.background = 'url("./images/GLENTYPOOL_background_Plan de travail 1 copie 8.svg")';
    document.querySelector('#root').style.backgroundPositionX = 'center'
    document.querySelector('#root').style.backgroundSize='cover';
    document.querySelectorAll('button')[1].style.backgroundColor= 'white';
    document.querySelectorAll('button')[1].style.color= 'black';
    document.querySelectorAll('button')[1].style.fontWeight= 'normal';
    document.querySelectorAll('button')[1].style.letterSpacing= '0.11em';
    window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('nav').style.background = "url('./images/Fichier 8.svg')";
      document.querySelector('nav').style.height='200px';
      document.querySelector('nav').style.top='0px';
      document.querySelector('nav a').style.height='100%';
      document.querySelector(".price").style.top='200px';

    } else {
      document.querySelector('nav').style.background = "none";
      document.querySelector('nav').style.height='100px';
      document.querySelector('nav a').style.height='155%';
      document.querySelector(".price").style.top='150px';
    }
  }

  const home = document.createElement("div")
  const trade = document.createElement("div")
  const farms = document.createElement("div")
  const gigapool = document.createElement("div")
  const github = document.createElement("div")
  const docs = document.createElement("div")
  const drop = document.createElement('div')

  const homel = document.createElement("a")
  const tradel = document.createElement("button")
  const farmsl = document.createElement("a")
  const gigapooll = document.createElement("a")
  const githubl = document.createElement("a")
  const docsl = document.createElement("a")
  const linkl1 = document.createElement("a")
  const linkl2 = document.createElement("a")


   homel.innerHTML= 'Home'
   tradel.innerHTML= 'Trade'
   farmsl.innerHTML= 'Farms'
   gigapooll.innerHTML= 'Giga Pool'
   githubl.innerHTML= 'Github'
   docsl.innerHTML= 'Docs'
   linkl1.innerHTML= 'Exchange'
   linkl2.innerHTML= 'Liquidity'


   homel.setAttribute("href", "/")
   linkl1.setAttribute("href", "https://exchange.glenty.com/#/swap")
   linkl2.setAttribute("href", "https://exchange.glenty.com/#/pool")
   farmsl.setAttribute("href", "/farms")
   gigapooll.setAttribute("href", "/gigapool")
   githubl.setAttribute("href", "https://github.com/glenty-protocol")
   docsl.setAttribute("href", "https://glenty.gitbook.io/glenty/")

   homel.setAttribute("class", "nav-links")
   tradel.setAttribute("class", "nav-links")
   trade.setAttribute("class", "dropiv")
   tradel.setAttribute("class", "dropbtn")
   farmsl.setAttribute("class", "nav-links")
   gigapooll.setAttribute("class", "nav-links")
   githubl.setAttribute("class", "nav-links")
   docsl.setAttribute("class", "nav-links")
   drop.setAttribute("class", "dropdown-content")


   home.appendChild(homel)
   trade.appendChild(tradel)
   trade.appendChild(drop)
   farms.appendChild(farmsl)
   gigapool.appendChild(gigapooll)
   github.appendChild(githubl)
   docs.appendChild(docsl)
   drop.appendChild(linkl1)
   drop.appendChild(linkl2)
   const heade = document.createElement('div')
   const nav = document.querySelector('nav')
   heade.appendChild(home)
   heade.appendChild(trade)
   heade.appendChild(farms)
   heade.appendChild(gigapool)
   heade.appendChild(github)
   heade.appendChild(docs)
   heade.classList.add('header-grid')

   document.querySelectorAll('nav svg')[2].style.width='310px';
   nav.insertBefore(heade, nav.childNodes[1])
   document.querySelector('#root div').querySelectorAll('div')[12].style.background='transparent';
   document.querySelector('#root div').querySelectorAll('div')[14].style.background='transparent';
   const socialL = document.querySelector('#root div').querySelectorAll('div')[17]
   window.setInterval(function(){
    if(true){
        socialL.classList.add('socialL');
    document.querySelector('#root').appendChild(document.querySelector('.socialL'));
    }
  }, 2000);
  document.querySelector('button').remove();
  setTimeout(function(){
    document.querySelector('#root div').querySelectorAll('div')[18].classList.add('lang')
    document.querySelector('.lang').querySelector('button').querySelector('svg').style.fill = 'white';
    document.querySelector('.lang').querySelector('button').querySelector('div').style.color = 'white';
    document.querySelector('nav').insertBefore(document.querySelector('.lang'), document.querySelector('nav').childNodes[2]);
  }, 3500);

  document.querySelector('h1').style.marginTop='20%';

  document.querySelector('.searchInputG').addEventListener('keyup',function(){
    const searchbox = document.querySelector('input.searchInputG');
    const Cnames = document.querySelector('.grid-Gigapool').childNodes
    for(let i =0; i < Cnames.length; i++){
      Cnames[i].querySelector('.tokenHeader').innerText.toLowerCase().includes(searchbox.value.toLowerCase())?Cnames[i].style.display='':Cnames[i].style.display='none'
    }
    })
    document.querySelector('.searchInputO').addEventListener('keyup',function(){
      const searchbox = document.querySelector('input.searchInputO');
      const Cnames = document.querySelector('.grid-Out').childNodes
      for(let i =0; i < Cnames.length; i++){
        Cnames[i].querySelector('.tokenHeader').innerText.toLowerCase().includes(searchbox.value.toLowerCase())?Cnames[i].style.display='':Cnames[i].style.display='none'
      }
      })
}

function mobileC(){
    window.onload = ()=>{
    
    document.querySelector('#root').style.background = 'url("./images/Fichier 17.svg")';
    document.querySelector('#root').style.backgroundPositionX = 'center'
    document.querySelector('#root').style.backgroundSize='cover';
  /*nav*/
    document.querySelector('nav').style.backgroundColor='transparent';
    window.setInterval(function(){document.querySelector('nav svg').style.width='120px';},5000);
    document.querySelector('nav').style.border='none';
    document.querySelector('nav').lastChild.querySelector('button').style.backgroundColor= 'white';
    document.querySelector('nav').lastChild.querySelector('button').style.color= '#312783';
    document.querySelector('nav').lastChild.querySelector('button').style.fontWeight= 'normal';
    document.querySelector('nav').lastChild.querySelector('button').style.letterSpacing= '0.11em';
    document.querySelector('nav').lastChild.querySelector('button').innerText='Connect Wallet';
    document.querySelector('h1').remove();
  document.querySelector('h2').remove();

   /* const logoM = document.createElement('img');
    logoM.setAttribute("src", "./images/GLENTY_WHITE_LOGO.png");
    document.querySelector('nav').insertBefore(logoM, document.querySelector('nav').firstChild);
    logoM.style.height='100%';
    logoM.style.width='150px';
    logoM.style.marginTop='10px';
   logoM.addEventListener('click',function(){
      window.location.replace('/')
    })*/
    function price(){
        setTimeout(document.querySelector('nav button').click(),2000);
        document.querySelector('.price')?setTimeout(document.querySelector('#root').appendChild(document.querySelector('.price')), 3000):false
        setTimeout(document.querySelector('nav button').click(), 3500);
        setTimeout(  document.querySelector('nav button').remove(), 3700);
    }

     price();
    window.onscroll = function() {hideNav()};
  
    function hideNav() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("nav").style.display = "none";
      } else {
        document.querySelector("nav").style.display = "flex";
      }
    }}

    function createFooter(){
      /*footer*/
      const fixedFooter = document.createElement('div');
      fixedFooter.classList.add('fixedFooter'); 
      const TradeM = document.createElement('a');
      const gigapoolM = document.createElement('a');
      const Top100M = document.createElement('a');
      const MoreM = document.createElement('a');
    
      TradeM.classList.add('footerLinks');
      Top100M.classList.add('footerLinks');
      MoreM.classList.add('footerLinks');
      gigapoolM.classList.add('footerLinks');
    
    
      TradeM.setAttribute('href','https://exchange.glenty.com/#/swap');
      Top100M.setAttribute('href','/top100');
      gigapoolM.setAttribute('href','/gigapool');
    
    
      const tradeImg = document.createElement('img');
      const top100Img = document.createElement('img');
      const moreImg = document.createElement('img');
      const gigapoolImg = document.createElement('img');
    
    
      tradeImg.setAttribute('src','./images/trade.svg');
      top100Img.setAttribute('src','./images/TOP100-Icon.svg');
      moreImg.setAttribute('src','./images/more.svg');
      gigapoolImg.setAttribute('src','./images/gigapool.svg');
    
    
      tradeImg.classList.add('footerImg');
      top100Img.classList.add('footerImg');
      moreImg.classList.add('footerImg');
      gigapoolImg.classList.add('footerImg');
    
    
      const tradeT = document.createElement('p');
      const top100T = document.createElement('p');
      const moreT = document.createElement('p');
      const gigapoolT = document.createElement('p');
    
    
      tradeT.innerText='Trade';
      top100T.innerText='Top100';
      moreT.innerText='More';
      gigapoolT.innerText='Gigapool';
    
    
    
      TradeM.appendChild(tradeImg);
      Top100M.appendChild(top100Img);
      MoreM.appendChild(moreImg);
      gigapoolM.appendChild(gigapoolImg);
    
    
      TradeM.appendChild(tradeT);
      Top100M.appendChild(top100T);
      MoreM.appendChild(moreT);
      gigapoolM.appendChild(gigapoolT);
    
    
    
      fixedFooter.appendChild(TradeM);
      fixedFooter.appendChild(gigapoolM);
      fixedFooter.appendChild(Top100M);
      fixedFooter.appendChild(MoreM);
      document.querySelector('#root').appendChild(fixedFooter);
    }
    
    function createMenuFooter(){
      /*footer*/
      const fixedMenuFooter = document.createElement('div');
      fixedMenuFooter.classList.add('moreMenu'); 
      const docsM = document.createElement('a');
      const githubM = document.createElement('a');
      const FarmsM = document.createElement('a');
      const ipoM = document.createElement('a');
    
    
    
      docsM.classList.add('moreLinks');
      githubM.classList.add('moreLinks');
      FarmsM.classList.add('moreLinks');
      ipoM.classList.add('moreLinks');
    
    
      githubM.setAttribute('href','https://github.com/glenty-protocol');
      docsM.setAttribute('href','https://glenty.gitbook.io/glenty/');
      ipoM.setAttribute('href','/ico');
      FarmsM.setAttribute('href','/farms');
    
    
      const githubImg = document.createElement('img');
      const docsImg = document.createElement('img');
      const farmsImg = document.createElement('img');
      const ipoImg = document.createElement('img');
    
    
      docsImg.setAttribute('src','./images/DOCS.svg');
      ipoImg.setAttribute('src','./images/IPO.svg');
      farmsImg.setAttribute('src','./images/farms.svg');
      githubImg.setAttribute('src','./images/GITHUB.svg');
    
      docsImg.classList.add('footerImg');
      ipoImg.classList.add('footerImg');
      farmsImg.classList.add('footerImg');
      githubImg.classList.add('footerImg');
    
      const githubT = document.createElement('p');
      const ipoT = document.createElement('p');
      const docsT = document.createElement('p');
      const farmT = document.createElement('p');
    
      githubT.innerText='Github';
      docsT.innerText='Docs';
      farmT.innerText='Farms';
      ipoT.innerText='IPO';
    
    
      githubM.appendChild(githubImg);
      docsM.appendChild(docsImg);
      ipoM.appendChild(ipoImg);
      FarmsM.appendChild(farmsImg);
    
    
      githubM.appendChild(githubT);
      ipoM.appendChild(ipoT);
      docsM.appendChild(docsT);
      FarmsM.appendChild(farmT);
    
      /*style*/
      /*fixedMenuFooter.style.borderTop='3px solid #989fac';*/
      fixedMenuFooter.style.borderBottom='3px solid #989fac';
      docsM.style.borderBottom='none';
    
      fixedMenuFooter.appendChild(FarmsM);
      fixedMenuFooter.appendChild(ipoM);
      fixedMenuFooter.appendChild(githubM);
      fixedMenuFooter.appendChild(docsM);
    
      document.querySelector('#root').appendChild(fixedMenuFooter);
    
    }
    
    window.addEventListener('load', function () {
      createFooter();
      createMenuFooter();    
      document.querySelectorAll('.footerLinks')[3].addEventListener('click',function(){
        document.querySelector('.moreMenu').style.display === "grid"? 
        document.querySelector('.moreMenu').style.display='none':
        document.querySelector('.moreMenu').style.display='grid'
      })
      document.querySelector('.searchInputG').addEventListener('keyup',function(){
        const searchbox = document.querySelector('input.searchInputG');
        const Cnames = document.querySelectorAll('.grid-Gigapool .coin')
        for(let i =0; i < Cnames.length; i++){
          Cnames[i].querySelector('div').innerText.toLowerCase().includes(searchbox.value.toLowerCase())?Cnames[i].parentElement.style.display='':Cnames[i].parentElement.style.display='none'
        }
        })
        document.querySelector('.searchInputO').addEventListener('keyup',function(){
          const searchbox = document.querySelector('input.searchInputO');
          const Cnames = document.querySelectorAll('.grid-Out .coin')
          for(let i =0; i < Cnames.length; i++){
            Cnames[i].querySelector('div').innerText.toLowerCase().includes(searchbox.value.toLowerCase())?Cnames[i].parentElement.style.display='':Cnames[i].parentElement.style.display='none'
          }
          })
    })

  
}
window.innerWidth < 900 ? mobileC() : false