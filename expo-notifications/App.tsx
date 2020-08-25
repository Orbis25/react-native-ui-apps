import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as Notifications from "expo-notifications";
import * as Permission from "expo-permissions";
import Constants from "expo-constants";

const getToken = async () => {
  const { status } = await Permission.getAsync(Permission.NOTIFICATIONS);
  if (status !== "granted") {
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();
  console.log("token es :" + token);
  alert(token);
  return token;
};

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permission.getAsync(
      Permission.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permission.askAsync(Permission.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  console.log(token);
  alert(token);
  return token;
}

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity style={{ backgroundColor: "blue", marginTop: 20 }}>
        <Text
          style={{ margin: 10, width: 200, textAlign: "center", color: "#fff" }}
        >
          Nueva notificacion
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
