import store from './store';
import {addUser, deleteUser} from './users.actions';

store.dispatch(addUser({name:'asf', id: 113}));
store.dispatch(addUser({name:'qwe', id: 223}));
store.dispatch(addUser({name:'dzf', id: 123}));

store.dispatch(deleteUser(223));

console.log(store.getState());