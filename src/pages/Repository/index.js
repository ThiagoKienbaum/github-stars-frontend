import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { Container, Owner } from './styles';

class Repository extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAvatar: '',
            loading: true,
        };
    }

    async componentDidMount() {
        const { user } = this.props;

        const userAvatar = await axios.get(`https://api.github.com/users/${user.githubId}`)

        this.setState({
            userAvatar: userAvatar.data.avatar_url,
            loading: false,
        })
    }

    render() {
        const { userAvatar, loading } = this.state;
        const { user } = this.props;

        if (loading) {
            return <FaSpinner color="FFF" size={14} />
        }

        return (
            <Container>
                <Owner>
                    <img src={userAvatar} alt="User avatar"/>
                    <h1>{user.name}</h1>
                </Owner>

                {/* <IssueList>
                    {issues.map(issue => (
                        <li key={String(issue.id)}>
                            <img src={issue.user.avatar_url} alt={issue.user.login} />
                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>
                                    {issue.labels.map(label => (
                                        <span key={String(label.id)}>{label.name}</span>
                                    ))}
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                </IssueList> */}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user[0]
})

export default connect(mapStateToProps)(Repository);
