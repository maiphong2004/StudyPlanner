import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function TasksScreen() {
     const [isModalVisible, setModalVisible] = useState(false);

     const toggleModal = () => {
          setModalVisible(!isModalVisible);
     };

     return (
          <View style={styles.container}>
               {/* Tiêu đề "Tasks" vẫn nằm trong Text */}
               <Text style={{
                    marginTop: 50,
                    textAlign: 'center',
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: '#FFEDBE',
               }}>
                    Tasks
               </Text>

               {/* View chứa nút và modal - Đặt ngoài thẻ Text */}
               <View style={{}}>
                    <TouchableOpacity
                         onPress={toggleModal}
                         style={{
                              margin: 20,
                              marginTop: 20,
                              padding: 10,
                              borderRadius: 5,
                              backgroundColor: '#FD7093',
                         }}>
                         <Text style={{
                              color: '#FFEDBE',
                              fontWeight: 'bold',
                              fontSize: 18,
                         }}>
                              + Quản lý Bài tập/Nhiệm vụ
                         </Text>
                    </TouchableOpacity>

                    {/* Modal */}
                    <Modal
                         animationType="slide"
                         transparent={true}
                         visible={isModalVisible}
                         onRequestClose={toggleModal}
                    >
                         {/* Nội dung của cửa sổ Modal */}
                         <View style={styles.modalContainer}>
                              <View style={styles.modalContent}>
                                   <View style={{}}>
                                        <TouchableOpacity style={{
                                             padding: 10,
                                             borderRadius: 5,
                                             backgroundColor: '#ced4da',
                                             marginBottom: 5,
                                        }}>
                                             <Text style={{
                                                  fontWeight: 'bold', fontSize: 18,
                                             }}>
                                                  + Thêm và theo dõi lịch học
                                             </Text>
                                        </TouchableOpacity>
                                   </View>
                                   <View style={{}}>
                                        <TouchableOpacity style={{
                                             padding: 10,
                                             borderRadius: 5,
                                             backgroundColor: '#ced4da',
                                             marginBottom: 5,
                                        }}>
                                             <Text style={{
                                                  fontWeight: 'bold', fontSize: 18,
                                             }}>
                                                  + Lên lịch và nhắc nhở
                                             </Text>
                                        </TouchableOpacity>
                                   </View>
                                   <View style={{}}>
                                        <TouchableOpacity style={{
                                             padding: 10,
                                             borderRadius: 5,
                                             backgroundColor: '#ced4da',
                                             marginBottom: 5,
                                        }}>
                                             <Text style={{
                                                  fontWeight: 'bold', fontSize: 18,
                                             }}>
                                                  + Phân loại và ưu tiên
                                             </Text>
                                        </TouchableOpacity>
                                   </View>
                                   <View style={{}}>
                                        <TouchableOpacity style={{
                                             padding: 10,
                                             borderRadius: 5,
                                             backgroundColor: '#ced4da',
                                             marginBottom: 5,
                                        }}>
                                             <Text style={{
                                                  fontWeight: 'bold', fontSize: 18,
                                             }}>
                                                  + Đính kèm tệp
                                             </Text>
                                        </TouchableOpacity>
                                   </View>
                                   <TouchableOpacity onPress={toggleModal}>
                                        <Text style={{
                                             marginTop: 20,
                                             color: 'blue',
                                             fontSize: 18,
                                             fontWeight: 'bold',
                                             textAlign: 'center',
                                        }}>Đóng cửa sổ</Text>
                                   </TouchableOpacity>
                              </View>
                         </View>
                    </Modal>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#8A76FB',
     },
     modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
     },
     modalContent: {
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
          elevation: 5,
     },
});