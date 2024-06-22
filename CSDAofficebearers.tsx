import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const gotoAssociation = () => {
    navigation.navigate('Association');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CSDA OFFICE BEARERS</Text>
      <View style={styles.center}>
        <Image source={require('./CSDA.png')} style={styles.image} />
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>S.No</Text>
          <Text style={styles.tableHeader}>Name</Text>
          <Text style={styles.tableHeader}>Role</Text>
          <Text style={styles.tableHeader}>Year</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>Karthick S</Text>
          <Text style={styles.tableCell}>Secretary</Text>
          <Text style={styles.tableCell}>III</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>2</Text>
          <Text style={styles.tableCell}>Sabarika </Text>
          <Text style={styles.tableCell}>Treasurer</Text>
          <Text style={styles.tableCell}>III</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>3</Text>
          <Text style={styles.tableCell}>Regiin Arul</Text>
          <Text style={styles.tableCell}>Joint Secretary</Text>
          <Text style={styles.tableCell}>III</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>4</Text>
          <Text style={styles.tableCell}>Karthika </Text>
          <Text style={styles.tableCell}>Joint Secretary</Text>
          <Text style={styles.tableCell}>III</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={gotoAssociation}>
        <Text style={styles.buttonText}>Back to Association</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  center: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  tableContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 20,
    width: '80%', // Adjusted width of the table
    alignSelf: 'center', // Centering the table
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  tableHeader: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
    padding: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center', // Centering the button
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
