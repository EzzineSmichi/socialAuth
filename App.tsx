/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const App = () => {
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1063601067202-37sg53sbe2m7k3hjjgd8p9rfps9snfqo.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  const GoogleSingUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then(result => {
        console.log(result);
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('User cancelled the login flow !');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google play services not available or outdated !');
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <GoogleSigninButton
        style={{width: 60, height: 60}}
        size={GoogleSigninButton.Size.Icon}
        color={GoogleSigninButton.Color.Dark}
        onPress={GoogleSingUp}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
