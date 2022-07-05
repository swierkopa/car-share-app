import { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { HomeHeader, FocusedStatusBar, CarCard } from '../components';

const url = "https://myfakeapi.com/api/cars/";

const HomePage = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoading(false);
        setData(result["cars"]);
      }
    )
    .catch((error) => console.error("Error with FETCH request", error))
    .finally(() => {
      setIsLoading(false)
      console.log(data)
    })
    }, []); 

  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar />

      <View style={{flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <CarCard data={ item }/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>

      <View style={{
        position: 'absolute',
        zIndex: -1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#101010',
      }}
      />
    </SafeAreaView>
  )
}

export default HomePage;