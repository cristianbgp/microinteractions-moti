import { View, Pressable, StyleSheet } from "react-native";
import { View as MotiView, Text as MotiText } from "moti";
import React, { useState } from "react";

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const EMOJI_LIST = ["❤️", "🤩", "🤣", "😎", "🤓", "🎉", "🤯", "😭", "👀"];

function AnimatedReaction({ value, emoji }) {
  const [selected, setSelected] = useState(Math.random() >= 0.5);

  const moveCounter = () => {
    setSelected((selected) => !selected);
  };

  return (
    <Pressable onPress={moveCounter}>
      {({ pressed }) => (
        <View style={styles.reactionSeparator}>
          <View
            style={[
              styles.reactionContainer,
              { backgroundColor: selected ? "#3B4B6C" : "#323232" },
            ]}
          >
            <MotiText
              from={{ fontSize: 40 }}
              animate={{ fontSize: pressed ? 30 : 40 }}
              style={styles.emojiStyles}
            >
              {emoji}
            </MotiText>
            <View style={styles.textsContainer}>
              <MotiView
                from={{ translateY: -40 }}
                animate={{ translateY: selected ? -40 : 5 }}
              >
                <MotiText
                  from={{ color: "#FFFFFF" }}
                  animate={{ color: selected ? "#9CA4B4" : "#FFFFFF" }}
                  style={styles.textStyles}
                >
                  {value - 1}
                </MotiText>
                <MotiText
                  from={{ color: "#FFFFFF" }}
                  animate={{ color: selected ? "#9CA4B4" : "#FFFFFF" }}
                  style={styles.textStyles}
                >
                  {value}
                </MotiText>
                <MotiText
                  from={{ color: "#FFFFFF" }}
                  animate={{ color: selected ? "#9CA4B4" : "#FFFFFF" }}
                  style={styles.textStyles}
                >
                  {value + 1}
                </MotiText>
              </MotiView>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
}

export default function EmojiReactionScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {EMOJI_LIST.map((emoji) => (
          <AnimatedReaction
            value={getRandomInt(1, 100)}
            emoji={emoji}
            key={emoji}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 10,
  },
  reactionContainer: {
    backgroundColor: "#323232",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 2,
    height: 53,
  },
  textsContainer: {
    marginLeft: 5,
    flexGrow: 0,
    height: 49,
    overflow: "hidden",
  },
  textStyles: {
    fontSize: 28,
    fontWeight: "500",
    color: "#FFFFFF",
    marginVertical: 5,
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
