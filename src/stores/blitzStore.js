import {EventEmitter} from "events";
import dispatcher from "../common/dispatcher";

class BlitzStores extends EventEmitter{
	constructor(){
		super();	
		this.initData();
	}

	initData(){
		this.store = {};
	}

	_updateStore(data, key){		
		this.store[key] = data.name;
		console.log("data", data.name);
		this.emit('change', key);
	}

	_fetchFromStore(key){
		return this.store[key];
	}

	_handleActions(action){
		switch(action.type){
			case 'SAMPLE_DATA' : {
				this._updateStore(action.value, action.type);
				break;
			}			
			default:{
				break;
			}			
		}
	}
}

const appStores = new BlitzStores();
dispatcher.register(appStores._handleActions.bind(appStores));
export default appStores;