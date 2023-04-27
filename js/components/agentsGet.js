export default {
    async agents() {
        const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';
        const ws = new Worker('./js/services/agentsGetWs.js', {type: "module"});
        ws.postMessage(url)
    }
}