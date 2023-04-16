document.addEventListener("keyup", e=>{
e.target.matches("#buscador")
console.log(e.target.value)

  if(e.target.matches("#buscador")){
    document.querySelectorAll(".movies").forEach(tarjeta =>{
        tarjeta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?tarjeta.classList.remove("filtro")
        :tarjeta.classList.add("filtro")
    })
  }
})

fetch('https://apex.oracle.com/pls/apex/dbconejo/apirest/movies', {
  method: 'GET',
})
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manipular los datos recibidos del servidor
    console.log(data);
  })
  .catch(error => {
    // Aquí puedes manejar el error en caso de que la solicitud falle
    console.error(error);
  });
