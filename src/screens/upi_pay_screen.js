import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const DATA = [
  {
    id: '1',
    img: require('../assets/images/amazonPay.png'),
    title: 'AMAZONPAY',
  },
  {
    id: '2',
    img: require('../assets/images/bhim.png'),
    title: 'BHIM',
  },
  {
    id: '3',
    img: require('../assets/images/gpay.png'),
    title: 'GPAY',
  },
  {
    id: '4',
    img: require('../assets/images/paytm.png'),
    title: 'PAYTM',
  },
  {
    id: '5',
    img: require('../assets/images/phonePe.png'),
    title: 'PHONEPE',
  },
];

export function UPIPayScreen() {
  const { width, height } = Dimensions.get('window');

  const renderItem = ({ item }) => (
    <View style={styles.upiItem}>
      <Image style={styles.upiImage} source={item.img} />
      <Text style={styles.upiTitle}>{item.title}</Text>
      <Ionicons name="arrow-forward" size={20} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pay Rs 1.00"
        keyboardType="numeric"
        style={styles.textInput}
      />
      <Text>Select any UPI option</Text>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  boldText: {
    fontSize: 18,
    fontWeight: '200',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  upiItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',

    elevation: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  upiImage: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  upiTitle: {
    fontSize: 16,
    flex: 1,
  },
});
