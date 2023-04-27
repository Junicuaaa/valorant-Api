export default {
    async skins() {
        const url = 'https://valorant-api.com/v1/weapons/skins';
        const ws = new Worker('./js/services/skinsGetWs.js', {type: "module"});
        ws.postMessage(url)
    }
}