import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default class App extends React.Component {
    state = {
        wordInput: ''
    };

    onChangeTextHandler = (val) => {
        this.setState({
            wordInput: val
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Enter a word you want to memorize"
                        onChangeText={this.onChangeTextHandler}
                        value={this.state.wordInput}
                        style={{
                            flex: 4
                        }}/>
                    <Button
                        title="Add"
                        onPress={() => {
                        }}
                        style={{
                            flex: 1
                        }}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 40
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20
    }
});
