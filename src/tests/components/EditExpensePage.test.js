import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'

let editExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    startRemoveExpens = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={startRemoveExpens}
            history={history}
            expense={expenses[2]}
        />
    )
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpens).toHaveBeenLastCalledWith({id: expenses[2].id})
})