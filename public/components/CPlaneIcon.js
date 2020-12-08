class PlaneIcon extends AbstractIcon
{
    constructor(tabXY){
        super(tabXY);

        this.iconUrl = 'ressources/icons/plane-icon.png';
        this.shadowUrl = 'ressources/icons/shadow-icon.png';

        this.planeIcon = L.icon({
            iconUrl: this.iconUrl,
            shadowUrl: this.shadowUrl,
        
            iconSize:     this.iconSize, // size of the icon
            shadowSize:   this.shadowSize, // size of the shadow
            iconAnchor:   this.iconAnchor, // point of the icon which will correspond to marker's location
            shadowAnchor: this.shadowAnchor,  // the same for the shadow
            popupAnchor:  this.popupAnchor // point from which the popup should open relative to the iconAnchor
        });

    }

    getLeafIcon() {
        return this.planeIcon;
    }
}