

let taskName = document.querySelector("#theTitle")


// let taskContainer = document.querySelector(".task-container");

let modify = document.querySelector("#modify")

var done = document.querySelector(".fini")

let deleted = document.querySelector("#delete")

let modalContainer = document.querySelector(".modalContainer");

let body = document.querySelector("body")


done.addEventListener("click", () => {
    done.style.height = "200px"
    done.style.width = "200px"
    
})



let newTry;

let textfield = document.querySelector("#textfield")
textfield.addEventListener("keydown", (ev) => {
    if (ev.key == 'Enter'){
             
        newTry = modalContainer.cloneNode(true)
        newTry.style.boxShadow = "5px 6px 0px #383838"
        taskName.value = textfield.value 
        textfield.value = ""
               
        body.appendChild(newTry);

        let validate = newTry.querySelectorAll(".Valider")
        validate.forEach((element => {
            element.addEventListener("click", (element) => {
                element.target.parentElement.parentElement.style.background = "lightgreen";
                done.appendChild(newTry);
                console.log(done);
    
                
        })
        
        }))
    

        let taskInputField = newTry.querySelector("#theTitle");
        let modify = newTry.querySelectorAll(".Modifier");
        modify.forEach((element) => {
        element.addEventListener("click", () => {
            taskInputField.value = textfield.value
        })
    })


        let deleteButtons = newTry.querySelectorAll(".Supprimer");
        deleteButtons.forEach((element) => {
        element.addEventListener('click', (element) => {
            element.target.parentElement.parentElement.remove();

        });
    })
    // body.appendChild(taskContainer); // Make sure the task container is in the body

    // // Append the newTry to the task container
    // taskContainer.appendChild(newTry);
       
        
          
    }
    

})