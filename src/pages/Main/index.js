import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Container, Header, SignInForm, SignUpForm, SubmitButton } from './styles';
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
            signUp: {
               name: '' ,
               githubId: '',
               email: '',
               password: '',
               confirmPassword: '',
            }
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

    signUpHandleSubmit = async event => {
        event.preventDefault();

        const { name, githubId, email, password, confirmPassword } = this.state.signUp;
        const { user } = this.state;

        const response = await api.post('/users', {
            name,
            github_id: githubId,
            email,
            password,
            confirmPassword
        })

        const data = {
            id: response.data.id,
            name: response.data.name,
            githubId: response.data.github_id,
            email: response.data.email,
            starredRepositories: response.data.starredRepositories,
        }

        this.setState({
            user: [...user, data],
        });
    }

    render() {
        const { signIn, signUp } = this.state;

        return (
            <Container>
                <Header>
                    <FaGithub />
                    GitHub Stars
                </Header>

                <SignInForm onSubmit={this.signInHandleSubmit}>
                    <h2>Sign In</h2>
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

                <SignUpForm onSubmit={this.signUpHandleSubmit}>
                    <h2>Sign Up</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        form-name="signUp"
                        form-field="name"
                        value={signUp.name}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="GitHub ID"
                        form-name="signUp"
                        form-field="githubId"
                        value={signUp.githubId}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        form-name="signUp"
                        form-field="email"
                        value={signUp.email}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        form-name="signUp"
                        form-field="password"
                        value={signUp.password}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        form-name="signUp"
                        form-field="confirmPassword"
                        value={signUp.confirmPassword}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton>
                        Sign up for Github Stars
                    </SubmitButton>
                </SignUpForm>

            </Container>
      );
    }
}


