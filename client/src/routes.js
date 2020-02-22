import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {LinksPage} from './pages/LinksPage';
import {CreatePage} from './pages/CreatePage';
import {DetailPage} from './pages/DetailPage';
import {AuthPage} from './pages/AuthPage';
import {SingUpPage} from './pages/signUp'
import {UserData} from "./pages/UserData";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage/>
        </Route>
        <Route path="/create" exact>
          <CreatePage/>
        </Route>
        <Route path="/detail/:id">
          <DetailPage/>
        </Route>
          <Route path="/user">
          <UserData/>
        </Route>
        <Redirect to="/create"/>
      </Switch>
    )
  }

  return (
    <Switch>
      {/*<Route to="/" exact>*/}
        {/*<AuthPage/>*/}
      {/*</Route>*/}
        <Route component={SingUpPage} path="/register" exact/>
        <Route component={AuthPage} path="/" exact/>
        {/*<Route to="register" >*/}
        {/*<SingUpPage/>*/}
        {/*</Route>*/}
      <Redirect to="/" />
    </Switch>
  )

}
