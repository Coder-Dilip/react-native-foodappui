import {orangered} from 'color-name';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import {colors, Icon} from 'react-native-elements';
import Color from '../assets/Colors';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const renderIngredientsItem=({item})=>{
return (
    <View style={styles.ingredientItemWrapper} >
        <Image source={item.image} style={styles.ingredientImage} />
    </View>
)
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Icon
                name="chevron-left"
                size={12}
                type="font-awesome"
                color={Color.textDark}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <Icon name="star" size={12} type="font-awesome" color="white" />
          </View>
        </View>
      </SafeAreaView>
<ScrollView>
      {/* Titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* Price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>

      {/* pizza info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}
            </Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>

          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery In</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>

        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>

      {/* ingredients */}
      <View style={styles.ingredientsWrapper} >
<Text style={styles.ingredientsTitle}>Ingredients</Text>
<View style={styles.ingredientsListWrapper} >
<FlatList data={item.ingredients} renderItem={renderIngredientsItem} keyExtractor={(item)=>item.id} horizontal={true} showsHorizontalScrollIndicator={false} />
</View>
      </View>
      <TouchableOpacity onPress={()=>alert('Your order has been placed!')} >
<View style={styles.orderWrapper} >
    <Text style={styles.orderText}>Place an Order</Text>
    <Icon name='chevron-right' size={18} color='black' />
</View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: Color.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  headerRight: {
    backgroundColor: Color.primary,
    padding: 12,
    borderColor: Color.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: Color.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: 'orangered',
    fontWeight: '700',
    fontSize: 32,
    opacity: 0.8,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontWeight: '400',
    color: Color.textLight,
    fontSize: 14,
  },
  infoItemText: {
    fontWeight: '600',
    color: Color.textDark,
    fontSize: 18,
  },
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
    height: 300,
    width: 300,
  },
ingredientsTitle:{
paddingHorizontal:20,
fontWeight:'bold',
fontSize:16,
color:Color.textDark
},
ingredientsListWrapper:{
paddingVertical:20,
paddingLeft:20
},
ingredientItemWrapper:{
backgroundColor:'white',
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
paddingHorizontal:10,
marginRight:15,
borderRadius:15
},
ingredientImage:{
resizeMode:'contain',
height:90,
width:90,
},
orderWrapper:{
marginTop:40,
marginHorizontal:20,
backgroundColor: '#ffbf00',
borderRadius:50,
paddingVertical:15,
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
marginBottom:40
},
orderText:{
fontWeight:'bold',
fontSize:14,
   marginRight:10
},
});

export default Details;
