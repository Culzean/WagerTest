import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { ListItem, Subheader } from 'react-native-material-ui';

const SearchResultScreen = (props) => {
    const { userName } = props.navigation.state.params;
    const title = `Top Respositories for ${userName}`;
    const [state, setState] = useState({ repos:[], title });

    async function fetchData(url) {
        const obj = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
              },
        };
        const response = await fetch(url, obj);

        if (response.error || !response.ok) {

            console.warn('Could not fetch results for user ' + userName);
            setState({title: `Could not fetch repos for user ${userName}`});
            return;
        }

        let responseJson = await response.json();

        responseJson = responseJson
                        .sort((repoA, repoB) => repoB.stargazers_count - repoA.stargazers_count)
                        .slice(0, 10);

        setState({ repos:responseJson });
    }

    useEffect(() => {
        fetchData(`https://api.github.com/users/${userName}/repos`);
    }, []);

    const renderItem = ({item}) => {
        const countString = `Stars: ${item.stargazers_count} Forks: ${item.forks}`;
        return (
            <ListItem
            divider
            numberOfLines={2}
            dense
            centerElement={{
                primaryText: item.name,
                secondaryText: countString,
                tertiaryText: item.language,
            }}
            onPress={() => {}}
            />
        );
    };

    const keyExtractor = (item, index) => item.id;

    return (
        <SafeAreaView>

            <FlatList
                ListHeaderComponent = {
                    <Subheader text={state.title} />
                }
                data = {state.repos}
                extraData = {state}
                renderItem= {renderItem}
                keyExtractor={keyExtractor}
            />
        </SafeAreaView>
    );
};

export default SearchResultScreen;
