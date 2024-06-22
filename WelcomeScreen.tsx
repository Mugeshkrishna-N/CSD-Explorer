// WelcomeScreen.tsx
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Welcome: undefined;
  Home: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.content}>
        <Text style={styles.title}>CSD EXPLORER</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.tapText}>Tap to continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: ' #FFFFF', 
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  tapText: {
    fontSize: 18,
    color: '#77C3EC',
  },
});

export default WelcomeScreen;
