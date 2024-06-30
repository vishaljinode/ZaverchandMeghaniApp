// BookListScreen.js

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import RenderHTML from 'react-native-render-html';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Linking,
  Image,
  Modal,
  ScrollView,
  Dimensions,
  ActivityIndicator   
} from 'react-native';

import Card from './Card';
import { API_BASE_URL } from '../Api_urls';

const BookListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const sliderImages = [require('../assets/slider.jpg'),require('../assets/slider1.jpg')];
  const navigation = useNavigation(); 

  const htmlContent = `

    <h1>CopyRight</h1> 
    <hr><strong>Indian Copy Right Act 1957</strong>
<p>This work is now in the public domain as this work was published in India and its publishing rights have expired. Under the Indian Copyright Act, 1957, every literary, dramatic, musical and artistic work (other than photographs) published during the lifetime of the creator (section 22) shall be published after the death of the creator (ie, for the year 2024, at least 1 January (before 1964) comes under public domain after 60 years. Works published posthumously (Vol. 24), photographs (Vol. 25), films (Vol. 26), and phonograms (Vol. 27) fall under the public domain 60 years after their publication.</p>


  <hr>
  <h1>Privacy Policy</h1>    
<p>This privacy policy applies to the Zaverchand Meghani app (hereby referred to as "Application") for mobile devices that was created by (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".</p>
<p>The Application does not gather precise information about the location of your mobile device.</p>
<div style="display: none;">
    <p>The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</p>
    <ul>
        <li>Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
        <li>Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
        <li>Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
    </ul>
</div>
<hr>
<p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>
<hr>
<p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described
    in this privacy policy.</p>
<hr><strong>Third Party Access</strong>
<p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described
    in this privacy statement.</p>
<div>
    <hr>
    <p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
    <ul>
        <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
        <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer">AdMob</a></li>
        
        <li><a href="https://onesignal.com/privacy_policy" target="_blank" rel="noopener noreferrer">One Signal</a></li>
        
    </ul>
</div>
<hr>
<p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
<ul>
    <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
    <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
    <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
</ul>
<hr><strong>Opt-Out Rights</strong>
<p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
<hr><strong>Data Retention Policy</strong>
<p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at insta.meghani@gmail.com
    and they will respond in a reasonable time.</p>
<hr><strong>Children</strong>
<p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
<div>
    <hr>
    <p>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has
        provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider
        (insta.meghani@gmail.com) so that they will be able to take the necessary actions.</p>
</div>
<hr><strong>Information Collection and Use</strong>
<p>The Application collects information when you download and use it. This information may include information such as</p>
<ul>
    <li>Your device's Internet Protocol address (e.g. IP address)</li>
    <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
    <li>The time spent on the Application</li>
    <li>The operating system you use on your mobile device</li>
</ul>

<hr><strong>Security</strong>
<p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>
<hr><strong>Changes</strong>
<p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly
    for any changes, as continued use is deemed approval of all changes.</p>
<hr>
<p>This privacy policy is effective as of 2024-06-22</p>
<hr><strong>Your Consent</strong>
<p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>
<hr><strong>Contact Us</strong>
<p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at insta.meghani@gmail.com.</p>
        
`;


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

  const filteredBooks = books.filter((book) =>
    book.bookName.toLowerCase().includes(searchText.toLowerCase())
  );

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        API_BASE_URL + '/book/getBooks',
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
      // Handle the error, e.g., show an error message to the user
    } finally {
      setLoading(false); // Set loading to false after the API call is done
    }
  };
  // const fetchBooks = async () => {  
  //   setLoading(true); 
  //   try {
  //     const response = await fetch(
  //       API_BASE_URL+'/book/getBooks',
  //       {
  //         method: 'GET',
  //         headers: {          
  //           'security': 'JaihindJaiBharat',
  //         },
  //       }
  //     );
  
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch books');
  //     }
  
  //     const json = await response.json();
  //     setBooks(json.books);
    
  
  //   } catch (error) {
  //     console.error('Failed to fetch books:', error);
  //   }finally {
  //     setLoading(false);  // Set loading to false after the API call is done
  //   }
  // };
  
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
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
          <ScrollView contentContainerStyle={styles.scrollView1}>
              <RenderHTML
                contentWidth={Dimensions.get('window').width}
                source={{ html: htmlContent }}
              />
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search books..."
        onChangeText={handleSearch}
        value={searchText}
      />
      <View>
      {loading ? (
       <View>     
       <Text style={styles.loadingText}>Loading Books...</Text>
       <Text style={styles.loadingText}>મારા વ્હાલા...</Text>
       <Text style={styles.loadingText}>"ધીરજ ના ફળ મીઠા"...</Text>
      </View>
      ) : ( 
        <View style={styles.flat}>
      <FlatList
          data={books}
          keyExtractor={(item) => item._id}
          renderItem={renderBook}  
                
        />
        </View>
      )}
    </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    backgroundColor :'black',
  
  },
  flat : {
    height : '77%'
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
    height: '20%', 
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
    gap:10,
    marginVertical: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,    
    textAlign : 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign : 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'left',
    marginRight : 5
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop : 10
  },
  scrollView1 : {
    marginRight : 35
  },
  
  loadingText: {
    color: '#ffffff',
    marginTop: 10,
    fontSize : 25
  },
 
});

export default BookListScreen;
