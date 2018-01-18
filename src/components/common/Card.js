import React from 'react';
import { View } from 'react-native';

const Card = function (props) {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 25,
        width: 300,
    }
};

export { Card };
