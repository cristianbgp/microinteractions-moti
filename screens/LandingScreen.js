import React, { useState, useContext } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { AnimatePresence, View as MotiView } from "moti";

function Form({ isSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleOnChangeName(text) {
    setName(text);
  }

  function handleOnChangeEmail(text) {
    setEmail(text);
  }

  function handleOnChangePassword(text) {
    setPassword(text);
  }

  return (
    <View style={styles.formContainer}>
      {isSignUp && (
        <>
          <View style={styles.formLabelContainer}>
            <Text style={styles.formLabel}>username</Text>
          </View>
          <TextInput
            style={styles.formTextInput}
            value={name}
            onChangeText={handleOnChangeName}
            textContentType="username"
            autoCapitalize="none"
          />
        </>
      )}
      <View style={styles.formLabelContainer}>
        <Text style={styles.formLabel}>email</Text>
      </View>
      <TextInput
        style={styles.formTextInput}
        value={email}
        onChangeText={handleOnChangeEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
      />
      <View style={styles.formLabelContainer}>
        <Text style={styles.formLabel}>password</Text>
      </View>
      <TextInput
        style={styles.formTextInput}
        secureTextEntry={true}
        value={password}
        onChangeText={handleOnChangePassword}
      />
      <TouchableOpacity style={styles.buttonTextContainer} onPress={() => null}>
        <Text style={styles.buttonText}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Body({ showForm, setShowForm }) {
  if (showForm === "landing") {
    return (
      <View style={styles.bodyContainer}>
        <TouchableOpacity
          style={styles.signInContainer}
          onPress={() => setShowForm("sign-in")}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpContainer}
          onPress={() => setShowForm("sign-up")}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <Form isSignUp={showForm === "sign-up"} />;
}

export default function LandingScreen() {
  const insets = useSafeAreaInsets();
  const [showForm, setShowForm] = useState("landing");

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Math.max(insets.top, 24),
        },
      ]}
    >
      <MotiView
        from={{
          opacity: 0,
          translateY: -100,
          paddingTop: 30,
          paddingBottom: 20,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          paddingTop: showForm === "landing" ? 150 : 30,
          paddingBottom: showForm === "landing" ? 80 : 20,
        }}
        style={styles.header}
      >
        <TouchableWithoutFeedback onPress={() => setShowForm("landing")}>
          <Text style={styles.headerText}>App Name</Text>
        </TouchableWithoutFeedback>
      </MotiView>
      <View style={styles.contentTop}>
        <View style={styles.content}>
          <LinearGradient
            pointerEvents="none"
            colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]}
            style={styles.linearGradient}
            start={[0, 0]}
            end={[0, 0.5]}
          />
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 120 : 160}
          >
            <ScrollView
              contentContainerStyle={{
                flex: 1,
              }}
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
            >
              <AnimatePresence exitBeforeEnter>
                <Body showForm={showForm} setShowForm={setShowForm} />
              </AnimatePresence>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#585EB3",
  },
  header: {
    backgroundColor: "#585EB3",
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 36,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  contentTop: { flex: 1, backgroundColor: "#585EB3" },
  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 30,
    paddingTop: 5,
  },
  linearGradient: {
    position: "absolute",
    top: 5,
    height: 72,
    width: "100%",
    zIndex: 2,
    marginHorizontal: 30,
  },

  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: { width: "100%" },

  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formLabel: { fontWeight: "800", color: "#25284D" },
  formLabelContainer: { marginBottom: 8 },
  formTextInput: {
    backgroundColor: "#9396CC",
    color: "#2E2F39",
    width: "100%",
    borderRadius: 6,
    padding: 10,
    marginBottom: 14,
  },
  buttonTextContainer: {
    backgroundColor: "#585EB3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: { fontWeight: "800", color: "white" },

  bodyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpContainer: {
    borderColor: "#585EB3",
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  signUpText: { fontWeight: "800", color: "#25284D" },
  signInContainer: {
    borderColor: "#585EB3",
    borderWidth: 3,
    backgroundColor: "#585EB3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 12,
  },
  signInText: { fontWeight: "800", color: "white" },
});
