import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test form component', () => {
  test('should render form input URL and method in browser after form submit', () => {
    render( <App /> );
    let URLinput = screen.queryByTestId('url-input');
    fireEvent.change(URLinput, { target: {value: 'testURL'}});
    fireEvent.click(screen.queryByTestId('submit-button'));
    const requestURL = screen.getByTestId('req-url');
    console.log(requestURL);
    expect(requestURL).toBeInTheDocument();
  });

});