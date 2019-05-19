/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from 'GigChecklist/store'
import AppNavigator from 'GigChecklist/navigation'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

