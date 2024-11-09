// import { Image } from "expo-image";
import Button from "@/components/Buttons";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        {/* <Image source={PlaceholderImage} style={styles.image} /> */}
        <View style={styles.footerContainer}>
          <Button label="Choose a photo" theme="primary" />
          <Button label="Use this photo" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
  },
});
