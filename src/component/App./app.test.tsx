import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { App } from './app';

interface CryptoPlus extends Crypto {
    randomBytes: (arr: number) => void;
    subtle: SubtleCrypto;
}

Object.defineProperty(global.self, 'crypto', {
    value: {
        getRandomValues: (arr: number) =>
            (crypto as CryptoPlus).randomBytes(arr),
    },
});
(global.crypto as CryptoPlus).subtle = {} as SubtleCrypto; // this gets around the 'auth0-spa-js must run on a secure origin' error

describe('Given App component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <App />
                </Provider>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('probando', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
