import { View, Text, StyleSheet, FlatList, Modal, Image } from 'react-native';
import Button from './../components/Button';
import colors from './../components/colors';
import React, { useState } from "react";




function AccountsScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const data = ['Notifications', 'Terms and Conditions', 'Privacy', 'Help', 'Log out']

    const renderItem = ({ item }) => {
        return (
            <Text style={styles.normalHeading}>{item}</Text>
        )
    }

    return (
      <View style={styles.main}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View>
            <Text style={styles.normalText}>Your Reservation</Text>
          </View>
            <View>
           <Image style={{width: 150, height: 150}} source={require("../assets/qr.png")} />
            </View>
            <View>
            <Button title="Done"  onPress={() => setModalVisible(!modalVisible)} color={colors.yellow} style={{borderRadius: 10, width: 250}} />
            </View>
          </View>
        </View>
      </Modal>
        <Text style={styles.headingText}>Your Reservations</Text>
        <View style={styles.reservation}>
            <View style={styles.reservationInfo}>
                <Text style={styles.normalText}>Hatem</Text>
                <View>
                    <Text>8.00pm, 9:00pm</Text>
                    <Text>1st January, 2023</Text>
                    <Text>4 Guests</Text>
                </View>
            </View>
            <Button onPress={() => setModalVisible(true)} style={{borderRadius: 10}} title="Show QR code" color={colors.yellow} />
        </View>
        <View style={styles.buttonsList}>
           <FlatList data={data} renderItem={renderItem} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    buttonsList: {
        marginTop: 30
    },
    reservation: {
        marginTop: 30,
        borderWidth: 2,
        padding: 20,
        borderRadius: 30,
        backgroundColor: "#E1E1E1"
    },
    reservationInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 30
    },
    main: {
        marginTop: 40,
        marginHorizontal: 25,
        flex: 1
    },
    headingText: {
        fontWeight: "bold",
        fontSize: 30
    },
    normalText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    normalHeading: {
        fontWeight: "bold",
        fontSize: 25,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        padding: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        height: 350,
        width: 350,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 2,
        justifyContent: "space-around",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
})

export default AccountsScreen;