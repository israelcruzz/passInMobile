import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading = false, ...rest }: ButtonProps) {
  return (
    <>
      <TouchableOpacity
        {...rest}
        disabled={loading}
        activeOpacity={0.7}
        style={styles.container}
      >
        {loading ? (
          <ActivityIndicator color={styles.loading.color} />
        ) : (
          <Text style={styles.text}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: "#f97316",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  loading: {
    color: "#22c55e",
  },
  text: {
    color: "#00292E",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
});
