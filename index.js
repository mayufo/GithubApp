/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import AppNavigation from './js/navigation/AppNavigation';

// import WelcomePage from './js/page/WelcomePage'
import {name as appName} from './app.json';
import {createAppContainer} from "react-navigation";


const AppContainer = createAppContainer(AppNavigation)

AppRegistry.registerComponent(appName, () => AppContainer);
