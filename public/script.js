
async function load() {
    const response = await fetch("gallery/data.json");
    const data = await response.json();
    data.forEach( exhibition => {
        const article = `
            <article>
                <h2>${exhibition.title}</h2>
                <p>${exhibition.description}</p>
                <img onclick="fullscreen(event)" src="gallery/${exhibition.image}">
            </article>
        `;
        document.querySelector("main").innerHTML += article;
    });
}

async function fullscreen(event) {
    setTimeout(() => event.target.hidden = !event.target.hidden, 
            Math.floor(Math.random() * 2500));
};

window.onload = load;
