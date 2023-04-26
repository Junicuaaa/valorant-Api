export default {
    async agents() {
        const url = 'https://valorant-agents-maps-arsenal.p.rapidapi.com/agents/en-us';
        const ws = new Worker('./js/services/agentsGetWs.js', {type: "module"});
        ws.postMessage(url)
    }
}