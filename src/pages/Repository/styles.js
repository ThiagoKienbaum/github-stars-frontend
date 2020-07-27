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

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

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

export const Repositories = styled.ul`
    margin: 40px 0;

    li {
        display: flex;
        align-items: flex-start;
        background: #F9F9F9;
        margin: 20px 0;
        padding: 25px;
        border-radius: 7px;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
        list-style: none;

        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #eee;
        }

        div {
            flex: 1;
            margin-left: 15px;

            strong {
                font-size: 20px;

                a {
                    text-decoration: none;
                    color: #333;

                    &:hover {
                        color: #7159c1;
                        transition: color 0.3s ease-in-out;
                    }
                }

                span {
                    background: #7159c1;
                    color: #FFF;
                    border-radius: 2px;
                    font-size: 12px;
                    font-weight: 600;
                    height: 20px;
                    padding: 3px 4px;
                    margin: 2px;
                }
            }

            p {
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }
    }
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
