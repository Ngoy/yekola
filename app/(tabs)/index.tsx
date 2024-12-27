import { View, Text, StyleSheet, ScrollView,Image } from "react-native";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        {/* Regrouper les trois premières vues */}
        <View style={styles.row}>
          <View style={styles.discover}>
            <Text style={styles.texteDiscover}>Discover</Text>
          </View>
          <View style={styles.iconeRecherche}></View>
          <View style={styles.logophone}></View>
        </View>

        {/* Mettre le texte juste en dessous */}
        <View style={styles.textePremier}>
          <Text style={{ color: "white" }}>Mon texte ici</Text>
        </View>

        <View style={styles.imageSandal}>
        <Image
            style={styles.image}
            // source={require('../assets/images/lihau.png')} // Chemin de l'image locale
            source={{uri: "https://i.ytimg.com/vi/IJ5st1B_fCA/maxresdefault.jpg",
            }}
          />,
          
        </View>

        <View style={styles.row2}>
          <View style={styles.discover}>
            <Text style={styles.texteDiscover}>Sport77</Text>
          </View>
          <View style={styles.discover}>
            <Text style={styles.textSeeAll}>Sport77</Text>
          </View>
           
        </View>

        <View style={styles.row3}>
          <View style={styles.discover}>
            <Text style={styles.texteDiscover}>Discover</Text>
          </View>
          <View style={styles.iconeRecherche}>xx</View>
          <View style={styles.logophone}>xx</View>
          <View style={styles.logophone}>xx</View>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A004E",
    padding: 10,
  },
  box: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginTop: 65,
    display: "flex",
    flexDirection: "column", // Organisation en colonne
    justifyContent: "flex-start",
  },
  row: {
    flexDirection: "row", // Organisation en ligne
    justifyContent: "space-between", // Espacement équitable entre les éléments
    alignItems: "center", // Alignement vertical
  },
  row2: {
    marginTop:10,
    flexDirection: "row", // Organisation en ligne
    justifyContent:"space-between", // Espacement équitable entre les éléments
    alignItems: "center", // Alignement vertical
  },
  row3: {
    marginTop:0,
    flexDirection: "row", // Organisation en ligne
    justifyContent:"space-between", // Espacement équitable entre les éléments
    alignItems: "center", // Alignement vertical
  },
  discover: {
    backgroundColor: "#ECE852",
    width: 100,
    height: 30,
  },
  iconeRecherche: {
    backgroundColor: "red",
    width: 50,
    height: 30,
  },
  logophone: {
    backgroundColor: "#A1D6CB",
    width: 50,
    height: 30,
  },
  image: {
    width: "100%",
    height: 200, // Dimensions de l'image
    resizeMode: "stretch", // Ajuste l'image pour qu'elle s'affiche correctement
  },
  texteDiscover: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  textePremier: {
    backgroundColor: "#118B50",
    fontSize: 20,
    height: 30,
    justifyContent: "center", // Centrer verticalement si nécessaire
    alignItems: "center",
    display: "flex",
    marginTop: 5, // Ajout d'un petit espace pour simuler un retour à la ligne
  },
  imageSandal: {
    backgroundColor: "#118B50",
    fontSize: 20,
    height: 200,
    justifyContent: "center", // Centrer verticalement si nécessaire
    alignItems: "center",
    display: "flex",
    marginTop: 5, // Ajout d'un petit espace pour simuler un retour à la ligne
  },
  textSeeAll: {
    fontSize: 15,
    color: "#000B58",
    textAlign: "center",
  },
   
});

export default App;