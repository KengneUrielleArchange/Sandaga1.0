import React from "react";
import { View, Text, Image,StyleSheet} from "react-native";




const Rootscreen = () => {
  return (
    <View style={{flex:1, height:'100%',width:'100%',backgroundColor:'black',}}>
    <View style={style.container}>
      <View style={{height:25,width:70,backgroundColor:'#ffcc80',position:'relative',borderRadius:20,top:260,left:-150,}}>

      </View>
      <Image style={{ position:'relative', left:-170, height:30, width:30, top:50,}} 
      source={require('../assets/menu.png')}/>
    
      <Text style={style.montex}>Discover Seasonal {'\n'}Fruit and Vegetables</Text>
   <View style={style.cont}   >

  <Text style={style.gap} >      Orange       Grape     Pineapple     Strave</Text>
  </View>
  <View style={style.cont1}>
  <Image style={{height:35,width:35,top:25, backgroundColor: '#b388ff', marginLeft:'auto',marginRight:'auto',right:-70, borderRadius:20,}} source={require('../assets/coeur.png')}/>
  <Image style={style.edite} 
  source={require('../assets/orange.png')}/>
  <Text style={{ position:'relative', fontWeight:'bold', top:30, left:20,
}}>Orange                   $10</Text>
  <Text style={style.Text} >Nearby Shop</Text>
  <View style={{position:'relative',height:30, width:90,backgroundColor:'orange',borderRadius:40,top:45,marginLeft:'auto',marginRight:'auto',}}>
    <Text style={{fontWeight:'bold',color:'white',textAlign:'center',top:4,}}>ADD</Text>
  </View>

  </View>
  <View style={style.cont3}>
    <Image style={{ height:100,width:90,left:50,top:55,}}
    source={require('../assets/raisain.png')}/>
     <View style={{position:'relative',height:30, width:90,backgroundColor:'blue',borderRadius:40,top:100,marginLeft:'auto',marginRight:'auto',}}>
    <Text style={{fontWeight:'bold',color:'white',textAlign:'center',top:5,}}>ADD</Text>
    <Text style={{ position:'relative', fontWeight:'bold', top:-70, left:-35,}}>Grape</Text>
  </View>

  </View>
  <View style={style.cont4}>
  <Text style={{position:'relative',fontWeight:'100',fontStyle:9,left:65,top:5,}}>Xenter Shop {'\n'}2356 Toltricon Street{'\n'}9AM-7PM</Text>
    <View style={{height:50,width:60,backgroundColor:'plum',marginLeft:'auto',marginRight:'auto',top:-45,left:-60,borderRadius:15,}}>
<Image style={{height:35,width:35,top:10, marginLeft:'auto',marginRight:'auto',}} source={require('../assets/stand1.jpg')}/>
</View>

</View>
<View style={style.cont5}>
<View style={{height:50,width:60,backgroundColor:'plum',marginLeft:'auto',marginRight:'auto',top:10,left:-30,borderRadius:15,}}>
<Image style={{height:35,width:35,top:10, marginLeft:'auto',marginRight:'auto',}} source={require('../assets/stand2.jpg')}/>
</View>
</View>
<View style={{flexDirection:'row',gap:70,top:-25}}>
 <Image style={{height:40,width:40,}} source ={require('../assets/Home.png')}/>
 <Image style={{height:40,width:40,}} source ={require('../assets/search.png')}/>
 <Image style={{height:40,width:40,}} source ={require('../assets/panier.jpg')}/>
 <Image style={{height:40,width:40,}} source ={require('../assets/person.png')}/>
 </View>
  </View>
  </View>
  );
}
const style= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:400,
    marginLeft:"auto",
    marginRight:"auto",
    backgroundColor:'white',
    borderRadius:18,

  },
  gap:{
    position:'relative',
    fontWeight:'bold',
    wordSpacing:5,
    textAlign:'center',
    top:128,
    left:-30,

  },
  montex:{
    position:'relative',
    fontWeight:'bold',
    fontSize:18,
    left:-100,
    top:70,

  },
  Text:{
    position:'relative',
    fontWeight:'bold',
    top:160,

  },
  cont5:{
    position:'relative',
    height:80,
    width:150,
    borderWidth:2,
    borderColor:'#b388ff',
    bottom:70,
    right:-110,
    borderRadius:14,
  },
  cont4:{
    position:'relative',
height:80,
width:190,
borderWidth:2,
borderColor:'#b388ff',
bottom:-10,
left:-90,
borderRadius:14,
  },
  
  cont3:{
    position:'relative',
    right:-113,
    top:-65,
    height:250,
    width:175,
    borderRadius:18,
    backgroundColor:'#b388ff',
  },
  edite:{
    marginLeft:'auto',
    marginRight:'auto',
  height:85,
  width:110,
  top:25,
  },
  Image: {
    position:"relative",
    top:-250,
    left:-180
    ,
    height:25,
    width:18,
  },
  cont1:{
    position:'relative',
    left:-90,
    top:180,
    height:250,
    width:195,
    borderRadius:18,
    backgroundColor:'yellow',
  },
})
export default Rootscreen;
