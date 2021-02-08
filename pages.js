let numClicked = 0;

createHomePage();

function createHomePage() {
    numClicked = 0; 

    scroll(0, 0);
    let title = document.createElement("h1");
    title.id = "Title";
    title.innerHTML = "Off-Season Throwing Program";

    let select = document.createElement("select");
    select.id = "Select";
    select.value = "Week 1";
    select.innerHTML = "Week 1";
    for (let i = 0; i < 12; i++) {
        let option = document.createElement("option");
        option.value = "Week " + (i + 1);
        option.innerHTML = "Week " + (i + 1);
        select.appendChild(option);
    }
    select.addEventListener("change", function() {
        for (let i = 1; i <= 12; i++) {
            if (select.value == "Week " + i) {
                for (let j = 1; j <= 7; j++) {
                    document.getElementById("Day " + j).innerHTML = "Day " + j + ": " + selectData["Week " + i][j - 1];
                }
            }
        }
    });

    let listContainer = document.createElement("div");
    listContainer.id = "List Container";
    listContainer.style.margin = "auto";
    for (let i = 1; i <= 7; i++) {
        let day = document.createElement("p");
        day.id = "Day " + i;
        day.innerHTML = "Day " + i + ": " + selectData["Week 1"][i - 1];
        listContainer.appendChild(day);
    }

    let plyoCareVelocityDayButton = document.createElement("button");
    plyoCareVelocityDayButton.id = "PlyoCare Velocity Day Tracker";
    plyoCareVelocityDayButton.className = "button";
    plyoCareVelocityDayButton.innerHTML = "PlyoCare Velocity Day Tracker";
    plyoCareVelocityDayButton.addEventListener("click", function() { deleteHomePage(); createPlyoCareVelocityDayTrackerPage(); });

    let velocityDayTrackerButton = document.createElement("button");
    velocityDayTrackerButton.id = "Velocity Day Tracker";
    velocityDayTrackerButton.className = "button";
    velocityDayTrackerButton.innerHTML = "Velocity Day Tracker";
    velocityDayTrackerButton.addEventListener("click", function() { deleteHomePage(); createVelocityDayTrackerPage(); });

    let tutorialsButton = document.createElement("button");
    tutorialsButton.id = "Tutorials";
    tutorialsButton.className = "button";
    tutorialsButton.innerHTML = "Tutorials";
    tutorialsButton.addEventListener("click", function() { deleteHomePage(); createTutorialsPage(); });

    let velocityDayButton = document.createElement("button");
    velocityDayButton.id = "Velocity Day";
    velocityDayButton.className = "button";
    velocityDayButton.innerHTML = "Velocity Day";
    velocityDayButton.addEventListener("click", function() { deleteHomePage(); createDayPage(velocityDayData); });

    let plyoCareVelocity = document.createElement("button");
    plyoCareVelocity.id = "PlyoCare Velocity";
    plyoCareVelocity.className = "button";
    plyoCareVelocity.innerHTML = "PlyoCare Velocity";
    plyoCareVelocity.addEventListener("click", function() { deleteHomePage(); createDayPage(plyoCareVelocityData); });

    let hybridA = document.createElement("button");
    hybridA.id = "Hybrid A";
    hybridA.className = "button";
    hybridA.innerHTML = "Hybrid A";
    hybridA.addEventListener("click", function() { deleteHomePage(); createDayPage(hybridAData); });

    let hybridB = document.createElement("button");
    hybridB.id = "Hybrid B";
    hybridB.className = "button";
    hybridB.innerHTML = "Hybrid B";
    hybridB.addEventListener("click", function() { deleteHomePage(); createDayPage(hybridBData); });

    let recovery = document.createElement("button");
    recovery.id = "Recovery";
    recovery.className = "button";
    recovery.innerHTML = "Recovery";
    recovery.addEventListener("click", function() { deleteHomePage(); createDayPage(recoveryData); });

    document.body.appendChild(title);
    document.body.appendChild(select);
    document.body.appendChild(listContainer);
    document.body.appendChild(plyoCareVelocityDayButton);
    document.body.appendChild(velocityDayTrackerButton);
    document.body.appendChild(tutorialsButton);
    document.body.appendChild(velocityDayButton);
    document.body.appendChild(plyoCareVelocity);
    document.body.appendChild(hybridA);
    document.body.appendChild(hybridB);
    document.body.appendChild(recovery);
}

