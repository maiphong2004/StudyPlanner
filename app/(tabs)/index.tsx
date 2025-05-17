import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import ScheduleScreen from './schedule';
import TasksScreen from './tasks';

function AppContent() {
  return (
    <Routes>

      <Route path="/" element={<HomeScreen />} />

      <Route path="/schedule" element={<ScheduleScreen />} />

      <Route path="/tasks" element={<TasksScreen />} />
    </Routes>
  );
}


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{
        color: '#FFEDBE',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 30,
      }}>Study Planner</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button1}>
          <Image
            source={require('@/assets/images/Schedule.png')} // Thay đổi đường dẫn đến hình ảnh của bạn
            style={{}}
          />
          <Text style={{
            color: '#FFEDBE',
            fontWeight: 'bold',
            fontSize: 20,
          }}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image
            source={require('@/assets/images/Tasks.png')} // Thay đổi đường dẫn đến hình ảnh của bạn
            style={{}}
          />
          <Text style={{
            color: '#FFEDBE',
            fontWeight: 'bold',
            fontSize: 20,
          }}>Tasks</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button3}>
          <Image
            source={require('@/assets/images/Progress.png')} // Thay đổi đường dẫn đến hình ảnh của bạn
            style={{}}
          />
          <Text style={{
            color: '#FFEDBE',
            fontWeight: 'bold',
            fontSize: 20,
          }}>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <Image
            source={require('@/assets/images/History.png')} // Thay đổi đường dẫn đến hình ảnh của bạn
            style={{
              marginTop: 5,
              marginBottom: 5,
            }}
          />
          <Text style={{
            color: '#FFEDBE',
            fontWeight: 'bold',
            fontSize: 20,
          }}>History</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#5E53DA',
        margin: 15,
        borderRadius: 20,
        paddingBottom: 20,
        paddingTop: 10,
      }}>
        <Text style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
        }}>Welcome back!</Text>
        <Text style={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#FFEDBE',
          fontSize: 20,
        }}>You have 2 tasks to do today</Text>
      </View>
      <View style={{
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 100,
      }}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Để View chiếm toàn bộ không gian màn hình
    backgroundColor: '#8A76FB', // Thay đổi mã màu ở đây (ví dụ: màu trắng)
    // Thêm các style khác nếu cần (padding, justify-content, align-items, v.v.)
  },
  buttonRow: { // <--- Đảm bảo bạn có phần này
    flexDirection: 'row', // Sắp xếp các nút con theo chiều ngang
    justifyContent: 'space-around', // Phân bố đều khoảng trống xung quanh các nút
    width: '100%', // Chiếm toàn bộ chiều rộng để các nút có thể cách đều
    marginBottom: 20, // Khoảng cách giữa hàng nút trên và dưới
  },
  button1: { // <--- Đảm bảo bạn có phần này
    backgroundColor: '#FF8D36', // Màu nền của nút, thay đổi tùy ý
    padding: 30,
    borderRadius: 20,
    width: '45%', // Chiều rộng của mỗi nút (khoảng 45% để chừa khoảng trống ở giữa)
    alignItems: 'center', // Canh giữa chữ trong nút
  },
  button2: { // <--- Đảm bảo bạn có phần này
    backgroundColor: '#29B3BE', // Màu nền của nút, thay đổi tùy ý
    padding: 30,
    borderRadius: 20,
    width: '45%', // Chiều rộng của mỗi nút (khoảng 45% để chừa khoảng trống ở giữa)
    alignItems: 'center', // Canh giữa chữ trong nút
  },
  button3: { // <--- Đảm bảo bạn có phần này
    backgroundColor: '#247FCE', // Màu nền của nút, thay đổi tùy ý
    padding: 30,
    borderRadius: 20,
    width: '45%', // Chiều rộng của mỗi nút (khoảng 45% để chừa khoảng trống ở giữa)
    alignItems: 'center', // Canh giữa chữ trong nút
  },
  button4: { // <--- Đảm bảo bạn có phần này
    backgroundColor: '#FFC022', // Màu nền của nút, thay đổi tùy ý
    padding: 30,
    borderRadius: 20,
    width: '45%', // Chiều rộng của mỗi nút (khoảng 45% để chừa khoảng trống ở giữa)
    alignItems: 'center', // Canh giữa chữ trong nút
  },
  button5: {},
  button6: {},
  button7: {},
  button8: {},
  buttonText: { // <--- Đảm bảo bạn có phần này
    color: '#FFEDBE', // Màu chữ trong nút
    fontSize: 18,
    fontWeight: 'bold',
  },
});