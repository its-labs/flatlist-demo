import React, { Component } from 'react';
import {
    Platform, StyleSheet, I18nManager, Picker, AsyncStorage, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, Alert, TouchableHighlight, Button
} from 'react-native';
import { cssFlatListVeiw } from '../styles/css';
import { StackNavigator } from 'react-navigation';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import DatePicker from 'react-native-datepicker';
import I18n, { getLanguages } from 'react-native-i18n';

var myDatepicker = null;


export class Flatlist extends Component {

    constructor(props) {
        I18nManager.forceRTL(false)
        const json = [
            {
                bgImage: require('../img/Images/Home_Location1_640x348.jpg'),
                txtCredit: I18n.t('txtCreditCard'),
                txtFacilities: 'Facilities',
                txtTitle: 'Splash',
                facilitiesIconsSH: false,
                selectDuration: false,
                txtDescription: 'First Floor 4 Seats',
                txtSelectSartTime: 'Select Start Time',
                txtSelectDuration: 'Selet Duration',
                facilitiesIconsWifi: require('../img/Icons/wifi.png'),
                facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
                facilitiesIconsUsers: require('../img/Icons/users.png'),

            },
            {
                bgImage: require('../img/Images/learn_mobile.jpg'),
                txtCredit: I18n.t('txtCreditCard'),
                txtFacilities: 'Facilities',
                txtTitle: 'Splash',
                facilitiesIconsSH: false,
                selectDuration: false,
                txtDescription: 'First Floor 4 Seats',
                txtSelectSartTime: 'Select Start Time',
                txtSelectDuration: 'Selet Duration',
                facilitiesIconsWifi: require('../img/Icons/wifi.png'),
                facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
                facilitiesIconsUsers: require('../img/Icons/users.png')
            },
            {
                bgImage: require('../img/Images/our_community_mobile.jpg'),
                txtCredit: I18n.t('txtCreditCard'),
                txtFacilities: 'Facilities',
                facilitiesIconsSH: false,
                selectDuration: false,
                txtTitle: 'Splash',
                txtDescription: 'First Floor 4 Seats',
                txtSelectSartTime: 'Select Start Time',
                txtSelectDuration: 'Selet Duration',
                facilitiesIconsWifi: require('../img/Icons/wifi.png'),
                facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
                facilitiesIconsUsers: require('../img/Icons/users.png')
            },
            {
                bgImage: require('../img/Images/Home_Location1_640x348.jpg'),
                txtCredit: I18n.t('txtCreditCard'),
                txtFacilities: 'Facilities',
                txtTitle: 'Splash',
                facilitiesIconsSH: false,
                selectDuration: false,
                txtDescription: 'First Floor 4 Seats',
                txtSelectSartTime: 'Select Start Time',
                txtSelectDuration: 'Selet Duration',
                facilitiesIconsWifi: require('../img/Icons/wifi.png'),
                facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
                facilitiesIconsUsers: require('../img/Icons/users.png'),

            },
            {
                bgImage: require('../img/Images/learn_mobile.jpg'),
                txtCredit: I18n.t('txtCreditCard'),
                txtFacilities: 'Facilities',
                txtTitle: 'Splash',
                facilitiesIconsSH: false,
                selectDuration: false,
                txtDescription: 'First Floor 4 Seats',
                txtSelectSartTime: 'Select Start Time',
                txtSelectDuration: 'Selet Duration',
                facilitiesIconsWifi: require('../img/Icons/wifi.png'),
                facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
                facilitiesIconsUsers: require('../img/Icons/users.png')
            },
        ];
        super(props);
        this.state = {
            openClose: '+ ',
            data: json,
            todayTab: true,
            tomorrowTab: false,
            timesHours12: [],
            otherDateTab: false,
            selectedIndex: 0,
            segmentedTab: [I18n.t('txtToday'), I18n.t('txtTomorrow'), I18n.t('txtOtherDate')],
            date: '',
            todayTimeHours: [],
            durationtHours: [],
            busy: true,


        }
        this.updateTimeHours();
        this.updateCurrentTimeAndPassTimeDifference();

    }

