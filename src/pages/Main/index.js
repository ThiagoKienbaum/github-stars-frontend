import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Container, SignInForm, SubmitButton } from './styles';
import api from '../../services/api';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signIn: {
                email: '',
                password: '',
            },
            user: [],
        };
    }

    handleInputChange = event => {
        const { value } = event.target;
        const formName = event.target.getAttribute('form-name');
        const formField = event.target.getAttribute('form-field');
        const currentState = { ...this.state[formName] };
        currentState[formField] = value;

        this.setState({
            [formName]: currentState
        });
    }

    signInHandleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state.signIn;
        const { user } = this.state;

        const response = await api.post('/sessions', {
            email,
            password
        })

        // thiago.kienbaum1@hotmail.com
        const data = {
            id: response.data.user.id,
            name: response.data.user.name,
            githubId: response.data.user.github_id,
            email: response.data.user.email,
            token: response.data.token,
        }

        this.setState({
            user: [...user, data],
        });
    }

    render() {
        const { signIn } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithub />
                    GitHub Stars
                </h1>

                <SignInForm onSubmit={this.signInHandleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        form-name="signIn"
                        form-field="email"
                        value={signIn.email}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        form-name="signIn"
                        form-field="password"
                        value={signIn.password}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton>
                        Sign in
                    </SubmitButton>
                </SignInForm>
            </Container>
      );
    }
}


