const buscar = document.getElementById("enviarb")
const nompoke = document.getElementById("buscadorb")
const rpoke = document.getElementById("pokerandom")
const regresar = document.getElementById("retornar")

const resultado = function(){
    var nompoke = document.getElementById("buscadorb").value
    const pokename = nompoke.toLowerCase() 
    const fetchpokemon = async() =>{
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
            const data = await res.json()
            pokedata(data)
        }catch(error){
            console.log(error)
            const plantilla = document.querySelector(".plantilla")
            const nopoke = document.querySelector(".nopoke")
            nopoke.style.display = "flex"
            plantilla.style.display = "none"
        }
    }
    const pokedata = (pokemon) =>{
        const plantilla = document.querySelector(".plantilla")
        const nopoke = document.querySelector(".nopoke")
        const cabeza = document.querySelector(".cabeza")
        cabeza.style.display = "inline-flex"
        const numid = document.querySelector(".numid")
        numid.innerHTML = "#" + pokemon.id + ")"
        const nombre = document.querySelector(".nombre")
        nombre.innerHTML = pokemon.name
        const fimgp = document.querySelector(".frontpoke")
        fimgp.src = pokemon.sprites.front_default
        plantilla.style.display = "flex"
        nopoke.style.display = "none"
    }
    fetchpokemon()
}
const pokerand = function(){
    const getrandomid = (min, max) => {
        return Math.floor(Math.random() * (max - min)) +min;
    }
    const random = (getrandomid(1, 905))
    const fetchpokemon = async() =>{
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
            const data = await res.json()
            pokedata(data)
        }catch(error){
            console.log(error)
        }
    }
    const pokedata = (pokemon) =>{
        const plantilla = document.querySelector(".plantilla")
        const nopoke = document.querySelector(".nopoke")
        const cabeza = document.querySelector(".cabeza")
        cabeza.style.display = "inline-flex"
        const numid = document.querySelector(".numid")
        numid.innerHTML = "#" + pokemon.id + ")"
        const nombre = document.querySelector(".nombre")
        nombre.innerHTML = pokemon.name
        const fimgp = document.querySelector(".frontpoke")
        fimgp.src = pokemon.sprites.front_default
        plantilla.style.display = "flex"
        nopoke.style.display = "none"
    }
    fetchpokemon()
}
const regreso = function(){
    location=("../index.html")
}

buscar.addEventListener("click", resultado)
rpoke.addEventListener("click", pokerand)
regresar.addEventListener("click", regreso)