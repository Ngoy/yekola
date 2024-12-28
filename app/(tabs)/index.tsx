import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

const App = () => {
  // let apiURL=[1,"image","Commentaire","prix"];
  let product=[
    {
   IdAuto :1,
   logo :"data:image/png;base64,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",
   Image :"data:image/png;base64,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",
   Fullname:"Nike Logo Images",
   description :"vcvcvcvxv",
   prix:1278,
  },
  
  
  {
    IdAuto :2,
    logo :"data:image/png;base64,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",
    Image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_4LHoZfBc-SCUzcLNI4MX04rfTqgz_8iwA&s",
    Fullname:"Sneaker à logo Nike, violet et or rose, hyper réaliste",
    description :"Ce graphisme numérique est le moyen idéal pour montrer votre amour pour les baskets Nike et tout ce qui touche au violet et à l’or rose. Son design hyper réaliste lui donne l’apparence d’une vraie basket, et son artisanat créatif est parfait pour tous les amateurs de chaussures ou les fashionistas.",
    prix:2000,
   },
   
];

  return (


<View style={styles.container}>
 <ScrollView  horizontal={false} style={styles.horinzontlStyle}>
  { product.map((item)=>(
    
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{
            uri:item.logo,
          }}
        />
      </View>
      <View style={styles.productPicture}>
        <Image
          style={styles.picture}
          source={{
            uri:  item.Image,
          }}
        />
      </View>

      <View style={styles.productTxt}>
        <Text style={styles.TxtName}> {item.Fullname}  </Text>
      </View>
      <View style={styles.productTitleDescription}>
        <Text style={styles.TxtTitleDescription}> Men Shoes</Text>
      </View>
      <View style={styles.productDescription}>
        <Text style={styles.TxtDescription}>
          {item.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          optio quibusdam! Culpa inventore consequuntur, maxime ab repellat
          fugiat voluptatibus non in, beatae pariatur, aliquam earum modi a
          placeat nesciunt. Quisquam!
        </Text>
      </View>
      <View style={styles.productColors}>
        <View style={styles.Color1}></View>
        <View style={styles.Color2}></View>
        <View style={styles.Color3}></View>
      </View>
      <View style={styles.productPrice}>
        <Text style={styles.TxtPrice}>{item.prix}</Text>
      </View>
      <View style={styles.productAddToCart}>
        <View style={styles.bttn}>
          <Text style={styles.addToCart}> ADD TO CART</Text>
        </View>
      </View>
    </View>
    
    ))};
    
  </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#47a8e1",
    padding: 20,
  },
  horinzontlStyle: {
    
    height:"auto",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: 580,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 50,
    overflow: "hidden",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: 40,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 40,
  },
  productPicture: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: 200,
    backgroundColor: "red",
  },
  picture: {
    width: "auto",
    height: "100%",
  },
  productTxt: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: 60,
    justifyContent: "center",
  },
  TxtName: {
    fontSize: 25,

    fontWeight: 700,
    textAlign: "center",
  },

  productTitleDescription: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: 30,
  },
  TxtTitleDescription: {
    fontSize: 17,

    fontWeight: 800,
    textAlign: "center",
  },
  productDescription: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: 60,
    alignItems: "center",
  },
  TxtDescription: {
    fontSize: 12,

    width: "70%",

    textAlign: "center",
  },
  productColors: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    height: 60,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  Color1: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: "black",
  },
  Color2: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: "green",
  },
  Color3: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: "red",
  },
  productPrice: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: 50,

    justifyContent: "center",
  },
  TxtPrice: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "800",
    color: "gray",
  },
  productAddToCart: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: 60,

    justifyContent: "center",
    alignItems: "center",
  },
  bttn: {
    height: 50,
    width: "60%",
    backgroundColor: "#ffeee6",
    borderRadius: 40,
    justifyContent: "center",
  },
  addToCart: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800",
  },
});

export default App;