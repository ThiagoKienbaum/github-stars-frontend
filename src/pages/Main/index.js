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
            loading: 0,
            errorMessage: null,
            signUpLogin: false,
        };
    }

    handleInputChange = (event, formName, fieldName) => {
        const { value } = event.target;
        const currentState = { ...this.state[formName] };
        currentState[fieldName] = value;

        this.setState({
            [formName]: currentState
        });
    }

    signInHandleSubmit = async event => {
        this.setState({ loading: 1 });
        const { dispatch } = this.props;
        const {email, password} = this.state.signIn;
        const { signUpLogin } = this.state;

        if (!signUpLogin) event.preventDefault();

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
                loading: 0,
            });

            dispatch({
                type: 'USER_LOGIN',
                data,
            })

            this.props.history.push('/repository');
        }).catch(response => {
            this.setState({
                errorMessage: response.message,
                loading: 0,
            });
        })
    }

    signUpHandleSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: 1 });

        const { name, githubId, email, password, confirmPassword } = this.state.signUp;

        await api.post('/users', {
            name,
            github_id: githubId,
            email,
            password,
            confirmPassword
        }).then(() => {
            this.setState({
                loading: 0,
                signUpLogin: true,
                signIn: {
                    email,
                    password,
                }
            });
            this.signInHandleSubmit();
        }).catch(response => {
            this.setState({
                errorMessage: response.message,
                loading: 0,
            });
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
                        value={signIn.email}
                        onChange={(event) => this.handleInputChange(event, 'signIn', 'email')}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={signIn.password}
                        onChange={(event) => this.handleInputChange(event, 'signIn', 'password')}
                    />
                    <SubmitButton loading={loading}>
                        { loading === 1 ? <FaSpinner color="FFF" size={14} /> : 'Sign in' }
                    </SubmitButton>
                </SignInForm>

                {errorMessage && <h3 className="error"> { errorMessage } </h3>}

                <SignUpForm onSubmit={this.signUpHandleSubmit}>
                    <h2>Sign Up</h2>

                    <input
                        type="text"
                        placeholder="Name"
                        value={signUp.name}
                        onChange={(event) => this.handleInputChange(event, 'signUp', 'name')}
                    />
                    <input
                        type="text"
                        placeholder="GitHub ID"
                        value={signUp.githubId}
                        onChange={(event) => this.handleInputChange(event, 'signUp', 'githubId')}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={signUp.email}
                        onChange={(event) => this.handleInputChange(event, 'signUp', 'email')}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={signUp.password}
                        onChange={(event) => this.handleInputChange(event, 'signUp', 'password')}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={signUp.confirmPassword}
                        onChange={(event) => this.handleInputChange(event, 'signUp', 'confirmPassword')}
                    />
                    <SubmitButton loading={loading}>
                        { loading === 1 ? <FaSpinner color="FFF" size={14} /> : 'Sign up for Github Stars' }
                    </SubmitButton>
                </SignUpForm>
            </Container>
      );
    }
}

export default connect()(Main);
