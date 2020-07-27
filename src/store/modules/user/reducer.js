export default function user(state = [], action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return [...state, action.data];
        default:
            return state;
    }
}
