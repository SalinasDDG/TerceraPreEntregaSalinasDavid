
   // clase Trabajador
   class Trabajador {
    constructor(id, nombre, areaTrabajo, sueldoNeto, descuentos, sueldoMes) {
     this.id = id;
     this.nombre = nombre;
     this.areaTrabajo = areaTrabajo;
     this.sueldoNeto = sueldoNeto;
     this.descuentos = [];
     this.sueldoMes = "";
    }
   }
    //lista de trabajadores
   const trabajador1 = new Trabajador("A", "Estefania", "Publicidad", 10000);
   const trabajador2 = new Trabajador("B", "Steff", "Publicidad", 10000);
   const trabajador3 = new Trabajador("C", "Christian", "Producción", 15000);
   const trabajador4 = new Trabajador("D", "Martin", "Producción", 15000);
   const trabajador5 = new Trabajador("E", "Anabelle", "Administración", 12000);
   const trabajador6 = new Trabajador("F", "David", "Administración", 12000);
   
   //arrays de trabajadores
   const TRABAJADORES = [trabajador1, trabajador2, trabajador3, trabajador4, trabajador5, trabajador6];


   //para logueo
   class Usuario {
    constructor(id, nombre, contraseña) {
     this.id = id;
     this.nombre = nombre;
     this.contraseña = contraseña;
    }}

  //lista de usuarios
  const usuario1 = new Usuario("CL", "claudio", "4321");
  const usuario2 = new Usuario("RH", "recursos humanos", "4321");

  //arrays de ususarios
  const USUARIOS = [usuario1, usuario2]

  

//logueo

const btnVerLogin = document.querySelector("#btnVerLogin")

btnVerLogin.onclick = () => {
  document.getElementById("verLogin").style.display = "block"
}

const formularioLogin = document.getElementById("formularioLogin")


formularioLogin.onsubmit = (e) => {
  e.preventDefault()
  let dataForm = e.targuet

  let userID = document.querySelector("#userID")

  let userCoincidencia = USUARIOS.find(elem => elem.id == userID.value.toUpperCase())

  if(userCoincidencia !== undefined){
    
    let userPass = document.querySelector("#userPass")

    let divLogin = document.getElementById("verLogin")

    if(userCoincidencia.contraseña == userPass.value){
      divLogin.innerHTML = `<h4>¡Bienvenido ${userCoincidencia.nombre}!</h4>`
    }else{ divLogin.innerHTML += `<h6>Contraseña o Usuario incorrectos, intente nuevamente</h6>`}
  }else{
    document.getElementById("verLogin").innerHTML += `<h6>Contraseña o Usuario incorrectos, intente nuevamente</h6>`}
}


   // cual es la opcion para desplegar la card correspondiente (?) como hacer que el usuario llame a esta funcion?
//eleccion del usuario
function elegirTrabajador(){
const cardSeleccionador = document.getElementById("seleccionDeTrabajador");
    cardSeleccionador.innerHTML = 
  `<div class="card">

    <div class="card-body">
      <h5 class="card-title">Por favor coloque el ID del trabajador a evaluar:</h5>
      <p class="card-text"> Los trabajadores activos son: 
      <br>"A" - "Estefania"
      <br>"B" - "Steff"
      <br>"C" - "Christian"
      <br>"D" - "Martin"
      <br>"E" - "Anabelle"
      <br>"F" - "David"
      </p>

      <input type="text" placeholder="Escriba un ID" id="selector">
      <button type="button" class="btn btn-success" onclick="">Seleccionar</button>

      <button type="button" class="btn btn-success" onclick="renderizarTrabajadores(TRABAJADORES)">Mostrar Todos</button>
    </div></div>`
  
 //como pasarle el ingreso del usuario a la funcion (?)
  }



//individualizar un trabajador (?)
function crearCardTrabajador(idtrabajador){
  let divCardIndividual = document.getElementById("cardTrabajadores")
 let trabajadorElegido = TRABAJADORES.find( elem => elem.id == idtrabajador)
  let divCard = document.createElement("div")

  divCard.innerHTML = 
  `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h3 class="card-title">'${trabajadorElegido.nombre}'</h3>
    </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID del trabajador: ${trabajadorElegido.id}</li>
      <li class="list-group-item">Pertenece al area de ${trabajadorElegido.areaTrabajo}</li>
      <li class="list-group-item">Sueldo base de $${trabajadorElegido.sueldoNeto}</li>
    </ul>
    <div class="card-body">
    <div class="d-grid gap-2">
    <button class="btn btn-outline-warning" type="button" onclick="verCalendario('${trabajadorElegido.id}')" >Faltas y llegadas tardia</button>
  
    <button class="btn btn-outline-success" type="button">VER SUELDO MES</button>
    </ div>
    </div>
  </div>
  `
  divCardIndividual.append(divCard)
}


//mostrar todos los trabajadores 
function renderizarTrabajadores(arrayTrabajadores){
    const cardTrabajadores = document.getElementById("cardTrabajadores")

    arrayTrabajadores.forEach((trabajador => {

    let divCard = document.createElement("div")
    divCard.id = trabajador.id
    divCard.innerHTML = 
    `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">${trabajador.nombre}</h3>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID del trabajador: ${trabajador.id}</li>
    <li class="list-group-item">Pertenece al area de ${trabajador.areaTrabajo}</li>
    <li class="list-group-item">Sueldo base de $${trabajador.sueldoNeto}</li>
  </ul>
  <div class="card-body">
  <div class="d-grid gap-2">
  <button class="btn btn-outline-warning" type="button" onclick="verCalendario('${trabajador.id}')" >Faltas y llegadas tardia</button>

  <button class="btn btn-outline-success" type="button">VER SUELDO MES</button>
</ div>
  </div>
</div>
  `
  cardTrabajadores.append(divCard)
}))
}


