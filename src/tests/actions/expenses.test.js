import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove action object', () => {
    const result = removeExpense({ id: 'abc123' })
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
})

test('should setup edit action object', () => {
    const result = editExpense( 'abc123', {note: 'test note'})
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'test note'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 12300,
        createdAt: 1000,
        note: 'this is a test'
    }
    const result = addExpense(expenseData)
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
    const result = addExpense()
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
})