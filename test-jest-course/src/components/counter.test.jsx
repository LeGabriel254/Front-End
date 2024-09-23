import { render, screen, fireEvent, getAllByText } from '@testing-library/react';
import Counter from './counter';

// Test to check if the counter renders correctly
describe('Counter', () => {

  fetchMock.get('*', some_response);

  it('renders something', () => {
      let wrapper = mount(<Counter />);
      expect(wrapper.find()).to.have.something();
  });
})

//Test to check if the increment button works
test('Increment counter', () => {
  render(<Counter />)
  //Initialise click Event
  fireEvent.click(screen.getAllByText('increment'))
  expect(screen.getAllByText(/Count: 1/i)).toBeInTheDocument()
});
//Test to check if the Decrement button works

test('Decrement counter', () => {
  render(<Counter />)
  //Initialise click Event
  fireEvent.click(screen.getAllByText('increment'))
  fireEvent.click(screen.getAllByText('Decrement'))
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()
})
