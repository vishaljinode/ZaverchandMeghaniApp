// Card.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, image ,author}) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', 
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor :'white',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1, // Take remaining space
  },
  title: {
    fontSize: 20,
    fontWeight: 'black'
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    color : 'green'
  },
});

export default Card;
