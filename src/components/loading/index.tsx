import { ActivityIndicator, StyleSheet } from "react-native";

export default function Loading(){
    return <ActivityIndicator style={styles.loading} />
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: '#22c55e',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f97316'
    }
})