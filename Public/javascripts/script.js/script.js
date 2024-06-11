document.getElementById('chat').addEventListener('click', function() {
    document.getElementById('chatVentana').classList.toggle('hidden');
});

document.getElementById('cerrar').addEventListener('click', function() {
    document.getElementById('chatVentana').classList.add('hidden');
});

document.getElementById('enviar').addEventListener('click', function() {
    validarFormulario();
});

function validarFormulario() {
    var mensajeInput = document.getElementById("mensajeInput");
    var mensaje = mensajeInput.value.trim();
    var chatBody = document.getElementById("chatBody");
    var validador = true;

    if (mensaje.length > 0) {
        console.log("Mensaje correcto");
    } else {
        validador = false;
        console.log("Mensaje vacío");
    }

    if (validador) {

        var nuevoMensaje = document.createElement("p");
        nuevoMensaje.textContent = mensaje;
        
        nuevoMensaje.classList.add("mensaje-enviado");
        
        chatBody.appendChild(nuevoMensaje);
        
        mensajeInput.value = '';
        
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}


    //login

var usuarios = [

    {
        "mail":"juana@gmail.com",
        "contraseña":"juana123",
        "rol":1
    },{
        "mail":"graciela@gmail.com",
        "contraseña":"graciela123",
        "rol":2
    }
]

function CrearElemento(){
    var mail = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;
    var elemento = {
        "mail":mail,
        "contraseña":contraseña,
        "rol":2
    };
    usuarios.push(elemento);
    alert("Agregado correctamente");
}
function CargarUsuarios(){
    var lista = document.getElementById("lista");
    lista.textContent="";
    for (let index = 0; index < usuarios.length; index++) {
        var elemento = document.createElement("li");
        elemento.textContent = usuarios[index].mail;
        lista.appendChild(elemento);
    }
}
function filtrar(){
    var lista = document.getElementById("lista");
    var filtro = document.getElementById("filtro").value;
    lista.textContent="";
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].mail.startsWith(filtro)) {
            var elemento = document.createElement("li");
            elemento.textContent = usuarios[index].mail;
            lista.appendChild(elemento);
        }
    }
}

function InicioSesion(){
    var mail = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;
    var formulario = document.getElementById("formulario");
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].mail == mail 
            && usuarios[index].contraseña == contraseña) {
            if (usuarios[index].rol==1) {
                formulario.setAttribute('action','index.html');
                formulario.submit();
            }
            if (usuarios[index].rol==2) {
                formulario.setAttribute('action','/Views/admin/index.html');
                formulario.submit();
            }
            return ;
        }
    }
    alert("No se pudo ingresar")
}

document.addEventListener('DOMContentLoaded', function () {
    const daysContainer = document.getElementById('days');
    const statusDiv = document.getElementById('status');
    const confirmButton = document.getElementById('confirm');
  
  
    // Generar días del mes
    for (let i = 1; i <= 31; i++) {
      const day = document.createElement('div');
      day.classList.add('day');
      day.textContent = i;
  
  
      const color = document.createElement('div');
      color.classList.add('color');
  
  
      day.appendChild(color);
  
  
      daysContainer.appendChild(day);
    }
  
  
    // Añadir evento de clic para cambiar color
    const days = document.querySelectorAll('.day');
    days.forEach((day) => {
      day.addEventListener('click', function (e) {

        day.classList.add('selected');
  
  
        statusDiv.style.display = 'block';
        const dayMiddle = statusDiv.offsetWidth / 2 - day.offsetWidth / 2;
        statusDiv.style.left = `${day.offsetLeft - dayMiddle}px`;
        console.log(day.offsetLeft);
        statusDiv.style.top = `${day.offsetTop + day.offsetHeight}px`;
      });
    });
  
  
    confirmButton.addEventListener('click', function () {
      statusDiv.style.display = 'none';
    });
  
  
    // Función para generar un color aleatorio
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
  
    document.getElementById('rojo').addEventListener('click', function () {
      const selected = document.querySelector('#days .selected');
      const color = selected.querySelector('.color');
  
  
      color.style.display = 'block';
      color.style.backgroundColor = 'red';
      deselect();
      close();
    });
  
  
    document.getElementById('azul').addEventListener('click', function () {
      const selected = document.querySelector('#days .selected');
  
  
      after.style.backgroundColor = 'blue';
      after.style.display = 'block';
  
  
      deselect();
      close();
    });
  
  
    function close() {
      statusDiv.style.display = 'none';
    }
  
  
    function deselect() {
      document
        .querySelectorAll('.selected')
        .forEach((e) => e.classList.remove('selected'));
    }
  });
  