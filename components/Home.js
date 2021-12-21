import {Text, View, StyleSheet} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CountDown from "react-native-countdown-component";

export default function HomeScreen() {

    const [HolidayData, setHolidayData] = useState([]);
    const [Available, SetAvailable] = useState(false);

    function getHolidayData() {
        axios
            .get(
                "https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/schoolholidays/schoolyear/2021-2022?output=json"
            )
            .then((res) => {
                const data = {};
                let dataSet = false;
                res.data.content[0].vacations.forEach((element) => {
                    let ans = calculateDays(element.regions[0].startdate);
                    if (dataSet) {
                        return;
                    }
                    if (ans <= 0) {
                        return;
                    }
                    data.type = element.type;
                    data.regions = element.regions;
                    data.daysToGo = ans;
                    dataSet = true;
                });
                console.log(data);
                setHolidayData(data);
                SetAvailable(true);
            });
    }

    useEffect(() => {
        getHolidayData();
    }, []);

    function calculateDays(date) {
        const date1 = new Date();
        const date2 = new Date(date);
        return Math.floor((date2 - date1) / 1000);
    }

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={styles.title}>Wachten op de vakantie!</Text>
            {Available ? (
                <CountDown
                    size={30}
                    until={HolidayData.daysToGo - 60 * 60 * 24}
                    digitStyle={{backgroundColor: "#65beec", borderWidth: 2, borderColor: "#043464"}}
                    digitTxtStyle={{color: "white"}}
                    separatorStyle={{color: "#043464"}}
                    timeToShow={["D", "H", "M", "S"]}
                    timeLabels={{m: null, s: null}}
                    showSeparator
                    onFinish={() => alert("De vakantie is begonnen")}
                    onPress={() => alert("Het aftellen is begonnen")}
                />
            ) : (
                <Text>Geen data beschikbaar</Text>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        color: "#043464",
        fontSize: 20,
        textAlign: "center"
    },
});