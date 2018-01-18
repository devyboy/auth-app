import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = function (props) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{props.children}</Text>
            <TextInput
                secureTextEntry={props.password}
                autoCorrect={false}
                autoCapitalize={'none'}
                value={props.textValue}
                onChangeText={props.textChange}
                style={styles.input}
                placeholder={props.placeholder}

            />
        </View>
    );
};

const styles = {
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 6,
        fontSize: 16,
        lineHeight: 23,
        flex: 2
    },
    inputLabel: {
        fontSize: 18,
        paddingLeft: 10,
        flex: 1
    },
    inputContainer: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
};

export { Input };
