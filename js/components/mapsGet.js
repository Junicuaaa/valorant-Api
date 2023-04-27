export default {
    async maps() {
        const url = 'https://valorant-api.com/v1/maps';
        const ws = new Worker('./js/services/mapsGetWs.js', {type: "module"});
        ws.postMessage(url)
    }
}