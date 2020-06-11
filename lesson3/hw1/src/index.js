import store from "./store";
import { setUser } from "./user.actions";
import { addProduct } from "./cart.actions";
import { setLanguage } from "./language.actions";

store.subscribe(() => console.log(store.getState()));
store.dispatch(setLanguage("en"));
store.dispatch(addProduct({ id: 1, name: "milk" }));
store.dispatch(setUser({ name: "Tom" }));
