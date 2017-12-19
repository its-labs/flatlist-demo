import React, { Component } from 'react';
import { cssHome } from '../styles/css';
import { List } from '../components/list';
import { Flatlist } from '../components/flatlist';
import I18n, { getLanguages } from 'react-native-i18n';
import {
    Platform,
    StyleSheet,
    Text, Picker,
    View,
    Image, Button, Alert, I18nManager, AsyncStorage
} from 'react-native';
import { Language } from '../components/language';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import { StackNavigator } from 'react-navigation';

const slideAnimation = new SlideAnimation({
    slideFrom: 'top',
});

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateList: ['Chinese(Traditional)', 'Spanish', 'English', 'Hindi', "Arabic"]
        }

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
        title: 'BOOK A ROOM',
        headerStyle: { backgroundColor: '#212121' },
        headerTitleStyle: { color: 'white' },
        headerRight: <Image source={require('../img/Icons/funnel.png')}
            style={{ width: 20, marginRigtht: 10 }} />
    }

    render() {
        var css = cssHome;
        return (
            <View style={css.viewParent}>
                <View style={css.btnViewParent}>
                    {/* <Button
                        color="#212121"
                        title="Change Language"
                        onPress={() => this.props.navigation.navigate('Language')}
                    /> */}
                    <Picker
                        style={css.btnPicker}
                        borderRadius={50}
                        selectedValue={this.state.name}
                        onValueChange={this.updateUser}>
                        <Picker.Item label="English" value="English" />
                        <Picker.Item label="Chinese" value="Chinese" />
                    </Picker>
                </View>
                <Text> {I18n.t('chooseLanguage')}</Text>
                <Flatlist />
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
export const Home = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    Language: { screen: Language }
});
