import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function ARVRSpecializationScreen({ navigation }) {
  const gotohome = () => {
    navigation.navigate('Home');
  };

  const handleContactFaculty = () => {
    Linking.openURL('tel:9487639778');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>AR/VR Specialization</Text>
        <Image
          source={require('./un.jpg')} 
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.subSection}>
          <Text style={styles.subheading}>About</Text>
          <Text style={styles.content}>
            The AR/VR Specialization program delves into immersive technologies, including Augmented Reality (AR) and Virtual Reality (VR). Students explore the application of AR/VR in various domains, with a focus on interactive experiences and user engagement. The curriculum includes a Unity game development course, providing hands-on experience in creating AR/VR applications and games.
          </Text>
        </View>
        <View style={styles.subSection}>
          <Text style={styles.subheading}>Faculty Coordinator</Text>
          <Text style={styles.facultyText}>
            To know more information, kindly contact our Faculty, Ms. K. Vijaya at 9487639778.
          </Text>
          <TouchableOpacity onPress={handleContactFaculty} style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Faculty</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={gotohome} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  subSection: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginLeft: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    padding: 5,
  },
  facultyText: {
    fontSize: 16,
    marginBottom: 10,
  },
  contactButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
