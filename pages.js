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
    document.getElementById("Velocity Day Tracker").remove();
    document.getElementById("Tutorials").remove();
    document.getElementById("Velocity Day").remove();
    document.getElementById("PlyoCare Velocity").remove();
    document.getElementById("Hybrid A").remove();
    document.getElementById("Hybrid B").remove();
    document.getElementById("Recovery").remove();
}

function createVelocityDayTrackerPage() {
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

    let br1 = document.createElement("hr");
    br1.id = "br1";

    let br2 = document.createElement("hr");
    br2.id = "br2";

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
    document.body.appendChild(br1);
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
    document.body.appendChild(br2);

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
    document.getElementById("br1").remove();
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
    document.getElementById("br2").remove();
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