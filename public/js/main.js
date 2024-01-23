let taskName = document.querySelector("#theTitle")


let modify = document.querySelector("#modify")

var done = document.querySelector(".fini")

let deleted = document.querySelector("#delete")

let modalContainer = document.querySelector(".modalContainer");

let body = document.querySelector("body")



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
    



let validateButtons = newTry.querySelectorAll('.Valider');
validateButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.style.backgroundColor = 'lightgreen';
        
    });
});



       
        
          
    }
    

})