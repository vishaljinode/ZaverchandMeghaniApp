import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { API_BASE_URL } from '../Api_urls';

const StoryScreen = ({ route, navigation }) => {
  const { storyId } = route.params;

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchStory();  
  }, []); 

  useLayoutEffect(() => {
    if (books.title) {
      navigation.setOptions({
        title: books.title,
      });
    }
  }, [navigation, books.title]);



  const fetchStory = async () => {
    try {
      const response = await fetch(
        API_BASE_URL+'/book/getStoryByStroyId',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'security': 'JaihindJaiBharat',
          },
          body: JSON.stringify({ storyId: storyId }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const json = await response.json(); 
       setBooks(json.book);       

    } catch (error) {
      console.error('Failed to fetch books:', error);
      // Handle error state or show an error message
    }
  };





  return (
    <View style={styles.container}>
    {/* <View style={styles.header}>
        <Text style={styles.headerText}>List of Books</Text>
      </View> */}
            {/* <Text>Book Index Screen for itemId: {storyId}</Text> */}

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.story}>
         {books.description}         
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 
  },
   header: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
    zIndex: 100,
    marginTop : 50
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
 
  story: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    lineHeight: 24,

  },
    headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StoryScreen;
