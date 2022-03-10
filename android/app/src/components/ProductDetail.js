
import React from "react";
import { View,Text,Image,StyleSheet,Button,TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import CardView from "react-native-cardview";

export default App = () =>  {
    
   const route = useRoute(); 
       
    return(
        <CardView 
            cardElevation={5}
            cardMaxElevation={2}
            cornerRadius={7}
            style={styles.cardview}
        >
            
            <Text style={styles.title}>{route.params.title}</Text>
             <Image source={{
                 uri: route.params.image
                 }}
                 resizeMode="stretch"
                 style={{width: 250, height: 270,marginTop:20,marginStart:90,marginEnd:200}}/>
            
             <Text style={styles.price}>$ {route.params.price}</Text>
             <Text style={styles.stock}>In Stock</Text>
             <Text style={styles.description}>{route.params.description}</Text>
             
                 
                 
            <View>
                <TouchableOpacity style={styles.cart}>
                    <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
                 

        </CardView>
    )
}
const styles=StyleSheet.create({
    cardview:{
        
        elevation:70,
        marginTop:10,
        marginStart:2,
        paddingTop:10,
        paddingVertical:150,
        marginEnd:2,
        marginBottom:5

    },
    price:{
        
        fontSize:20,
        fontWeight:'bold',
        padding:8,
        alignItems:'center',
        textAlign:'center'
        


    },
    stock:{
        marginStart:10,
        alignContent:'center',
        fontWeight:'500',
        fontSize:18
    },
    title:{
        
        fontSize:18,
        padding:10,
        fontWeight:'700',
        marginStart:5,
        alignContent:'center',
        textAlign:"center"
        

    },
    description:{
        
        padding:8,
        fontWeight:'400',
        fontSize:15,
        marginStart:3
        
        

    },
    cart:{
        alignItems:'center',
        padding:10,
        borderColor:'black',
        backgroundColor:'#2196F3',
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        width:360,
        height:40,
        marginStart:30,
        marginTop:15

        
        
        
        
    }
})