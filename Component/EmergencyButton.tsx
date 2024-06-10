import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const EmergencyButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style = {styles.outerCircle}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Emergency</Text>
                </TouchableOpacity>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red',
        width: 150,
        height: 150, // Use fixed height for better touch target size
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    outerCircle: {
        backgroundColor: 'pink',
        width: 220,
        height: 280, // Use fixed height for better touch target size
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
})

export default EmergencyButton
