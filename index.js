import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './src/store/store';

const store = configureStore();

const ISSRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('issSpoter', () => ISSRedux);

