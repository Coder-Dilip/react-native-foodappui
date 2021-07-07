import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {colors, Icon} from 'react-native-elements';
import categoriesData from '../assets/Data/categoriesData';
import popularData from '../assets/Data/popularData';
import Color from '../assets/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  const renderCategoryItem = ({item}) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? '#ffbf00' : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
             <StatusBar backgroundColor="black" barStyle="light-content"  />
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? 'white' : '#ffbf00',
            },
          ]}>
          <Icon
            name="chevron-right"
            size={8}
            type="font-awesome"
            color={item.selected ? Color.textDark : 'black'}
            style={styles.categorySelectIcon}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false} style={{marginBottom:10}} >
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Icon name="bars" type="font-awesome" color={Color.textDark} />
        </View>
      </SafeAreaView>

      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
      </View>

      {/* search */}
      <View style={styles.searchWrapper}>
        <Icon
          name="search"
          size={16}
          type="font-awesome"
          color={Color.textDark}
        />
        <View style={styles.search}>
          <TextInput style={[styles.searchText,{
              color:Color.textDark
          }]} placeholder="search" />
        </View>
      </View>

      {/* categories */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>

      {/* popular */}
      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        {popularData.map((item,i) => (
          <TouchableOpacity key={i} onPress={()=>navigation.navigate('Details',{item:item})} >
          <View key={i} style={[styles.popularCardWrapper],{
              marginTop:item.id==1?10:20,
              flexDirection:'row',
              alignItems:'center',
              backgroundColor:'white',
              borderRadius:25,
              padding:20,
              justifyContent:'space-around',
              paddingTop:10,
             height:180
          }}>
            <View>
              <View>
                <View style={styles.popularTopWrapper} >
                <FontAwesome5 name={'crown'} size={12} color={'#ffbf00'} />
                <Text style={styles.popularTopTitle} >Top of the week</Text>
                </View>
                <View style={[styles.popularTitlesWrapper,{
                    marginLeft:15,
                    position:'relative',
                    top:7
                }]} >
<Text style={styles.popularTitlesTitle} >{item.title}</Text>
<Text style={styles.popularTitlesWeight} >weight {item.weight}</Text>
                </View>
              </View>
              <View style={[styles.popularCardBottom,{
                  position:'relative',
                  top:25,
                  left:-8
              }]} >
<View style={styles.addPizzabutton} >
    <FontAwesome5 name='plus' size={10} color={Color.textDark}  />
</View>
<View style={styles.ratingWrapper} >
<MaterialCommunityIcons name='star' size={10} colors={Color.textDark} />
<Text style={styles.rating} >{item.rating}</Text>
</View>
                  </View>
            </View>
            <View style={styles.popularCardRight} >
                <Image source={item.image} style={styles.popularCardImage} />
                </View>
          </View>
          </TouchableOpacity>
        ))}
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },

  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontSize: 16,
    color: Color.textDark,
  },
  titlesTitle: {
    fontSize: 32,
    color: Color.textDark,
    marginTop: 5,
    fontWeight: 'bold',
  },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },

  search: {
    flex: 1,
    marginLeft: 20,
    borderBottomColor: Color.textLight,
    borderBottomWidth: 2,
    position: 'relative',
    top: -2,
  },
  searchText: {
    fontSize: 14,
    marginBottom: -5,
    color: Color.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.textDark,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#f5ca48',
    marginRight: 20,
    borderRadius: 20,
   
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold',
    color: Color.textDark,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularCardWrapper:{
backgroundColor:'white',
borderRadius:25,
paddingTop:20,
paddingLeft:20,
flexDirection:'row',
alignItems:'center',
overflow:'hidden'
  },
  popularTopWrapper:{
flexDirection:'row',
alignItems:'center',
marginLeft:10

  },
popularTopTitle:{
marginLeft:10,
fontWeight:'bold',
fontSize:14,
color:Color.textDark,
opacity:0.5
},
popularTitlesWrapper:{
marginTop:20
},
popularTitlesTitle:{
fontSize:14,
color:Color.textDark
},
popularTitlesWeight:{
fontSize:12,
color:Color.textLight,
marginTop:5
},
popularCardBottom:{
flexDirection:'row',
alignItems:'center',
marginTop:10,
},
addPizzabutton:{
backgroundColor:'#f5ca48',
paddingHorizontal:40,
paddingVertical:20,
borderTopRightRadius:25,
borderBottomLeftRadius:25
},
ratingWrapper:{
flexDirection:'row',
alignItems:'center',
marginLeft:20
},
rating:{
fontWeight:'bold',
fontSize:12,
color:Color.textDark,
marginLeft:5
},
popularCardRight:{
marginLeft:40
},
popularCardImage:{
width:180,
height:195,
resizeMode:'contain'
},
});

export default Home;
