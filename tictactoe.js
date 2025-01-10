let boxes = document.querySelectorAll(".thebox");
let resetbutton = document.querySelector("#thereset");
let message = document.createElement("div");
message.style.fontSize = "2rem";
message.style.marginTop = "1rem";
message.style.fontWeight = "bold";
message.style.textAlign = "center";
message.style.visibility = "hidden";
document.querySelector("main").insertBefore(message, document.querySelector(".thecontainer"));

let xturn = true;

//the only winning options
const thewinning = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((thebox) => {
    thebox.addEventListener("click", () => {
        if (xturn) {
            thebox.innerText = "X";
            thebox.style.color = "blue";
            xturn = false;
        } else {
            thebox.innerText = "O";
            thebox.style.color = "red";
            xturn = true;
        }
        thebox.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    let isTie = true;

    for (let pattern of thewinning) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            message.innerText = `${val1} wins! 🎉`;
            message.style.color = val1 === "X" ? "blue" : "red";
            message.style.visibility = "visible";
            disableAllBoxes();
            return;
        }
    }

    boxes.forEach((box) => {
        if (box.innerText === "") {
            isTie = false;
        }
    });

    if (isTie) {
        message.innerText = "It's a tie! 🤝";
        message.style.color = "orange";
        message.style.visibility = "visible";
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

resetbutton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    message.innerText = "";
    message.style.visibility = "hidden";
    xturn = true;
});
