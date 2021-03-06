import React, { useEffect, useState } from 'react';
import {FlatList, Text, View, StyleSheet, Image, Button,TouchableOpacity} from 'react-native';
import CardView from "react-native-cardview";
import {useNavigation} from "@react-navigation/native";



export default App = () => {
     const [ loading,setLoading] = useState(true);
     const [data, setData] = useState([]);
     const navigation = useNavigation();
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
          renderItem={({ item}) => (
              <CardView
                  cardElevation={10}
                  cardMaxElevation={5}
                  cornerRadius={10}
                  style={styles.cardView}>


              <Image
          source={{
            uri: item.image,
          }}
          resizeMode="stretch"
          style={{width: 160, height: 175,marginStart:7,marginTop:10,padding:8,marginLeft:14}}
        />


        <TouchableOpacity onPress={ () => navigation.navigate('Product Details',{title:item.title,price:item.price,image:item.image,description:item.description})}>
            <Text  numberOfLines={1} style={styles.title}>{item.title}</Text>
        </TouchableOpacity>

        <Text style={styles.price}>$ {item.price} </Text>
            <TouchableOpacity style={styles.cart}>
                <Text style={{fontWeight:'500',color:'white'}}>Add to Cart</Text>
            </TouchableOpacity>


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
            marginTop:10,
            marginStart:3,padding:4

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
            bottom:15,
            padding:3,
            paddingLeft:20,
            paddingRight:20,
            backgroundColor:'#2196F3',
            borderTopLeftRadius:30,
            borderBottomLeftRadius:30,
            overflow:"hidden",
            top:250,
            right:0,
    }


    })

