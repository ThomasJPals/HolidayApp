import {Text, View, Image, StyleSheet} from "react-native";
import React from "react";

export default function AboutUsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.title}>Over ons</Text>
            <Image source={require("../assets/palmboom.png")} style={{ width: 300, height: 300}} />
            <Text style={styles.p}>Deze app is ontwikkeld door Thomas </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#043464',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 7.5
    },
    p: {
        marginTop: 7.5
    }
});