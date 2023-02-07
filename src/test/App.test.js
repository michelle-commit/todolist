import { fireEvent, getByTestId, render } from '@testing-library/react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('nnnnnn',()=>{
    it(' App content something',()=>{
        const {getByText}=render(<App/>);
        expect (getByText('TODO')).toBeInTheDocument();
    })
    it('shows the expected placeholder text',()=>{
        const { getByPlaceholderText } = render(<App/>);
        const input = getByPlaceholderText(/Add task/);
        expect(input).toBeInTheDocument();
       
    }) 
    it('input values changes ', ()=>{
        const { getByPlaceholderText } = render(<App/>);
        const input = getByPlaceholderText('Add task');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.value).toBe('test');
    })  
    it("should call handleSubmit",()=>{
        const todo = jest.fn();
        const {getByTestId} = render(<App handleSubmit={todo()}/>)
        fireEvent.keyPress( getByTestId('input-1') , {key:'Enter', code: 13})
        expect(todo).toHaveBeenCalled();
    })    
    it("input form submit the task",()=>{
        const{ getByPlaceholderText , getByTestId}= render(<App/>);
        const input = getByPlaceholderText('Add task');
        const form = getByTestId('input-1');
        fireEvent.change(input, {target : { value : 'test'}});
        fireEvent.submit(form);
        const { doing } = render(<App />).container.state;
        expect(doing).toContain('test')

    })

    it('matches snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});







