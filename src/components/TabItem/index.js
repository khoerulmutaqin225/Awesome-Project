import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {  WARNA_SEKUNDER, WARNA_WARNING } from '../../utils/constant'
import { IconDetail, IconDetailActive, IconHome, IconHomeActive, IconNews, IconNewsActive, IconStyle, IconStyleActive, IconVerify, IconVerifyActive } from '../../assets';
// import { IconDetail, IconHome, IconNews, IconStyle, IconVerify } 

const TabItem = ({ isFocused, onLongPress, onPress, label}) => {
    const Icon = () => {
        if (label === "News") return isFocused ? <IconNews/> : <IconNewsActive/>

        if (label === "Home") return isFocused ? <IconHome/> : <IconHomeActive/>

        if (label === "Detail") return isFocused ? <IconDetail/> : <IconDetailActive/>

        if (label === "Verify") return isFocused ? <IconVerify/> : <IconVerifyActive/>

        if (label === "Style") return isFocused ? <IconStyle/> : <IconStyleActive/>

        return <IconNews/>
    }
    return ( 
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon /> 
            <Text style={styles.text(isFocused)}>{label}</Text>
        </TouchableOpacity>
    );
};

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text:(isFocused) => ({
        fontSize: 13,
        color: isFocused ? WARNA_SEKUNDER : WARNA_WARNING,
        marginTop: 8
    })
});