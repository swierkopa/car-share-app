import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SortOrderButtonGroup = ({ buttons, setSortOrder }) => {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (index, buttonLabel) => {
    setClickedId(index);
    setSortOrder(buttonLabel);
    console.log(buttonLabel);
  }

  return (
    <View style={styles.container}>
      { buttons.map((buttonLabel, index) => {
        return (
          <TouchableOpacity
            onPress={(item) => handleClick(index, buttonLabel)}
            key={index}
            style={[
              index === clickedId ? styles.buttonActive : styles.button,
              index === 0? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10} : '',
              index === 2? {borderTopRightRadius: 10, borderBottomRightRadius: 10} : '',
            ]}>
            <Text
              style={index === clickedId ? styles.textActive : styles.text}
            >
              {buttonLabel}
            </Text>
          </TouchableOpacity>
        )
      })}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#383838',
  },
  buttonActive: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7b68ee',
  },
  text: {
    color: 'white',
    fontFamily: 'ManropeExtraBold',
    fontSize: 15,
  },
  textActive: {
    color: 'white',
    fontFamily: 'ManropeExtraBold',
    fontSize: 15,
  },
})

export default SortOrderButtonGroup;
