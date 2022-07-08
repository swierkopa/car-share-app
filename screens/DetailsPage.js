import { Text, SafeAreaView, View } from 'react-native';
import { FocusedStatusBar } from '../components';
import CarDetails from '../components/CarDetails';
import CarHeader from '../components/CarHeader';

const DetailsPage = ( { route } ) => {
  //data for which car was selected
  const { detailsData } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
          <View
            style={{
              flex: 1,
              backgroundColor: '#101010',
            }}>
            <View
              style={{
                flex: 2
              }}>
              <CarHeader 
                detailsData={detailsData}/>
            </View>
            <View
              style={{
                flex: 1
              }}>
              <CarDetails 
                detailsData={detailsData}/>
            </View>
          </View>
    </SafeAreaView>
  )
}

export default DetailsPage;