import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { currencyByRupee } from './constant';
import CurrencyBtn from './components/CurrencyBtn';
import Snackbar from 'react-native-snackbar';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert:",
        backgroundColor: "#EA7773",
        textColor: "#000000"
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.name} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: "Not a valid value",
        backgroundColor: "#EA7773",
        textColor: "#000000"
      });
    }
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeeContainer}>
            <Text style={styles.rupee}> ₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always'
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter Amount In Rupee'
              style={styles.input}
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[styles.btn, targetCurrency === item.name && styles.selected]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyBtn {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rupee: {
    fontSize: 24,
  },
  input: {
    borderBottomWidth: 1,
    marginLeft: 10,
    flex: 1,
  },
  resultTxt: {
    fontSize: 20,
    marginVertical: 20,
  },
  bottomContainer: {
    flex: 2,
  },
  btn: {
    flex: 1,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: '#DDD',
  },
});

export default App;