function deleteHomePage() {
    document.getElementById("Title").remove();
    document.getElementById("Select").remove();
    document.getElementById("List Container").remove();
    document.getElementById("PlyoCare Velocity Day Tracker").remove();
    document.getElementById("Velocity Day Tracker").remove();
    document.getElementById("Tutorials").remove();
    document.getElementById("Velocity Day").remove();
    document.getElementById("PlyoCare Velocity").remove();
    document.getElementById("Hybrid A").remove();
    document.getElementById("Hybrid B").remove();
    document.getElementById("Recovery").remove();
}

function createPlyoCareVelocityDayTrackerPage() {
    scroll(0, 0);
    let back = document.createElement("button");
    back.id = "back";
    back.className = "back";
    back.innerHTML = "Back";
    back.addEventListener("click", function() { deletePlyoCareVelocityDayTrackerPage(); createHomePage(); });

    let title = document.createElement("h1");
    title.id = "Title";
    title.innerHTML = "PlyoCare Velocity Day Tracker";

    let select = document.createElement("select");
    select.id = "Select";
    select.value = "Week 5";
    select.innerHTML = "Week 5";
    for (let i = 5; i < 12; i++) {
        if (i !== 8) {
            let option = document.createElement("option");
            option.value = "Week " + i;
            option.innerHTML = "Week " + i;
            select.appendChild(option);
        }
    }
    select.addEventListener("change", function() {
        for (let i = 0; i < 3; i++) {
            if (localStorage.getItem("kg" + i + select.value)) {
                let kg = document.getElementById("kg" + i);
                kg.value = localStorage.getItem("kg" + i + select.value);
            } else {
                let kg = document.getElementById("kg" + i);
                localStorage.setItem("kg" + i + select.value, 0);
                kg.value = localStorage.getItem("kg" + i + select.value);
            }
        }

        for (let i = 0; i < 5; i++) {
            if (localStorage.getItem("g" + i + select.value)) {
                let g = document.getElementById("g" + i);
                g.value = localStorage.getItem("g" + i + select.value);
            } else {
                let g = document.getElementById("g" + i);
                localStorage.setItem("g" + i + select.value, 0);
                g.value = localStorage.getItem("g" + i + select.value);
            }
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
                let c = "blue";
                if (j === 0) {
                    c = "blue";
                } else if (j === 1) {
                    c = "red";
                } else if (j === 2) {
                    c = "yellow";
                } else if (j === 3) {
                    c = "gray";
                }
                if (localStorage.getItem("rocker " + c + " input" + i + select.value)) {
                    let color = document.getElementById("rocker " + c + " input" + i);
                    color.value = localStorage.getItem("rocker " + c + " input" + i + select.value);
                } else {
                    let color = document.getElementById("rocker " + c + " input" + i);
                    localStorage.setItem("rocker " + c + " input" + i + select.value, 0);
                    color.value = localStorage.getItem("rocker " + c + " input" + i + select.value);
                }
            }
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
                let c = "blue";
                if (j === 0) {
                    c = "blue";
                } else if (j === 1) {
                    c = "red";
                } else if (j === 2) {
                    c = "yellow";
                } else if (j === 3) {
                    c = "gray";
                }
                if (localStorage.getItem("walking " + c + " input" + i + select.value)) {
                    let color = document.getElementById("walking " + c + " input" + i);
                    color.value = localStorage.getItem("walking " + c + " input" + i + select.value);
                } else {
                    let color = document.getElementById("walking " + c + " input" + i);
                    localStorage.setItem("walking " + c + " input" + i + select.value, 0);
                    color.value = localStorage.getItem("walking " + c + " input" + i + select.value);
                }
            }
        }
    });

    let hr1 = document.createElement("hr");
    hr1.id = "hr1";

    let rollinTitle = document.createElement("h2");
    rollinTitle.id = "Roll-Ins";
    rollinTitle.innerHTML = "PlyoCare Roll-In Throws";

    let hr2 = document.createElement("hr");
    hr2.id = "hr2";

    document.body.appendChild(back);
    document.body.appendChild(title);
    document.body.appendChild(select);
    document.body.appendChild(hr1);
    document.body.appendChild(rollinTitle);

    let kgTitle = document.createElement("h3");
    kgTitle.id = "kg Title";
    kgTitle.innerHTML = "1kg";
    document.body.appendChild(kgTitle);

    for (let i = 0; i < 3; i++) {
        let kg = document.createElement("input");
        kg.type = "number";
        kg.id = "kg" + i;
        document.body.appendChild(kg);
    }

    let gTitle = document.createElement("h3");
    gTitle.id = "g Title";
    gTitle.innerHTML = "450g";
    document.body.appendChild(gTitle);

    for (let i = 0; i < 5; i++) {
        let g = document.createElement("input");
        g.type = "number";
        g.id = "g" + i;
        document.body.appendChild(g);
    }

    document.body.appendChild(hr2);

    let rockerTitle = document.createElement("h2");
    rockerTitle.id = "Rocker";
    rockerTitle.innerHTML = "PlyoCare Rocker Throws";
    document.body.appendChild(rockerTitle);

    let rockerBlueTitle = document.createElement("h3");
    rockerBlueTitle.id = "Rocker Blue";
    rockerBlueTitle.innerHTML = "Blue";
    document.body.appendChild(rockerBlueTitle);

    for (let i = 0; i < 2; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "rocker blue input" + i;
        document.body.appendChild(input);
    }

    let rockerRedTitle = document.createElement("h3");
    rockerRedTitle.id = "Rocker Red";
    rockerRedTitle.innerHTML = "Red";
    document.body.appendChild(rockerRedTitle);

    for (let i = 0; i < 2; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "rocker red input" + i;
        document.body.appendChild(input);
    }

    let rockerYellowTitle = document.createElement("h3");
    rockerYellowTitle.id = "Rocker Yellow";
    rockerYellowTitle.innerHTML = "Yellow";
    document.body.appendChild(rockerYellowTitle);

    for (let i = 0; i < 2; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "rocker yellow input" + i;
        document.body.appendChild(input);
    }

    let rockerGrayTitle = document.createElement("h3");
    rockerGrayTitle.id = "Rocker Gray";
    rockerGrayTitle.innerHTML = "Gray";
    document.body.appendChild(rockerGrayTitle);

    for (let i = 0; i < 2; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "rocker gray input" + i;
        document.body.appendChild(input);
    }

    let hr3 = document.createElement("hr");
    hr3.id = "hr3";
    document.body.appendChild(hr3);

    let walkingTitle = document.createElement("h2");
    walkingTitle.id = "Walking";
    walkingTitle.innerHTML = "PlyoCare Walking Windups";
    document.body.appendChild(walkingTitle);

    let walkingBlueTitle = document.createElement("h3");
    walkingBlueTitle.id = "Walking Blue";
    walkingBlueTitle.innerHTML = "Blue";
    document.body.appendChild(walkingBlueTitle);

    for (let i = 0; i < 2; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "walking blue input" + i;
        document.body.appendChild(input);
    }

    let walkingRedTitle = document.createElement("h3");
    walkingRedTitle.id = "Walking Red";
    walkingRedTitle.innerHTML = "Red";
    document.body.appendChild(walkingRedTitle);

    for (let i = 0; i < 2; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "walking red input" + i;
        document.body.appendChild(input);
    }

    let walkingYellowTitle = document.createElement("h3");
    walkingYellowTitle.id = "Walking Yellow";
    walkingYellowTitle.innerHTML = "Yellow";
    document.body.appendChild(walkingYellowTitle);

    for (let i = 0; i < 2; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "walking yellow input" + i;
        document.body.appendChild(input);
    }

    let walkingGrayTitle = document.createElement("h3");
    walkingGrayTitle.id = "Walking Gray";
    walkingGrayTitle.innerHTML = "Gray";
    document.body.appendChild(walkingGrayTitle);

    for (let i = 0; i < 2; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.id = "walking gray input" + i;
        document.body.appendChild(input);
    }

    let hr4 = document.createElement("hr");
    hr4.id = "hr4";
    document.body.appendChild(hr4);

    let submitButton = document.createElement("button");
    submitButton.id = "Submit";
    submitButton.className = "button";
    submitButton.innerHTML = "Submit";
    submitButton.addEventListener("click", function() {
        alert("Submitted!");
        for (let i = 0; i < 3; i++) {
            let kg = document.getElementById("kg" + i);
            localStorage.setItem("kg" + i + select.value, kg.value);
        }

        for (let i = 0; i < 5; i++) {
            let g = document.getElementById("g" + i);
            localStorage.setItem("g" + i + select.value, g.value);
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
                let c = "blue";
                if (j === 0) {
                    c = "blue";
                } else if (j === 1) {
                    c = "red";
                } else if (j === 2) {
                    c = "yellow";
                } else if (j === 3) {
                    c = "gray";
                }
                let color = document.getElementById("rocker " + c + " input" + i);
                localStorage.setItem("rocker " + c + " input" + i + select.value, color.value);
            }
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
                let c = "blue";
                if (j === 0) {
                    c = "blue";
                } else if (j === 1) {
                    c = "red";
                } else if (j === 2) {
                    c = "yellow";
                } else if (j === 3) {
                    c = "gray";
                }
                let color = document.getElementById("walking " + c + " input" + i);
                localStorage.setItem("walking " + c + " input" + i + select.value, color.value);
            }
        }
    });
    document.body.appendChild(submitButton);

    for (let i = 0; i < 3; i++) {
        if (localStorage.getItem("kg" + i + select.value)) {
            let kg = document.getElementById("kg" + i);
            kg.value = localStorage.getItem("kg" + i + select.value);
        } else {
            let kg = document.getElementById("kg" + i);
            localStorage.setItem("kg" + i + select.value, 0);
            kg.value = localStorage.getItem("kg" + i + select.value);
        }
    }

    for (let i = 0; i < 5; i++) {
        if (localStorage.getItem("g" + i + select.value)) {
            let g = document.getElementById("g" + i);
            g.value = localStorage.getItem("g" + i + select.value);
        } else {
            let g = document.getElementById("g" + i);
            localStorage.setItem("g" + i + select.value, 0);
            g.value = localStorage.getItem("g" + i + select.value);
        }
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            let c = "blue";
            if (j === 0) {
                c = "blue";
            } else if (j === 1) {
                c = "red";
            } else if (j === 2) {
                c = "yellow";
            } else if (j === 3) {
                c = "gray";
            }
            if (localStorage.getItem("rocker " + c + " input" + i + select.value)) {
                let color = document.getElementById("rocker " + c + " input" + i);
                color.value = localStorage.getItem("rocker " + c + " input" + i + select.value);
            } else {
                let color = document.getElementById("rocker " + c + " input" + i);
                localStorage.setItem("rocker " + c + " input" + i + select.value, 0);
                color.value = localStorage.getItem("rocker " + c + " input" + i + select.value);
            }
        }
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            let c = "blue";
            if (j === 0) {
                c = "blue";
            } else if (j === 1) {
                c = "red";
            } else if (j === 2) {
                c = "yellow";
            } else if (j === 3) {
                c = "gray";
            }
            if (localStorage.getItem("walking " + c + " input" + i + select.value)) {
                let color = document.getElementById("walking " + c + " input" + i);
                color.value = localStorage.getItem("walking " + c + " input" + i + select.value);
            } else {
                let color = document.getElementById("walking " + c + " input" + i);
                localStorage.setItem("walking " + c + " input" + i + select.value, 0);
                color.value = localStorage.getItem("walking " + c + " input" + i + select.value);
            }
        }
    }
}

