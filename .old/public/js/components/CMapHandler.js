//import Map from './CMap';

class MapHandler
{
    constructor(mapId) {
        this.map = new Map(mapId);
        //this.iconList = new Liste (AbstractIcon);
        this.nbIconSelected = 0;
    }

    locate(){
        this.map.locate();
    }

    addIconToMap(iconType, position, description, destination){
        var icon = null;

        switch (iconType) {
            case 'car':
                icon = new CarIcon(position);
                break;
            case 'boat':
                icon = new BoatIcon(position);
                break;
            case 'plane':
                icon = new PlaneIcon(position);
                break;
            default:
              console.log(`The icon type ${iconType} doesn't existe.`);
        }
        if(icon != null){
            if(description){
                icon.description = description;
            }
            if (destination){
                icon.destination = destination;
            }
            this.map.addIcon(icon);
        }
    }

    selectICon(){

    }

    setView(lat, lon, zoom) {
        this.map.setView(lat, lon, zoom)
    }



}