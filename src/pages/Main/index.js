import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaGithub, FaSpinner } from 'react-icons/fa';
import { Container, Header, SignInForm, SignUpForm, SubmitButton } from './styles';
import api from '../../services/api';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signIn: {
                email: '',
                password: '',
            },
            signUp: {
               name: '' ,
               githubId: '',
               email: '',
               password: '',
               confirmPassword: '',
            },
            loading: false,
            errorMessage: null,
            login: false,
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
        this.setState({ loading: true });
        const { dispatch } = this.props;
        const {email, password} = this.state.signIn;
        const { login } = this.state;

        if (!login) event.preventDefault();

        await api.post('/sessions', {
            email,
            password
        }).then(response => {
            const data = {
                id: response.data.user.id,
                name: response.data.user.name,
                githubId: response.data.user.github_id,
                email: response.data.user.email,
                token: response.data.token,
            }

            this.setState({
                loading: false,
            });

            dispatch({
                type: 'USER_LOGIN',
                data,
            })

            this.props.history.push('/repository');
        }).catch(response => {
            this.setState({errorMessage: response.message});
        })
    }

    signUpHandleSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true });

        const { name, githubId, email, password, confirmPassword } = this.state.signUp;

        await api.post('/users', {
            name,
            github_id: githubId,
            email,
            password,
            confirmPassword
        }).then(() => {
            this.setState({
                loading: false,
                login: true,
                signIn: {
                    email,
                    password,
                }
            });
            this.signInHandleSubmit();
        }).catch(response => {
            this.setState({errorMessage: response.message});
        })
    }

    render() {
        const { signIn, signUp, loading, errorMessage  } = this.state;

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
                    <SubmitButton loading={loading}>
                        { loading ? <FaSpinner color="FFF" size={14} /> : 'Sign in' }
                    </SubmitButton>
                </SignInForm>
                {errorMessage && <h3 className="error"> { errorMessage } </h3>}
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
                    <SubmitButton loading={loading}>
                        { loading ? <FaSpinner color="FFF" size={14} /> : 'Sign up for Github Stars' }
                    </SubmitButton>
                </SignUpForm>
            </Container>
      );
    }
}

export default connect()(Main);
