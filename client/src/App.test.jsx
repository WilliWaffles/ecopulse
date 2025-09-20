import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

test('renderiza EcoPulse sin crashear', async () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  expect(await screen.findByText(/EcoPulse/i)).toBeInTheDocument();
});
