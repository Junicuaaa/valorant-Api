let ws = {
    async getSkins(p1){

        try {
            const response = await fetch(p1);
            const result = await response.json();
            return result
        } catch (error) {
            console.error(error);
        }
    }
}

self.addEventListener("message", async (e) =>{
    let data = await ws.getSkins(e.data)
    console.log(data);
})