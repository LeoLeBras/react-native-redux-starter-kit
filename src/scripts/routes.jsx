import React from 'react';
import Wrapper from 'Wrapper';
import Foo from 'Foo/';
import Bar from 'Bar/';

export const routes = {
    component: Wrapper,
    childRoutes: [
        { path: '/', component: Foo },
        { path: '/bar', component: Bar },
    ]
};
