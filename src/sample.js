const { List, Map ,Seq } = require('immutable')

let state = Map({
    reminders: List([])
})

const DBreminder = [
    {
        id: 0,
        text: '놀기',
    },
    {
        id: 2,
        text: '공부하기',
    }
]

state = state.updateIn(['reminders'], (list) => {
    const reminder = list.concat(DBreminder.map((value) => {
        return Seq(value);
    }))
    return reminder;
})

console.log('#state:', state);


console.log(state.get('reminders'));

