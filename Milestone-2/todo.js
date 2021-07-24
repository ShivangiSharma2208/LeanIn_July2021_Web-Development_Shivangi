const btn = document.querySelector('#add');
btn.addEventListener("click", function ()
{
    if (document.querySelector('#newtask input').value.length == 0) 
    {
        alert("Please enter a task");

    }
    else
    {
        document.querySelector('#list').innerHTML
            +=`
        <div class="task">
        <span id="taskname">
           ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
        <i class="fas fa-trash-alt"></i>
        </button>
        </div>
        `;

    }
    var current_tasks=document.querySelectorAll(".delete");
    for(var i=0;i<current_tasks.length;i++)
    {
         current_tasks[i].onclick=function()
         {
             this.parentNode.remove();
         }
    }
    document.querySelector('#newtask input').value="";

});
