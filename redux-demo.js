//Create a project using - "npm init -y"
//Run the project using - node filename.js i.e. node redux-demo.js
//Note: Both Reducer and Subscribers are not called because they are called by Redux

const redux = require('redux');

//Reducer with initial state value
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    //returning default state initially, without incrementing or decrementing
    return state;
}

//Store
const store = redux.createStore(counterReducer);

// console.log(store.getState());

//Subscriber
const counterSubscriber = () => {
    //To get latest state snapshots
    const latestState = store.getState();
    console.log(latestState);
}

//subscribe method expects a function which will then execute whenever data in store changes
store.subscribe(counterSubscriber);

//dispatch() dispatches an action. An action is a JS object
store.dispatch({
    type: 'increment'
});

store.dispatch({
    type: 'decrement'
});
