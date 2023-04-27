import weaponsGet from "./weaponsGet.js";
export default{
    async inventoryManager(){
        const INVENTORY = document.querySelector("#INVENTORY");
        const url = 'https://valorant-api.com/v1/weapons';
        const CLOSE = document.querySelector("#CLOSE")
        const WINDOW = document.querySelector("#inventoryWindow")
        const WEAPONSWINDOW = document.querySelector("#weaponsWindow")
        ////////////////////////////////////////////////////////
        weaponsGet.ws.postMessage({url: url})
        weaponsGet.ws.addEventListener("message", (e)=>{
            console.log((e.data));
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            WEAPONSWINDOW.append(...doc.body.children);
        })
        ////////////////////////////////////////////////////////
        INVENTORY.addEventListener("click", (e)=>{
            WINDOW.style.display = "block"
        })
        CLOSE.addEventListener("click", (e)=>{
            WINDOW.style.display = "none"
        })


    },

    // const MAPS = document.querySelector("#MAPS");
    // const AGENTS = document.querySelector("#AGENTS")
}