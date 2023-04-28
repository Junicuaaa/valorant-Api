import weaponsGet from "./weaponsGet.js";
export default{
    async inventoryManager(){
        const INVENTORY = document.querySelector("#INVENTORY");
        const url = 'https://valorant-api.com/v1/weapons';
        const CLOSE = document.querySelector("#CLOSE")
        const WINDOW = document.querySelector("#inventoryWindow")
        const sideArm = document.querySelector(".sidearm")
        const sniper = document.querySelector(".sniper")
        const rifle = document.querySelector(".rifle")
        const shotgun = document.querySelector(".shotgun")
        const heavy = document.querySelector(".heavy")
        const smgS = document.querySelector(".smg")
        ////////////////////////////////////////////////////////
        weaponsGet.ws.postMessage({url: url})
        weaponsGet.ws.addEventListener("message", (e)=>{
            let data = e.data
            console.log(data);
            let {rifle, sidearm, shotgun, smg, heavy, sniper} = data;
            if(sidearm){
                let doc = new DOMParser().parseFromString(sidearm, "text/html")
                sideArm.append(...doc.body.children)
                console.log(doc);
            }else if(smg){
                let doc = new DOMParser().parseFromString(smg, "text/html")
                smgS.append(...doc.body.children)
                console.log(doc);
            }
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