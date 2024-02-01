let TodoList = document.getElementById('todoList')
let Done = document.getElementById('done')
let Delete = document.getElementById('delete')
let TodoInput = document.getElementById('todoinput')
let addTodo =  document.getElementById('addTodo')




        function addingTodo() {
            if(TodoInput.value == "")
            {
                alert("Please Enter a valid Todo List")
            }
            else
            {
            let newLi = document.createElement('li')
                newLi.innerHTML = `
                ${TodoInput.value}
                <span id="done">Done</span>
                <span id="delete">X</span>
                `;

                TodoList.appendChild(newLi)
                TodoInput.value = "";
    
                newLi.querySelector('#done').addEventListener("click",()=>{
                    newLi.classList.toggle("done");
                    document.querySelector('#done').remove();
                })
            
                newLi.querySelector("#delete").addEventListener("click",()=>{
                newLi.remove();
                })    
                
            }

        }

        addTodo.addEventListener("click",()=>{ 
            addingTodo();
        })


        document.addEventListener("keyup",(e)=>{
            
            if(e.key == "Enter"){
            if(TodoInput.value == "")
            {
                alert("Please Enter a valid Todo List")
            }
            else{
                addingTodo();
            }
            }
        })



