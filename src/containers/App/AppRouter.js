import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={asyncComponent(() => import('../Widgets/index.js'))}
        />        
        <Route
          exact
          path={`${url}/namescan`}
          component={asyncComponent(() => import('../NewScan'))}
        />
        <Route
          exact
          path={`${url}/scanresult`}
          component={asyncComponent(() => import('../ScanResult'))}
        />
        <Route
          exact
          path={`${url}/history`}
          component={asyncComponent(() => import('../History'))}
        />
      </Switch>
    );
  }
}

export default AppRouter;
