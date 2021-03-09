class AbstractIcon
{
        constructor (tabXY){
        if (this.constructor === AbstractIcon) {
            throw new TypeError('Abstract class "AbstractIcon" cannot be instantiated directly');
        }

        this.iconSize = [38, 95]; // size of the icon
        this.shadowSize = [50, 64]; // size of the shadow
        this.iconAnchor =[22, 94]; // point of the icon which will correspond to marker's location
        this.shadowAnchor = [4, 62];  // the same for the shadow
        this.popupAnchor =  [-3, -76];

        this._position = tabXY;
        this._descritpion = "Pas de description";
        this._destination ="Non spécifié";
        this._isSelected = false;
        
    }

    get position (){
        return this._position;
    }

    set position (tabXY){
        this._position = tabXY;
    }

    get descritpion(){
        return this._descritpion;
    }

    set descritpion(description){
        this._descritpion = description;
    }

    get destination(){
        return this._destination;
    }

    set destination(destination){
        this._destination = destination;
    }

    getLeafIcon() {
        throw new Error('You have to implement the method doSomething!');
    }

    
}