let ws = {
    async getWeapons(p1) {
        try {
            const response = await fetch(p1);
            const result = await response.json();
            let data = result.data.map(element => {
                let html = /*html*/ ``
                let arma = element.category.toLowerCase()
                let rifle = 'rifle'
                let sidearm = 'sidearm'
                let shotgun = 'shotgun'
                let sniper = 'sniper'
                let smg = 'smg'
                let heavy = 'heavy'
                if (arma.includes(rifle)) {
                    html += /*html*/ `                
                    <div class = "weapon-rifle m-auto" style="">
                        <img class="rifle img-fluid" src="${element.displayIcon}" alt="">
                        <p>${element.displayName}</p>
                    </div>
                    `
                    postMessage({rifle: html})
                }else if(arma.includes(sidearm)){
                    html += /*html*/ `                
                    <div class ="weapon-side text-center" style="">
                        <img class="sidearm img-fluid m-auto" src="${element.displayIcon}" alt="">
                        <p class="d-block">${element.displayName}</p>
                    </div>
                    `
                    postMessage({sidearm: html})
                }else if(arma.includes(shotgun)){
                    html += /*html*/ `                
                    <div class =  "weapon-shotgun" style="">
                        <img class="shotgun img-fluid" src="${element.displayIcon}" alt="">
                        <p>${element.displayName}</p>
                    </div>
                    `
                    postMessage({shotgun: html})
                }else if(arma.includes(sniper)){
                    html += /*html*/ `                
                    <div class  = "weapon-sniper" style="">
                        <img class="sniper img-fluid" src="${element.displayIcon}" alt="">
                        <p>${element.displayName}</p>
                    </div>
                    `
                    postMessage({sniper: html})
                }else if(arma.includes(smg)){
                    html += /*html*/ `                
                    <div class =  "weapon-smg" style="">
                        <img class="smg m-auto img-fluid" src="${element.displayIcon}" alt="">
                        <p class >${element.displayName}</p>
                    </div>
                    `
                    postMessage({smg: html})
                }else if(arma.includes(heavy)){
                    html += /*html*/ `                
                    <div class = "weapon-heavy" style="">
                        <img class="heavy img-fluid" src="${element.displayIcon}" alt="">
                        <p>${element.displayName}</p>
                    </div>
                    `
                    postMessage({heavy: html})
            }})
        } catch (error) {
            console.error(error);
        }
    }
}

self.addEventListener("message", async (e) => {
    let data = await ws.getWeapons(e.data.url)
})