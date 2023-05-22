import App from '../../App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test footer component', () => {
  test('should render footer component', () => {
    render( <App /> );
    const footerText = screen.getByText('© 2018 Nate Brown');
    expect(footerText).toBeInTheDocument();
  });

});