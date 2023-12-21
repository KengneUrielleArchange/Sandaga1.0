import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createSheet } from 'react-native-web';
import{view,Button} from 'react-native';

const profileScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: 'black', }}>

            <View style={style.container}>
                <View style={{ height: 20, width: 20, borderRadius: 5, borderColor: 'black', right: -45, top: 30, left: -170, position: 'relative', backgroundColor: 'purple', }} >
                    <Text style={{ fontSize: 20, position: 'relative', top: -5, color: 'white', }}> + </Text>
                </View>
                <Image style={{ height: 20, width: 20, right: -180, top: 10, }} source={require('../assets/Partager.png')} />
                <Text style={{ fontFamily: 'versa', fontWeight: 'bold', top: 0, fontSize: 23, }}>Product Detail</Text>
                <Text style={{ fontFamily: 'versa', fontWeight: 'bold', left: -135, top: 10, fontSize: 20, }}>Juicy Orange</Text>
                <Text style={{ fontFamily: 'versa', fontWeight: 'bold', left: -150, top: 20, fontSize: 14, color: 'pink', }}>Sweet and Juicy </Text>
                <Text style={{ fontFamily: 'versa', fontWeight: 'bold', left: -40, top: 65, fontSize: 13, }}>Larem ipsum is simply dummy text of the printing and{'\n'}
                    typesetting industry. Lorem ipsum hos been the{'\n'}industry's standard dummy text
                    ever since the 1500s.{'\n'}whem on unknown printer took a galley of type and
                </Text>
                <View style={{ height: 50, width: 270, backgroundColor: 'pink', top: 90, right: -30, borderRadius: 17, }}>
                    <Text style={{ color: 'white', fontWeight: 'white', top: 10, left: 50, fontSize:20}} >Find Nearest Store</Text>
                </View>
                <View style={style.cont4}>
                    <Image style={{ height: 40, width: 40, top: 20, marginLeft: 'auto', marginRight: 'auto', }} source={require('../assets/coeur3.png')} />

                </View>



                <View style={{ height: 450, width: 400, backgroundColor: 'white', borderRadius: 28, bottom: -185, }}>
                    <Image style={{ height: 160, width: 210, top: -80, marginLeft: 'auto', marginRight: 'auto', }} source={require('../assets/orange.png')} />
                    <Text style={{ fontWeight: 'bold', top: -70, left: 20, fontSize: 20, }} >Nutrition Facts</Text>

                    <View style={{ flexDirection: 'column', gap: 70, top: 0, width: '100%', }}>
                        <View style={{ height: 10, width: '96%', borderRadius: 13, backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', top: -30, left: 10 }}>Fiber 3g</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', top: -30, left: 280 }}>7%</Text>

                            <View style={{ height: 10, width: 200, backgroundColor: 'pink', borderRadius: 28,marginLeft:-90 }}> </View>
                            
                        </View>
                        <View style={{
                            height: 10, width: '96%', borderRadius: 13, backgroundColor: 'black', marginLeft: 'auto',
                            marginRight: 'auto', flexDirection: 'row',
                        }}>

                            <Text style={{ fontSize: 17, fontWeight: 'bold', top: -28, left: 10, }}>Good Sugar 12g</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', top: -28, left: 220, }}>5%</Text>
                            <View style={{ height: 10, width: 200, backgroundColor: 'pink', borderRadius: 28,marginLeft:-100 }}> </View>
                        </View>
                    </View>

                </View>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: '#ffebee',
        borderRadius: 18,

    },
    cont4: {
        position: 'relative',
        height: 70,
        width: 70,
        borderWidth: 2,
        borderColor: 'pink',
        bottom: -30,
        left: -150,
        borderRadius: 14,
    },
})
export default profileScreen;