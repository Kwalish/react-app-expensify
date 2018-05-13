import moment from 'moment'
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter,
    sortByAmount,
    sortByDate 
} from '../../actions/filters' 

test('should generate set start date action object', () => {
    const result = setStartDate(moment(0))
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const result = setEndDate(moment(0))
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set text filter action object', () => {
    const result = setTextFilter('this is a test')
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'this is a test'
    })
})

test('should generate set text filter action object with default', () => {
    const result = setTextFilter()
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate sort by date filter action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should generate sort by amount filter action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})