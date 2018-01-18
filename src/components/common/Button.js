import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = function (props) {
    return (
            <TouchableOpacity onPress={props.buttonPressFunction} style={styles.button}>
                <Text style={styles.buttonText}>
                {props.children}
                </Text>
            </TouchableOpacity>
    );
};

const styles = {
    button: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#007aff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'column'
    },
    buttonText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button };
