import React, { useState, useEffect } from 'react';
import Admin from '../admin';
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
            dispatch({type: 'ADD_USER', payload: localStorage.getItem('user')})
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
                    path='/approuter/admin' 
                    component={Admin} 
                />
                <Redirect
                    to='/approuter/admin'
                />
            </Switch>
            :
            <Switch>
                <Route 
                    path='/approuter/signin' 
                    component={SighIn} 
                />
                <Redirect
                    to='/approuter/signin'
                />
            </Switch>
        }
    </div>
  )
}

export default Index