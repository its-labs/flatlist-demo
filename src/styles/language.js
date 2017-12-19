import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


//Start The Css for language.
export const styleLanguage = StyleSheet.create({
    viewParentLanguage: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    btnSave:{
        margin:30
    },
    viewParentFlatList: {
        height: 40,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: "#000",
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
    },
    viewParentSearch: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 5,
    },
    txtParentFlatList: {
        flex: 5,
    },
    imgParentFlatList: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})
//End The Css for language.
