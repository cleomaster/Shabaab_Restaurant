import { View, Text, StyleSheet, TextInput, Modal, Pressable } from 'react-native';
import colors from './../components/colors';
import Button from './../components/Button';
import React, { useState } from "react";


function ReserveScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);

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
            <Text style={styles.normalText}>Reservation Successful</Text>
          </View>
            <View>
            <Text>Thank you for your reservation</Text>
            <Text>Confirmation sent to your email</Text>
            </View>
            <View style={{alignItems: "center"}}>
            <Text>8.00pm, 9:00pm</Text>
            <Text>1st January, 2023</Text>
            <Text>4 Guests</Text>
            </View>
            <View>
            <Button title="Done"  onPress={() => setModalVisible(!modalVisible)} color={colors.yellow} style={{borderRadius: 10, width: 250}} />
            </View>
          </View>
        </View>
      </Modal>
        <Text style={styles.headingText}>Reserve a table</Text>
        <View style={styles.form}>
        <Text style={styles.normalText}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Nabil Rashid" />
        </View>
        <View style={styles.form}>
        <Text style={styles.normalText}>Contact Number</Text>
        <TextInput style={styles.input} placeholder="Nabil Rashid" />
        </View>
        <View style={styles.form}>
        <Text style={styles.normalText}>Select Restaurant</Text>
        <TextInput style={styles.input} placeholder="Your Restaurant" />
        </View>
        <View style={styles.formMini}>
        <View>
        <Text style={styles.normalText}>Day</Text>
        <TextInput style={[styles.input, {width: 150}]} placeholder="Day" />
        </View>
        <View>
        <Text style={styles.normalText}>Month</Text>
        <TextInput style={[styles.input, {width: 160}]} placeholder="Month" />
        </View>
        </View>
        <View style={styles.formMini}>
        <View>
        <Text style={styles.normalText}>Time</Text>
        <TextInput style={[styles.input, {width: 150}]} placeholder="Time" />
        </View>
        <View>
        <Text style={styles.normalText}>Guests</Text>
        <TextInput style={[styles.input, {width: 160}]} placeholder="Guests" />
        </View>
        </View>
        <Button  onPress={() => setModalVisible(true)} title="Reserve" color={colors.yellow} style={{marginTop: 40, borderRadius: 15}} />
       </View>
    );
}

const styles = StyleSheet.create({
    formMini: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    main: {
        marginTop: 40,
        marginHorizontal: 20,
        flex: 1
    },
    headingText: {
        fontWeight: "bold",
        fontSize: 30
    },
    form: {
        marginTop: 20,
    },
    normalText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    input: {
        marginTop: 10,
        borderWidth: 2,
        height: 50,
        padding: 10,
        borderRadius: 10,
        fontSize: 15,
        color: colors.grey,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        height: 300,
        width: 300,
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

export default ReserveScreen;