import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  // Tableau d'objets simple
  const Taches = [
    { id: 1, title: "Apprendre React Native", completed: true },
    { id: 2, title: "Créer une application mobile", completed: false },
    { id: 3, title: "Publier l'application", completed: false },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Tâches</Text>

      {/* Afficher les données avec map */}
      {Taches.map((task) => (
        <View key={task.id} style={styles.taskItem}>
          <Text>{task.title}</Text>
          <Text>Status: {task.completed ? "Terminé" : "En cours"}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "blue",
  },
  taskItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
});

export default App;