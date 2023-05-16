/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import SignIn from './screens/signin';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{flex: 1}}>
        <PaperProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.primary}
          />
        </PaperProvider>
        <SignIn />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
