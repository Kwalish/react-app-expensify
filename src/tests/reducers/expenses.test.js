import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '109',
            description: 'test expense',
            note: 'test note',
            amount: 100,
            createdAt: 0
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test('Should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            note: 'this is a test'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].note).toEqual('this is a test')
})

test('should not edit an expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: {
            note: 'this is a test'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})