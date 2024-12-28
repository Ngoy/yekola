import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Composant pour Option 1
const Option1 = ({ onBack }: { onBack: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue à Option 1</Text>
      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Retour à la page principale</Text>
      </TouchableOpacity>
    </View>
  );
};

// Composant pour Option 2
const Option2 = ({ onBack }: { onBack: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue à Option 2</Text>
      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Retour à la page principale</Text>
      </TouchableOpacity>
    </View>
  );
};

// Composant principal (index.tsx)
const App = () => {
  const [currentScreen, setCurrentScreen] = useState("Home");

  const renderScreen = () => {
    switch (currentScreen) {
      case "Option1":
        return <Option1 onBack={() => setCurrentScreen("Home")} />;
      case "Option2":
        return <Option2 onBack={() => setCurrentScreen("Home")} />;
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Page principale</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setCurrentScreen("Option1")}
            >
              <Text style={styles.buttonText}>Aller à Option 1</Text>
            </TouchableOpacity>
            <Text style={styles.description}>
              Vous pouvez consulter les détails ou les informations spécifiques à l'Option 1.
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setCurrentScreen("Option2")}
            >
              <Text style={styles.buttonText}>Aller à Option 2</Text>
            </TouchableOpacity>
            <Text style={styles.description}>
              Découvrez les fonctionnalités disponibles dans l'Option 2.
            </Text>
          </View>
        );
    }
  };

  return <>{renderScreen()}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6200EE",
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default App;
