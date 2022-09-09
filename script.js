//spi access token -958078762257724
//https://superheroapi.com/api/958078762257724
const SUPERHERO_TOKEN='958078762257724';
const BASE_URL=`https://superheroapi.com/api/${SUPERHERO_TOKEN}`
const newHeroButton=document.getElementById('newHeroButton')
const getSuperHero=(id)=>{
    
 fetch(`${BASE_URL}/${id}`)
.then(response=>response.json())
.then(json=>{
    console.log(json)
document.querySelector('body').innerHTML=`<img src="${json.image.url}" height=200 width=200/>`
})
}

newHeroButton.onclick=()=>getSuperHero()