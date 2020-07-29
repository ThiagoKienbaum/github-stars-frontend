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
    margin-top: 0px;

    li {
        display: flex;
        align-items: flex-start;
        background: #F9F9F9;
        margin-bottom: 30px;
        padding: 5px;
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
            margin-left: 10px;

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
            }

            span {
                margin-right: 5px;
                background: #7159c1;
                color: #FFF;
                border-radius: 2px;
                font-size: 12px;
                font-weight: 600;
                padding: 2px 13px;
                box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

                form {
                    margin-right: 5px;
                    background: #FFF;
                    color: #7159c1;
                    border-radius: 2px;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 2px 13px;
                    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

                    button {
                        color: #FFF;
                        background: #7159c1;
                        border: none;
                        max-height: 6%;
                        max-width: 6%;
                        padding: 1px;
                        border-radius: 4px;
                        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

                        &:hover {
                            background: #644db0;
                            transition: background-color 0.3s ease-in-out;
                        }

                        svg {
                            margin-left: 0px
                        }
                    }
                }

                &:hover {
                    background: #644db0;
                    transition: background-color 0.3s ease-in-out;
                }

                svg {
                    margin-left: 15px;
                    color: #FFF;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const AddForm = styled.form`
    display: flex;
    flex-direction: row;
    align-content: center;

    input {
        height: 30px;
        min-width: 35%;
        margin: 0 0 10px;
        padding: 5px;
        border-radius: 4px;
        border: medium none;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }

    button {
        height: 30px;
        min-width: 15%;
        margin: 0 0 10px;
        padding: 4px;
        border-radius: 4px;
        border: medium none;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }

    p {
        font-size: 12px;
        color: #999;
        margin-left: 100px;
    }
`;

export const ShowForm = styled.form`
    margin-top: 60px;
    margin-bottom: 0px;
    padding: 25px;

    input {
        border-radius: 14px;
        min-width: 80%;
        margin: 0 0 10px;
        padding: 12px;
        border: medium none;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    button {
        border-radius: 14px;
        margin: 0 0 10px;
        padding: 12px;
        border: medium none;
        min-width: 20%;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
`;

export const SubmitButton = styled.button`
    color: #FFF;
    background: #7159c1;
    border: none;
    max-height: 100rem;
    border-radius: 4px;

    &:hover {
        background: #644db0;
        transition: background-color 0.3s ease-in-out;
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
