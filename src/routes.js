import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import World from './pages/World';
import Countries from './pages/Countries';
import Country from './pages/Country';

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="World" component={World} />
            <Stack.Screen name="Countries" component={Countries} />
            <Stack.Screen name="Country" component={Country} />
        </Stack.Navigator>
    );
}

export default Routes;