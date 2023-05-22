import App from '../../App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test header component', () => {
  test('should render header component', () => {
    render( <App /> );
    const headerText = screen.getByText('RESTy');
    expect(headerText).toBeInTheDocument();
  });

});