import { render, screen, fireEvent, getAllByText } from '@testing-library/react';
import Counter from './counter';

// Test to check if the counter renders correctly
test('render counter components', () => {
render(<Counter />)
 // verify component initial render
 expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
 expect(screen.getByText('Increment')).toBeInTheDocument();
 expect(screen.getByText('Decrement')).toBeInTheDocument();
 expect(screen.getByText('Reset')).toBeInTheDocument();
 expect(screen.getByText('SwitchSign')).toBeInTheDocument();
});

//Test to check if the increment button works
test('Increment counter', () => {
  render(<Counter />)
  //Initialise click Event
  fireEvent.click(screen.getAllByText('increment'))
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument()
});

//Test to check if the Decrement button works
test('Decrement counter', () => {
  render(<Counter />)
  //Initialise click Event
  fireEvent.click(screen.getAllByText('increment'))
  fireEvent.click(screen.getAllByText('Decrement'))
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()
})
