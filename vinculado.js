<button onclick="myFunction();">
Click here
</button>

// Inicializar las pestañas
var myTabs = document.getElementById('nav-tab')
var tabInstance = new bootstrap.Tab(myTabs)

// Cambiar a una pestaña específica
tabInstance.show('nav-profile')

// Agregar un evento para cambiar de pestaña al hacer clic
var tabLinks = myTabs.querySelectorAll('.nav-link')
for (var i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener('click', function (event) {
    event.preventDefault()
    tabInstance.show(event.target)
  })
}