function deletePlyoCareVelocityDayTrackerPage() {
    document.getElementById("back").remove();
    document.getElementById("Title").remove();
    document.getElementById("Select").remove();
    document.getElementById("hr1").remove();
    document.getElementById("Roll-Ins").remove();
    document.getElementById("hr2").remove();
    document.getElementById("kg Title").remove();

    for (let i = 0; i < 3; i++) {
        document.getElementById("kg" + i).remove();
    }

    document.getElementById("g Title").remove();

    for (let i = 0; i < 5; i++) {
        document.getElementById("g" + i).remove();
    }

    document.getElementById("Rocker").remove();
    document.getElementById("Rocker Blue").remove();
    document.getElementById("Rocker Red").remove();
    document.getElementById("Rocker Yellow").remove();
    document.getElementById("Rocker Gray").remove();

    for (let i = 0; i < 2; i++) {
        document.getElementById("rocker blue input" + i).remove();
        document.getElementById("rocker red input" + i).remove();
        document.getElementById("rocker yellow input" + i).remove();
        document.getElementById("rocker gray input" + i).remove();
    }

    document.getElementById("hr3").remove();

    document.getElementById("Walking").remove();
    document.getElementById("Walking Blue").remove();
    document.getElementById("Walking Red").remove();
    document.getElementById("Walking Yellow").remove();
    document.getElementById("Walking Gray").remove();

    for (let i = 0; i < 2; i++) {
        document.getElementById("walking blue input" + i).remove();
        document.getElementById("walking red input" + i).remove();
        document.getElementById("walking yellow input" + i).remove();
        document.getElementById("walking gray input" + i).remove();
    }

    document.getElementById("hr4").remove();
    document.getElementById("Submit").remove();
}

