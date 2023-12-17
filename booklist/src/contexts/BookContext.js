import React, {createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {

    const[books, dispatch ] = useReducer( bookReducer , [    ], ()=>{
        const data1 = localStorage.getItem('books');
        return data1 ? JSON.parse(data1) : [];
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return ( 
        <BookContext.Provider value={{books, dispatch }}>
            { props.children }
        </BookContext.Provider>
     );
}
export default BookContextProvider;















