import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-material-ui';


class Home extends React.Component {
    
    render() {
        return (
            <SafeAreaView>
                <Button raised primary text="Search" onPress={() => {
                    this.props.navigation.navigate('SearchResultScreen')
                }}>
                </Button>
            </SafeAreaView>
        );
    }
}

export default Home;