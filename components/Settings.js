import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsTab() {
    const [Region, setRegion] = useState(getRegion);
    const setNewRegion = async (region) => {
        setRegion(region);
        try {
            await AsyncStorage.setItem("Region", region);
        } catch (e) {
            console.log(e);
        }
        console.log("Regio: " + region);
    };
    const getRegion = async () => {
        try {
            region = await AsyncStorage.getItem("Region");
        } catch (e) {
            console.log(e);
        }
        setRegion(region);
        // return region;
    };
    getRegion();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.title}>Instellingen</Text>
            <Text style={styles.subtitle}>Verander hier de regio</Text>
            <View
                style={{
                    borderWidth: 2,
                    borderColor: "#043464",
                    borderRadius: 6,
                    width: 150,
                }}
            >
                <Picker
                    selectedValue={Region}
                    onValueChange={(itemValue, itemIndex) => setNewRegion(itemValue)}
                    style={{ width: 150 }}
                    itemStyle={{color : "#043464"}}
                >
                    <Picker.Item label="Noord" value="noord" />
                    <Picker.Item label="Midden" value="midden" />
                    <Picker.Item label="Zuid" value="zuid" />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#043464",
        fontSize: 30,
        textAlign: "center"
    },
    subtitle: {
        color: "#65beec",
        fontSize: 12.5,
        marginBottom: 7.5
    }
});