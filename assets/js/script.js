// Agrega un event listener al evento de desplazamiento de la ventana
window.addEventListener("scroll", function () {
    // Obtiene el elemento de la barra de navegación por su ID
    const navbar = document.getElementById("navbar");
  
    // Si la posición de desplazamiento vertical es mayor que 0
    if (window.scrollY > 0) {
      // Agrega la clase "navbar-solid" para hacer que la barra de navegación sea sólida
      navbar.classList.add("navbar-solid");
    } else {
      // Si no, elimina la clase "navbar-solid"
      navbar.classList.remove("navbar-solid");
    }
  });
  
  // Obtiene todos los elementos de enlace dentro del elemento "nav"
  const elementosDeEnlace = document.querySelectorAll("nav a");
  
  // Itera sobre cada elemento de enlace
  elementosDeEnlace.forEach(function(elemento) {
      // Agrega un event listener al hacer clic en cada elemento de enlace
      elemento.addEventListener("click", function(e) {
          // Evita el comportamiento predeterminado del enlace
          e.preventDefault(); 
  
          // Obtiene el ID del objetivo del enlace
          const targetId = this.getAttribute("href"); 
  
          // Obtiene el elemento objetivo utilizando el ID
          const targetElement = document.querySelector(targetId); 
  
          // Si se encuentra el elemento objetivo
          if (targetElement) {
              // Desplaza suavemente la ventana hasta el elemento objetivo
              targetElement.scrollIntoView({ behavior: "smooth" }); 
          }
      });
  });
  
  // Agrega un event listener al evento "hover" del botón con el ID "boton"
  $("#boton").hover(function () {
    // Agrega un atributo de título al botón para mostrar un mensaje de ayuda
    $(this).attr("title", "Presiona para enviar el mensaje");
  });
  
  // Agrega un event listener al hacer clic en el botón con el ID "boton"
  $("#boton").click(function (e) {
      // Evita el comportamiento predeterminado del botón (enviar formulario)
      e.preventDefault();
    
      // Muestra una alerta al usuario después de hacer clic en el botón
      alert("Has enviado tu mensaje correctamente");
  });
  