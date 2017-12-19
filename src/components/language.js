import React, { Component } from 'react';
import {
    StyleSheet, Text, TextInput, View, FlatList, Image, TouchableOpacity,
    ImageBackground, Alert, TouchableHighlight, Button, I18nManager, Picker, AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { styleLanguage } from '../styles/language';
import imagesJsonLanguage from '../img/images';
import I18n, { getLanguages } from 'react-native-i18n';
const jsonLanguage = [
    {
        language: 'Chinese (Traditional)',
        languageSelected: false,
        languageSelectedImages: require('../img/Icons/tick-inside-circle.png')
    },
    {
        language: 'Spanish',
        languageSelected: false,
        languageSelectedImages: require('../img/Icons/tick-inside-circle.png')
    },
    {
        language: 'English',
        languageSelected: false,
        languageSelectedImages: require('../img/Icons/tick-inside-circle.png')
    },
    {
        language: 'Hindi',
        languageSelected: false,
        languageSelectedImages: require('../img/Icons/tick-inside-circle.png')
    },
    {
        language: 'Arabic',
        languageSelected: false,
        languageSelectedImages: require('../img/Icons/tick-inside-circle.png')
    }
]

export class Language extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateList: jsonLanguage,
            name: 'English'
        }
    }

    componentDidMount() {

        AsyncStorage.getItem("name").then((value) => {
            if (value != null) {
                this.setState({ "name": value });
            }
        }).done();

    }


    //   AsyncStorage for language
    setName = (value) => {
        AsyncStorage.setItem('name', value);
    }
    //   AsyncStorage for language

    updateUser = (user) => {
        if (this.state.name == 'Chinese') {
            I18n.locale = 'en'
        } else {
            I18n.locale = 'zh'
        }
        this.setName(user);
        this.setState({ name: user });
    }


    static navigationOptions = {
        title: 'Choose Language',
        headerStyle: { backgroundColor: '#333333' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: '#FFFFFF'
    }

    chooseLanguage(getItem, getIndex) {
        var getDateList = this.state.dateList;
        var selectedLanguage = getDateList[getIndex];
        selectedLanguage.languageSelected = !selectedLanguage.languageSelected
        getDateList[getIndex] = selectedLanguage;
        this.setState({ dateList: getDateList });
    }

    render() {
        var css = styleLanguage;

        return (
            <View style={css.viewParentLanguage}>
                <View style={css.viewParentSearch}>
                </View>
                <View>
                    <Picker
                        selectedValue={this.state.name}
                        onValueChange={this.updateUser}>
                        <Picker.Item label="English" value="English" />
                        <Picker.Item label="Chinese" value="Chinese" />
                    </Picker>
                    <Text style={styles.text}>{this.state.user}</Text>
                    {/* <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.dateList}
                        extraData={this.state}
                        onPressItem={this._onPressItem}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity onPress={() => this.chooseLanguage(item.language, index)}>
                                <View style={css.viewParentFlatList}>
                                    <View style={css.txtParentFlatList}>
                                        <Text>{item.language}</Text>
                                    </View>
                                    <View style={css.imgParentFlatList}>
                                        {
                                            item.languageSelected ?
                                                <Image source={item.languageSelectedImages} ></Image> : null
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }>
                    </FlatList> */}
                </View>
                <View style={css.btnSave}>
                    <Button
                        color="#212121"
                        title="Save"
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                    />
                    <Text> {I18n.t('chooseLanguage')}</Text>
                </View>
            </View>
        )
    }
}

//Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`

I18n.fallbacks = true

// Available languages
I18n.translations = {
    'en': require('../translations/en'),
    'zh': require('../translations/zh'),
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
})