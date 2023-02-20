//datos principales
let foto= document.getElementById("foto");
let nombre= document.getElementById("nombre");
let apellido= document.getElementById("apellido");
let edad = document.getElementById("edad");
let genero = document.getElementById("genero");

//datos personales
let nombreDos= document.getElementById("nombreDos");
let apellidoDos= document.getElementById("apellidoDos");
let edadDos = document.getElementById("edadDos");
let generoDos = document.getElementById("generoDos");
let direccion = document.getElementById("direccion");

let pais = document.getElementById("pais");
let provincia= document.getElementById("provincia");
let localidad = document.getElementById("localidad");
let codigoPostal= document.getElementById("codigoPostal");
let numeroCalle = document.getElementById("numeroCalle");

//datos de contactos
let email= document.getElementById("email");
let telefono=document.getElementById("telefono");
let celular=document.getElementById("celular");

let navEmail= document.getElementById("navEmail");
let navTelefono=document.getElementById("navTelefono");
let navNombre= document.getElementById("navNombre");
let navApellido= document.getElementById("navApellido");

let contenedorContacto= document.getElementById("contenedorContacto");


//Metodo animacion footer

function animFooter(){
  
  document.querySelector("footer").addEventListener("mouseover",(e)=>{
    contenedorContacto.setAttribute("style","display:block;")
    
  })
  document.querySelector("footer").addEventListener("mouseout",(e)=>{
    contenedorContacto.setAttribute("style","display:none;")
    
  })
}



//metodo para poner los datos en el DOM
function generador(data){

    let imagenGrande = data.results[0].picture.large;
    
    foto.setAttribute("src",imagenGrande)
    nombre.innerHTML=`Nombre/s:<strong> ${data.results[0].name.first}</strong>`
    apellido.innerHTML=`Apellido/s:<strong> ${data.results[0].name.last}</strong>`
    edad.innerHTML = `Edad: <strong>${data.results[0].dob.age}</strong>`;

    //Reemplaza el string de genero en ingles por español
    if(data.results[0].gender=="female"){
      genero.innerHTML = `Genero: <strong>Femenino</strong>`
      generoDos.innerHTML = `Genero: <strong>Femenino</strong>`
    }else if(data.results[0].gender=="male"){
      genero.innerHTML = `Genero: <strong>Masculino</strong>`
      generoDos.innerHTML = `Genero: <strong>Masculino</strong>`
    }else{
      busquedaDatos()
    }
    

    nombreDos.innerHTML=`Nombre/s:<strong> ${data.results[0].name.first}</strong>`
    apellidoDos.innerHTML=`Apellido/s:<strong> ${data.results[0].name.last}</strong>`
    edadDos.innerHTML = `Edad: <strong>${data.results[0].dob.age}</strong>`;
    direccion.innerHTML=`Dirección: <strong>${data.results[0].location.street.name}</strong>`

    pais.innerHTML=`Pais: <strong>${data.results[0].location.country}</strong>`;
    provincia.innerHTML=`Provincia: <strong>${data.results[0].location.state}</strong>`;
    localidad.innerHTML=`Localidad: <strong>${data.results[0].location.city}</strong>`;
    codigoPostal.innerHTML=`Código Postal: <strong>${data.results[0].location.postcode}</strong>`;
    numeroCalle.innerHTML =`Número: <strong>${data.results[0].location.street.number}</strong>`

    email.innerHTML=data.results[0].email;
    telefono.innerHTML=data.results[0].phone;
    celular.innerHTML=data.results[0].cell;

    navEmail.innerHTML=data.results[0].email;
    navTelefono.innerHTML=data.results[0].phone;
    navNombre.innerHTML=`${data.results[0].name.first} ${data.results[0].name.last}`;
    

}


//metodo para obtener el json con los datos de la persona
function busquedaDatos(){
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then((data)=>{
      generador(data)
    });
}


//Clase desplegar y plegar Menu
class Menu{
  constructor(menu){
    this.menu=menu;
  }

  desplegar(){
    this.menu.style="display:block";
  }

  plegar(){
    this.menu.style="display:none"
  }
}



//Ejecución del evento desplegar menu
document.getElementById('menu').addEventListener('mouseover',(e)=>{
      
    if(e.target.getAttribute('value')=='menu'){
        menu = new Menu(e.target.parentNode.children[1]) 
    }
      menu.desplegar()
})

//Ejecucion del evento plegar menu
document.getElementById('menu').addEventListener('mouseout',(e)=>{
      menu.plegar()
})




//Ejecución de Metodos
busquedaDatos()

animFooter()