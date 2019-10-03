import React, {useState} from 'react';
import {ScrollView, View, Text, Button, StyleSheet, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
const styles = StyleSheet.create({
  mainContainer: {
    padding: 30,
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 300,
  },
});

const App = () => {
  const [avatarState, setAvatarState] = useState({});

  const pickImageHandler = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setAvatarState({
          avatarSource: source,
        });
      }
    });
  };
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text> Hello Guys how are </Text>

        <Image source={avatarState.avatarSource} style={styles.imageStyle} />
        <Button title="Take Image" onPress={pickImageHandler}></Button>
      </View>
    </ScrollView>
  );
};

export default App;
