import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import statsReducer from "../../components/Stats/reducer/stats.reducer";
import countriesReducer from "../../components/ListCountry/reducer/countries.reducer";
import graphReducer from "../../components/Graphs/reducer/graph.reducer";

export default combineReducers({
  toastr: toastrReducer,
  stats: statsReducer,
  country: countriesReducer,
  graph: graphReducer,
});
