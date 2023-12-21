import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button,TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React, { useState } from 'react';

const search = require('./assets/sac.png')




const O_G= () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <view style={styles.app}>
                <view style={styles.header}>
                    <Image source={search} style={{
                        marginTop:-20,
                        width:347 ,
                        height: '350px',
                        marginLeft:-13,
                 
                        borderRadius: 30,

                    }} />
                </view>
                <View style={{backgroundColor:'rgb(231, 233, 231)',width:320 ,
                        height: '276px',borderRadius: 30,margin:420,marginLeft:-10,display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <text style={styles.mesText}>Order Groceries</text>
                            <text style={styles.mesText}>and Get deliverred</text>
                            <text style={styles.mesText}>in few minutes</text>
                            <View style={styles.monButton}><text style={styles.mesText}>Get started</text></View>                       
                </View>
                

            </view>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    app: {
        width: 300,
        height: 250,
        borderRadius: 50,
        flex:1,

        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#c8e6c9',
        paddingLeft: '2%',
        paddingRight: '2%',
    },
    header: {
        backgroundColor:'#c8e6c9',
        width: 'auto',
        height: '6%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    calendar: {
        marginTop: '4%',
        padding: '30px',
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',

    },
    notification: {
        marginTop: '10%',
        padding: '10px',
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',

    },

mesText:{
    fontWeight:'bold',
    fontFamily:'arial',
    fontSize:19,
},
monButton:{
    display:'flex',
    margin:40,
    height:40,
    width:150,
    borderWidth:2,
    borderColor:'green',
    color:'green',
    borderRadius:12,
    fontWeight:'blod',
    fontFamily:'19px',
    alignItems:'center',
    justifyContent:'center',
   
},
});

export default O_G;