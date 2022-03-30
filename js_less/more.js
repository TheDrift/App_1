const $identification = JSON.parse(localStorage.getItem('more'))
console.log($identification);
const $title = document.querySelector('.title')
const $titleDoc = document.querySelector('.titleDoc')
const $back = document.querySelector('.back')
const $container = document.querySelector('.row')
document.querySelector('.row').innerHTML = $identification.map(({name, power, village, level, clan, image}) =>{
  $title.innerHTML = name
  $titleDoc.innerHTML = name
  return `
    <div class="col-12sm-12 col-md-12 col-xl-12">
      <div class="card rouned-2 mt-3">
          <div class="card-image">
            <img src=${image} class="w-100" style="height:600px; object-fit-cover; border-radius:10px" />
          </div>
          <div class="card-body bg-dark text-primary" style="border-radius:10px">
            <h3 class="d-flex justify-content-between"><span>Power:</span><span>${power}</span></h3>
            <h3 class="d-flex justify-content-between"><span>Village:</span><span>${village}</span></h3>
            <h3 class="d-flex justify-content-between"><span>Level:</span><span>${level}</span></h3>
            <h3 class="d-flex justify-content-between"><span>Clan:</span><span>${clan}</span></h3>
          </div>
      </div>
    </div>
  `
})
$back.addEventListener('click', e =>{
  e.preventDefault()
  window.open('./about.html' , '_self')
})