function createVelocityDayTrackerPage() {
    scroll(0, 0);
    let back = document.createElement("button");
    back.id = "back";
    back.className = "back";
    back.innerHTML = "Back";
    back.addEventListener("click", function() { deleteVelocityDayTrackerPage(); createHomePage(); });

    let title = document.createElement("h1");
    title.id = "Title";
    title.innerHTML = "Velocity Day Tracker";

    let select = document.createElement("select");
    select.id = "Select";
    select.value = "Week 5";
    select.innerHTML = "Week 5";
    for (let i = 5; i < 12; i++) {
        if (i !== 8) {
            let option = document.createElement("option");
            option.value = "Week " + i;
            option.innerHTML = "Week " + i;
            select.appendChild(option);
        }
    }
    select.addEventListener("change", function() {
        for (let j = 3; j < 8; j++) {
            for (let i = 0; i < 4; i++) {
                if (j !== 5) {
                    let input = document.getElementById("oz " + j + " input" + i);
                    if (localStorage.getItem("oz " + j + " input" + i + select.value)) {
                        input.value = localStorage.getItem("oz " + j + " input" + i + select.value);
                    } else {
                        localStorage.setItem("oz " + j + " input" + i + select.value, 0);
                        input.value = localStorage.getItem("oz " + j + " input" + i + select.value);
                    }
                } else {
                    for (let k = 1; k < 3; k++) {
                        let input = document.getElementById("oz " + j + " input" + k + i);
                    if (localStorage.getItem("oz " + j + " input" + k + i+ select.value)) {
                        input.value = localStorage.getItem("oz " + j + " input" + k + i+ select.value);
                    } else {
                        localStorage.setItem("oz " + j + " input" + k + i+ select.value, 0);
                        input.value = localStorage.getItem("oz " + j + " input" + k + i+ select.value);
                    }
                    }
                }
            }
        }
    });

    let hr1 = document.createElement("hr");
    hr1.id = "hr1";

    let hr2 = document.createElement("hr");
    hr2.id = "hr2";

    let velocityDayTitle = document.createElement("h2");
    velocityDayTitle.id = "Velocity Day Title";
    velocityDayTitle.innerHTML = "Velocity Day";

    let oz_5_label1 = document.createElement("h3");
    oz_5_label1.id = "oz 5 label1";
    oz_5_label1.innerHTML = "5oz";

    let oz_6_label = document.createElement("h3");
    oz_6_label.id = "oz 6 label";
    oz_6_label.innerHTML = "6oz";

    let oz_7_label = document.createElement("h3");
    oz_7_label.id = "oz 7 label";
    oz_7_label.innerHTML = "7oz";

    let oz_5_label2 = document.createElement("h3");
    oz_5_label2.id = "oz 5 label2";
    oz_5_label2.innerHTML = "5oz";

    let oz_4_label = document.createElement("h3");
    oz_4_label.id = "oz 4 label";
    oz_4_label.innerHTML = "4oz";

    let oz_3_label = document.createElement("h3");
    oz_3_label.id = "oz 3 label";
    oz_3_label.innerHTML = "3oz";

    document.body.appendChild(back);
    document.body.appendChild(title);
    document.body.appendChild(select);
    document.body.appendChild(hr1);
    document.body.appendChild(velocityDayTitle);
    document.body.appendChild(oz_5_label1);

    for (let i = 0; i < 4; i++) {
        let oz_5_input = document.createElement("input");
        oz_5_input.id = "oz 5 input1" + i;
        oz_5_input.type = "number";
        document.body.appendChild(oz_5_input);
    }

    document.body.appendChild(oz_6_label);

    for (let i = 0; i < 4; i++) {
        let oz_6_input = document.createElement("input");
        oz_6_input.id = "oz 6 input" + i;
        oz_6_input.type = "number";
        document.body.appendChild(oz_6_input);
    }

    document.body.appendChild(oz_7_label);

    for (let i = 0; i < 4; i++) {
        let oz_7_input = document.createElement("input");
        oz_7_input.id = "oz 7 input" + i;
        oz_7_input.type = "number";
        document.body.appendChild(oz_7_input);
    }

    document.body.appendChild(oz_5_label2);

    for (let i = 0; i < 4; i++) {
        let oz_5_input = document.createElement("input");
        oz_5_input.id = "oz 5 input2" + i;
        oz_5_input.type = "number";
        document.body.appendChild(oz_5_input);
    }

    document.body.appendChild(oz_4_label);

    for (let i = 0; i < 4; i++) {
        let oz_4_input = document.createElement("input");
        oz_4_input.id = "oz 4 input" + i;
        oz_4_input.type = "number";
        document.body.appendChild(oz_4_input);
    }

    document.body.appendChild(oz_3_label);

    for (let i = 0; i < 4; i++) {
        let oz_3_input = document.createElement("input");
        oz_3_input.id = "oz 3 input" + i;
        oz_3_input.type = "number";
        document.body.appendChild(oz_3_input);
    }

    let submitButton = document.createElement("button");
    submitButton.id = "Submit";
    submitButton.innerHTML = "Submit";
    submitButton.className = "button";
    submitButton.addEventListener("click", function() {
        for (let j = 3; j < 8; j++) {
            for (let i = 0; i < 4; i++) {
                if (j !== 5) {
                    let input = document.getElementById("oz " + j + " input" + i);
                    localStorage.setItem("oz " + j + " input" + i + select.value, input.value);
                } else {
                    for (let k = 1; k < 3; k++) {
                        let input = document.getElementById("oz " + j + " input" + k + i);
                        localStorage.setItem("oz " + j + " input" + k + i + select.value, input.value);
                    }
                }
            }
        }
        alert("Submitted!");
    });

    document.body.appendChild(submitButton);
    document.body.appendChild(hr2);

    for (let j = 3; j < 8; j++) {
        for (let i = 0; i < 4; i++) {
            if (j !== 5) {
                let input = document.getElementById("oz " + j + " input" + i);
                if (localStorage.getItem("oz " + j + " input" + i + "Week 5")) {
                    input.value = localStorage.getItem("oz " + j + " input" + i + "Week 5");
                } else {
                    localStorage.setItem("oz " + j + " input" + i + "Week 5", 0);
                    input.value = localStorage.getItem("oz " + j + " input" + i + "Week 5");
                }
            } else {
                for (let k = 1; k < 3; k++) {
                    let input = document.getElementById("oz " + j + " input" + k + i);
                if (localStorage.getItem("oz " + j + " input" + k + i+ "Week 5")) {
                    input.value = localStorage.getItem("oz " + j + " input" + k + i+ "Week 5");
                } else {
                    localStorage.setItem("oz " + j + " input" + k + i+ "Week 5", 0);
                    input.value = localStorage.getItem("oz " + j + " input" + k + i + "Week 5");
                }
                }
            }
        }
    }
}

