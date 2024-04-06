import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Credendital() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/band.png")}
        width={96}
        height={208}
        style={{ zIndex: 10 }}
      />

      <View style={styles.credentialBoxContainer}>
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          style={styles.imageHeader}
        >
          <View>
            <Text>Unite summit</Text>
            <Text>#00192</Text>
          </View>
        </ImageBackground>

        <TouchableOpacity>
          <Image source={{ uri: "https://github.com/israelcruzz.png" }} />
        </TouchableOpacity>

        <Text>Rodrigo Gonçalves</Text>

        <Text>rodrigo@email.com</Text>

        <Image source={require("@/assets/ticket/qrcode.png")} />

        <TouchableOpacity>
          <Text>Ampliar QRCode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  credentialBoxContainer: {
    alignItems: "center",
    paddingBottom: 24,
    borderWidth: 1,
    borderColor: "#ffffff",
    overflow: "hidden",
    backgroundColor: "#000000",
    marginTop: -20,
  },
  imageHeader: {
    paddingHorizontal: 6,
    paddingVertical: 8,
    height: 40,
    alignItems: "center",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    overflow: "hidden",
  },
  rowView: {},
});
