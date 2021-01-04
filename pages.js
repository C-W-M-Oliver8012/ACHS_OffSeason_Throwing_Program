createHomePage();

function createHomePage() {
    let title = document.createElement("h1");
    title.id = "Title";
    title.innerHTML = "Off-Season Throwing Program";

    let img = document.createElement("img");
    img.id = "overview";
    img.src = "overview.png";
    img.alt = "overview";

    document.body.appendChild(title);
    document.body.appendChild(img);
}