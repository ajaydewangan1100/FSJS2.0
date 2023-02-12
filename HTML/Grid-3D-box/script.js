
// Getting things here
let container = document.querySelector(".container");
let boxes = 4;  // Value for row collumn fractions
let image_file = document.querySelector("#image_file");
let myImg = document.querySelector(".myImg");
let start = document.querySelector(".start");

let started_Flag = false;    // flag for start game or not


// Image input event here
image_file.onchange = evt => { change_Img(); }


// Function for changing image
function change_Img(){
    const [file] = image_file.files
    if (file) {
        container.style.background = `url(${URL.createObjectURL(file)})`;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
        // Calling start game when click
        if (!started_Flag) {
            start.onclick = create_boxes;
        }
    }
}


// Creating boxes elements here ------ <div class="boxes box"></div>
let last_Box;
let between;
function create_boxes () {
    for (let i = 0; i < boxes * boxes; i++) {
        const box = document.createElement("div");
        box.classList.add("boxes");
        box.classList.add("box");
        box.style.width = `${100/boxes}%`        // width: 25%;
        box.style.height = `${100/boxes}%`        // height: 25%;
        // background-position: 0px 0px;
        box.style.backgroundPosition = `0px 0px`;
        box.style.backgroundPosition = `0px 0px`;
        box.id = `id_${i}`;
        box.style.border = "1px solid black";
        container.appendChild(box);
        console.log(boxes.length);
        if (i == boxes * boxes - 1) {
            last_Box = box;
            alert(last_Box.id);
            box.style.border = "1px solid red";
        }
        if (i == boxes * boxes - 4) {
            between = box;
            box.style.display = "none";
        }
        
        
    }
    container.appendChild(between);
    between.style.border = "1px solid red";
    between.style.display = "flex";
    
    
    // Making ------------------------------------------ Visibility---- Hidden 

    started_Flag = true;    // Flag for game start 
}


for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.onmousedown = dragMouseDown;
}

function dragMouseDown(event) {

    pos_X = event.clientX;
    pos_Y = event.clientY;
    console.log(`${pos_X} " " ${pos_Y}`);
    
    // box.onmouseup = dragMouseUp;

    event.onmouseup = moveDiv;
}

function moveDiv(evt){
    console.log("mee");
}
