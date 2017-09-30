import { Map } from 'immutable'

import { LOCATION_CHANGE } from 'react-router-redux'
import browserHistory from 'utils/history'
import * as constants from './constants'

const initialState = new Map({
	locationBeforeTransitions : null,
	initialHistoryLength      : null
})

export default function (state = initialState, action) {
	switch (action.type) {
		case '@@INIT':
			return state.update(
				'initialHistoryLength',
				length => length === null && browserHistory.length || length
			)

		// ROUTER

		case LOCATION_CHANGE:
			return state.set('locationBeforeTransitions', action.payload)

		case constants.RESET:
			return state.set('history', initialState.get('history'))

		// DEFAULT

		default:
			return state
	}
}
