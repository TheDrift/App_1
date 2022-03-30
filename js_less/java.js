const database = [
    {
        id:1,
        name:'Naruto Uzumaki',
        power:'Nine tails',
        village:'Konoha',
        level:'7th Hokage',
        clan:'Uzumaki',
        image:'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif'
    },
    {   
        id:2,
        name:'Sasuke Uchiha',
        power:'Rinnegan + MS',
        village:'Konoha',
        level:'Shadow Hokage',
        clan:'Uchiha',
        image:'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif '
    },
    {
        id:3,
        name:'Kakashi Hatake',
        power:'Purple Chidori + MS',
        village:'Konoha',
        level:'6th Hokage',
        clan:'White Claw',
        image:'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif'
    },
    {
        id:4,
        name:'Minato Namikaze',
        power:'Rasengan + Yellow flash Fuuijin',
        village:'Konoha',
        level:'4th Hokage',
        clan:'Namikaze',
        image:'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif'
    },
    {
        id:5,
        name:'Itachi Uchiha',
        power:'MS + Genjutsu',
        village:'Konoha',
        level:'Unlimited',
        clan:'Akatsuki',
        image:'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif'
    },
    {
        id:6,
        name:'Madara Uchiha',
        power:'MS + Six Path',
        village:'Konoha',
        level:'Destroyer',
        clan:'Akatsuki',
        image:'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380'
    },
    {
        id:7,
        name:'Hashirama Senju',
        power:'Wood Style + Regeneration',
        village:'Konoha',
        level:'God of War',
        clan:'Senju',
        image:'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif'
    },
    {
        id:8,
        name:'Pain (Tendo)',
        power:'Six path',
        village:'Hidden Rain',
        level:'God',
        clan:'Akatsuki',
        image:'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif'
    },
    {
        id:9,
        name:'Commando A',
        power:'Light shield',
        village:'Hidden Cloud',
        level:'4th Hokage',
        clan:'Lighter',
        image:'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif'
    },
    {
        id:10,
        name:'Gaara',
        power:'Shukakus Land',
        village:'Hidden Land',
        level:'5th Kazekage',
        clan:'Land',
        image:'https://i.gifer.com/C393.gif'
    },
    {
        id:11,
        name:'Kisame Hoshikage',
        power:'White Shark + Water Style',
        village:'Hidden Rain',
        level:'Untail bijuu',
        clan:'Akatsuki',
        image:'https://steamuserimages-a.akamaihd.net/ugc/941711796106927460/EDA08FFEF3AFDFFCD5241FD00926BCB4DAF47C09/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    },
    {
        id:12,
        name:'Killer B',
        power:'Eight Tail + Katana',
        village:'Hidden Cloud',
        level:'Rap God',
        clan:'Lighter',
        image:'https://qph.fs.quoracdn.net/main-qimg-8380be95c048107f587b8a5ebf70fd9f'
    },    
    
]
const $container = document.querySelector('.row')
const $search = document.querySelector('.search')
const $select = document.querySelector('.select')
const $appBtn = document.querySelector('.applyBtn')
const $colInput = document.querySelector('.colorInt')
const $imgInput = document.querySelector('.imageInt')
const $siderBAr = document.querySelector('.sidebarBtn')
const $side = document.querySelector('.sideBar')
window.addEventListener('load' , ()=>{
  if(!localStorage.getItem('gods')){
    localStorage.setItem('gods' , JSON.stringify(database))
  }else{
    const archon = JSON.parse(localStorage.getItem('gods'))
    const godsWithId = archon.map((item, index) =>{
      return {...item , id:index }  
    }) 
    localStorage.setItem('gods' , JSON.stringify(godsWithId))
  }
})
window.addEventListener('load', () =>{
  if(localStorage.getItem('auth') === 'false'){
    window.open('index.html', '_self')
  }
})
window.addEventListener('load' , cardTemplate(JSON.parse(localStorage.getItem('gods'))))
function cardTemplate(base){
  const card = base.map(({id, image, name}) =>{
    return `
      <div class="col-12 col-sm-6 col-md-6 col-xl-4 mt-4">
        <div class="card-header text-center text-primary bg-dark mt-4">
          <h3>${name}</h3>
        </div>
        <div class="card-image">
          <img src=${image} style="height:300px" class="w-100" />
        </div>
        <div class="card-footer bg-dark" style="">
          <button onclick="More(${id})" class="btn btn-outline-primary w-100"> More </button>
        </div>
      </div>
    `
  }).join('')
  $container.innerHTML = card
}
$select.addEventListener('change' , e=>{
  var selectedValue = e.target.value

  if(selectedValue === 'Name'){
    $search.setAttribute('placeholder' , 'Search by Name')
  }else if(selectedValue === 'Power'){
    $search.setAttribute('placeholder' , 'Search by Power')
  }else if(selectedValue === 'Village'){
    $search.setAttribute('placeholder' , 'Search by Village')
  }else if(selectedValue === 'Level'){
    $search.setAttribute('placeholder' , 'Search by Level')
  }else if(selectedValue === 'Clan'){
    $search.setAttribute('placeholder' , 'Search by Clan')
  }
})
$search.addEventListener('input' , e =>{
  var value = e.target.value.toUpperCase()
  var selectValue = $select.value
  const godes = JSON.parse(localStorage.getItem('gods'))
  if(selectValue === 'Name'){
    const filtered = godes.filter(item => item.name.toUpperCase().includes(value))
    cardTemplate(filtered)
  }else if(selectValue === 'Power'){
    const filtered = godes.filter(item => item.power.toUpperCase().includes(value))
    cardTemplate(filtered)
  }else if(selectValue === 'Village'){
    const filtered = godes.filter(item => item.village.toUpperCase().includes(value))
    cardTemplate(filtered)
  }else if(selectValue === 'Level'){
    const filtered = godes.filter(item => item.level.toUpperCase().includes(value))  
    cardTemplate(filtered)
  }else if(selectValue === 'Clan'){
    const filtered = godes.filter(item => item.clan.toUpperCase().includes(value))  
    cardTemplate(filtered)
  }
})
function More(id){
  const god = JSON.parse(localStorage.getItem('gods'))
  localStorage.setItem('more' , JSON.stringify([god[id]]))
  window.open('./more.html' , '_self')
}
$appBtn.addEventListener('click' , e =>{
  e.preventDefault()
  if($colInput.value === ''){
    document.body.style.background = `url${$imgInput.value}`    
  }else if($imgInput.value === ''){
    document.body.style.background = $colInput.value    
  }else if($colInput.value === '' && $imgInput.value === ''){
    alert('Поле пусты');
  }else{
    
  }
})
$siderBAr.addEventListener('click' , e=>{
  e.preventDefault()
  $siderBAr.classList.toggle('active')
  $side.classList.toggle('active')
})