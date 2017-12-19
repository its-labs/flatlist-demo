import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, Alert, TouchableHighlight, Button
} from 'react-native';
import { cssFlatListVeiw } from '../styles/css';
import { StackNavigator } from 'react-navigation';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import DatePicker from 'react-native-datepicker';

const json = [
    {
        Images: require('../img/Images/Home_Location1_640x348.jpg'),
        txtCredit: '5 Credit/half hour',
        txtFacilities: 'Facilities',
        txtTitle: 'Splash',
        facilitiesIconsSH: false,
        selectDuration: false,
        txtDescription: 'First Floor 4 Seats',
        txtSelectSartTime: 'Select Sart Time',
        txtSeletDuration: 'Selet Duration',
        facilitiesIconsWifi: require('../img/Icons/wifi.png'),
        facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
        facilitiesIconsUsers: require('../img/Icons/users.png'),

    },
    {
        Images: require('../img/Images/learn_mobile.jpg'),
        txtCredit: '5 Credit/half hour',
        txtFacilities: 'Facilities',
        txtTitle: 'Splash',
        facilitiesIconsSH: false,
        selectDuration: false,
        txtDescription: 'First Floor 4 Seats',
        txtSelectSartTime: 'Select Sart Time',
        txtSeletDuration: 'Selet Duration',
        facilitiesIconsWifi: require('../img/Icons/wifi.png'),
        facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
        facilitiesIconsUsers: require('../img/Icons/users.png')
    },
    {
        Images: require('../img/Images/our_community_mobile.jpg'),
        txtCredit: '5 Credit/half hour',
        txtFacilities: 'Facilities',
        facilitiesIconsSH: false,
        selectDuration: false,
        txtTitle: 'Splash',
        txtDescription: 'First Floor 4 Seats',
        txtSelectSartTime: 'Select Sart Time',
        txtSeletDuration: 'Selet Duration',
        facilitiesIconsWifi: require('../img/Icons/wifi.png'),
        facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
        facilitiesIconsUsers: require('../img/Icons/users.png')
    },
    {
        Images: require('../img/Images/Home_Location1_640x348.jpg'),
        txtCredit: '5 Credit/half hour',
        txtFacilities: 'Facilities',
        txtTitle: 'Splash',
        facilitiesIconsSH: false,
        selectDuration: false,
        txtDescription: 'First Floor 4 Seats',
        txtSelectSartTime: 'Select Sart Time',
        txtSeletDuration: 'Selet Duration',
        facilitiesIconsWifi: require('../img/Icons/wifi.png'),
        facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
        facilitiesIconsUsers: require('../img/Icons/users.png'),

    },
    {
        Images: require('../img/Images/learn_mobile.jpg'),
        txtCredit: '5 Credit/half hour',
        txtFacilities: 'Facilities',
        txtTitle: 'Splash',
        facilitiesIconsSH: false,
        selectDuration: false,
        txtDescription: 'First Floor 4 Seats',
        txtSelectSartTime: 'Select Sart Time',
        txtSeletDuration: 'Selet Duration',
        facilitiesIconsWifi: require('../img/Icons/wifi.png'),
        facilitiesIconsMonitor: require('../img/Icons/monitor.png'),
        facilitiesIconsUsers: require('../img/Icons/users.png')
    },
];

