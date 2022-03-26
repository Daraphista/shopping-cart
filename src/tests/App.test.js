import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import App from '../App';

describe("navbar", () => {
  describe("can switch routes properly", () => {
    it("can switch to home route", () => {
      render(<App />);
      userEvent.click(screen.getByText('Home'));
      expect(screen.getByTestId('home')).toBeInTheDocument();
    })
    it("can switch to products route", () => {
      render(<App />);
      userEvent.click(screen.getByText('Products'));
      expect(screen.getByTestId('products')).toBeInTheDocument();
    })
    it("can switch to cart route", () => {
      render(<App />);
      userEvent.click(screen.getByText('Cart'));
      expect(screen.getByTestId('cart')).toBeInTheDocument();
    })
  })
})
