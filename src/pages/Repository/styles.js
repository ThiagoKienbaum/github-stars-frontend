import styled from 'styled-components';

export const Container = styled.div`
    background: #FFF;
    max-width: 600px;
    margin: 50px auto;
    padding: 30px;
    padding-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.45);
`;

export const Loading = styled.div`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;
    }

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }
`;
