function irA(seccionId) {

    // Oculta hero
    document.querySelector(".hero").style.display = "none";

    // Quita clase activa a todas
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach(sec => {
        sec.classList.remove("activa");
        sec.style.display = "none";
    });

    // Muestra la nueva (con pequeño delay para animación)
    const nueva = document.getElementById(seccionId);
    nueva.style.display = "block";

    setTimeout(() => {
        nueva.classList.add("activa");
    }, 10);
}

function volverInicio() {

    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(sec => {
        sec.classList.remove("activa");
        sec.style.display = "none";
    });

    const hero = document.querySelector(".hero");
    hero.style.display = "block";
    hero.style.opacity = 0;

    setTimeout(() => {
        hero.style.opacity = 1;
    }, 10);
}