//import Map from './CMap';

class MapHandler
{
    constructor(mapId) {
        this.map = new Map(mapId);
        //this.iconList = new Liste (AbstractIcon);
        this.nbIconSelected = 0;
        this.destSelected = false;
        this.startSelected = false;
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

    selectStart(){
        console.log("Get Start");
        console.log(this.map.getStart());
        this.startSelected = true;
        if(this.destSelected){
            if (this.map.getDestination() != null){
                this.routingBtwnSelectedPoints();
            }
        }
        this.map.closePopUps();
    }

    selectDestination(){
        console.log("Get Dest");
        console.log(this.map.getDestination());
        this.destSelected = true;
        if (this.startSelected){
            if (this.map.getStart() != null){
                this.routingBtwnSelectedPoints();
            }
        }
        this.map.closePopUps();
    }

    routingBtwnSelectedPoints(){
        if (this.map.getDestination() == null){
            alert("Vous devez selectionner une destination");
        }else if (this.map.getStart() == null){
            alert("Vous devez selectionner une un point de départ");
        }else{
        this.map.routing();
        }
    }

    setView(lat, lon, zoom) {
        this.map.setView(lat, lon, zoom)
    }



}