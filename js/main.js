import agentsGet from "./components/agentsGet.js";
import mapsGet from "./components/mapsGet.js"
import skinsGet from "./components/skinsGet.js"
import weaponsGet from "./components/weaponsGet.js"
import windows from "./components/windowManager.js"

agentsGet.agents();
mapsGet.maps();
skinsGet.skins();
// weaponsGet.weapons();
windows.inventoryManager();