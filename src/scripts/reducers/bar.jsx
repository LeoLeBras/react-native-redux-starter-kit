import Immutable from 'immutable';

var initialState = Immutable.fromJS({});

export default function bar(state = initialState, action) {
	switch(action.type) {
		default: state = state;
	}

	return state;
}