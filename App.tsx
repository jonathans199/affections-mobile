import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Profile from './screens/Profile'
import Home from './screens/Home'

const Stack = createNativeStackNavigator()

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />

        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ title: 'Profile here', gestureDirection: 'vertical' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
