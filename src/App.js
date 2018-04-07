import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LoginSuccess from './components/LoginSuccess';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        Firebase.initializeApp(
            {
              apiKey: '',
              authDomain: '',
              databaseURL: '',
              projectId: '',
              storageBucket: '',
              messagingSenderId: ''
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
                return (<LoginSuccess />);
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
