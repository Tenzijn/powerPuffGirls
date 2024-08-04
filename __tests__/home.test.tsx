import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('should always pass', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Let's Fly/i);
    expect(linkElement).toBeInTheDocument();
  });
});
