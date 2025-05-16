import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function ScheduleScreen() {
     return (
          <View style={styles.container}>
               <Text style={{
                    color: '#FFEDBE',
                    fontWeight: 'bold',
                    fontSize: 50,
                    textAlign: 'center',
                    marginTop: 50,
               }}>Schedule</Text>
               <Text style={{
                    borderRadius: 20,
                    margin: 100,
                    padding: 10,
                    backgroundColor: '#FEC611',
                    textAlign: 'center',
                    marginTop: 25,
                    fontSize: 25,
                    fontWeight: 'bold',
               }}>
                    <Entypo name="arrow-left" size={24} color="black" />
                    May 2025
                    <Entypo name="arrow-right" size={24} color="black" />
               </Text>
               <View style={{
                    borderRadius: 20,
                    marginLeft: 100,
                    marginRight: 100,
                    paddingBottom: 10,
                    paddingTop: 10,
                    backgroundColor: '#20B3BB',
               }}>
                    <Text style={{
                         color: '#FFEDBE',
                         fontWeight: 'bold',
                         fontSize: 25,
                         textAlign: 'center',
                    }}>English</Text>
                    <Text style={{
                         // paddingLeft: 50,
                         fontSize: 20,
                         fontWeight: 'bold',
                         textAlign: 'center',
                         color: '#FFEDBE',
                    }}>09:00 - 10:30</Text>
               </View>
               <View style={{
                    marginTop: 45,
                    borderRadius: 20,
                    marginLeft: 100,
                    marginRight: 100,
                    paddingBottom: 10,
                    paddingTop: 10,
                    backgroundColor: '#EE4974',
               }}>
                    <Text style={{
                         color: '#FFEDBE',
                         fontWeight: 'bold',
                         fontSize: 25,
                         textAlign: 'center',
                    }}>History</Text>
                    <Text style={{
                         // paddingLeft: 50,
                         fontSize: 20,
                         fontWeight: 'bold',
                         textAlign: 'center',
                         color: '#FFEDBE',
                    }}>11:00 - 12:00</Text>
               </View>
               <View style={{
                    marginTop: 45,
                    borderRadius: 20,
                    marginLeft: 100,
                    marginRight: 100,
                    paddingBottom: 10,
                    paddingTop: 10,
                    backgroundColor: '#7757DF',
               }}>
                    <Text style={{
                         color: '#FFEDBE',
                         fontWeight: 'bold',
                         fontSize: 25,
                         textAlign: 'center',
                    }}>Biology</Text>
                    <Text style={{
                         // paddingLeft: 50,
                         fontSize: 20,
                         fontWeight: 'bold',
                         textAlign: 'center',
                         color: '#FFEDBE',
                    }}>13:00 - 14:00</Text>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: '#FF8739', // Màu nền tùy ý
     },
});