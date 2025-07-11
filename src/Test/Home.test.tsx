import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home'; // adjust the path if needed

describe('Home Component', () => {
  test('renders Home component with correct text', () => {
    render(<Home />);
    const homeText = screen.getByText('Home');
    expect(homeText).toBeInTheDocument();
  });

  test('applies correct classes for layout', () => {
    const { container } = render(<Home />);
    const divElement = container.firstChild as HTMLElement;
    expect(divElement).toHaveClass('w-full', 'px-4', 'md:px-8', 'lg:px-16', 'py-5');
  });
});
