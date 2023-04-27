export default {
    ws: new Worker('./js/services/weaponsGetWs.js', {type: "module"}),
}