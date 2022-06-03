<h1 align="center">Harry Potter API </h1>

<p align="center">
  <a href="https://reactnative.dev/"><img alt="RN" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></a>
  <a href="#"><img alt="JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/></a><br>
  <a href="https://code.visualstudio.com/"><img alt="VSC" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/></a>
  <a href="#"><img alt="Android" src="https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white"/> </a>
  <a href="https://github.com/francorvalant"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>
  <a href="https://git-scm.com/"><img alt="GIT" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/></a> 
  <a href="https://www.figma.com/"><img alt="FIGMA" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/></a>
</p>

![hp-screen](https://user-images.githubusercontent.com/71857156/171518672-c9c3816a-1e50-4cbb-9662-0b95870aec4f.png)

## Installation:

Install node_modules. [YARN](https://www.npmjs.com/package/yarn) was used for this project.

``` 
npm install yarn
```

## Application Details

## Screenshots
<p align="center">
  <img src="https://user-images.githubusercontent.com/71857156/171527766-1d0bd337-8572-4b6e-b57d-bd4688a6c003.gif" width="30%"/>
  <img src="https://user-images.githubusercontent.com/71857156/171528168-8c6e88f7-514f-4c41-b3f0-b9793358c332.gif" width="30%"/>
  <img src="https://user-images.githubusercontent.com/71857156/171527307-71291ad9-37a9-441d-96c6-58fe11a6071c.gif" width="30%"/>
</p>

* Version: 1.0.0
* package installer: yarn
* Environment: React Native + Expo
* Language: Javascript

## Resources

* [react-navigation](https://reactnavigation.org/docs/getting-started/): transition between screens using react-navigation · version: `6.x`
```
yarn add @react-navigation/native
```

* [drawer-navigator](https://reactnavigation.org/docs/drawer-navigator#installation): For the application use a custom drawer-navigation · version `6.x`
```
yarn add @react-navigation/drawer
```

* [react-native-linear-gradient](https://yarnpkg.com/package/react-native-linear-gradient): For the application use a custom drawer-navigation · version `6.x`
```
yarn add react-native-linear-gradient
```

* [react-native-paper](https://callstack.github.io/react-native-paper/): For the application use a custom drawer-navigation · version `6.x`
```
yarn add react-native-paper
```
```
yarn add react-native-vector-icons
react-native link react-native-vector-icons
```
Expo: To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library. Add react-native-paper/babel to the plugins section in your babel.config.js for production environment. It should look like this:

```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
```
#### Usage
```
import { Provider as PaperProvider } from 'react-native-paper';
```

* [API-Harry-Potter-ENG](https://hp-api.herokuapp.com/): Harry Potter API containing students, teachers and houses `ingles`
* [API-Harry-Potter-SP](https://harry-potter-api-production.up.railway.app/): Harry Potter API containing spells, information, characters and books `español`


