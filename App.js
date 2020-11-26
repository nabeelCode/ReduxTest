import React from 'react'
import Store from './redux/Store'
import { Provider } from 'react-redux'
import {Counter} from './components/Counter'

export default App = () => {
    return(
        <Provider store={Store}>
            <Counter/>
        </Provider>
    )
}