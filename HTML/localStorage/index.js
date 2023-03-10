// myobj = {
//     name:"gopi",
//     hobbi:["sex", "sucks"],
//     funmain: function () {
//         alert(this.name)
//     }
// }


const frooti = JSON.parse(localStorage.getItem("dell")) ? JSON.parse(localStorage.getItem("dell")):[];

const form = document.getElementById("form");
const textnew = document.getElementById("textnew");
const submit = document.getElementById("submit");
const showing = document.getElementById("showing");

submit.addEventListener("click", () => {
    frooti.push(textnew.value);
    localStorage.setItem("dell", JSON.stringify(frooti));
    showData();
    console.log(frooti);
})

console.log(localStorage.length);

const showData = () => {
    const datarr = JSON.parse(localStorage.getItem("dell"));
    console.log(frooti);
    showing.innerText = frooti;
}
showData();

form.addEventListener("submit", function(e){
    e.preventDefault();

})


// localStorage.setItem("gopi-data", JSON.stringify(myobj));
// localStorage.setItem("arr1", JSON.stringify(arr_gopi));

// const gopi1 = localStorage.getItem("gopi-data");
// console.log(JSON.parse(gopi1));

// const array1 = localStorage.getItem("arr1");
// console.log(typeof(array1));


