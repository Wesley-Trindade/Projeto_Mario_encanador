const form = document.querySelector(".formulario__fale__conosco")
const mascara = document.querySelector(".mascara__formulario")
const button = document.querySelector(".button__form")

function mostraFormulario(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    
}

function esconderFormulario(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"


}



