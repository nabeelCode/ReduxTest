import React from 'react'
import Counter from './screens/Counter'
import {Style} from './styles/Style'
import {Provider} from 'react-redux'
import storeCounter from './redux/storeCounter'

export default App=()=>{
    return(
        <Provider style={Style.mainStyle} store={storeCounter}>
            <Counter/>
        </Provider>
    )
}