# Setup

__Utilisé yarn (et seulement yarn) pour la gestion des packages__

Après un pull
>yarn install

#### Lancer l'appli
coté back  : 
>nodemon

coté front : 
>yarn watch

_faite gaffe à votre .env qui a tendance à dégager lors de push/merge_

# UI

- Pour la majorité des composants UI, utiliser __Material UI__.
- Pour le CSS, utiliser __styled-conponents__.

# Orga du projet

### Général

Le projet est organisé avec un kanban.

#### A FAIRE AVANT TOUTE CODAGE
- se rendre sur --> https://hitchhikeapp.atlassian.net/
- s'assigner un ticket
- créer un branch git avec le nom du ticket (commence par 'HT-')

L'idée est de créer une branche pour chaque fonctionnalité et de merge sur la branche dev quand celle-ci est terminée:
![alt text](https://static.les-enovateurs.com/uploads/2021/02/Gitflow-nouvelle-fonction-gitflow-feature.png)

### Intégration
#### Test
Pour l'instant on reste sur du test manuel mais autant annoncer la nouvelle maintenant: quand le MVP sortira, faudra tester tout notre code proprement avant de continuer.
#### Merge
Les taches sont assignées jusqu'au merge en dev, vous pouvez donc librement merge votre fonctionnalité sur la branche dev quand elle est finie et testée.

# Bonnes Pratiques

Afin de limiter au maximum notre dette technique, je vous propose ici quelques idées pour rendre notre code plus facilement maintenable et plus "synchro".

### React
- __[TRES IMPORTANT]__ Plus de CSS, utilisé __styled-components__ à la place (exemple src/pageMap/Map.js l:7-21)
- De façon général, ne pas utiliser les _class_ de React mais utiliser plutôt les __hooks__ à la place. 
- Isoler les hooks quand ils peuvent être réutilisé. (exemple src/pageMap/useSuggestedCities.js)
- Tous les fichiers React vont dans src :
> - src
>   - App.js
>   - index.js
>   - /page
>      - Component.js
>      - OtherComponant.js
>      - useClassicHook.js (hook)
>      - assetforOtherComponent.png

### Clean Code
Pour ça une seule consigne : __supprimer le code mort__. Surtout le code mis en // (qui font presque 50% de main.js).
J'ai gardé l'ancien front dans .old pour l'instant.

Après, si vous avez 3m27s et envie de vous marrer y'a :
> https://javascript.info/ninja-code

Et si vous voulez step up en JS :
> https://github.com/ryanmcdermott/clean-code-javascript

# Environnement

Y'a du nouveau par ici !
A partir de maintenant, il y a __webpack__ et __babbel__ sur ce projet. 
Ce qui nous permet, notamment, de faire du _React_ !

En gros babbel transpile notre code (e.g. convertir le JSX en JS) et webpack compresse tous les fichiers JS en un "./public/bundle.js".

Il y a donc maintenant deux serveurs:
- Webpack en front: qui va surtout faire du hot reload et compiler notre JSX.
- Nodemon en back: qui s'occupe de toutes les API en back.
