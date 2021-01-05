createHomePage();

function createHomePage() {
    let title = document.createElement("h1");
    title.id = "Title";
    title.innerHTML = "Off-Season Throwing Program";

    let img = document.createElement("img");
    img.id = "overview";
    img.src = "overview.png";
    img.alt = "overview";

    let velocityDayButton = document.createElement("button");
    velocityDayButton.id = "Velocity Day";
    velocityDayButton.className = "button";
    velocityDayButton.innerHTML = "Velocity Day";

    let plyoCareVelocity = document.createElement("button");
    plyoCareVelocity.id = "PlyoCare Velocity";
    plyoCareVelocity.className = "button";
    plyoCareVelocity.innerHTML = "PlyoCare Velocity";

    let hybridA = document.createElement("button");
    hybridA.id = "Hybrid A";
    hybridA.className = "button";
    hybridA.innerHTML = "Hybrid A";

    let hybridB = document.createElement("button");
    hybridB.id = "Hybrid B";
    hybridB.className = "button";
    hybridB.innerHTML = "Hybrid B";

    let recovery = document.createElement("button");
    recovery.id = "Recovery";
    recovery.className = "button";
    recovery.innerHTML = "Recovery";

    document.body.appendChild(title);
    document.body.appendChild(img);
    document.body.appendChild(velocityDayButton);
    document.body.appendChild(plyoCareVelocity);
    document.body.appendChild(hybridA);
    document.body.appendChild(hybridB);
    document.body.appendChild(recovery);
}