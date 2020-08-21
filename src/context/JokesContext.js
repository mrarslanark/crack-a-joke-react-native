import createDataContext from './createDataContext';

const jokesReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const { Context, Provider } = createDataContext(
    jokesReducer,
    {},
    []
)