import { createContext, useContext } from 'react';

const Context = createContext()

const Son = () => {
    const context = useContext(Context)
    console.log(context, 'context');
    return (
        <div>
            <h4>son</h4>
            <div>context: {context.age}</div>
        </div>
    )
}

const Page = () => {
    return (
        <Context.Provider value={{age: 2}}>
            <Son />
        </Context.Provider> 
    )
}

export default Page