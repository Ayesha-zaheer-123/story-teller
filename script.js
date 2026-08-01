let scarybtn=document.querySelector("#btn1");
    let funnybtn=document.querySelector("#btn2");
    let adventurebutton=document.querySelector("#btn3");
    let result=document.querySelector(".result");
    let mainarea=document.querySelector(".main-container");
scarybtn.addEventListener("click",()=>{
result.innerText="In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries"
mainarea.style.borderColor="red";
    });
    funnybtn.addEventListener("click",()=>{
result.innerText="During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off."
mainarea.style.borderColor="yellow";
    });
   adventurebutton.addEventListener("click",()=>{
result.innerText="Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization"
mainarea.style.borderColor="green";
    });