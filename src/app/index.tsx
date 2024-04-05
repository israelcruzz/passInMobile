import { Input } from "@/components/input";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logo.png")}
        resizeMode="contain"
        style={{ height: 64 }}
      />

      <View style={styles.area}>
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Código do ingresso" />
        </Input>

        <Button title="ACESSAR CREDENCIAL" />

        <Link href="/register" style={styles.link}>
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#00292E",
  },
  area: {
    width: "100%",
    marginTop: 48,
    gap: 12,
  },
  link: {
    width: '100%',
    justifyContent: 'center',
    color: "#f3f4f6",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
    alignItems: "center",
    marginTop: 32,
    textAlign: 'center'
  },
});
