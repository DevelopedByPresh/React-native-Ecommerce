import {Dimensions, StyleSheet, Text, View, TextInput, SafeArea, SafeAreaView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import data from "./data"
import { useNavigation } from '@react-navigation/native';



const TrendingData = [
    {
        id:1,
        name:'Red and White Snickers',
        price:899,
        rating:4.9,
        discount:-20,
        oldPrice:987,
        image:require('../assets/red.jpg'),
        details:'Lorem ipsum dolor sit explicabo reprehenderit'
    },

    {
        id:2,
        name:'Multi Bass Headset',
        price:299,
        rating:2.9,
        discount:-70,
        oldPrice:987,
        image:require('../assets/headset.jpg'),
        details:'Lorem ipsum dolor sit explicabo reprehenderit'
    },


    {
        id:3,
        name:'Gucci Handbag',
        price:899,
        rating:4.9,
        discount:-20,
        oldPrice:987,
        image:require('../assets/redBag.jpg'),
        details:'Lorem ipsum dolor sit explicabo reprehenderi'
    },

    {
        id:4,
        name:'Rolex Wrist watch',
        price:899,
        rating:4.9,
        discount:-20,
        oldPrice:987,
        image:require('../assets/rolex.jpg'),
        details:'Lorem ipsum dolor sit explicabo reprehenderit'
    }
]

const { width} = Dimensions.get('screen')



const Popular = ({product})=>{
    const navigation = useNavigation();
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Details', product)}>
            <ImageBackground source={product.image} style={styles.productCard}>
            </ImageBackground>
            <Text style={{textAlign: 'center',alignItems: 'center', paddingTop:10, fontWeight: 'bold'}}>{product.name}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:5}}>
                <Icon name="star" size={15} style={{color:'#0047AB'}}/>
                <Text>{product.rating} (1098)</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:4}}>
                <Text style={{marginRight:30, fontWeight:'bold', }}>${product.price}</Text>
                <Text style={{marginRight:30, textDecorationLine:'line-through'}}>${product.oldPrice}</Text>
                <Text style={{justifyContent:'flex-end', color:'#0047AB', fontWeight:'bold'}}>{product.discount}%</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}


const Trending = ({product})=>{
    return(
        <View>
            <ImageBackground source={product.image} style={styles.tendingCard}>
              
                <View style={{  position:'absolute', top:160 ,paddingHorizontal:13}}>
            <Text style={{ fontWeight: 'bold',  }}>{product.name}</Text>
            <Text style={{fontSize:10}}>{product.details}</Text>
            </View>



            </ImageBackground>
          

          
        </View>
    )
}


const Home = ()=>{
    const navigation = useNavigation();
    return(
        <SafeAreaView>
        <View >

          
        <View style={styles.container}>
            <View style={styles.iconContainer}>
            <Icon name="view-headline" size={20}  style={{color:'gray'}}/>
            <Icon name="search" size={20}  style={{color:'gray'}} />
            <Text  style={{color:'gray'}}>Search...</Text>
        

            </View>
       
        <TextInput style={styles.input}  keyboardType="numeric" />
        </View>

      <Icon name="swap-horizontal-circle" size={35} style={styles.icon}/>

        </View>
        


        <View style={styles.productsContainer}>


            <View style={styles.productIcon}>
            <Icon name="star" size={25} style={{color:'white'}}  />
            <Text style={{position:'absolute',top:65}}>Popular</Text>
            </View>

            
            <View style={styles.productIcon2}>
            <Icons name="tshirt" size={25}  style={{color:'gray'}}  />
            <Text style={{position:'absolute',top:65}}>Clothes</Text>
            </View>
           

           
            <View style={styles.productIcon2}>
            <Icons2 name="shoe-formal" size={25}  style={{color:'gray'}}   />
            <Text style={{position:'absolute',top:65}}>Shoes</Text>
            </View>
           

           
            <View style={styles.productIcon2}>
            <Icon name="shopping-bag" size={25} style={{color:'gray'}}  />
            <Text style={{position:'absolute',top:65}}>Bags</Text>
            </View>
           

           
            <View style={styles.productIcon2}>
            <Icon name="watch" size={25}  style={{color:'gray'}}  />
            <Text style={{position:'absolute',top:65}}>Watch</Text>
            </View>
           
        </View>

        <View style={{marginTop:50, paddingHorizontal:10}}>
        <FlatList
        horizontal 
        showsHorizontalScrollIndicator={false}
        
        data={data}
        renderItem={({item})=> <Popular product={item}/>}
         
         
         />
   

        </View>

        <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:30, paddingHorizontal:20}}>
        <Text style={styles.trending}>Trending Now</Text>
        <Icons name="arrow-right" size={20} style={{color:'#0047AB'}} />

        </View>

     

    

        <View style={{marginTop:20, paddingHorizontal:10}}>
        <FlatList
        horizontal 
        showsHorizontalScrollIndicator={false}
        
        data={TrendingData}
        renderItem={({item})=> <Trending product={item}/>}
         
         
         />
   

        </View>

        <View style={styles.bottom}>
       
            <View style={styles.home}>
            <TouchableOpacity>
            <Icon name="home" style={{backgroundColor:'#0047AB', padding:10, color:'white', borderRadius:50}} size={20}/>
            </TouchableOpacity>
            <Text style={{marginTop:8, fontSize:15,fontWeight:'500', marginLeft:5}}>Home</Text>
          
            </View>
           

            <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
            <Icons2 name="cart" size={20} style={{marginTop:10,color:'gray'}}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <Icon name="notifications-none" size={20} style={{marginTop:10,color:'gray'}} />
            </TouchableOpacity>

            <TouchableOpacity>
            <Icons name="user" size={20} style={{marginTop:10,color:'gray'}}/>
            </TouchableOpacity>
          
        </View>






        
        
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    home:{
        flexDirection:'row',
        gap:5,
        backgroundColor:'#E0E0E0',
      paddingHorizontal:7,
      paddingVertical:5,
      borderRadius:50,
      width:'30%',
        

    },


    bottom:{

        position:'absolute',
        bottom:-120,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItem:'center',
        paddingHorizontal:15,
        gap:70

    },



    trending:{
   
     
        fontWeight:'bold',
        fontSize:20

    },



    productCard:{
        height:130,
        width:width/2,
        marginRight:20,
        overflow:'hidden',
        borderRadius:20

    },


    tendingCard:{
        height:200,
        width:width/2,
        marginRight:20,
        overflow:'hidden',
        borderRadius:20

    },


    productsContainer:{
        marginTop:40,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent: 'space-between'

    },

  

    productIcon:{
        height:60,
        width:60,
        backgroundColor: '#0047AB',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },


      

    productIcon2:{
        height:60,
        width:60,
        backgroundColor: '#E0E0E0',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },

    placeholder:{
        marginLeft:30

    },

  

    iconContainer:{
        position:'absolute',
        flexDirection:'row',
        left:40,
        zIndex:1000,
        justifyContent:'center',
        alignItems: 'center',
        gap:7
       

    },



    container:{
        marginTop:40,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      

    },
    icon:{
  
       right:10,
       position:"absolute",
       top:55
    

    },



    input:{
        height: 40,
        margin: 12,
     
        padding: 10,
        width:'80%',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:50,
        backgroundColor:'#E0E0E0',
        marginLeft:20,
        
     
       
    }


})


export default Home