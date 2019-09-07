This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Explication du code

Pour commencer, j'ai décidé de réaliser un composant React avec une classe 
et non avec une fonction, afin d'avoir accès à plus de fonctionnalités.

Premièrement, dans cette classe on retrouve `state` afin d'initialiser des variables pour la suite. On a `repositories` un tableau qui contiendra toutes les informations nécesssaires et `isLoading` un booleen afin de savoir si les données ont bien été chargés dans le tableau.

Ensuite on a `componentDidMount()` qui appelle la fonction `getData()` mais uniquement quand le composant est monté.
La fonction `getData()` récupère les données nécessaires à l'interface, à l'aide du requête envoyer directement à l'api publique de GitHub par le biais d'une url `https://api.github.com/search/repositories?q=es6&order=desc`. Cela renvoie des données sous la forme de JSON.
Puis ses données sont directement insérés, avec `setState()`, dans notre tableau créer précédemment dans le `state`.

Enfin, on a `render()` qui permet d'utiliser les variables de notre `state` avec toutes les données correspondantes à l'intérieur
 grâce à `componentDidMount()`. En effet, on a plus que l'affichage à gérer, pour cela on a quand même une verification que les données ont bien été chargés,
et si c'est bien le cas alors on a un tableau avec les données qu'on souhaitait en parcourant tout notre tableau `repositories`.

### Ressources utilisés

https://fr.reactjs.org/
https://developer.github.com/v3/