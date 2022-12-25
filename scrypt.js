//Dropdown Scrypt!!!!!

let dropDown = document.getElementById("droptext");
let trigger = document.getElementById("projectsDropDown")

const getDdStyle =()=>{
    let CheckDd = window.getComputedStyle(dropDown)
    return CheckDd.display
}

const Dd =()=>{
    if(getDdStyle() === "none"){
        dropDown.style.display = "block"
        console.log("open")
    }else if(getDdStyle()==="block"){
        dropDown.style.display = "none"
        console.log("close")
    }
};

trigger.addEventListener("click",Dd)