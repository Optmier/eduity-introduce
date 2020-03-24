import React, { useReducer, createContext, useContext } from 'react';

const initialBook = [];

function todoReducer(state, action) {
    switch (action.type) {
        case 'BOOK':
            return state.concat(action.book);

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const BookStateContext = createContext();
const BookDispatchContext = createContext();

export function BookProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialBook);

    return (
        <BookStateContext.Provider value={state}>
            <BookDispatchContext.Provider value={dispatch}>{children}</BookDispatchContext.Provider>
        </BookStateContext.Provider>
    );
}

export function useBookState() {
    const context = useContext(BookStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useBookDispatch() {
    const context = useContext(BookDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
