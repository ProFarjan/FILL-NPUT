// content.js
var fm = document.querySelector('form');
if (fm.length > 0) {
    var fm_ele = fm.elements;
    Array.from(fm_ele).forEach(function (e) {
        e.value = "Good Day"
        console.log(e.name, "Type: " + e.type, ", Classes: " + Array.from(e.classList).join(' ') + ", ID: " + e.id)
    });
} else {
    alert("NOT FOUND ANY FORM!");
}