import { View, Text, TouchableOpacity, Modal } from 'react-native';
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
  isModalOpen,
  setSortBy,
  setSortOrder } ) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        height: 150,
      }}>
      <View
        style={{
          flex: 3,
        }}>
        <View 
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
            top: 5,
            transform: [{
              rotate: '-5deg'
            }]
          }}>
          <Text 
            style={{
            color: 'white',
            fontFamily: 'Pacifico',
            fontSize: 30,
          }}>
            Rent-a-Ride
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'ManropeMedium',
              fontSize: 15,
              left: 5,
              top: -10,
            }}>
            Find your next adventure!
          </Text>
        </View>
      </View>

      <View 
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#7b68ee',
            borderRadius: 25,
            height: 50,
            width: 100
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