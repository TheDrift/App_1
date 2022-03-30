const $inputs = document.querySelectorAll('input')
const $ClickBtn = document.querySelector('.ClickBtn')
const $newInputs = [...$inputs]
window.addEventListener('load' , () =>{
  if(!localStorage.getItem('gods')){
    window.open('about.html' , '_self')
  }
})
$ClickBtn.addEventListener('click', e=>{
  e.preventDefault()
  let isValue = true

  const obj = {}
  $inputs.forEach(item =>{
    if(isValue === ''){
      isValue = false
      item.style.bordereColor = 'red'
    }else{
      obj[item.id] = item.value
    }
  })
  if(isValue){
    const base = JSON.parse(localStorage.getItem('gods'));
    base.push(obj)
    localStorage.setItem('gods' , JSON.stringify(base))
    localStorage.setItem('more' , JSON.stringify(base))
    $inputs.forEach(item =>{
      item.value = ''
    })
    window.location.reload()
  }else{
    alert(`заполните поле`)
  }
})
