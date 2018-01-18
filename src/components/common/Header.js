import React from 'react';
import { Text, View } from 'react-native';

const Header = function (props) {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        elevation: 5,
        position: 'relative',
        marginBottom: 20
    }
};

export { Header };
