const nameInput=document.getElementById('nameInput')
const bioInput=document.getElementById('bioInput')
const skillInput=document.getElementById('skillInput')

const previewName=document.getElementById('previewName')
const previewBio=document.getElementById('previewBio')
const skillsList=document.getElementById('skillsList')

nameInput.addEventListener('input',()=>{
previewName.innerText=nameInput.value
})

bioInput.addEventListener('input',()=>{
previewBio.innerText=bioInput.value
})

skillInput.addEventListener('keypress',(e)=>{
if(e.key==='Enter'){

let li=document.createElement('li')
li.innerText=skillInput.value
skillsList.appendChild(li)

skillInput.value=''
}
})


document.getElementById('saveBtn').addEventListener('click',()=>{

const data={
name:previewName.innerText,
bio:previewBio.innerText,
skills:skillsList.innerHTML
}

localStorage.setItem('portfolioData',JSON.stringify(data))

alert('Portfolio Saved Successfully')

})

window.addEventListener('load',()=>{

const saved=JSON.parse(localStorage.getItem('portfolioData'))

if(saved){
previewName.innerText=saved.name
previewBio.innerText=saved.bio
skillsList.innerHTML=saved.skills
}

})


document.getElementById('themeBtn').addEventListener('click',()=>{
document.body.classList.toggle('light-theme')
})


document.getElementById('exportBtn').addEventListener('click',()=>{

const content=document.getElementById('portfolioPreview').innerHTML

const blob=new Blob([content],{type:'text/html'})

const a=document.createElement('a')
a.href=URL.createObjectURL(blob)
a.download='portfolio.html'
a.click()

})

new Sortable(document.getElementById('portfolioPreview'),{
animation:150
})