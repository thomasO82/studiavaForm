let index = 1;

function next() {
    console.log(document.querySelector(`#question${index - 1}`));
    index++
    document.querySelector(`#question${index - 1}`).style.display = "none"
    document.querySelector(`#question${index}`).style.display = "block"
}