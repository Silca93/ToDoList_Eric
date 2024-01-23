

let taskName = document.querySelector("#theTitle")

let validate = document.querySelector("#validate")

let modify = document.querySelector("#modify")



let deleted = document.querySelector("#delete")

let modalContainer = document.querySelector(".modalContainer");

let body = document.querySelector("body")



deleted.addEventListener('click', () => {

})


let textfield = document.querySelector("#textfield")
textfield.addEventListener("keydown", (ev) => {
    if (ev.key == 'Enter'){

        // let newTask = document.createElement("div")
        // newTask.classList.add("modalContainer")
        let newTry;
        newTry = modalContainer.cloneNode(true)
        newTry.value = textfield.value
        console.log(newTry.value);
        body.appendChild(newTry)
        
        let inputField = document.createElement("input");
        inputField.type = "text";
        
        inputField.value = textfield.value;

        // newTask.appendChild(inputField);
       
        // body.appendChild(newTask);
        // theTitle.value = textfield.value
                // newTask.innerHTML = '<div class="taskName"><input type="text" id="theTitle" value="'+textfield.value+'"></div><div class="options"><input type="button" id="validate" value="Validate"><input type="button" id="modify" value="Modify"><input type="button" id="delete" value="Delete"></div>';


    
    }
    

})