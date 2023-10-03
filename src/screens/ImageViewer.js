import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage } : placeholderImageSource;
    
  return (
    <Image source={imageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
      width: 143,
      height: 140,
      top: -830,
      left: -120,
      borderRadius: 60,
      borderColor: "#00fa9a",
      borderWidth: 5,
      },
    });