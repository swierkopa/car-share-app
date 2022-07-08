import { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { HomeHeader, FocusedStatusBar, CarCard } from '../components';

const url = "https://myfakeapi.com/api/cars/";

const HomePage = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [allData, setAllData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);
  let [isModalOpen, setIsModalOpen] = useState(false);
  //searches both make and model
  let [filterName, setFilterName] = useState('');
  let [filterMinYear, setFilterMinYear] = useState('');
  let [filterMaxYear, setFilterMaxYear] = useState('');
  let [filterColor, setFilterColor] = useState('');
  let [filterMinPrice, setFilterMinPrice] = useState('');
  let [filterMaxPrice, setFilterMaxPrice] = useState('');
  let [filterAvailable, setFilterAvailable] = useState('');
  let [sortBy, setSortBy] = useState('None');
  let [sortOrder, setSortOrder] = useState('None');

  //fetches all car data from API
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoading(false);
        setAllData(result["cars"]);
        setFilteredData(result["cars"]);
      }
    )
    .catch((error) => console.error("Error with FETCH request", error))
    .finally(() => {
      setIsLoading(false)
    })
    }, []
  ); 



  //Reset filters to default after clicking on Filters button
  const onFilters = () => {
    setIsModalOpen(true);
    setFilterName('');
    setFilterMinYear('');
    setFilterMaxYear('');
    setFilterColor('');
    setFilterMinPrice('');
    setFilterMaxPrice('');
    setSortBy('None');
    setSortOrder('None');
  }

  //Filters through allData to find cars that meet requirements
  const onSearch = () => {
    setIsModalOpen(false);
    let filteredData =[];

    for (let i = 0; i < [...allData].length; i++) {
      let currCar = [...allData][i];
      if (
        doesNameMatch(currCar, filterName) &&
        doesYearMatch(currCar, filterMinYear, filterMaxYear) &&
        doesColorMatch(currCar, filterColor) &&
        doesPriceMatch(currCar, filterMinPrice, filterMaxPrice )
        ) {
        filteredData.push([...allData][i])
      }

      const sortedFilteredData = sortFilteredDataBy(filteredData, sortBy, sortOrder);

      setFilteredData(sortedFilteredData);
    }
  }

  //Following functions are part of onSearch above
  const doesNameMatch = (object, word) => {
    return (word === '' || 
    object.car.toLowerCase().includes(word.toLowerCase()) ||
    object.car_model.toLowerCase().includes(word.toLowerCase()))
  }

  const doesYearMatch = (object, minYear, maxYear) => {
    if (!minYear && !maxYear) return true;
    else if (minYear && maxYear) return (object.car_model_year >= minYear && object.car_model_year <= maxYear);
    else if (minYear) return (object.car_model_year >= minYear);
    else return (object.car_model_year <= maxYear);
  }

  const doesColorMatch = (object, color) => {
    return (color === '' || object.car_color === color)
  }

  const doesPriceMatch = (object, minPrice, maxPrice) => {
    const carPrice = Number(object.price.slice(1));
    if (!minPrice && !maxPrice) return true;
    else if (minPrice && maxPrice) return (carPrice >= minPrice && carPrice <= maxPrice);
    else if (minPrice) return (carPrice >= minPrice);
    else return (carPrice <= maxPrice);
  }

  const sortFilteredDataBy = (filteredData, sortCriteria, order) => {
    if (sortCriteria === "PRICE" && order === "LOW TO HIGH") {
      filteredData.sort((a, b) => {
        const aPriceNum = Number(a.price.slice(1));
        const bPriceNum = Number(b.price.slice(1));
        return aPriceNum - bPriceNum;
      })
    }
    else if (sortCriteria === "PRICE" && order === "HIGH TO LOW") {
      filteredData.sort((a, b) => {
        const aPriceNum = Number(a.price.slice(1));
        const bPriceNum = Number(b.price.slice(1));
        return bPriceNum - aPriceNum;
      })
    }
    else if (sortCriteria === "YEAR" && order === "LOW TO HIGH") {
      filteredData.sort((a, b) => a.car_model_year - b.car_model_year);
    }
    else if (sortCriteria === "YEAR" && order === "HIGH TO LOW") {
      filteredData.sort((a, b) => b.car_model_year - a.car_model_year);
    }
    return filteredData;
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar />

      <View style={{flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => <CarCard data={ item }/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader 
                onSearch={onSearch} 
                onFilters={onFilters}
                setFilterName={setFilterName}
                setFilterMinYear={setFilterMinYear}
                setFilterMaxYear={setFilterMaxYear}
                setFilterColor={setFilterColor}
                setFilterMinPrice={setFilterMinPrice}
                setFilterMaxPrice={setFilterMaxPrice}
                setFilterAvailable={setFilterAvailable}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                setSortBy={setSortBy}
                setSortOrder={setSortOrder}
              />}
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