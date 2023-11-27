import {combineReducers} from 'redux';
import { mainData } from './main-data/main-data';
import { user } from './user/user';
import { filmData } from './film-data/film-data';


export const NameSpace = {
  DATA: 'DATA',
  USER: 'USER',
  FILM: 'FILM',
};

export default combineReducers({
  [NameSpace.DATA]: mainData,
  [NameSpace.USER]: user,
  [NameSpace.FILM]: filmData,
});
