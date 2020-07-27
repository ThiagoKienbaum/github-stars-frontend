import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Owner, Repositories, Loading } from './styles';
import api from '../../services/api';

class Repository extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAvatar: '',
            loading: true,
            repositories: [],
        };
    }

    async componentDidMount() {
        const { user } = this.props;

        const config = {
            headers: {
              'Authorization': `Bearer ${user.token}`
            }
          }

        const [userAvatar, repositories] = await Promise.all([
            axios.get(`https://api.github.com/users/${user.githubId}`),
            api.get('/repositories', config)
        ]);

        this.setState({
            userAvatar: userAvatar.data.avatar_url,
            repositories: repositories.data.starredRepositories,
            loading: false,
        })
    }

    render() {
        const { userAvatar, repositories, loading } = this.state;
        const { user } = this.props;
        console.log(repositories);
        if (loading) {
            return <Loading>Loading...</Loading>
        }

        return (
            <Container>
                <Owner>
                    <img src={userAvatar} alt="User avatar"/>
                    <h1>{user.name}</h1>
                </Owner>

                <Repositories>
                    {repositories.map(repository => (
                        <li key={String(repository.id)}>
                            <img src={repository.owner_avatar} alt={user.name} />
                            <div>
                                <strong>
                                    <a href={repository.url}>{repository.name}</a>
                                </strong>
                                <h5>{repository.description}</h5>
                                <strong>
                                    {repository.tags.map(tag => (
                                        <span key={String(tag)}>{tag}</span>
                                    ))}
                                </strong>
                                <p>id: {repository.id}</p>
                            </div>
                        </li>
                    ))}
                </Repositories>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user[0]
})

export default connect(mapStateToProps)(Repository);
