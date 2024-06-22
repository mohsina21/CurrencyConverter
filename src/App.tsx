import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { currencyByRupee } from './constant';
import CurrencyBtn from './components/CurrencyBtn';
import Snackbar from 'react-native-snackbar';
import { number } from 'yup';
function App(): React.JSX.Element {
  const [inputVlue, setinputVlue] = useState('');
  const [resultvalue,setresultvalue]= useState('');
  const [targetCurrency, setargetCurrency] =useState('');
  const buttonPressed = (targetValue: Currency) => {
    if (!inputVlue){
      return Snackbar.show({
        text: "Enter a value to convert:",
        backgroundColor: "#EA7773",
        textColor: "000000"
      })
    }
    const inputAmount = parseFloat(inputVlue)
    if (!isNaN(inputAmount)){
    const convertedVlue = inputAmount * targetValue.value;
    const result  = `${targetValue} ${convertedVlue.toFixed(2)} `
     setresultvalue(result)
     setargetCurrency(targetValue.name)
    
      
     }
     else{
      return Snackbar.show({
        text: "not a valid value",
        backgroundColor: "#EA7773",
        textColor: "000000"
      })

     }
    }
  }
  return (
    <SafeAreaView >
      <StatusBar
       
      />
      <View>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
