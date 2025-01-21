let contenido= document.getElementById("contenido");
let contenido1= document.getElementById("contenido1");
let boton = document.getElementById(("mostrar"));
let boton1 = document.getElementById(("mostrar1"));

boton.addEventListener('click', mostrarAppiData, true);
boton1.addEventListener('click', mostrarAppiData1, true);


//PRIMERA FORMA
function mostrarAppiData (){
    const url = 'https://randomuser.me/api';
    console.log('entro');
    fetch(url)
        .then((res) => res.json())
        .then((data)=> {
            contenido.innerHTML =`<img src ='${data.results[0].picture.large}'>
                                  <p> Nombre: ${data.results[0].name.first}</p>
                                  <p> Apllido: ${data.results[0].name.last}</p>
                                  <p> Genero: ${data.results[0].gender}</p>
                                  <p> Celular: ${data.results[0].cell}</p>
                                  <p> Correo: ${data.results[0].email}</p>
                                 `;
            contenido.style.border = "2px solid rgb(36, 49, 51)";
            contenido.style.backgroundColor ="rgb(160, 198, 219);"
        });
} 

//SEGUNDA FORMA
async function mostrarAppiData1 (){
    const url = 'https://randomuser.me/api/';
    const res = await fetch(url);
    const data = await res.json();

    contenido1.innerHTML =`<img src ='${data.results[0].picture.large}'>
                                  <p> Nombre: ${data.results[0].name.first}</p>
                                  <p> Apllido: ${data.results[0].name.last}</p>
                                  <p> Genero: ${data.results[0].gender}</p>
                                  <p> Celular: ${data.results[0].cell}</p>
                                  <p> Correo: ${data.results[0].email}</p>
                                 `;
    contenido1.style.border = "2px solid rgb(36, 49, 51)";
    contenido1.style.backgroundColor ="rgb(160, 198, 219);"
console.log(data);
}
