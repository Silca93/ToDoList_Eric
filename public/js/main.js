

let taskName = document.querySelector("#theTitle")

// let validate = document.querySelector("#validate")

let modify = document.querySelector("#modify")

var done = document.querySelector(".fini")

let deleted = document.querySelector("#delete")

let modalContainer = document.querySelector(".modalContainer");

let body = document.querySelector("body")


done.addEventListener("click", () => {
    done.style.heigth = "200px"
    done.style.width = "200px"
    
})

modify.addEventListener("click", () => {
    taskName.value = textfield.value
})
// deleted.addEventListener('click', () => {
//     // taskName.value = ''
//     newTry.remove()

// })
let newTry;

let textfield = document.querySelector("#textfield")
textfield.addEventListener("keydown", (ev) => {
    if (ev.key == 'Enter'){

        // let newTask = document.createElement("div")
        // newTask.classList.add("modalContainer")
        
        newTry = modalContainer.cloneNode(true)
        
        newTry.style.boxShadow = "5px 6px 0px #383838"
        taskName.value = textfield.value 
        textfield.value = ""
               
        body.appendChild(newTry)


        let done = document.querySelector(".fini")
        let validate = document.querySelector("#validate")
        validate.addEventListener("click", () => {
            newTry.style.backgroundColor = "lightgreen"
            done.appendChild(newTry);

            console.log(done);
        })

        let deleteButtons = newTry.querySelectorAll(".Supprimer");
        deleteButtons.forEach((element) => {
        element.addEventListener('click', (element) => {
            element.target.parentElement.parentElement.remove();
            console.log(newTry);
        });
    })
       
        
          
    }
    

})