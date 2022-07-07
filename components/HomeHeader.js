import { View, Text, TextInput, Button, TouchableOpacity, Modal } from 'react-native';
import FilterModal from './FilterModal';

const HomeHeader = ( { 
  onSearch,
  onFilters,
  setFilterName,
  setFilterMinYear,
  setFilterMaxYear,
  setFilterColor,
  setFilterMinPrice,
  setFilterMaxPrice,
  setFilterAvailable,
  setIsModalOpen, 
  filterName,
  filterMinYear,
  filterMaxYear,
  filterColor,
  filterMinPrice,
  filterMaxPrice,
  filterAvailable,
  isModalOpen,
  setSortBy,
  setSortOrder } ) => {
  return (
    <View>
      <View style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        left: 30,
        top: 15,
        width: '100%',
      }}>
        <Text style={{
          color: 'white',
          fontFamily: 'Pacifico',
          fontSize: 20
        }}>
          Rent-a-Ride
        </Text>
      </View>

      
      <View style={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        right: 15,
        width: '100%',
        height: 100,
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#7b68ee',
            borderRadius: 25,
            height: 50,
            width: 150,
          }}
          onPress={onFilters}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'ManropeExtraBold',
                fontSize: 15,
              }}>FILTERS</Text>
          </View>
        </TouchableOpacity>
        <Modal 
          transparent={true}
          animationType='slide'
          visible={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <FilterModal 
            onSearch={onSearch}
            setFilterName={setFilterName}
            setFilterMinYear={setFilterMinYear}
            setFilterMaxYear={setFilterMaxYear}
            setFilterColor={setFilterColor}
            setFilterMinPrice={setFilterMinPrice}
            setFilterMaxPrice={setFilterMaxPrice}
            setFilterAvailable={setFilterAvailable}
            setIsModalOpen={setIsModalOpen}
            filterName={filterName}
            filterMinYear={filterMinYear}
            filterMaxYear={filterMaxYear}
            filterColor={filterColor}
            filterMinPrice={filterMinPrice}
            filterMaxPrice={filterMaxPrice}
            filterAvailable={filterAvailable}
            isModalOpen={isModalOpen}
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
          />
        </Modal>
      </View>
    </View>
  )
}

export default HomeHeader;