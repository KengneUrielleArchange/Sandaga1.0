import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {view,Button} from 'react-native';

const Homescreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: 'black', }}>
            <View style={style.container}>
                <Image style={{ position: 'relative', right: -170, height: 30, width: 30, top: -60, borderRadius: 60, }}
                    source={require('../../assets/sac.png')} />
                <View style={{ height: 20, width: 20, borderRadius: 5, borderColor: 'black', right: -40, top: -75, left: -170, position: 'relative', borderWidth: 2, }} >
                    <Text style={{ fontSize: 20, position: 'relative', top: -35, }}> + </Text>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', top: -15, left: -160, }}>My {'\n'} {'\n'}Order</Text>

                <View style={{
                    height: 350, width: '100%', backgroundColor: 'white'
                    , bottom: -20, borderColor: 'white', borderWidth: 5,
                }}>

                    <View style={style.cont4}>
                        <Text style={{ position: 'relative', fontWeight: 'bold', fontStyle: 9, left: 100, top: 30, }}> 1 X</Text>
                        <Text style={{ position: 'relative', fontWeight: 'bold', fontStyle: 9, left: 160, top: 5, }}> Orange {'\n'}$10</Text>
                        <View style={{ height: 50, width: 60, backgroundColor: '#ffcc80', marginLeft: 'auto', marginRight: 'auto', top: -45, left: -155, borderRadius: 15, }}>
    
                        <Image style={{ height: 35, width: 35, top: 10, marginLeft: 'auto', marginRight: 'auto'}} source={require('../../assets/orange.png')}/>
                        </View>
                        <View style={{ height: 35, width: 35, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', top: -80, left: 170, borderRadius: 8, }}>
                            <Image style={{ height: 20, width: 20, top: 10, marginLeft: 'auto', marginRight: 'auto', }} source={require('../../assets/delete.png')} />
                        </View>
                    </View>

                    <View style={style.cont5}>
                        <Text style={{ position: 'relative', fontWeight: 'bold', fontStyle: 9, left: 100, top: 30, }}> 1 X</Text>
                        <Text style={{ position: 'relative', fontWeight: 'bold', fontStyle: 9, left: 160, top: 5, }}> Strawberry {'\n'}$12</Text>
                        <View style={{ height: 50, width: 60, backgroundColor: '#f48fb1', marginLeft: 'auto', marginRight: 'auto', top: -45, left: -155, borderRadius: 15, }}>
                            <Image style={{ height: 35, width: 35, top: 10, marginLeft: 'auto', marginRight: 'auto', }} source={require('../../assets/fraise.png')} />
                        </View>
                        <View style={{ height: 35, width: 35, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', top: -80, left: 170, borderRadius: 8, }}>
                            <Image style={{ height: 20, width: 20, top: 10, marginLeft: 'auto', marginRight: 'auto', }} source={require('../../assets/delete.png')} />
                        </View>
                    </View>

                    <View style={style.cont6}>
                        <Text style={{ position: 'relative', fontWeight: 'bold', fontStyle: 9, left: 100, top: 30, }}> 1 X</Text>
                        <Text style={{ position: 'relative', fontWeight: 'bold', fontStyle: 9, left: 160, top: 5, }}> Green Apple {'\n'}$13</Text>
                        <View style={{ height: 50, width: 60, backgroundColor: 'green', marginLeft: 'auto', marginRight: 'auto', top: -45, left: -155, borderRadius: 15, }}>
                            <Image style={{ height: 35, width: 35, top: 10, marginLeft: 'auto', marginRight: 'auto', }} source={require('../../assets/pomme.png')} />
                        </View>
                        <View style={{ height: 35, width: 35, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', top: -80, left: 170, borderRadius: 8, }}>
                            <Image style={{ height: 20, width: 20, top: 10, marginLeft: 'auto', marginRight: 'auto', }} source={require('../../assets/delete.png')} />
                        </View>
                    </View>

                    <View style={style.cont7}>
                        <Text style={{ position: 'relative', fontWeight: 'bold', fontStyle: 9, left: 100, top: 30, }}> 1 X</Text>
                        <Text style={{ position: 'relative', fontWeight: 'bold', fontStyle: 9, left: 160, top: 5, }}> Grape {'\n'}$15</Text>
                        <View style={{ height: 50, width: 60, backgroundColor: '#b388ff', marginLeft: 'auto', marginRight: 'auto', top: -45, left: -155, borderRadius: 15, }}>
                            <Image style={{ height: 35, width: 35, top: 10, marginLeft: 'auto', marginRight: 'auto', }} source={require('../../assets/raisain.png')} />
                        </View>
                        <View style={{ height: 35, width: 35, backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto', top: -80, left: 170, borderRadius: 8, }}>
                            <Image style={{ height: 20, width: 20, top: 10, marginLeft: 'auto', marginRight: 'auto', }} source={require('../../assets/delete.png')} />
                        </View>
                    </View>



                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, bottom: -25, left: 0, }}>Total Price                                          $50</Text>
                <View style={{ height: 40, width: 200, backgroundColor: '#e57373', borderRadius: 10, left: 0, bottom: -50, marginBottom:'auto'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', left: 50,top: 3, marginRight:'auto' }}>Payement</Text>
                </View>
            </View>
        </View>

    );
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
        backgroundColor: 'white',
        borderRadius: 18,
    },
    cont4: {
        position: 'relative',
        height: 80,
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        bottom: -3,
        left: 1,
        borderRadius: 14,
    },
    cont5: {
        position: 'relative',
        height: 80,
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        bottom: -3,
        left: 1,
        borderRadius: 14,
    },
    cont6: {
        position: 'relative',
        height: 80,
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        bottom: -3,
        left: 1,
        borderRadius: 14,
    },
    cont7: {
        position: 'relative',
        height: 80,
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        bottom: -3,
        left: 1,
        borderRadius: 14,
    },

});

export default Homescreen;