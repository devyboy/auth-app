import React, { Component } from 'react';
import Firebase from 'firebase';
import { Text, Alert } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', loading: false };

    authenticationSuccess() {
        this.setState({
            loading: false

        });

        Alert.alert(
          'Success',
          'Authentication succeeded.',
          [
            { text: 'OK', onPress: () => this.setState({ loading: false }) },
          ],
          { cancelable: false }
        );
    }

    accountCreated() {
        this.setState({
            loading: false

        });
        Alert.alert(
          'Success',
          'Account created, please log in again with the same credentials.',
          [
            { text: 'OK', onPress: () => this.setState({ loading: false }) },
          ],
          { cancelable: false }
      );
    }

    authenticationError() {
        this.setState({ loading: false });

        Alert.alert(
          'Error',
          'Authentication failed.',
          [
            { text: 'OK', onPress: () => this.setState({ loading: false }) },
          ],
          { cancelable: false }
      );
    }

    loginFunction() {
        this.setState({ loading: true });

        Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.authenticationSuccess.bind(this))
            .catch((err) => {
                console.log(err);
                Firebase.auth().createUserWithEmailAndPassword(this.state.email,
                this.state.password)
                    .then(this.accountCreated.bind(this))
                    .catch(
                        this.authenticationError.bind(this)
                    );
        });
    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }

        return (

            <Button
                buttonPressFunction={this.loginFunction.bind(this)}
            >
                Log in/Register
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        textChange={text => this.setState({ email: text })}
                    >
                        Email
                    </Input>
                </CardSection>

                <CardSection>
                    <Input
                        password
                        placeholder="password"
                        textValue={this.state.password}
                        textChange={text => this.setState({ password: text })}
                    >
                        Password
                    </Input>
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <CardSection>
                    <Text style={{ fontSize: 12 }}>
                        Note: If you attempt to log in with credentials that
                        are not registered; an account will be made using them.
                    </Text>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
