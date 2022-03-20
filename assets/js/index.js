const coffeesElmnt = document.querySelector('.coffees');

const coffees = [
    { name: "Perspiciatis", image: "assets/images/coffee1.jpg" },
    { name: "Voluptatem", image: "assets/images/coffee2.jpg" },
    { name: "Explicabo", image: "assets/images/coffee3.jpg" },
    { name: "Rchitecto", image: "assets/images/coffee4.jpg" },
    { name: " Beatae", image: "assets/images/coffee5.jpg" },
    { name: " Vitae", image: "assets/images/coffee6.jpg" },
    { name: "Inventore", image: "assets/images/coffee7.jpg" },
    { name: "Veritatis", image: "assets/images/coffee8.jpg" },
    { name: "Accusantium", image: "assets/images/coffee9.jpg" },
];

const showCoffees = () => {

    let output = "";
    coffees.forEach(({ name, image }) => {
        output += `
            <div class="card">
                <img class="card__img" src="${image}" alt="${name}" />
                <h1 class="card__title">${name}</h1>
                <a href="#" class="card__link">Taste</a>
            </div>
        `;

        coffeesElmnt.innerHTML = output;
    })
}

document.addEventListener('DOMContentLoaded', showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("Service worker registered"))
            .catch(err => console.log("Service worker not registered ", err))
    })
}