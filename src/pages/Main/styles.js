import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    background: #FFF;
    max-width: 600px;
    margin: 50px auto;
    padding: 30px;
    padding-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.45);
`;

export const Header = styled.h1`
    font-size: 40px;
    letter-spacing: 0.05rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    margin-left: 20%;

    svg {
        margin-right: 10px;
    }
`;

export const SignInForm = styled.form`
    background: #F9F9F9;
    margin: 40px 0;
    padding: 25px;
    border-radius: 7px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

    h2 {
        font-size: 25px;
        height: 50px;
    }

    input {
        background: #FFF;
        min-width: 100%;
        margin: 0 0 10px;
        padding: 12px;
        border: medium none;
    }
`;

export const SignUpForm = styled.form`
    background: #F9F9F9;
    margin: 40px 0;
    padding: 25px;
    border-radius: 7px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

    h2 {
        font-size: 25px;
        height: 50px;
    }

    input {
        background: #FFF;
        min-width: 100%;
        margin: 0 0 10px;
        padding: 12px;
        border: medium none;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs( props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    color: #FFF;
    background: #7159c1;
    font-size: 15px;
    margin: 0 0 5px;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 4px;

    &:hover {
        background: #644db0;
        transition: background-color 0.3s ease-in-out;
    }

    &[disable] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props => props.loading && css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}
`;
