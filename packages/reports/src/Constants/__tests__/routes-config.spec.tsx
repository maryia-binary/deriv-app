import React from 'react';
import { RouteComponentProps, Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { mockStore } from '@deriv/stores';
import { routes } from '@deriv/shared';
import { render, screen, waitFor } from '@testing-library/react';
import BinaryRoutes from '../../Components/Routes';
import ReportsProviders from '../../reports-providers';
import getRoutesConfig from '../routes-config';

jest.mock('Modules/Page404', () => ({
    __esModule: true,
    default: () => <div>Error 404</div>,
}));

jest.mock('../../Containers', () => ({
    __esModule: true,
    default: {
        ...jest.requireActual('../../Containers').default,
        OpenPositions: () => <div>Open positions</div>,
        ProfitTable: () => <div>Trade table</div>,
        Statement: () => <div>Statement</div>,
    },
}));

describe('Routes Config', () => {
    // we need to render BinaryRoutes component that uses routes-config to test that lazy-loaded components are loaded
    const MockBinaryRoutes = ({ history }: Partial<RouteComponentProps>) => (
        <ReportsProviders store={mockStore({ client: { is_logged_in: true }, ui: { is_reports_visible: true } })}>
            <Router history={history}>
                <BinaryRoutes is_logged_in />
            </Router>
        </ReportsProviders>
    );

    it('should return default routes config', () => {
        const routesConfig = getRoutesConfig();
        expect(routesConfig).toHaveLength(2);
    });
    it('should return routes with Reports / Open positions route', async () => {
        const routesConfig = getRoutesConfig();
        expect(routesConfig?.[0]?.path).toBe(routes.reports);
        expect(routesConfig?.[0]?.getTitle?.()).toBe('Reports');
        expect(routesConfig?.[0]?.is_authenticated).toBe(true);
        expect(routesConfig?.[0].routes[0].path).toBe(routes.positions);
        const history = createMemoryHistory();
        history.push(routes.positions);
        render(<MockBinaryRoutes history={history} />);
        await waitFor(() => {
            expect(screen.getByText('Reports')).toBeInTheDocument();
            expect(screen.getByText('Open positions')).toBeInTheDocument();
        });
    });
    it('should return routes with Reports / Trade table route', async () => {
        const routesConfig = getRoutesConfig();
        expect(routesConfig?.[0].routes[1].path).toBe(routes.profit);
        expect(routesConfig?.[0].routes[1].getTitle()).toBe('Trade table');
        const history = createMemoryHistory();
        history.push(routes.profit);
        render(<MockBinaryRoutes history={history} />);
        await waitFor(() => {
            expect(screen.getByText('Reports')).toBeInTheDocument();
            expect(screen.getByText('Trade table')).toBeInTheDocument();
        });
    });
    it('should return routes with Reports / Statement route', async () => {
        const routesConfig = getRoutesConfig();
        expect(routesConfig?.[0].routes[2].path).toBe(routes.statement);
        expect(routesConfig?.[0].routes[2].getTitle()).toBe('Statement');
        const history = createMemoryHistory();
        history.push(routes.statement);
        render(<MockBinaryRoutes history={history} />);
        await waitFor(() => {
            expect(screen.getByText('Reports')).toBeInTheDocument();
            expect(screen.getByText('Statement')).toBeInTheDocument();
        });
    });
    it('should return routes with route for Page 404 which loads when the path does not exist', async () => {
        const routesConfig = getRoutesConfig();
        expect(routesConfig?.[1]?.getTitle?.()).toBe('Error 404');
        const history = createMemoryHistory();
        history.push('/non-existent-path');
        render(<MockBinaryRoutes history={history} />);
        await waitFor(() => {
            expect(screen.getByText('Error 404')).toBeInTheDocument();
        });
    });
});
