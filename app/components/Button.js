import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Button({ title, color, style, onPress }) {
    return (
       <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, {backgroundColor: color}, style]}>
            <Text style={styles.text}>{title}</Text>
        </View>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderWidth: 2
    },
    text: {
        fontWeight: "bold",
        fontSize: 20
    }
})

export default Button;