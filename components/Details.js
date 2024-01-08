import {Dimensions, StyleSheet, Text, View, StatusBar, TextInput, SafeArea, SafeAreaView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';



const Details = ({navigation, route})=>{
    const product = route.params
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
           <StatusBar translucent  backgroundColor='rgba(0,0,0,0)'/>
        <View style={{ flexDirection:'row', justifyContent:'space-between', backgroundColor:'#E0E0E0', paddingVertical:50}}>

<TouchableOpacity onPress={navigation.goBack}>
            <View style={{paddingHorizontal:20, flexDirection:'row', gap:15}}>
            <Icons name="arrow-left" size={20} style={{color:'gray'}} />
                <Text style={{fontSize:15,marginTop:2, fontWeight:'bold'}}>Details</Text>
            </View>
            </TouchableOpacity>

            <View style={{paddingHorizontal:20, flexDirection:'row', gap:15}}>
            <Icon name="search" size={20} style={{color:'gray'}} />
            <Icons name="shopping-bag" size={20} style={{color:'gray'}} />
            <Icons2 name="dots-horizontal" size={20} style={{color:'gray'}} />

            </View>
        </View>



       <View style={{width:'100%', height:250, justifyContent: 'center', backgroundColor:'#E0E0E0', }}>
        <ImageBackground source={product.image} style={{ flex:1, backgroundColor:'#E0E0E0', }}>
</ImageBackground> 

    


</View>

<View style={{paddingVertical:20, flexDirection: 'row', gap:10, paddingHorizontal:20}}>
<Icons2 name="store" size={20} style={{color:'#0047AB', }}/>
    <Text style={{fontWeight:'bold', color:'#0047AB', marginTop:2}}>Mushan Store</Text>
  
     </View>


     <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal:20}}>

    <Text style={{fontWeight:'400', fontSize:30,}}>{product.name}</Text>
    <Icons2 name="cards-heart-outline" size={25} style={{color:'gray', marginTop:-3, backgroundColor:'#E0E0E0', padding:10, borderRadius:50 }}/>
  
     </View>

     <Text style={{ paddingHorizontal:20, paddingVertical:10, fontSize:20, color:"#0047AB"}}>{product.discount}%</Text>

     <View style={{flexDirection:'row', justifyContent: 'space-between', paddingHorizontal:20, }}>

        <View style={{flexDirection:'row', gap:10}}>
        <Text style={{fontSize:17, fontWeight:'bold'}}>${product.price}</Text>
        <Text style={{fontSize:15, textDecorationLine:'line-through', marginTop:1}}>${product.oldPrice}</Text>

        </View>

        <View style={{flexDirection:'row', gap:5}}>
        <Icon name="star" size={15} style={{color:'#0047AB', marginTop:1 }}/>
        <Text>{product.rating}(1098)</Text>
        <Icon name="arrow-forward-ios" size={15} style={{color:'gray', marginTop:1 }}/>
        <Text>1.5k Sold</Text>
  

        </View>
       
       
     </View>

     <Text style={{paddingVertical:20, paddingHorizontal:20, fontWeight:500, fontSize:16}}>Color Family</Text>

     <View style={{flexDirection:'row', justifyContent: 'space-between',  paddingHorizontal:60,}}>
        <TouchableOpacity>
        <Text style={{  backgroundColor:'#E0E0E0', paddingHorizontal:20, paddingVertical:10, borderRadius:50 }}>Blue</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{  backgroundColor:'#E0E0E0', paddingHorizontal:20, paddingVertical:10, borderRadius:50 }}>White</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{  backgroundColor:'#E0E0E0', paddingHorizontal:20, paddingVertical:10, borderRadius:50 }}>Gray</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{  backgroundColor:'#0047AB', paddingHorizontal:20, paddingVertical:10, borderRadius:50, color:'#E0E0E0' }}>Red</Text>
        </TouchableOpacity>
     </View>


     <View style={{flexDirection:'row', justifyContent: 'space-between',  paddingHorizontal:80, paddingVertical:40}}>
        <Text style={{fontWeight:500, fontSize:17}}>Show Size</Text>
        <Text style={{fontWeight:500, fontSize:17}}> Quantity</Text>
     </View>


<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:-15}}>
     <View style={{paddingHorizontal:30, flexDirection: 'row', gap:35, backgroundColor:'#E0E0E0', paddingVertical:10, width:'40%', marginLeft:40, borderRadius:50}}>
        <Text>Select one</Text>
        <Icon name="keyboard-arrow-down" size={15} style={{color:'gray', marginTop:1 }}/>
      
     </View>


     <View style={{paddingHorizontal:30,  flexDirection: 'row', gap:35, backgroundColor:'#E0E0E0', paddingVertical:10, width:'40%', marginRight:20, borderRadius:50}}>
        <Text>Select one</Text>
        <Icon name="keyboard-arrow-down" size={15} style={{color:'gray', marginTop:1 }}/>
      
     </View>

     </View>



     
     <View style={{flexDirection:'row', marginTop:40, justifyContent:'space-between', paddingHorizontal:20}}>

     <View style={{marginTop:20}}>
        <Icons2 name="chat-processing" size={30} style={{color:'#0047AB'}}/>
        <Text style={{fontWeight:'bold'}}>Chat</Text>
     </View>

     <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
      <View style={style.btn}>
        <Text style={style.btnText}>Add To Cart</Text>
      </View>
      </TouchableOpacity>



      <TouchableOpacity >
      <View style={style.btn2}>
        <Text style={style.btnText2}>Buy Now</Text>
      </View>
      </TouchableOpacity>

     </View>
 


     

    
       
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    btnText:{
        fontWeight:'bold',
        color:'black'
    },

    btnText2:{
        fontWeight:'bold',
        color:'white'
    },
    btn:{
        marginTop:10,
        backgroundColor:'white',
        borderWidth: 1,
        borderColor:'#0047AB',
        width:150,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },


    btn2:{
        marginTop:10,
        backgroundColor:'#0047AB',
        width:150,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
      
    },
})


export default Details