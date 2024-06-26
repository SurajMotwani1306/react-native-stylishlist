import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';

const StylishList = (props) => {
  return (
    <View>
      { props.dataList.map((data) => (
        <View key={data.id} style={styles.container}>
          {/* Icon with or without background */}
          <View style={[styles.iconContainer, { backgroundColor: data.iconBackgroundColor }]}>
              {/* { data.iconOrImage } */}
          </View>
          <Text style={styles.itemTitle}>{ data.itemTitle }</Text>
          <Image
            style={styles.rightArrow}
            source={require('./assets/arrow-right-icon.png')}
          />
        </View>
      )) }
    </View>
  )
}

export default StylishList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width:45
  },
  itemTitle: {
    marginLeft: 15,
    fontSize: 16
  },
  rightArrow:{
    height: 24,
    borderRadius: 4,
    alignItems: 'flex-end',
    marginRight: 25
  }
})