const timesHours24 = [
    { hours24: '00:00', selectedList: false }, { hours24: '00:30', selectedList: false },
    { hours24: '01:00', selectedList: false }, { hours24: '01.30', selectedList: false },
    { hours24: '02.00', selectedList: false }, { hours24: '2:30', selectedList: false },
    { hours24: '03:00', selectedList: false }, { hours24: '03:30', selectedList: false },
    { hours24: '04:00', selectedList: false }, { hours24: '04:30', selectedList: false },
    { hours24: '05:00', selectedList: false }, { hours24: '05:30', selectedList: false },
    { hours24: '06:00', selectedList: false }, { hours24: '06:30', selectedList: false },
    { hours24: '07:00', selectedList: false }, { hours24: '07:30', selectedList: false },
    { hours24: '08:00', selectedList: false }, { hours24: '08:30', selectedList: false },
    { hours24: '09:00', selectedList: false }, { hours24: '09:30', selectedList: false },
    { hours24: '10:00', selectedList: false }, { hours24: '10:30', selectedList: false },
    { hours24: '11:00', selectedList: false }, { hours24: '11:30', selectedList: false },
    { hours24: '12:00', selectedList: false }, { hours24: '12:30', selectedList: false },

    { hours24: '13:00', selectedList: false }, { hours24: '13.30', selectedList: false },
    { hours24: '14.00', selectedList: false }, { hours24: '14:30', selectedList: false },
    { hours24: '15:00', selectedList: false }, { hours24: '15:30', selectedList: false },
    { hours24: '16:00', selectedList: false }, { hours24: '16:30', selectedList: false },
    { hours24: '17:00', selectedList: false }, { hours24: '17:30', selectedList: false },
    { hours24: '18:00', selectedList: false }, { hours24: '18:30', selectedList: false },
    { hours24: '19:00', selectedList: false }, { hours24: '19:30', selectedList: false },
    { hours24: '20:00', selectedList: false }, { hours24: '20:30', selectedList: false },
    { hours24: '21:00', selectedList: false }, { hours24: '21:30', selectedList: false },
    { hours24: '22:00', selectedList: false }, { hours24: '22:30', selectedList: false },
    { hours24: '23:00', selectedList: false }, { hours24: '23:30', selectedList: false }

]