function deleteVelocityDayTrackerPage() {
    document.getElementById("back").remove();
    document.getElementById("Title").remove();
    document.getElementById("Select").remove();
    document.getElementById("hr1").remove();
    document.getElementById("Velocity Day Title").remove();
    document.getElementById("oz 5 label1").remove();

    for(let i = 0; i < 4; i++) {
        document.getElementById("oz 5 input1" + i).remove();
    }

    document.getElementById("oz 6 label").remove();

    for(let i = 0; i < 4; i++) {
        document.getElementById("oz 6 input" + i).remove();
    }

    document.getElementById("oz 7 label").remove();

    for(let i = 0; i < 4; i++) {
        document.getElementById("oz 7 input" + i).remove();
    }

    document.getElementById("oz 5 label2").remove();

    for(let i = 0; i < 4; i++) {
        document.getElementById("oz 5 input2" + i).remove();
    }

    document.getElementById("oz 4 label").remove();

    for(let i = 0; i < 4; i++) {
        document.getElementById("oz 4 input" + i).remove();
    }

    document.getElementById("oz 3 label").remove();

    for(let i = 0; i < 4; i++) {
        document.getElementById("oz 3 input" + i).remove();
    }

    document.getElementById("Submit").remove();
    document.getElementById("hr2").remove();
}

