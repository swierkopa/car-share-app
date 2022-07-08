import { View, TouchableOpacity, TextInput } from 'react-native';
import SearchBar from './SearchBar';
import SortByButtonGroup from './SortByButtonGroup';
import SortOrderButtonGroup from './SortOrderButtonGroup';
import YearFilter from './YearFilter';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import SearchButton from './SearchButton';

const FilterModal = ( {
  onSearch,
  setFilterName,
  setFilterMinYear,
  setFilterMaxYear,
  setFilterColor,
  setFilterMinPrice,
  setFilterMaxPrice,
  setSortBy,
  setSortOrder,
}) => {

  return (
    <TouchableOpacity
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#101010',
      }}
      disabled={true}
      >
    <View
      style={{
        flex: 9,
        justifyContent: "center",
      }}>
      <SearchBar 
        setFilterName={setFilterName}
      />
      <YearFilter 
        setFilterMinYear={setFilterMinYear}
        setFilterMaxYear={setFilterMaxYear}
      />
      <PriceFilter 
        setFilterMinPrice={setFilterMinPrice}
        setFilterMaxPrice={setFilterMaxPrice}
      />
      <ColorFilter 
        setFilterColor={setFilterColor}
      />
      <SortByButtonGroup 
          buttons={['None', 'PRICE', 'YEAR']}
          setSortBy={setSortBy}
      />
      <SortOrderButtonGroup 
        buttons={['None', 'LOW TO HIGH', 'HIGH TO LOW']}
        setSortOrder={setSortOrder}
      />
      <SearchButton
        onSearch={onSearch}
      />
    </View>
    <View
      style={{
        flex: 1,
      }}>
    </View>
  </TouchableOpacity>
  )
}

export default FilterModal;
