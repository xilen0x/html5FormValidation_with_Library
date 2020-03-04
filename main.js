let form = document.querySelector("form"); //accedo al contenido del formulario y almacno su contenido en la variable form.

function validar(e) {
    e.preventDefault(); // previene(detiene) la acción por defecto, en este caso el envío del formulario.

    //en el if siguiente, utilizo la libreria validator para conocer si el campo esta vacío.
    if (!validator.isEmpty(form.fcard.value)) {
        fcard = true;
    }
    else {
        form.fcard.style.backgroundColor = '#f5adab';
    }

    if (!validator.isEmpty(form.fcvc.value)) {
        //aki quede!!!!!!!
    }
    else {
        form.fcvc.style.backgroundColor = '#f5adab';
    }

    if (!validator.isEmpty(form.famount.value)) {
        
    }
    else {
        form.famount.style.backgroundColor = '#f5adab';
    }

    if (!validator.isEmpty(form.f_name.value)) {

    }
    else {
        form.f_name.style.backgroundColor = '#f5adab';
    }

    if (!validator.isEmpty(form.l_name.value)) {

    }
    else {
        form.l_name.style.backgroundColor = '#f5adab';
    }

    if (!validator.isEmpty(form.city.value)) {

    }
    else {
        form.city.style.backgroundColor = '#f5adab';
    }

    if (!validator.isEmpty(form.state.value)) {

    }
    else {
        form.state.style.backgroundColor = '#f5adab';
    }

    if (!validator.isEmpty(form.pcode.value)) {

    }
    else {
        form.pcode.style.backgroundColor = '#f5adab';
    }

    if (!validator.isEmpty(form.comentario.value)) {

    }
    else {
        form.comentario.style.backgroundColor = '#f5adab';
    }

}

form.addEventListener("submit", validar);//al presionar el botón, se llama a la función validar.