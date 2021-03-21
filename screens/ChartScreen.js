import { View, StyleSheet } from "react-native";
import { View as MotiView, Text as MotiText } from "moti";
import React from "react";

const data = [
  { month: "Feb", value: 46 },
  { month: "Mar", value: 38 },
  { month: "Apr", value: 27 },
  { month: "May", value: 31 },
  { month: "Jun", value: 25 },
];

function Month({ value, month, isLast }) {
  const height = (value * 100) / 200;
  const multiplier = 10;

  return (
    <View style={styles.monthContainer}>
      <MotiText
        from={{ fontSize: 18, opacity: 0, translateY: 30 }}
        animate={{ fontSize: 18, opacity: 1, translateY: 0 }}
        style={[styles.textStyles, isLast && { color: "#00CC6A" }]}
        transition={{ delay: 500 }}
      >
        {value}
      </MotiText>
      <MotiView
        from={{ height: 0 }}
        animate={{ height: height * multiplier }}
        style={[styles.bar, isLast && { backgroundColor: "#00CC6A" }]}
        transition={{ delay: 500 }}
      />
      <MotiText
        from={{ fontSize: 18, opacity: 0, translateY: 30 }}
        animate={{ fontSize: 18, opacity: 1, translateY: 0 }}
        style={[styles.textStyles, isLast && { color: "#00CC6A" }]}
        transition={{ delay: 500 }}
      >
        {month}
      </MotiText>
    </View>
  );
}

export default function ChartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {data.map(({ month, value }, index) => (
          <Month
            value={value}
            month={month}
            key={month}
            isLast={index === data.length - 1}
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
    backgroundColor: "#FFFFFF",
  },
  wrapper: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    justifyContent: "space-around",
  },
  monthContainer: {
    minHeight: 400,
    justifyContent: "flex-end",
  },
  textStyles: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
    color: "#8A8A8A",
  },
  bar: { backgroundColor: "#8A8A8A", borderRadius: 6 },
});
