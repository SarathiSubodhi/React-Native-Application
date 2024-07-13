
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

const CharacterListScreen = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://thronesapi.com/api/v2/Characters')
      .then(response => setCharacters(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.fullName}</Text>
      <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
    </View>
  );

  return (
    <FlatList
      data={characters}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default CharacterListScreen;
