import React, { useState, useEffect } from 'react';
import Cart from '../cart/Cart';
import SighIn from '../signin/SignIn';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useStateValue } from '../../context/stateProvider/StateProvider'

function Index() {
    const [state, dispatch] = useStateValue()
    let [user, setUser] = useState(null)
    
    useEffect(() => {
        setUser(state.user)
        if(localStorage.getItem('user')){
            setUser(localStorage.getItem('user'))
        }
    }, [state.user])

    if(state.user){
        localStorage.setItem('user', state.user)
    }

    return (
    <div>
        {
            user?
            <Switch>
                <Route 
                    path='/cartrouter/cart' 
                    component={Cart} 
                />
                <Redirect
                    to='/cartrouter/cart'
                />
            </Switch>
            :
            <Switch>
                <Route 
                    path='/cartrouter/signin' 
                    component={SighIn} 
                />
                <Redirect
                    to='/cartrouter/signin'
                />
            </Switch>
        }
    </div>
  )
}

export default Index