    chooseLanguages = (user) => {
        var checkEnglish = "English";
        var checkChinese = "Chinese";
        var checkArabic = "Arabic";

        if (checkEnglish.indexOf(user) !== -1) {
            I18n.locale = 'en'
            I18nManager.forceRTL(false)
        }
        if (checkChinese.indexOf(user) !== -1) {
            I18n.locale = 'zh'
            I18nManager.forceRTL(false)
        }

        this.setState({ name: user });
    }

    updateTimeHours() {
        var quarterHours = ["00", "30"];
        for (var i = 0; i < 24; i++) {
            for (var j = 0; j < 2; j++) {
                var valuesTime = +i + ":" + quarterHours[j];
                this.state.todayTimeHours.push({ hours24: valuesTime, selectedList: false });
            }
        }
        console.log("Function Name: updateTimeHours" + "\n" + "Today TimeHours Vales : " + this.state.todayTimeHours.toString())
    }

    //Start Button onclick for Facilities.
    showHideViewFacilitiesIcons(getIndex) {
        var data = this.state.data;
        var openClose = this.state.openClose;
        var selectedObject = data[getIndex];
        selectedObject.facilitiesIconsSH = !selectedObject.facilitiesIconsSH
        data[getIndex] = selectedObject;
        this.setState({ data: data });
        openClose = true;
        if (selectedObject.facilitiesIconsSH == false) {
            this.setState({ openClose: "+ " });
        } else {
            this.setState({ openClose: "- " });
        }
        console.log("FacilitiesIconsSH State Values : " + this.state.data[getIndex].facilitiesIconsSH);
    }
    //Start onclick for SelectSartTime.
    timeSeletDuration(getIndex) {
        var style = cssFlatListVeiw.selectedList;
        var data = this.state.data;
        var selectedObject = data[getIndex];
        // facilitiesIconsSH set true using this ! Operators
        selectedObject.selectDuration = !selectedObject.selectDuration
        data[getIndex] = selectedObject;
        this.setState({ data: data });
    }


    //Start Update current time and Pervious.
    updateCurrentTimeAndPassTimeDifference() {

        var quarterHours = ["00", "30"];
        var quarterMinutes
        var today = new Date();
        let resultgetHours = today.getHours().toString();
        let resultMinutes = today.getMinutes().toString();
        let currentTime = resultgetHours + ":" + resultMinutes;
        var timeHours24 = this.state.todayTimeHours;


        var x = Math.floor("1000.01")
        var st =
            typeof x;
        //Start Current time and pervious difference for 24Hours.

        for (let i = 0; i < timeHours24.length; i++) {



            var dataTimeHours = this.state.todayTimeHours;
            var selectedObject = dataTimeHours[i];
            // facilitiesIconsSH set true using this ! Operators
            selectedObject.selectedList = true
            dataTimeHours[i] = selectedObject;
            this.setState({ todayTimeHours: dataTimeHours });
        }

        for (var i = resultgetHours; i < 24; i++) {
            for (var j = 0; j < 2; j++) {
                var valuesTime = +i + ":" + quarterHours[j];
                this.state.durationtHours.push({ hours12: valuesTime });
            }
        }
        console.log("Function Name: updateCurrentTimeAndPassTimeDifference" + "\n" + "Today TimeHours Vales :")
    }
    //End Current time and pervious difference for 24Hours.

