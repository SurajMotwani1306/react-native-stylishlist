import { StyleSheet } from 'react-native'

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
        color: '#7C7C7C'
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

  export default styles