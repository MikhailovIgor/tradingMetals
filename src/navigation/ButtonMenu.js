import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {BottomSheet} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Buy, 
    Sell,
    Fund,
    Withdraw,
    Redeem
  } from '../components/icons/buttonMenu';

const LIST = [
    {
        title: 'Buy',
        text: 'Buy gold, silver, platinum and palladium precious metals',
        icon: <Buy/>
    },
    { 
        title: 'Sell',
        text: 'Sell your gold, silver, platinum or palladium precious metals',
        icon: <Sell />
    },
    { 
        title: 'Fund',
        text: 'Deposit your funds',
        icon: <Fund />
    },
    { 
        title: 'Withdraw',
        text: 'Widthdraw your funds',
        icon: <Withdraw />
    },
    { 
        title: 'Redeem',
        text: 'Redeem your holdings for physical metals',
        icon: <Redeem />
    },
];

const Item = ({item, handlePress}) => {
    const imageSource = `../assets/images/ButtonMenu/${item.icon}`;

    return (
        <TouchableOpacity 
            onPress={() => handlePress(item.title)}
            style={styles.item}
        >
            <View style={styles.iconContainer}>
                {item.icon}
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.description}>
                    {item.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const renderItems = () => {
    const handlePress = item => {
        console.log(item);
    };

    return (
        LIST.map((item, index) => (
            <Item key={index} item={item} handlePress={handlePress} />
        ))
    );
};

const ButtonMenu = ({visible = false, close}) => {
    return (
        <BottomSheet
            isVisible={visible}
            containerStyle={styles.container}
            >
            <View style={styles.innerContainer}>
                <View style={styles.listContainer}>
                    {renderItems()}
                </View>
            
                <TouchableOpacity style={styles.closeBtn} onPress={() => close()}>
                    <Icon name="close" style={styles.closeIcon} size={30} />
                </TouchableOpacity>
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(105, 105, 105, 0.8)',
    },
    innerContainer: {
        alignItems: "center",
        marginBottom: 17
    },
    listContainer: {
        alignSelf: 'stretch',
        backgroundColor: "white",
        borderRadius: 14,
        padding: 20,
        marginHorizontal: 24,
        marginBottom: 16,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18
    },
    iconContainer: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 22,
        color: '#050F19',
        marginBottom: 2,
    },
    description: {
        fontSize: 11,
        lineHeight: 15,
        color: '#828282',
        flexWrap: "wrap",
    },
    closeBtn: {
        width: 52,
        height: 52,
        borderRadius: 40,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        // shadow
        shadowColor: "rgb(55, 105, 173)",
        shadowOpacity: 0.58,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 6,
        elevation: 1,
    },
    closeIcon: {
        color: "#2F80ED",
    }
  });

export default ButtonMenu;