    //Start calendar.
    setCalendar = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });

        switch (index) {
            case 0:
                this.setState({ todayTab: true, tomorrowTab: false, otherDateTab: false })
                break;
            case 1:
                this.setState({ todayTab: false, tomorrowTab: true, otherDateTab: false })
                break;
            case 2:
                this.setState({ todayTab: false, tomorrowTab: false })
                if (this.myDatepicker) {
                    this.myDatepicker.onPressDate();
                }
                break;
            default:
        }
    }
    //Start Selected Date for Calendar.
    updateSelectedDate(getDate) {
        this.setState({ date: getDate })
        var segmentedTab = this.state.segmentedTab;
        segmentedTab[2] = this.state.date;
        this.setState({ segmentedTab: segmentedTab })
    }
    render() {
        var css = cssFlatListVeiw;
        return (
            <View style={css.viewParent}>
                <View>
                    <Picker
                        style={css.btnPicker}
                        borderRadius={50}
                        selectedValue={this.state.name}
                        onValueChange={this.chooseLanguages}>
                        <Picker.Item label="English" value="English" />
                        <Picker.Item label="Arabic" value="Arabic" />
                        <Picker.Item label="Chinese" value="Chinese" />
                    </Picker>

                </View>
                {/* Start Tabs*/}
                <View style={css.ViewNavigationParent}>
                    <View style={css.navigationParent}>
                        <SegmentedControlTab
                            badge={5}
                            values={this.state.segmentedTab}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.setCalendar}
                            activeTabStyle={{ backgroundColor: '#424242' }}
                            activeTabTextStyle={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}
                            tabTextStyle={{ color: 'grey' }}
                            tabStyle={{ borderColor: 'grey', borderBottomColor: 'grey' }}
                            tabsContainerStyle={{ height: 30 }}
                        />
                    </View>
                </View>
                {/* Start todayTab viewParent  */}
                {
                    this.state.todayTab ?
                        <View style={css.imgParent}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.data}
                                extraData={this.state}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item, index }) =>
                                    <View style={css.imgParentTop}>
                                        <View style={css.imgViewTopParent}>
                                            <ImageBackground style={css.ImgS} source={item.bgImage}
                                                borderRadius={4}
                                            >
                                                <View style={css.imgBackgroundParent}
                                                    borderRadius={4}
                                                    borderColor='#cccccc'
                                                    borderBottomWidth={1}
                                                >
                                                    {/* Start Facilities Icons View this Wifi*/}
                                                    <View style={{ flex: 3 }}>
                                                        {/* Start Facilities Icons View Parent*/}
                                                        {
                                                            item.facilitiesIconsSH ?
                                                                < View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                                                                    <View style={css.iconwifiparrent}>
                                                                        <Image source={item.facilitiesIconsWifi} />
                                                                        <Text style={css.txtwifi}>{I18n.t('txtWifi')}</Text>
                                                                    </View>
                                                                    <View style={css.iconsMonitorParrent}>
                                                                        <Image style={css.iconsMonitor} source={item.facilitiesIconsMonitor} />
                                                                        <Text style={css.txtmonitor}>{I18n.t('txtMonitor')}</Text>
                                                                    </View>
                                                                    <View style={css.iconsUsersParrent}>
                                                                        <Image style={css.iconsUsers} source={item.facilitiesIconsUsers} />
                                                                        <Text style={css.txtusers}>{I18n.t('txtUsers')}</Text>
                                                                    </View>
                                                                </View> : null
                                                        }
                                                        {/* End Facilities Icons View Parent*/}
                                                    </View>
                                                    {/* End Facilities Icons View this Wifi*/}


                                                    {/* Start horizontal View Parent 2*/}
                                                    <View style={{ flex: 2 }}>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <View style={{ flex: 2, flexDirection: 'row', }}>
                                                                <View style={css.creditparent}>
                                                                    <Text style={css.txtcredit}>{I18n.t("txtCreditCard")}</Text>
                                                                </View>
                                                            </View>
                                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                                <View style={css.imgbtnParent}>
                                                                    <TouchableOpacity style={css.btnFacilities}
                                                                        onPress={() => { this.showHideViewFacilitiesIcons(index) }}
                                                                    >
                                                                        <Text style={css.txtFacilities}> {I18n.t('txtFacilities')}</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    {/* End horizontal View Parent 1*/}
                                                </View>

                                            </ImageBackground>

                                            {/* Strat Set Text this Title,Description and SelectSartTime*/}
                                            <View>
                                                <Text style={css.txtSplash} >{I18n.t("txtTitle")}</Text >
                                                <Text style={css.txtFirstFloor}>{I18n.t("txtDescription")} </Text>
                                                <Text style={css.txtSelectTime}>{I18n.t("txtSelectSartTime")}</Text>
                                            </View>
                                            {/* End Set Text this Title,Description and SelectSartTime*/}

                                            {/* Start horizontal View in Select start time */}

                                            <View>
                                                <FlatList
                                                    showsHorizontalScrollIndicator={false}
                                                    removeClippedSubviews={false}
                                                    extraData={this.state}
                                                    keyExtractor={(item, index) => index}
                                                    horizontal
                                                    data={this.state.todayTimeHours}
                                                    renderItem={({ item }) =>
                                                        <View >
                                                            <TouchableHighlight
                                                                style={!item.selectedList ? css.viewParentSelectStartTime : css.selectedList}
                                                                underlayColor={"rgba(153, 153, 153, 0.5)"}
                                                                disabled={!item.selectedList}
                                                                onPress={() => { this.timeSeletDuration(index) }}
                                                            >
                                                                <Text style={css.txtSelectSartTime} >{item.hours24}</Text>
                                                            </TouchableHighlight>
                                                        </View>
                                                    }
                                                />
                                            </View>

                                            {/* End horizontal View in Select start time */}


                                            {/* Start horizontal View in Select Selet Duration */}
                                            {
                                                item.selectDuration ?
                                                    <View>
                                                        <Text style={css.txtSelectTime}>{I18n.t("txtSelectDuration")}</Text>
                                                        <FlatList
                                                            showsHorizontalScrollIndicator={false}
                                                            removeClippedSubviews={false}
                                                            horizontal
                                                            extraData={this.state}
                                                            data={this.state.durationtHours}
                                                            keyExtractor={(item, index) => index}
                                                            renderItem={({ item }) =>
                                                                <View style={css.viewParentSelectDuration}>
                                                                    <View style={css.viewParentSelectDurationt}>
                                                                        <Text style={css.txtSelectSartTime} >{item.hours12} hr</Text>
                                                                    </View>
                                                                </View>
                                                            }
                                                        />
                                                    </View> : null
                                            }
                                            {/* End horizontal View in Select Selet Duration */}
                                        </View>
                                    </View>
                                }>

                            </FlatList>
                        </View> : null
                }
                {/* Start tomorrowTab viewParent  */}
                {
                    this.state.tomorrowTab ?
                        <View style={css.tomorrowParent}>
                            <Text>{I18n.t('txtTomorrow')}</Text>
                        </View> : null
                }
                {/* Start otherDateTab  view  */}
                {/* {
                    this.state.otherDateTab ?
                        <View style={{
                            flex: 1,
                            marginTop: 5,
                            borderBottomWidth: 1,
                            borderColor: '#d9d9d9',
                            backgroundColor: '#f2f2f2',
                            margin: 13
                        }}>

                            <Button
                                title={I18n.t('btnSelectDate')}
                                onPress={() => this.myDatepicker && this.myDatepicker.onPressDate()}
                            />

                        </View> : null
                } */}
                <DatePicker
               
                    date={this.state.date}
                    mode="date"
                    format="YYYY-MM-DD"
                    showIcon={false}
                    hideText={true}
                    ref={(datepicker) => this.myDatepicker = datepicker}
                    onDateChange={(date) => { this.updateSelectedDate(date) }}
                />
            </View >
        );
    }
}
//Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true
// Available languages Arabic
I18n.translations = {
    'en': require('../translations/en'),
    'zh': require('../translations/zh'),
    "ar": require('../translations/ar'),
};