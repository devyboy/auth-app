import React, { Component } from 'react';
import Firebase from 'firebase';
import { View } from 'react-native';
import { Header, CardSection, Button } from './common';

class LoginSuccess extends Component {
	render() {
		return (
		   <View>
                        <Header
                            headerText="Log out"
                            style={{ paddingBottom: 30 }}
                        />
                        <CardSection>
                            <Button
                                buttonPressFunction={() => Firebase.auth().signOut()}
                            >
                                Log Out
                            </Button>
                        </CardSection>
                   </View>	
		);
	}
}

export default LoginSuccess;