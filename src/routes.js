import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import World from './pages/World';

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="World" component={World} />
        </Stack.Navigator>
    );
}

export default Routes;