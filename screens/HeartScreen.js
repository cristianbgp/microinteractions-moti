import { View, Pressable, StyleSheet } from "react-native";
import { View as MotiView, Text as MotiText } from "moti";
import React, { useState } from "react";
import GradientCircle from "../components/icons/GradientCircle";

function Circle({ pressed }) {
  return (
    <MotiView
      from={{ opacity: 0, scale: 0 }}
      animate={{ opacity: pressed ? 1 : 0, scale: 1 }}
      style={{ position: "absolute", zIndex: -2 }}
    >
      <GradientCircle height={240} width={240} />
    </MotiView>
  );
}

function Pill({ selected, setSelected, value }) {
  return (
    <MotiView
      from={{ top: 10 }}
      animate={{ top: selected ? [-50, 10] : 10 }}
      style={styles.textsContainer}
      onDidAnimate={(styleProp, didAnimationFinish) => {
        if (styleProp === "top" && didAnimationFinish) {
          setSelected(false);
        }
      }}
    >
      <MotiText style={styles.textStyles}>{value}</MotiText>
    </MotiView>
  );
}

function Box({ emoji }) {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState(0);

  const moveCounter = () => {
    if (!selected) {
      setValue((currentValue) => currentValue + 1);
      setSelected((selected) => !selected);
    }
  };

  return (
    <Pressable onPress={moveCounter}>
      {({ pressed }) => (
        <View style={styles.reactionSeparator}>
          <View style={styles.reactionContainer}>
            <MotiText
              from={{ fontSize: 40 }}
              animate={{ fontSize: pressed ? 30 : 40 }}
              style={styles.emojiStyles}
            >
              {emoji}
            </MotiText>
          </View>
          <Pill selected={selected} setSelected={setSelected} value={value} />
          <Circle pressed={pressed} />
        </View>
      )}
    </Pressable>
  );
}

export default function HeartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Box emoji="❤️" key="❤️" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  wrapper: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  reactionSeparator: {
    justifyContent: "center",
    alignItems: "center",
  },
  reactionContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    padding: 20,
    height: 100,
    width: 100,
  },
  textsContainer: {
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#EC5265",
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  textStyles: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFFFFF",
    marginVertical: 5,
    textAlign: "center",
  },
  selectedExtraTextStyles: {
    color: "#9CA4B4",
  },
  selectedExtraReactionStyles: {
    backgroundColor: "#3B4B6C",
  },
  emojiStyles: {
    fontSize: 40,
    minWidth: 40,
    textAlign: "center",
  },
});
