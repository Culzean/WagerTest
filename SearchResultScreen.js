import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-material-ui';

const [repos, setState] = useState({ repos:[] });

const SearchResultScreen = (props) => {
    const { userName } = props.navigation.state.params;
    
    return (
        <SafeAreaView>
            <Text>
                Successful Repositories
            </Text>
        </SafeAreaView>
    );
}

export default SearchResultScreen;