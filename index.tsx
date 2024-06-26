import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';

interface StylishListItemProps {
  leftImageUrl: string,
  leftImageBackgroundColor?: string,
  itemTitle: string,
  itemDescription?: string,
  itemColorCircle?: string[],
  onPress: (itemSequence: number, data: any) => void,
  // checkBoxStatus: boolean,
  rightSideText?: string,
  rightSideTextColor?: string
}

export interface StylishListProps {
  heading?: string,
  headingColor?: string,
  headingSize?: number,
  // checkboxContainsList: boolean,
  leftImageUrlFlag: boolean,
  belowLine?: boolean,
  itemBoxBorder?: boolean,
  itemBoxBorderLeftHighlight?: boolean,
  itemBoxBorderLeftHighlightColor?: string,
  rightArrowVisibility?: boolean,
  rightSideTextFlag?: boolean,
  rightSideIcon?: string,
  dataList: StylishListItemProps[],
}

const StylishList = (props:StylishListProps) => {
  return (
    <View>
      { props?.heading ? (<Text style={[styles.heading, { fontSize: props.headingSize ? props.headingSize : 14, color: props?.headingColor ? props?.headingColor : '#7C7C7C',}]}>{ props?.heading }</Text>) : null }
      <ScrollView>
        <>
          <View style={styles.container} >
            { props.dataList.map((data, id) => (
              <View key={id}>
                <TouchableOpacity 
                style={[
                  styles.itemContainer, 
                  props.itemBoxBorder ? styles.itemBoxBorder : null, 
                  props.itemBoxBorder && props.itemBoxBorderLeftHighlight ? { borderLeftWidth: 5, borderLeftColor: props.itemBoxBorderLeftHighlightColor } : { borderColor: '#B6B6B6' } 
                  ]} 
                onPress={() => data.onPress ? data.onPress(id,data) : null }>
                  {/* Icon with or without background */}
                  <View>
                      {/* { props.checkboxContainsList ? (
                        // checkBox 
                        // <CheckBox
                        //   value={data.checkBoxStatus}
                        //   onValueChange={null}
                        //   style={styles.checkbox}
                        // />
                        null
                      ) : (
                        null
                      )} */}

                      {props.leftImageUrlFlag ? (
                        // Left image with Circle
                        <View style={[styles.iconContainer, { backgroundColor: data.leftImageBackgroundColor }]}>
                          <View style={styles.iconContainer}>
                            <Image
                              style={styles.leftImageIcon}
                              source={{
                                uri: data.leftImageUrl
                              }}
                            />
                            {/* <Icon name="user-circle" size={25} color="#000" /> */}
                          </View>
                        </View>
                      ) : null }
                  </View>
                  { data.itemDescription || data.itemColorCircle ? (
                    //When there are title & description both
                    <View style={styles.textContainer}>
                      <Text numberOfLines={1} style={styles.itemTitle}>{ data.itemTitle }</Text>
                      {data.itemDescription ? (<Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemDescription}>{ data.itemDescription }</Text>) : null }
                      {data.itemColorCircle ? (
                        <View style={styles.circleColorContainer}>
                            {
                              data.itemColorCircle.map((color, key) => (
                                <View key={key} style={[styles.itemCircleForColor, { backgroundColor: color}]}></View>
                              ))
                            }
                        </View>
                      ) : null }
                    </View>
                  ) : (
                    // When there is title only.
                    <Text numberOfLines={1} style={styles.itemTitle}>{ data.itemTitle }</Text>
                  ) }

                 <View style={styles.rightSideColumn}>
                    {/* Right Side Text */}
                    { props.rightSideTextFlag ? (
                      <View style={styles.rightSideText}>
                        <Text style={[styles.amountText, {color: data.rightSideTextColor }]}>{ data.rightSideText }</Text>
                      </View>
                    ) : null }

                    {/* Right Side Arrow */}
                    {props.rightArrowVisibility ? (
                      <View style={styles.rightArrow}>
                        <Image
                          // source={{
                          //   uri: props.rightSideIcon
                          // }}
                          source={require('./assets/arrow-right-icon.png')}
                        />
                        {/* <Icon name="chevron-right" size={14} color="#000" /> */}
                      </View>
                    ) : null }
                 </View>
                </TouchableOpacity>

                {/* Horizontal Line */}
                {/* When checkbox is there, uncomment first */}
                {/* { props.belowLine ? <View style={[{flex: 1, height: 1, backgroundColor: '#B6B6B6', marginTop: -10, marginBottom: 15, marginRight:15, opacity: 0.5 }, props.checkboxContainsList || props.leftImageUrlFlag ? { marginLeft: 55 } : { marginLeft: 10 }]} /> : null } */}
                { props.belowLine ? <View style={[{flex: 1, height: 1, backgroundColor: '#B6B6B6', marginTop: -10, marginBottom: 15, marginRight:15, opacity: 0.5 }, props.leftImageUrlFlag ? { marginLeft: 55 } : { marginLeft: 10 }]} /> : null }
              </View>
            )) }
          </View>
        </>
      </ScrollView>
    </View>
  )
}

export default StylishList

const styles = StyleSheet.create({
  heading: {
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10
  },
  container: {
    margin: 10
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width:45,
    borderRadius: 20
  },
  itemTitle: {
    marginLeft: 15,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold'
  },
  itemDescription: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 12,
    color: '#9D9D9D'
  },
  rightArrow:{
    justifyContent:'center',
    height: 24,
    width: 24,
    marginRight: 15
  },
  leftImageIcon: {
    height: 27,
    width: 27
  },
  textContainer:{
    flex: 1,
    justifyContent:'center'
  },
  itemBoxBorder: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 10
  },
  circleColorContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15
  },
  itemCircleForColor:{
    marginRight: 5,
    marginTop: 5,
    height: 15,
    width: 15,
    borderWidth: 1,
    borderRadius: 10
  },
  rightSideText: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10
  },
  rightSideColumn:{
    flex:1,
    flexDirection:'row'
  },
  amountText:{
    fontSize: 18,
    fontWeight: 'bold'
  }
})