import moment from 'moment'

export default [{
    id: '1',
    description: 'Gum',
    note: 'rent',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'Coffe',
    note: 'a little note',
    amount: 1950,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Rent',
    note: '',
    amount: 19,
    createdAt: moment(0).add(4, 'days').valueOf()
}]