function createTutorialsPage() {
    scroll(0, 0);
    let back = document.createElement("button");
    back.id = "back";
    back.className = "back";
    back.innerHTML = "Back";
    back.addEventListener("click", function() { deleteTutorialsPage(); createHomePage(); });


    let title = document.createElement("h1");
    title.id = "Title";
    title.innerHTML = "Tutorials";

    let reverseThrowLink = document.createElement("a");
    reverseThrowLink.id = "Reverse Throw";
    reverseThrowLink.href = "https://www.youtube.com/watch?v=peA7U_n9gT8";
    reverseThrowLink.target = "_blank";
    reverseThrowLink.innerHTML = "PlyoCare Reverse Throw";

    let pivotPickoffLink = document.createElement("a");
    pivotPickoffLink.id = "Pivot Pickoff";
    pivotPickoffLink.href = "https://www.youtube.com/watch?v=MHKyow4dPM8";
    pivotPickoffLink.target = "_blank";
    pivotPickoffLink.innerHTML = "PlyCare Pivot Pickoff";

    let rollInThrowsLink = document.createElement("a");
    rollInThrowsLink.id = "Roll In";
    rollInThrowsLink.href = "https://www.youtube.com/watch?v=25XKd8Z9N50";
    rollInThrowsLink.target = "_blank";
    rollInThrowsLink.innerHTML = "Roll-In Throws";

    let rockerThrowLink = document.createElement("a");
    rockerThrowLink.id = "Rocker Throw";
    rockerThrowLink.href = "https://www.youtube.com/watch?v=ZZn5l_inuNk";
    rockerThrowLink.target = "_blank";
    rockerThrowLink.innerHTML = "Rocker Throw";

    let walkingWindupLink = document.createElement("a");
    walkingWindupLink.id = "Walking Windup";
    walkingWindupLink.href = "https://www.youtube.com/watch?v=UnLGNmzQr10";
    walkingWindupLink.target = "_blank";
    walkingWindupLink.innerHTML = "Walking Windup";

    document.body.appendChild(back);
    document.body.appendChild(title);
    document.body.appendChild(reverseThrowLink);
    document.body.appendChild(pivotPickoffLink);
    document.body.appendChild(rollInThrowsLink);
    document.body.appendChild(rockerThrowLink);
    document.body.appendChild(walkingWindupLink);
}

