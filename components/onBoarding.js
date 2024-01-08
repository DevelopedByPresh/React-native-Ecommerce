import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';


const OnBoard = ({navigation})=>{
    return(
        <View style={{flex:1}}>
      <ImageBackground source={require('../assets/woman.jpg')} style={{flex:1}}>
    
      </ImageBackground>
      <View style={style.intro}>
      <Text style={style.IntoText}>Welcome to PreshStores!</Text>
      <Text style={style.descriptor}>Lorem ipsum dolor sit explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditat  amet ab temporibus asperiores quasi</Text>

<TouchableOpacity onPress={()=>navigation.navigate('Home')}>
      <View style={style.btn}>
        <Text style={style.btnText}>Get Started</Text>
      </View>
      </TouchableOpacity>
      </View>
  
      </View>
    )
}



const style = StyleSheet.create({
    intro:{
        position:'absolute',
        height:'50%',
        bottom:-180,
        paddingHorizontal:20,
       
    },

    IntoText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
       
    },
    descriptor:{
        color:'white',
        marginTop:10,
        fontSize:13
    },
    btn:{
        marginTop:10,
        backgroundColor:'white',
        width:120,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },
    btnText:{
        fontWeight:'bold',
    }
})


export default OnBoard