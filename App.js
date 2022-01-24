import React,{useEffect} from "react";
import {View} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import DataFetching from "./android/app/src/components/DataFetching";
import Regform from "./android/app/src/components/Regform";



const App =()=>{

  useEffect(() =>{
    SplashScreen.hide();
  }, [])

 
  return(
    <View>
      <Regform />
      <DataFetching />
    </View>
    
  )
  
}
export default App