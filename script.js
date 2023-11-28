function toggleLevels(element) {
    element.classList.toggle('active');
}

function coursesDrop() {
    const coursesMenu = document.getElementById("courses-menu");

    coursesMenu.style.display = "block";
}

function coursesPick() {
    const coursesMenu = document.getElementById("courses-menu");

    coursesMenu.style.display = "none";

}

document.getElementById('courses').addEventListener('click', coursesDrop);
document.getElementById('courses-container').addEventListener('mouseleave', coursesPick);