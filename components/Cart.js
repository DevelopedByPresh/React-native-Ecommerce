import {Dimensions, StyleSheet, Text, View, StatusBar, TextInput, SafeArea, SafeAreaView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';


const Cart = ({navigation})=>{
    return(
        <SafeAreaView style={{ flex:1, backgroundColor:'white'}}>
            <StatusBar translucent={false} backgroundColor='black'/>

            <View style={{marginTop:-20}} >

                           
               <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:20,   }}>
               
               <TouchableOpacity onPress={navigation.goBack}>
                <View style={styles.container}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', gap:10}}>
                    <Icons name="arrow-left" size={15} style={{color:'gray'}} />
                <Text style={{fontWeight:'bold'}}>My Cart</Text>

                    </View>
                </View>
                </TouchableOpacity>


                <View style={{paddingTop:40}}>
                    <Text style={{fontWeight:'bold', color:'#0047AB'}}>Cancel</Text>
                </View>
         
        </View>



        <View   style={{marginTop:-40, paddingHorizontal:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center',   }}>

            <View>
                <Icons2 name="checkbox-marked-circle" size={30} color="#0047AB" style={{marginTop:-70}} />
            </View>

            <View style={{flex:0.7, }}>
                <ImageBackground source={require('../assets/headset.jpg')} style={{width: '100%', height: '60%',}}>

                </ImageBackground>
            </View>

            <View style={{paddingHorizontal:5, marginTop:-80}}>
        <Text style={{fontWeight:'bold', paddingVertical:3}}>Sony Black H619 BT headphones</Text>
        <Text style={{fontSize:12, paddingVertical:3}}>size: 40 | Color Family : white and Gray</Text>

        <View style={{flexDirection: 'row', gap:5, paddingVertical:3}}>
            <Text style={{fontWeight:'bold'}}>$699</Text>
            <Text style={{textDecorationLine:'line-through'}}>$999</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', paddingVertical:3}}>

            <View style={{flexDirection: 'row', gap:20, backgroundColor:'#E0E0E0', paddingHorizontal:10, paddingVertical:5}}>
            <Icons2 name="minus" size={20} color="black"  />
            
        <Text style={{alignItems: 'center', justifyContent: 'center', marginTop:2}}>02 </Text> 

        <Icons2 name="plus" size={20} color="black"   />

            </View>
      


<View style={{marginRight:30}}>
<Icons2 name="cards-heart-outline" size={20} color="gray"  />
</View>
       


        </View>

       </View>




        </View>


            </View>




            <View style={{marginTop:-450}} >

        <View   style={{ paddingHorizontal:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center',   }}>

            <View>
                <Icons2 name="checkbox-marked-circle" size={30} color="#0047AB" style={{marginTop:-70}} />
            </View>

            <View style={{flex:0.7, }}>
                <ImageBackground source={require('../assets/rolex.jpg')} style={{width: '400px', height: '60%',}}>

                </ImageBackground>
            </View>

            <View style={{paddingHorizontal:5, marginTop:-80}}>
        <Text style={{fontWeight:'bold', paddingVertical:3}}>Sony Black H619 BT headphones</Text>
        <Text style={{fontSize:12, paddingVertical:3}}>size: 40 | Color Family : white and Gray</Text>

        <View style={{flexDirection: 'row', gap:5, paddingVertical:3}}>
            <Text style={{fontWeight:'bold'}}>$699</Text>
            <Text style={{textDecorationLine:'line-through'}}>$999</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', paddingVertical:3}}>

            <View style={{flexDirection: 'row', gap:20, backgroundColor:'#E0E0E0', paddingHorizontal:10, paddingVertical:5}}>
            <Icons2 name="minus" size={20} color="black"  />
            
        <Text style={{alignItems: 'center', justifyContent: 'center', marginTop:2}}>02 </Text> 

        <Icons2 name="plus" size={20} color="black"   />

            </View>
      


<View style={{marginRight:30}}>
<Icons2 name="cards-heart-outline" size={20} color="gray"  />
</View>
       


        </View>

       </View>




        </View>






      










            </View>





            <View style={{marginTop:-650}} >

        <View   style={{ paddingHorizontal:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center',   }}>

            <View>
                <Icons2 name="checkbox-marked-circle" size={30} color="#0047AB" style={{marginTop:-70}} />
            </View>

            <View style={{flex:0.7, }}>
                <ImageBackground source={require('../assets/shoe2.jpg')} style={{width: '100%', height: '60%',}}>

                </ImageBackground>
            </View>

            <View style={{paddingHorizontal:5, marginTop:-80}}>
        <Text style={{fontWeight:'bold', paddingVertical:3}}>Sony Black H619 BT headphones</Text>
        <Text style={{fontSize:12, paddingVertical:3}}>size: 40 | Color Family : white and Gray</Text>

        <View style={{flexDirection: 'row', gap:5, paddingVertical:3}}>
            <Text style={{fontWeight:'bold'}}>$699</Text>
            <Text style={{textDecorationLine:'line-through'}}>$999</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', paddingVertical:3}}>

            <View style={{flexDirection: 'row', gap:20, backgroundColor:'#E0E0E0', paddingHorizontal:10, paddingVertical:5}}>
            <Icons2 name="minus" size={20} color="black"  />
            
        <Text style={{alignItems: 'center', justifyContent: 'center', marginTop:2}}>02 </Text> 

        <Icons2 name="plus" size={20} color="black"   />

            </View>
      


<View style={{marginRight:30}}>
<Icons2 name="cards-heart-outline" size={20} color="gray"  />
</View>
       


        </View>

       </View>




        </View>

            </View>



          <View style={{marginTop:-600, paddingHorizontal:20}}>
            <Text style={{fontWeight:"bold", fontSize:18}}>Order Summary</Text>
          </View>



          <View style={{ flexDirection: "row", justifyContent: "space-between",  backgroundColor:'#E0E0E0', marginTop:10}}>
          <View style={{paddingHorizontal:20, paddingVertical:20,}}>
            <Text style={{paddingVertical:3, fontSize:18, fontWeight:'400'}}>Items</Text>
            <Text style={{paddingVertical:3, fontSize:18, fontWeight:'400'}} >Amount</Text>
            <Text style={{paddingVertical:3, fontSize:18, fontWeight:'400'}}>Shipping Fee</Text>
            <Text style={{paddingVertical:3, fontSize:18, fontWeight:'400'}}>Total</Text>
          </View>


          <View  style={{paddingHorizontal:20, paddingVertical:20}}>
            <Text style={{paddingVertical:3, fontSize:18, fontWeight:'400'}}>3</Text>
            <Text style={{paddingVertical:3, fontSize:18, fontWeight:'400'}}>$480</Text>
            <Text style={{paddingVertical:3, fontSize:18, fontWeight:'400'}}>$60.00</Text>
            <Text style={{paddingVertical:3, fontSize:18, fontWeight:'400'}}>$520.00</Text>
          </View>
          </View>


          <View style={{flexDirection:'row', marginTop:40, justifyContent:'space-between', paddingHorizontal:20}}>

<View style={{marginTop:20}}>
   <Icons2 name="checkbox-blank-circle-outline" size={30} style={{color:'#0047AB'}}/>
   <Text style={{fontWeight:'bold',marginLeft:5}}>All</Text>
</View>

<TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
 <View style={styles.btn}>
   <Text style={styles.btnText}>Delete</Text>
 </View>
 </TouchableOpacity>





 <TouchableOpacity >
 <View style={styles.btn2}>
   <Text style={styles.btnText2}>Check Out</Text>
 </View>
 </TouchableOpacity>

</View>

       






        </SafeAreaView>
     
    )
}



const styles = StyleSheet.create({
    container:{
        paddingTop:40,
      
    },

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


export default Cart