import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from 'GigChecklist/screens/HomeScreen'
import LoadingScreen from 'GigChecklist/screens/LoadingScreen'

const Navigator = createStackNavigator({
    Home: HomeScreen,
    Loading: LoadingScreen,
},{
    initialRouteName: "Home",
    navigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: '#000000',
        borderBottomWidth: 0,
      },
      headerTintColor: '#ffffff',
      headerBackTitle: null,
    }
})

export default createAppContainer(Navigator);