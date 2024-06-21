// BookListScreen.js

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Linking,
  Image,
} from 'react-native';

import Card from './Card';
import { API_BASE_URL } from '../Api_urls';

const BookListScreen = () => {
  console.log("hello");
  const [searchText, setSearchText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const sliderImages = [require('../assets/slider.jpg'),require('../assets/slider.jpg')];
  const navigation = useNavigation(); 


  const renderBook = ({ item }) => (    
    <TouchableOpacity onPress={() => navigation.navigate('BookIndex', { bookId: item._id })}>
      <Card title={item.bookName} author={item.author} image={item.bookImage.mediaUrl} />
    </TouchableOpacity>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Effect for fetching books
  useEffect(() => {
    fetchBooks();
  }, []); 

  
  const handleSearch = (text) => {
    setSearchText(text);
  };



  const filteredBooks = books
  .filter((book) =>
    book.bookName.toLowerCase().includes(searchText.toLowerCase())
  );


  const fetchBooks = async () => {  
    try {
      const response = await fetch(
        'https://zaverchand-meghani-api.onrender.com/book/getBooks',
        {
          method: 'GET',
          headers: {          
            'security': 'JaihindJaiBharat',
          },
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
  
      const json = await response.json();
      setBooks(json.books);
    
  
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  };
  
  const openPlayStore = () => {
    const url = 'market://details?id=com.yourapp.package';
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  const openInstagramProfile = () => {
    const url = 'https://www.instagram.com/zaverchand.meghani/';
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };


  return (
    <View style={styles.container}>
      {/* Custom Slider (using images) */}
      <View style={styles.sliderContainer}>
        <Image
          source={sliderImages[currentIndex]}
          style={styles.sliderImage}
        />
      </View>

     

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openPlayStore}>
          <Text style={styles.buttonText}>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openInstagramProfile}>
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search books..."
        onChangeText={handleSearch}
        value={searchText}
      />
      {/* Book List */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item._id}
        renderItem={renderBook}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    backgroundColor :'black'
  },

  searchInput: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color :'black',
    backgroundColor : 'white'
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '25%', // Set slider height to 25% of parent container's height
    backgroundColor: 'white',
  },
  sliderImage: {
    width: '100%', // Full width of the slider container
    height: '100%', // Full height of the slider container
    resizeMode: 'cover', // Adjust the image to cover the entire area
    borderRadius: 0, // Optional: Add border radius for rounded corners
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookListScreen;
