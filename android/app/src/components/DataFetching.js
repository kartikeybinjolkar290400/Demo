import React, { useEffect, useState } from 'react';
import { FlatList, Text, View,StyleSheet,Image } from 'react-native';
import axios from 'axios';

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
              <View>
                
              <Image
          source={{
            uri: item.image,
          }}
          style={{width: 90, height: 100,marginStart:60,marginTop:10,maxWidth:200,borderRadius:100,borderWidth:1}}
        />
        
        <Text  numberOfLines={1} style={styles.ItemSize}>{item.title}</Text>
        <Text style={styles.Solve}>{item.price}</Text>
        </View>
            )}
          />
         
          
        </View>
      )}
    const styles=StyleSheet.create({
        container:{
            backgroundColor:'white',
            
          
          },
        ItemSize:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            borderWidth:1,
            borderColor:'blue',
            alignItems:'center',
            fontWeight:"bold",
            fontSize:10,
            color:'red',
            marginStart:8,
            maxWidth:200,padding:10
          },
        Solve:{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            borderWidth:1,
            borderColor:'blue',
            fontSize:10,
            color:'blue',
            fontWeight:'bold',
            marginStart:8,padding:10
            
        }  
        
    })  
    
