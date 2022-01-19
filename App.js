import React,{useEffect} from "react";
import {View} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import DataFetching from "./android/app/src/components/DataFetching";



const App =()=>{

  useEffect(() =>{
    SplashScreen.hide();
  }, [])

 
  return(
    <View>
      <DataFetching />
    </View>
    
  )
  
}
export default App