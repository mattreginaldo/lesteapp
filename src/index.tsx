/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import './config/i18n/i18n.config';
import './config/reactotron';

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './styles/theme';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <PaperProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.primary}
          />
          <Routes />
        </PaperProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
