document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box"); 
    const changeColorBtn = document.getElementById("change-color-btn");


    //genere une couleur aléatoire 
    const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    }
    return color;
    };


    // Changer la couleur de la boîte de couleur lors du clic sur le bouton
    changeColorBtn.addEventListener("click", () => {
        const newColor = getRandomColor(); 
        colorBox.style.backgroundColor = newColor; 
    });

});






