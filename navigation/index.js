import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from 'GigChecklist/screens/HomeScreen'
import NewChecklistScreen from 'GigChecklist/screens/NewChecklistScreen'
import LoadingScreen from 'GigChecklist/screens/LoadingScreen'

const Navigator = createStackNavigator({
    Home: HomeScreen,
    NewChecklistScreen: NewChecklistScreen,
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