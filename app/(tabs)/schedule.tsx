import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ScheduleScreen() {
     return (
          <View style={styles.container}>
               <Text style={{
                    color: '#FFEDBE',
                    fontWeight: 'bold',
                    fontSize: 30,
                    textAlign: 'center',
                    marginTop: 100,
               }}>Schedule</Text>
               <Text style={{
                    borderRadius: 20,
                    margin: 100,
                    padding: 20,
                    backgroundColor: '#FEC611',
                    textAlign: 'center',
                    marginTop: 25,
                    fontSize: 20,
                    fontWeight: 'bold',
               }}>
                    {/* <Entypo name="arrow-left" size={24} color="black" /> */}
                    May 2025
                    {/* <Entypo name="arrow-right" size={24} color="black" /> */}

               </Text>
               <View style={{
                    display: 'flex',
                    backgroundColor: '#20B3BB',
                    marginLeft: 100,
                    marginRight: 100,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                    marginBottom: 20,
               }}>
                    <AntDesign name="book" size={28} color="black"
                         style={{}}
                    />
                    <Text style={{
                         color: '#FFEDBE',
                         fontSize: 18,
                         fontWeight: 'bold',
                         // paddingLeft: 70,
                    }}>
                         English
                    </Text>
                    <Text style={{
                         color: '#FFEDBE',
                         fontSize: 18,
                         fontWeight: 'bold',
                         // paddingLeft: 70,
                    }}>
                         09:00 - 10:30
                    </Text>
               </View>
               <View style={{
                    display: 'flex',
                    backgroundColor: '#EE4974',
                    marginLeft: 100,
                    marginRight: 100,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                    marginBottom: 20,
               }}>
                    <FontAwesome name="history" size={28} color="black" />
                    <Text style={{
                         color: '#FFEDBE',
                         fontSize: 18,
                         fontWeight: 'bold',
                         // paddingLeft: 70,
                    }}>
                         History
                    </Text>
                    <Text style={{
                         color: '#FFEDBE',
                         fontSize: 18,
                         fontWeight: 'bold',
                         // paddingLeft: 70,
                    }}>
                         11:00 - 12:00
                    </Text>
               </View>
               <View style={{
                    display: 'flex',
                    backgroundColor: '#7757DF',
                    marginLeft: 100,
                    marginRight: 100,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
               }}>
                    <Entypo name="tree" size={28} color="black" />
                    <Text style={{
                         color: '#FFEDBE',
                         fontSize: 18,
                         fontWeight: 'bold',
                         // paddingLeft: 70,
                    }}>
                         Biology
                    </Text>
                    <Text style={{
                         color: '#FFEDBE',
                         fontSize: 18,
                         fontWeight: 'bold',
                         // paddingLeft: 70,
                    }}>
                         13:00 - 14:00
                    </Text>
               </View>
          </View>

     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          margin: 0,
          padding: 0,
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: '#FF8739', // Màu nền tùy ý
     },

});