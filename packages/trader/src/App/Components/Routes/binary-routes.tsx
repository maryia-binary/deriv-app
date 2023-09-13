import React from 'react';
import { Switch } from 'react-router-dom';
import getRoutesConfig from 'App/Constants/routes-config';
import { TBinaryRoutes, TRouteConfig } from 'Types';
import RouteWithSubRoutes from './route-with-sub-routes';

const BinaryRoutes = (props: TBinaryRoutes) => (
    <React.Suspense fallback={<div />}>
        <Switch>
            {getRoutesConfig().map((route: TRouteConfig, idx: number) => (
                <RouteWithSubRoutes key={idx} {...route} {...props} />
            ))}
        </Switch>
    </React.Suspense>
);

export default BinaryRoutes;
