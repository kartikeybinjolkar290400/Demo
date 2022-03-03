
import React from "react";
import { View,Text,Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export default App = () =>  {
    
   const route = useRoute(); 
       
    return(
        <View>
            
             <Text style={{fontSize:25,color:'red',alignContent:'center'}}>{route.params.id}</Text>
             <Text style={{fontSize:25,color:'green'}}>{route.params.title}</Text>
            

        </View>
    )
}