//anotar faltas y llegadas tarde, desplegar calendario
function verCalendario(idTrabajador){
let trabajadorAEvaluar = TRABAJADORES.find(e => e.id == idTrabajador)

const cardCalificador = document.getElementById("calendario")
cardCalificador.innerHTML =
`<div class="cardsCalendario">
<div class="card " style="width: 18rem;">
<div class="calendario">
<h3>MES PASADO  </h3>
 <ol class="dias">
  <li class="diaNombre">Lun</li>
  <li class="diaNombre">Mart</li>
  <li class="diaNombre">Mier</li>
  <li class="diaNombre">Juev</li>
  <li class="diaNombre">Vier</li>
  <li class="diaNombre">Sab</li>
  <li class="diaNombre">Dom</li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ol>
</div>
</div>

<div class="card">
<div class="inputsCalend">

<h5 class="card-header">Indique los dias que falto y llego tarde    ${trabajadorAEvaluar.nombre}:</h5>



<div class="card-body" id="TardeForm" >
<input class="imputCalend" type="number" placeholder="Cantidad de dias que llego tarde " id="numeroTarde">
<input type="submit" class="btn btn-success" value="Ingresar">
<div id="mensajetardes"></div>
</div>

<div class="card-body">
<input class="imputCalend" type="number" placeholder="Cantidad de dias que falto" id="numeroFaltas">
<input type="submit" class="btn btn-success" value="Ingresar">
<div id="faltas"></div>
</div>

</div>
</div>
`
  //ingreso de datos y verificaciones (?)
const diasTardeLogin = document.querySelector("#TardeForm")


diasTardeLogin.onsubmit = (e) => {
  e.preventDefault()
  let diasTardes  = document.querySelector("#numeroTarde").value
  alert(diasTardes)
  
  if(isNaN(diasTardes)) {
    let divTardes  = document.querySelector("#mensajetardes")

  if(diasTardes <= 23){ 
  divTardes.innerHTML = `<h6>${trabajadorAEvaluar.nombre} llegó ${diasTardes} veces tarde este mes. </h6>`
  }else{divTardes.innerHTML = `El valor ingresado no es valido, intente nuevamemte`}
}else{divTardes.innerHTML = `<h6>El valor ingresado no es valido, intente nuevamemte </h6>`
}
}


let divFaltas  = document.querySelector("#faltas")
let diasFaltas  = document.querySelector("#numeroFaltas").value


//calculo de descuentos por faltas y llegadas tarde

}






//sueldo final del Mes

function calcularSueldoMes(idTrabajador){
  let trabajadorElegido = TRABAJADORES.find( elem => elem.id == idtrabajador)


  
}


 //local storage (crear metodo para subir el sueldo del mes anterior y recuperar los sueldos de los meses anteriores) (?)

 //registro de sueldos de meses anteriores



  let cardRegistro = document.getElementById("registroSueldos") 
  cardRegistro.innerHTML = 
  `
<div class="card">
<div class="card-header"><h3>Registro de sueldos: Meses anteriores</h3></div>
<div class="card-body" id="logueo" >
<p class="card-text">Por favor ingrese el "MES", "NOMBRE" y "SUELDO" de la persona:  </p>

<div >
  <input type="text" placeholder="Mes" id="ingresoMes">
</div>

<div >
  <input type="text" placeholder="Nombre" id="ingresoNombre">
</div>

<div >
  <input type="number" placeholder="Sueldo" id="ingresoSueldo">

</div>
<button class="btn btn-primary" onclick="AddData()" id="update"> AddData </button>

<div id="avisoAlert" ></div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody id="tablaRegistro">

  </tbody>
</table>


</div>
</div>
  `
  function validateForm(){
    let mes = document.querySelector("#ingresoMes").value;
    let nombre = document.querySelector("#ingresoNombre").value;
    let sueldo = document.querySelector("#ingresoSueldo").value;

    let alertas = document.querySelector("#avisoAlert")

    if(mes == ""){
  alertas.innerHTML = `<p>Por favor coloque un Mes</p>`
      return false;
    }

    if(nombre == ""){
      alertas.innerHTML = `<p>Por favor coloque un Nombre</p>`
      return false;
    }
    
    if(sueldo == ""){
      alertas.innerHTML = `<p>Por favor coloque un Sueldo</p>`
      return false;
    }

    return true;
  }


  function verDatosLS(){
  let registro = "";
  if(localStorage.getItem("registro") == null){
    registro = [];
  }else{
    registro = JSON.parse(localStorage.getItem("registro"))
}

  let html =  " ";

  registro.forEach((element)=>{
 `<tr>
     <td>${element.mes}</td>
     <td>${element.nombre}</td>
     <td>${element.sueldo}</td>
    <tr>`;
  });
  document.querySelector("#tablaRegistro").innerHTML = html;
  
  }

  document.onload = verDatosLS(); 


  function AddData(){
    if(validateForm() == true){
    let mes = document.querySelector("#ingresoMes").value;
    let nombre = document.querySelector("#ingresoNombre").value;
    let sueldo = document.querySelector("#ingresoSueldo").value;
    
    let registro;
    if(localStorage.getItem("registro") == null){
      registro = [];
    }else{
      registro = JSON.parse(localStorage.getItem("registro"))}
    
    registro.push({mes : mes, nombre : nombre, sueldo : sueldo})
  
    localStorage.setItem("registro", JSON.stringify(registro))
    verDatosLS()
    document.querySelector("#ingresoMes").value="";
    document.querySelector("#ingresoNombre").value="";
    document.querySelector("#ingresoSueldo").value="";
    }

  }


  