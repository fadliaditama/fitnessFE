import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Define the type of your data
interface AsmaulHusnaData {
    arab: string;
    id: number;
    indo: string;
    latin: string;
  }

const AsmaulHusna = () => {
  const [data, setData] = useState<AsmaulHusnaData[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.ngodingaja.my.id/api/asmaulhusna') // link api
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setData(json.hasil); //tampung json disini
      })
      .catch((error) => {
        setError(error.toString());
      });
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  //drop json dari api disini
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.arab}>{item.arab}</Text>
            <Text style={styles.latin}>{item.latin}</Text>
            <Text style={styles.indo}>{item.indo}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  arab: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  latin: {
    fontSize: 16,
    color: '#666',
  },
  indo: {
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default AsmaulHusna;
