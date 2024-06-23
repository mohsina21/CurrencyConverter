import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { PropsWithChildren } from 'react';

type CurrencyBtnProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyBtn = (props: CurrencyBtnProps): JSX.Element => {
  return (
    <View style={styles.BtnContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BtnContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  name: {
    fontSize: 10,
    color: "#2d3436",
  },
});

export default CurrencyBtn;


