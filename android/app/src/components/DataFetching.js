import React, { useEffect, useState } from 'react';
import {FlatList, Text, View, StyleSheet, Image, Button} from 'react-native';
import CardView from "react-native-cardview";


export default App = () => {
     const [isLoading, setLoading] = useState(true);
     const [data, setData] = useState([]);
     console.log(data);

     useEffect(() => {
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())

            .then((json)=>{console.log('product',JSON.stringify(json))
                setData(json)})
            .finally(() => setLoading(false));
      }, []);


     return (
         <View  style={styles.container}>


          <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
              <CardView
                  cardElevation={10}
                  cardMaxElevation={5}
                  cornerRadius={10}
                  style={styles.cardView}>


              <Image
          source={{
            uri: item.image,
          }}
          style={{width: 160, height: 175,marginStart:10,marginTop:10,padding:8,marginLeft:14}}
        />

        <Text  numberOfLines={1} style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price} {item.rate}</Text>
            <View style={styles.cart}>
                <Button title='Add to cart' uppercase={false} />
            </View>


        </CardView>
            )}
          />


        </View>
      )}


const styles=StyleSheet.create({
        container:{
            backgroundColor:'white',
            padding:5,

        },
        title:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            fontWeight:"bold",
            fontSize:14,
            color:'black',
            marginStart:22,
            marginTop:4,
            maxWidth:200,padding:8
          },
        price:{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            borderColor:'black',
            fontSize:12,
            color:'black',
            maxWidth:200,
            marginTop:5,
            marginStart:3,padding:6

        },
        cardView :{
            flex:1,
            elevation:20,
            marginTop:10,
            marginStart:10,
            marginEnd:10,
            marginLeft:10,
            marginBottom:10,
            paddingVertical:20,
            paddingTop:15,
        },
        cart: {
            position:"absolute",
            bottom:10,
            paddingLeft:0,
            borderTopLeftRadius:30,
            borderBottomLeftRadius:30,
            overflow:"hidden",
            top:249,
            right:0,
    }


    })

