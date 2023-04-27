let ws = {
    async getWeapons(p1) {
        try {
            const response = await fetch(p1);
            const result = await response.json();
            let data = result.data.map(element => {
                let html = /*html*/ ``
                html += /*html*/ `                
                <div class ="m-none" style="width: fit-content; margin:none;">
                    <img src="${element.displayIcon}" alt="">
                    <p style="display: inline;">${element.displayName}</p>
                </div>
                `
                return html
            });
            return data
        } catch (error) {
            console.error(error);
        }
    }
}

self.addEventListener("message", async (e) => {
    let data = await ws.getWeapons(e.data.url)
    postMessage(data)
})