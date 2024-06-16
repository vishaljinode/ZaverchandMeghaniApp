import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const StoryScreen = ({ route }) => {
  const { itemId } = route.params;


  return (
    <View style={styles.container}>
    {/* <View style={styles.header}>
        <Text style={styles.headerText}>List of Books</Text>
      </View> */}
            <Text>Book Index Screen for itemId: {itemId}</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <Text style={styles.story}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam
          eros. In non urna auctor, lacinia nisl at, finibus tortor. Nulla facilisi.
          Aliquam at varius felis. Maecenas id nulla eu ligula sodales commodo.
          Fusce ut sapien vestibulum, gravida est et, vestibulum odio.
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
