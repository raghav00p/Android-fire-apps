import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Torch from "react-native-torch";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleTorch = () => {
    Torch.switchState(!isOn);
    setIsOn(!isOn);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isOn ? "#ffd700" : "#333" }]}
        onPress={toggleTorch}
      >
        <Text style={styles.text}>{isOn ? "Turn OFF" : "Turn ON"} Flash</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  button: { padding: 20, borderRadius: 10 },
  text: { color: "#fff", fontSize: 22, fontWeight: "bold" }
});
