let cartaspeli = document.getElementById('cartas')
let peliculartista = document.getElementById('pelicula').content
let fragment = document.createDocumentFragment()
let mejorespelis = []

document.addEventListener('DOMContentLoaded', () =>{
    loadpelis()
})

const loadpelis = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '43e1472c17msh1b163a18ea58f9fp12048djsnc52147b0cb5a',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    
    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(response => {
            mejorespelis= response
            crearTarjetas()
        })
        .catch(err => console.error(err));
}
const crearTarjetas = () => {

    mejorespelis.forEach((peliculas)=>{


        peliculartista.querySelector('img').setAttribute('src',peliculas.image)
        peliculartista.querySelectorAll('p')[0].textContent = peliculas.title
        peliculartista.querySelectorAll('p')[1].textContent = peliculas.rating
        peliculartista.querySelectorAll('p')[2].textContent = peliculas.year
        peliculartista.querySelectorAll('p')[3].textContent = peliculas.description
      

        const clone =peliculartista.cloneNode(true)
        fragment.appendChild(clone)


    })
    cartaspeli.appendChild(fragment)
}
