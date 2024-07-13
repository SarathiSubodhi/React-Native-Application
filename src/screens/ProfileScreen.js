
import React from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const ProfileScreen = ({ navigation }) => {
  const user = auth().currentUser;

  const signOut = () => {
    auth().signOut().then(() => navigation.navigate('SignIn'));
  };

  return (
    <View>
      <Text>Email: {user.email}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

export default ProfileScreen;
