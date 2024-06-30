import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './src/Stylesheet';

interface StylishListItemProps {
  leftImage: string,
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
  leftImageFlag: boolean,
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
                        null
                      ) : (
                        null
                      )} */}

                      {props.leftImageFlag ? (
                        // Left image with Circle
                        <View style={[styles.iconContainer, { backgroundColor: data.leftImageBackgroundColor }]}>
                          <View style={styles.iconContainer}>
                            <Image
                              style={styles.leftImageIcon}
                              source={require(data.leftImage || '')}
                            />
                          </View>
                        </View>
                      ) : null }
                  </View>
                  { data.itemDescription || data.itemColorCircle ? (
                    //When there are title, description or color circles
                    <View style={styles.textContainer}>
                      <Text numberOfLines={1} style={styles.itemTitle}>{ data.itemTitle }</Text>
                      {data.itemDescription ? (<Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemDescription}>{ data.itemDescription }</Text>) : null }
                      { (data.itemColorCircle &&  data.itemColorCircle.length > 0) ? (
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

                    {/* Right Side Image */}
                    {props.rightArrowVisibility ? (
                      <View style={styles.rightArrow}>
                        <Image
                          source={require(props.rightSideIcon || '')}
                        />
                      </View>
                    ) : null }
                 </View>
                </TouchableOpacity>

                {/* Horizontal Line */}
                {/* When checkbox is there, uncomment first */}
                {/* { props.belowLine ? <View style={[{flex: 1, height: 1, backgroundColor: '#B6B6B6', marginTop: -10, marginBottom: 15, marginRight:15, opacity: 0.5 }, props.checkboxContainsList || props.leftImageFlag ? { marginLeft: 55 } : { marginLeft: 10 }]} /> : null } */}
                { props.belowLine ? <View style={[{flex: 1, height: 1, backgroundColor: '#B6B6B6', marginTop: -10, marginBottom: 15, marginRight:15, opacity: 0.5 }, props.leftImageFlag ? { marginLeft: 55 } : { marginLeft: 10 }]} /> : null }
              </View>
            )) }
          </View>
        </>
      </ScrollView>
    </View>
  )
}

export default StylishList