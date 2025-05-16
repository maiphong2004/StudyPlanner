import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TasksScreen() {
     return (
          <View style={styles.container}>
               <Text style={styles.title}>Màn hình Tasks</Text>
               {/* Các nội dung khác của màn hình Lịch trình */}
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff', // Màu nền tùy ý
     },
     title: {
          fontSize: 24,
          fontWeight: 'bold',
     },
});