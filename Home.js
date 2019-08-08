import React from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import { Button } from 'react-native-material-ui';


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName:'',
        };
    }

    render() {
        return (
            <SafeAreaView style={styleSheet.InputBox}>
                <View >
                    <TextInput
                        style={styleSheet.InputChild}
                        onChangeText={(text) => {
                            this.setState({ userName: text});
                        }}
                        placeholder={'User name...'}
                    />
                    <Button
                        style={styleSheet.InputChild}
                        raised primary text="Search" onPress={() => {
                        this.props.navigation.navigate('SearchResultScreen', { userName: this.state.userName } );
                    }}/>
                </View>
            </SafeAreaView>
        );
    }
}

const styleSheet = StyleSheet.create({
    InputBox:{
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputChild: {
        width: 300,
    },
});

export default Home;
