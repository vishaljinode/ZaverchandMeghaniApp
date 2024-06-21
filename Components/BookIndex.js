import React, { useState, useEffect, useLayoutEffect } from 'react';

import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookIndex = ({ route }) => {
  const { bookId } = route.params;
  // console.log("bookId",bookId);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchIndex();
  }, []);

  const fetchIndex = async () => {
    try {
      const response = await fetch(
        'https://zaverchand-meghani-api.onrender.com/book/gettitlesByBookId',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'security': 'JaihindJaiBharat',
          },
          body: JSON.stringify({ bookId: bookId }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const json = await response.json();
      // console.log("Received books:", json.book);
      setData(json.book); // Update the state with fetched books

    } catch (error) {
      console.error('Failed to fetch books:', error);
      // Handle error state or show an error message
    }
  };

  const renderBooks = () => {
    if (!data || data.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {data.map(item => (
          <TouchableOpacity
            style={styles.item}
            key={item._id}
            onPress={() => navigation.navigate('Story', { storyId: item._id })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>List of Books</Text>
        <Text>Book Index Screen for book ID: {bookId}</Text>
      </View> */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderBooks()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Adjust background color as needed
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
    zIndex: 100,
    marginTop: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    padding: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookIndex;