function deleteTutorialsPage() {
    document.getElementById("back").remove();
    document.getElementById("Title").remove();
    document.getElementById("Reverse Throw").remove();
    document.getElementById("Pivot Pickoff").remove();
    document.getElementById("Roll In").remove();
    document.getElementById("Rocker Throw").remove();
    document.getElementById("Walking Windup").remove();
}

function createDayPage(day) {
    scroll(0, 0);
    let back = document.createElement("button");
    back.id = "back";
    back.className = "back";
    back.innerHTML = "Back";
    back.addEventListener("click", function() { deleteDayPage(); createHomePage(); });

    let title = document.createElement("h1");
    title.id = "Title";
    title.innerHTML = day.title;

    let notes = document.createElement("p");
    notes.id = "Notes";
    notes.innerHTML = "Notes: " + day.notes;

    let tableContainer = document.createElement("table");
    tableContainer.id = "tableContainer";
    tableContainer.className = "table_container";

    let table = document.createElement("table");
    tableContainer.appendChild(table);

    for (let i = 0; i < day.length; i++) {
        let label = document.createElement ("label");
		label.id = "label" + i;
		label.className = "switch";
		let input = document.createElement ("input");
		input.type = "checkbox";
		input.addEventListener ("change", function () {
			if (input.checked === true) {
				numClicked++;
			}
			else if (input.checked === false) {
				numClicked--
			}

			if (numClicked === day.length) {
				window.alert ("Completed!");
			}
		});
		let span = document.createElement ("span");
		span.className = "slider";

		label.appendChild (input);
        label.appendChild (span);
        
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = day[i].Exercise;
        cell1.style.fontWeight = 'bold';
        cell2.innerHTML = day[i].Reps;
        cell3.appendChild(label);
    }

    document.body.appendChild(back);
    document.body.appendChild(title);
    document.body.appendChild(notes);
    document.body.appendChild(tableContainer);
}

function deleteDayPage() {
    document.getElementById("back").remove();
    document.getElementById("Title").remove();
    document.getElementById("Notes").remove();
    document.getElementById("tableContainer").remove();
}