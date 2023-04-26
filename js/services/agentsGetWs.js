let ws = {
    async getAgents(p1){
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '07ac54679fmsh607be10336afe60p147eb1jsn9ad03a967777',
                'X-RapidAPI-Host': 'valorant-agents-maps-arsenal.p.rapidapi.com'
            }
        };

        try {
            const response2 = await fetch("https://valorant-agents-maps-arsenal.p.rapidapi.com/arsenal/en-us", options)
            const response3 = await fetch("https://valorant-agents-maps-arsenal.p.rapidapi.com/maps/en-us", options)
            const response = await fetch(p1, options);
            const result = await response.json();
            const result2 = await response2.json();
            const result3 = await response3.json();
            console.log(result);
            console.log(result2);
            console.log(result3);
        } catch (error) {
            console.error(error);
        }
    }
}

self.addEventListener("message", async (e) =>{
    let data = await ws.getAgents(e.data)

})