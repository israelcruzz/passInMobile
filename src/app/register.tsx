import { Input } from "@/components/input";
import { Image, StyleSheet, View } from "react-native";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
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
          <FontAwesome6
            name="user-circle"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Nome completo" />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="E-mail" />
        </Input>

        <Button title="REALIZAR INSCRIÇÃO" />

        <Link
          href="/"
          style={styles.link}
        >
          Já possui ingresso?
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

