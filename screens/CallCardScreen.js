import { View, StyleSheet, Image, Pressable } from "react-native";
import { View as MotiView, Text as MotiText } from "moti";
import React from "react";
import Phone from "../components/icons/Phone";
import Avatar from "../assets/avatar.png";

function Card() {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 120,
        }}
      >
        <MotiView
          from={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 0.8 }}
          transition={{ loop: true, type: "timing", duration: 450 }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#D5D5E3",
            width: 120,
            height: 120,
            borderRadius: 100,
            position: "absolute",
            top: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
        <Image
          source={Avatar}
          width={100}
          height={100}
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#EDEEFB",
            borderRadius: 100,
          }}
        />
      </View>

      <MotiText
        from={{ fontSize: 18, opacity: 0, translateY: 30 }}
        animate={{ fontSize: 18, opacity: 1, translateY: 0 }}
        style={styles.nameStyles}
        transition={{ delay: 200 }}
      >
        Cristian Granda
      </MotiText>
      <MotiText
        from={{ fontSize: 18, opacity: 0, translateY: 30 }}
        animate={{ fontSize: 18, opacity: 1, translateY: 0 }}
        style={styles.textStyles}
        transition={{ delay: 300 }}
      >
        Incoming Call
      </MotiText>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Pressable>
          {({ pressed }) => (
            <MotiView
              from={{ scale: 1 }}
              animate={{ scale: pressed ? 0.9 : 1 }}
              style={[styles.buttonContainer, { backgroundColor: "#F15450" }]}
            >
              <View style={{ transform: [{ rotateZ: "135deg" }] }}>
                <Phone height={40} width={40} fill="#FFFFFF" />
              </View>
            </MotiView>
          )}
        </Pressable>
        <Pressable>
          {({ pressed }) => (
            <MotiView
              from={{ scale: 1 }}
              animate={{ scale: pressed ? 0.9 : 1 }}
              style={styles.buttonContainer}
            >
              <Phone height={40} width={40} fill="#FFFFFF" />
            </MotiView>
          )}
        </Pressable>
      </View>
    </View>
  );
}

export default function CallCard() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B3B3B3",
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 24,
    minWidth: "60%",
  },
  nameStyles: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    color: "#3C3C3C",
  },
  textStyles: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    color: "#8A8A8A",
  },
  buttonContainer: {
    backgroundColor: "#41D990",
    borderRadius: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
