const { List, Map ,Seq } = require('immutable')

// let state = Map({
//     reminders: List([])
// })

// const DBreminder = [
//     {
//         id: 0,
//         text: '놀기',
//     },
//     {
//         id: 2,
//         text: '공부하기',
//     }
// ]

// state = state.updateIn(['reminders'], (list) => {
//     const reminder = list.concat(DBreminder.map((value) => {
//         return Seq(value);
//     }))
//     return reminder;
// })

// console.log('#state:', state);


// console.log(state.get('reminders'));

// let state = Map({
//     setEdit: false,
// })

// const t3 = state.updateIn(['setEdit'], (value) => !value)

// console.log(t3);

// let state = Map({
//     reminders: List([])
// })

// const DBreminder = [
//     {
//         id: 0,
//         text: '놀기',
//     },
//     {
//         id: 2,
//         text: '공부하기',
//     }
// ]

// const reminderupdate = state.updateIn(['reminders'], (list) => {
//     const reminder = list.concat(DBreminder.map((value) => {
//         return Map(value);
//     }))
//     return reminder;
// })

// const reminder = DBreminder.map((value) => {
//     return Map(value);
// })

// state = state.setIn(['reminders'], List(reminder))

// console.log('#state', state.get('reminders').get(0));
// console.log('#update', reminderupdate);

// const ar = [52,273,103,32];
// ar.sort();

// console.log(ar);

// const obj = {};
// const n=10;
// const s='tiger';
// obj['a'] = {n, s};

// console.log(obj);

// console.log(1e3);

// const a = 3;
// const b = 3.14;
// console.log( a + ~~b );

// const a = 10;
// const b = +'20'; // << 주목할 부분
// const c = a + b;

// console.log( typeof(a), typeof(b), typeof(c));
// console.log( c );



const obj={
    a:10,
    f: function() {
        console.log(this.a);
    }
}
obj.f();