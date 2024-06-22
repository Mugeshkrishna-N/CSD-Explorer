import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryScreen', { category });
  };

  const handleCategoryPress1 = () => {
    navigation.navigate('History');
  };
  const handleCategoryPress2=()=>{
    navigation.navigate('Adventure');
  }
  const handleCategoryPress3=()=>{
    navigation.navigate('Association');
  }
  const handleCategoryPress4=()=>{
    navigation.navigate('Codingclub');
  }
  const handleCategoryPress5=()=>{
    navigation.navigate('arvrcontrol');
  }
  const handleCategoryPress6=()=>{
    navigation.navigate('newsletter');
  }


  return (
    <View style={styles.background1}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>CSD OFFICIALS </Text>
        <Text style={styles.quote}>Explore the department of CSD</Text>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryTitle}>Sections</Text>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={handleCategoryPress1}>
              <Text style={styles.categoryText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={handleCategoryPress2}>
              <Text style={styles.categoryText}>Faculty Corner</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={handleCategoryPress3}>
              <Text style={styles.categoryText}>Association</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={handleCategoryPress4}>
              <Text style={styles.categoryText}>Coding Club </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={handleCategoryPress5}>
              <Text style={styles.categoryText}>AR/VR </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={handleCategoryPress6}>
              <Text style={styles.categoryText}>Newsletter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background1: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Sandal color
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // backgroundColor:'#77C3EC'
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00000',
    marginBottom: 10,
  },
  quote: {
    fontSize: 18,
    color: '#00000',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryContainer: {
    borderWidth: 2,
    borderStyle: 'solid', 
    borderRadius: 10,
    padding: 10,
  },
  categoryBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#77C3EC',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  categoryButton: {
    width: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    
  },
});

export default HomeScreen;
