import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default function NewsletterScreen({ navigation }) {
  const handleDownloadNewsletter = () => {
    // Replace the URL with the actual link to download the newsletter PDF
    Linking.openURL('https://jmp.sh/s/mwPdK88hMSMATweIKFuk');
  };

  const gotohome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CSD NEWSLETTER</Text>
      <Text style={styles.description}>Click below button to download</Text>
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadNewsletter}>
        <Text style={styles.buttonText}>Download Newsletter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={gotohome}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width:200,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