export class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openClose: '+',
            data: json,
            toDay: true,
            tomorrow: false,
            timeHours24: timesHours24,
            timesHours12: [],
            otherDate: false,
            selectedIndex: 0,
            segmentedTab: ['Today', 'Tomorrow', 'Other date'],
            date: '',
            todayTimeHours: []
        }

    }

    componentDidMount() {
        this.upDateCurrentTimes();
        // this.checkTime();
    }

    checkTime() {
        var quarterHours = ["00", "30"];
        for (var i = 0; i < 24; i++) {
            for (var j = 0; j < 2; j++) {
                var valuesTime = +i + ":" + quarterHours[j];
                this.state.todayTimeHours.push({ hours: valuesTime, selectedList: false });
            }
        }
        console.log(this.state.todayTimeHours)

        // var timeArrays = [],
        //     d = new Date(),
        //     h = d.getHours(),
        //     m = d.getMinutes(),
        //     meridiem = ['AM', 'PM'];
        // for (var i = h; i < 24; ++i) {
        //     for (var j = i == h ? Math.ceil(m / 15) : 0; j < 2; ++j) {
        //         todayTimeHours.push(i % 12 + ':' + (j * 30 || '00') + ' ' + meridiem[i / 12 | 0]);


        //     }
        // }


    }



    //Start Button onclick for Facilities.
    showHideViewFacilitiesIcons(getIndex) {
        var data = this.state.data;
        var selectedObject = data[getIndex];
        selectedObject.facilitiesIconsSH = !selectedObject.facilitiesIconsSH
        data[getIndex] = selectedObject;
        this.setState({ data: data });

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
    upDateCurrentTimes() {

        var today = new Date();

        let resultgetHours = today.getHours().toString();
        let resultMinutes = today.getMinutes().toString();
        let currentTime = resultgetHours + ":" + resultMinutes;
        var timeHours24 = this.state.timeHours24;

        //Start Current time and pervious difference for 24Hours.
        for (let i = 0; i < timeHours24.length; i++) {

            const element = timeHours24[i].hours24;
            console.log("upDateCurrentTime : " + element)


            if (element.indexOf(resultgetHours) !== -1) {
                var setMinutes = "30";
                var getIndex = i;

                if (element.indexOf(resultgetHours) !== -1 && setMinutes.indexOf(resultMinutes) !== -1) {

                    getIndex = i;

                }

                for (getIndex; getIndex < timeHours24.length; getIndex++) {

                    var dataTimeHours = this.state.timeHours24;
                    var selectedObject = dataTimeHours[getIndex];
                    // facilitiesIconsSH set true using this ! Operators
                    selectedObject.selectedList = true
                    dataTimeHours[getIndex] = selectedObject;
                    this.setState({ timeHours24: dataTimeHours });
                }
            }

        }
        //End Current time and pervious difference for 24Hours.

        //Start Current time for 12Hours.
        let currentDate = new Date();
        let listDate = new Date();
        let temp = currentDate;
        listDate.setDate(currentDate.getDate() + 1);
        while (temp.getDate() < listDate.getDate()) {
            this.state.timesHours12.push({ key: temp.getHours() + ":00" });
            temp.setMinutes(0);
            temp.setHours(temp.getHours() + 1);
        }

        //End Current time for 12Hours.

    }


    //Start calendar.
    setCalendar = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,

        });

        switch (index) {
            case 0:
                this.setState({ toDay: true })
                this.setState({ otherDate: false })
                this.setState({ tomorrow: false })
                break;

            case 1:
                this.setState({ toDay: false })
                this.setState({ tomorrow: true })
                this.setState({ otherDate: false })
                break;
            case 2:
                this.setState({ toDay: false })
                this.setState({ tomorrow: false })
                this.setState({ otherDate: true })
                break;

            default:
        }

    }
    //Start Selected Date for Calendar.
    upDateSelected(getDate) {
        this.setState({ date: getDate })
        var segmentedTab = this.state.segmentedTab;
        segmentedTab[2] = this.state.date;
        this.setState({ segmentedTab: segmentedTab })
    }

    render() {
        var css = cssFlatListVeiw;
        return (
            <View style={css.viewParent}>
                {/* Start Tabs*/}
                <View style={css.ViewNavigationParent}>
                    <View style={css.navigationParent}>
                        <SegmentedControlTab
                            badge={5}
                            values={this.state.segmentedTab}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.setCalendar}
                            onPress={() => this.myDatepicker && this.myDatepicker.onPressDate()}
                            activeTabStyle={{ backgroundColor: '#424242' }}
                            activeTabTextStyle={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}
                            tabTextStyle={{ color: 'grey' }}
                            tabStyle={{ borderColor: 'grey', borderBottomColor: 'grey' }}
                            tabsContainerStyle={{ height: 30 }}
                        />
                    </View>
                </View>
                {/* Start toDay viewParent  */}
                {
                    this.state.toDay ?
                        <View style={css.imgParent}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.data}
                                extraData={this.state}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item, index }) =>
                                    <View style={css.imgParentTop}>
                                        <View style={css.imgViewTopParent}>
                                            <ImageBackground style={css.ImgS} source={item.Images}
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
                                                                    <Text style={css.txtcredit}>{item.txtCredit}</Text>
                                                                </View>
                                                            </View>
                                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                                <View style={css.imgbtnParent}>
                                                                    <TouchableOpacity style={css.btnFacilities}
                                                                        onPress={() => { this.showHideViewFacilitiesIcons(index) }}
                                                                    >
                                                                        <Text style={css.txtFacilities}>{this.state.openClose}{item.txtFacilities}</Text>
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
                                                <Text style={css.txtSplash} >{item.txtTitle}</Text >
                                                <Text style={css.txtFirstFloor}>{item.txtDescription}</Text>
                                                <Text style={css.txtSelectTime}>{item.txtSelectSartTime}</Text>
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
                                                    data={this.state.timeHours24}
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
                                                        <Text style={css.txtSelectTime}>Select duration</Text>
                                                        <FlatList
                                                            showsHorizontalScrollIndicator={false}
                                                            removeClippedSubviews={false}
                                                            horizontal
                                                            extraData={this.state}
                                                            data={this.state.timesHours12}
                                                            keyExtractor={(item, index) => index}
                                                            renderItem={({ item }) =>
                                                                <View style={css.viewParentSelectDuration}>
                                                                    <View style={css.viewParentSelectDurationt}>
                                                                        <Text style={css.txtSelectSartTime} >{item.key} hr</Text>
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
                {/* Start tomorrow viewParent  */}
                {
                    this.state.tomorrow ?
                        <View style={css.tomorrowParent}>
                            <Text>Tomorrow</Text>
                        </View> : null
                }
                {/* Start calendar view  */}
                {
                    this.state.otherDate ?
                        <View style={{
                            flex: 1,
                            marginTop: 5,
                            borderBottomWidth: 1,
                            borderColor: '#d9d9d9',
                            backgroundColor: '#f2f2f2',
                            margin: 13
                        }}>
                            <DatePicker
                                date={this.state.date}
                                mode="date"
                                format="YYYY-MM-DD"
                                showIcon={false}
                                hideText={true}
                                ref={(datepicker) => this.myDatepicker = datepicker}
                                onDateChange={(date) => { this.upDateSelected(date) }}
                            />
                            <Button
                                title="Select Date"
                                onPress={() => this.myDatepicker && this.myDatepicker.onPressDate()}
                            />

                         
                        </View> : null
                }
            </View >
        );
    }
}