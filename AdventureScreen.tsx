import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function HomeScreen({ navigation }) {
  // Sample data for faculties
  const faculties = [
    { name: 'Dr.P.Priakanth', specialization: 'Computer Networks', designation: 'Professor / HOD', contact: '+91 89037 18836', image: require('./hod.png') },
    { name: 'Mr.S.Selvaraj', specialization: 'IOT & UI/UX Design', designation: 'Assistant Professor/SG', contact: '+91 99942 84106', image: require('./ss.jpg') },
    { name: 'Ms.K.Jothimani', specialization: 'DBMS', designation: 'Assistant Professor', contact: '+91 63803 86568', image: require('./kj.jpg') },
    { name: 'Ms.S.Hemalatha', specialization: 'Cloud Computing', designation: 'Assistant Professor', contact: '+91 95786 44844', image: require('./hs.jpg') },
    { name: 'Ms.M.Meenalochini', specialization: 'Deep Learning', designation: 'Assistant Professor', contact: '+91 98653 82937', image: require('./mm.jpg') },
    { name: 'Ms.A.Deepa', specialization: 'Machine Learning', designation: 'Assistant Professor', contact: '+91 83109 45940', image: require('./cnt.png') },
    { name: 'Ms.P.Ananthi', specialization: 'Data Science & ML', designation: 'Assistant Professor', contact: '+91 90479 79232', image: require('./cnt.png') },
    { name: 'Ms.K.Vijaya', specialization: 'Wireless Networks & AR/VR', designation: 'Assistant Professor', contact: '+91 94876 39778', image: require('./vj.jpg') },
    { name: 'Mr.D.Yuvaraj', specialization: 'Image Processing', designation: 'Assistant Professor', contact: '+91 88380 25885', image: require('./dy.jpeg') },
    { name: 'Ms.M.Rubhashree', specialization: 'Artificial Intelligence', designation: 'Assistant Professor', contact: '+91 96593 63640', image: require('./rs.jpeg') },
    { name: 'Mr.P.Gowsikraja', specialization: ' Engineering Predictive Analysis ', designation: 'Assistant Professor', contact: '+91 96882 26266', image: require('./gr.jpg') },
    // Add more faculties here...
  ];
  
  const gotohome=()=>{
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CSD Faculties</Text>
      <ScrollView style={styles.scrollView}>
        {faculties.map((faculty, index) => (
          <View key={index} style={styles.facultyContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={faculty.image}
                style={styles.stampImage}
              />
            </View>
            <View style={styles.facultyDetails}>
              <Text style={styles.detailText}>Name: {faculty.name}</Text>
              <Text style={styles.detailText}>Specialisation: {faculty.specialization}</Text>
              <Text style={styles.detailText}>Designation: {faculty.designation}</Text>
              <Text style={styles.detailText}>Contact No: {faculty.contact}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={gotohome}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  facultyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  stampImage: {
    width: 80, // Increased image size
    height: 80, // Increased image size
  },
  facultyDetails: {
    flex: 1,
    paddingLeft: 10, // Add padding between image and content
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  backButton: {
    alignSelf: 'center',
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
