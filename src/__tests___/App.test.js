import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';
import '@testing-library/jest-dom';

const MockApp = () => (
  <Provider store={store}>

    <App />

  </Provider>
);

describe('Check if App Component renders correctly', () => {
  test('renders header', () => {
    render(<MockApp />);
    const headingElement = screen.getByRole('heading', {
      name: /This App covers some of the major currency pairs traded worldwide/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test('render list', () => {
    render(<MockApp />);
    const textBoxElement = screen.getByRole('list');
    expect(textBoxElement).toBeInTheDocument();
  });
});
