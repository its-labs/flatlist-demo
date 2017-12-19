import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


//Start The Css for List.
export const cssFlatListVeiw = StyleSheet.create({
  viewParent: {
    flex: 1,
  },
  ViewNavigationParent: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  navigationParent: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 45,
    marginRight: 45,
    marginTop: 10,
    marginBottom: 10,
  },
  imgParent: {
    flex: 1,
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: '#d9d9d9',
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgViewTopParent: {
    margin: 13,
  },
  imgParentTop: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#d9d9d9',
    marginBottom: 10,
    backgroundColor: '#FFFFFF'
  },
  ImgS: {
    flex: 1,
    height: 180,
    backgroundColor: 'transparent',

  },
  imgbtnParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10
  },
  imginsideParent: {
    margin: 17
  },
  imgBackgroundParent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: 'column'
  },
  imgtxtinside: {
    marginLeft: 10
  },
  //Start Facilities
  txtFacilities: {
    color: 'rgba(225, 225, 225, 1.9)',
    fontSize: 15,
    textAlign: 'center'
  },
  btnFacilities: {
    width: 80,
    height: 35,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Start Icons View
  // Icons Parrent 
  iconsMonitorParrent: {
    marginLeft: 10,

  },
  iconsUsersParrent: {
    marginLeft: 10,

  },
  iconwifiparrent: {
    marginLeft: 10
  },
  //Icons 
  iconsUsers: {
    marginLeft: 5
  },
  iconswifi: {
  },
  iconsMonitor: {
    marginLeft: 10
  },
  txtusers: {
    marginLeft: 4,
    fontSize: 11,
    color: '#FFFFFF',
  },
  txtmonitor: {
    fontSize: 11,
    marginLeft: 4,
    color: '#FFFFFF',
  },
  txtwifi: {
    fontSize: 11,
    marginLeft: 4,
    color: '#FFFFFF',
  },
  creditparent: {
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  txtcredit: {
    marginTop: 38,
    color: 'rgba(225, 225, 225, 1)',
    fontSize: 15,
  },
  //Text 
  // Start Icons View Parent

  //Start SelectSartTime
  txtSplash: {
    color: '#1a1a1a',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold'
  },
  txtFirstFloor: {
    color: '#4d4d4d',
    fontSize: 13,
    fontWeight: 'bold'
  },
  txtSelectTime: {
    color: '#a6a6a6',
    fontSize: 10,
    marginTop: 5
  },
  viewParentSelectStartTime: {
    width: 65,
    height: 35,
    margin: 3,
    borderWidth: 1,
    marginTop: 10,
    borderColor: "rgba(153, 153, 153, 0.2)",
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(153, 153, 153, 0.2)',
  },
  viewParentSelectStart: {
    margin: 3
  },
  txtSelectSartTime: {
    color: '#a6a6a6',
    fontSize: 14
  },
  selectedList: {
    width: 65,
    height: 35,
    margin: 3,
    borderWidth: 1,
    marginTop: 10,
    borderColor: "#bfbfbf",
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewParentSelectDurationt: {
    width: 80,
    height: 35,
    borderWidth: 1,
    marginTop: 10,
    borderColor: "#bfbfbf",
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnChooseLanguage:{
    marginTop:50
  },
  viewParentSelectDuration: {
    margin: 2
  },
  //End SelectSartTime
  // Start tomorrow View
  tomorrowParent: {
    flex: 1,
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: '#d9d9d9',
    backgroundColor: '#f2f2f2'
  },
  btnPicker:{
    backgroundColor: '#595959',
    borderRadius: 3,
    borderWidth: 1,
    color:'#FFF'
  }
})

//Start The Css for Home.
export const cssHome = StyleSheet.create({
  viewParent: {
    flex: 1,
    paddingTop: 2
  },
  item: {
    width: 120,
    height: 120
  },
  btnViewParent:{
    margin:5
  },
  btnPicker:{
    backgroundColor: '#212121',
    borderRadius: 3,
    borderWidth: 1,
    color:'#FFF'
  }
})
//End The Css for Home.