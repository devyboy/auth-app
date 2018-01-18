import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        Firebase.initializeApp(
            {
                apiKey: 'AIzaSyBuZO_SkuCWaJRRQjM6gAdcT_k0sBZTbE4',
                authDomain: 'authentication-9f56a.firebaseapp.com',
                databaseURL: 'https://authentication-9f56a.firebaseio.com',
                projectId: 'authentication-9f56a',
                storageBucket: 'authentication-9f56a.appspot.com',
                messagingSenderId: '617305950416'
            });
        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View>
                        <Header headerText="Log out" />
                        <CardSection>
                            <Button
                                buttonPressFunction={() => Firebase.auth().signOut()}
                            >
                                Log Out
                            </Button>
                        </CardSection>
                    </View>
                );
            case false:
                return (
                    <View>
                        <Header headerText="Login or Register" />
                        <LoginForm />
                    </View>

                );
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            this.renderContent()
        );
    }
}


export default App;
