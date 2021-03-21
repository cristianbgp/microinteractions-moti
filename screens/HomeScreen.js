import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View as MotiView, Text as MotiText } from "moti";

const screens = [
  { name: "CardsAppearance" },
  { name: "Landing" },
  { name: "EmojiReaction" },
  { name: "Heart" },
  { name: "Chart" },
  {name: "CallCard"}
];

function Card({ screen }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(screen.name)}>
      {({ pressed }) => (
        <MotiView
          from={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            backgroundColor: pressed ? "#161616" : "#C6C6C6",
          }}
          style={styles.card}
        >
          <MotiText
            animate={{ color: pressed ? "#FFFFFF" : "#000000" }}
            numberOfLines={1}
            style={styles.text}
          >
            {screen.name}
          </MotiText>
        </MotiView>
      )}
    </Pressable>
  );
}

export default function CardsAppearanceScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Math.max(insets.top, 24),
        },
      ]}
    >
      <Text style={styles.title}>Microinteractions with Moti</Text>
      <FlatList
        data={screens}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item: screen }) => <Card screen={screen} />}
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center", paddingTop: 20 }}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#C6C6C6",
    borderRadius: 16,
    padding: 20,
    margin: 20,
    height: 100,
    width: 100,
    justifyContent: "center",
  },
  text: { textAlign: "center" },
});
