import {
	VUEX_UI_HEADER_SHOW,
	VUEX_UI_HEADER_HIDE,

	VUEX_UI_NAVIGATION_SHOW,
	VUEX_UI_NAVIGATION_HIDE,
	VUEX_UI_NAVIGATION_TOGGLE_OPENSTATE,
	VUEX_UI_NAVIGATION_ENABLED,
	VUEX_UI_NAVIGATION_DISABLED,
	VUEX_UI_NAVIGATION_SET_TITLE,

	VUEX_UI_OVERLAY_CONTAINER_SHOW,
	VUEX_UI_OVERLAY_CONTAINER_HIDE,
	VUEX_UI_OVERLAY_CONTAINER_SET_STATE,
	VUEX_UI_OVERLAY_CONTAINER_SET_COMPONENT,

	VUEX_UI_DIALOG_CONTAINER_SHOW,
	VUEX_UI_DIALOG_CONTAINER_HIDE,
	VUEX_UI_DIALOG_CONTAINER_SET_STATE,
	VUEX_UI_DIALOG_CONTAINER_SET_COMPONENT,

	VUEX_UI_LOGIN_CONTAINER_SHOW,
	VUEX_UI_LOGIN_CONTAINER_HIDE,
	VUEX_UI_LOGIN_CONTAINER_SET_STATE,

	VUEX_UI_NOTIFICATIONS_CONTAINER_SHOW,
	VUEX_UI_NOTIFICATIONS_CONTAINER_HIDE,
	VUEX_UI_NOTIFICATIONS_CONTAINER_SET_STATE,
	VUEX_UI_NOTIFICATIONS_CONTAINER_DEFAULT_DELAY
} from '@/store/constants/ui'
import {
	VUEX_NOTIFICATIONS_CYCLE_COMPLETE
} from '@/store/constants/notifications'

const state = {
	headerState: false,
	navigation: {
		isEnabled: true,
		openState: false,
		title: null
	},
	overlayContainer: {
		component: null,
		title: '',
		openState: false
	},
	dialogContainer: {
		openState: false,
		component: null,
		props: null
	},
	loginContainer: {
		openState: false
	},
	notificationsContainer: {
		component: null,
		data: null,
		timeout: null,
		openState: false
	}
}

const getters = {
	//
}

const actions = {
	// HEADER UI
	[VUEX_UI_HEADER_SHOW]: ({ commit }) => {
		commit(VUEX_UI_HEADER_SHOW)
	},

	[VUEX_UI_HEADER_HIDE]: ({ commit }) => {
		commit(VUEX_UI_HEADER_HIDE)
	},

	// NAVIGATION UI
	[VUEX_UI_NAVIGATION_SHOW]: ({ commit }) => {
		commit(VUEX_UI_NAVIGATION_SHOW)
	},

	[VUEX_UI_NAVIGATION_HIDE]: ({ commit }) => {
		commit(VUEX_UI_NAVIGATION_HIDE)
	},

	[VUEX_UI_NAVIGATION_TOGGLE_OPENSTATE]: ({ commit }) => {
		commit(VUEX_UI_NAVIGATION_TOGGLE_OPENSTATE)
	},

	[VUEX_UI_NAVIGATION_ENABLED]: ({ commit }) => {
		commit(VUEX_UI_NAVIGATION_ENABLED)
	},

	[VUEX_UI_NAVIGATION_DISABLED]: ({ commit }, delay) => {
		commit(VUEX_UI_NAVIGATION_DISABLED)

		if (delay) {
			setTimeout(() => {
				commit(VUEX_UI_NAVIGATION_ENABLED)
			}, delay)
		}
	},

	[VUEX_UI_NAVIGATION_SET_TITLE]: ({ commit }, payload) => {
		commit(VUEX_UI_NAVIGATION_SET_TITLE, payload)
	},

	// OVERLAY CONTAINER UI
	[VUEX_UI_OVERLAY_CONTAINER_SHOW]: ({ commit }) => {
		commit(VUEX_UI_OVERLAY_CONTAINER_SHOW)
	},

	[VUEX_UI_OVERLAY_CONTAINER_HIDE]: ({ commit }) => {
		commit(VUEX_UI_OVERLAY_CONTAINER_HIDE)
	},

	[VUEX_UI_OVERLAY_CONTAINER_SET_COMPONENT]: ({ commit }, payload) => {
		commit(VUEX_UI_OVERLAY_CONTAINER_SET_COMPONENT, payload)
	},

	// DIALOG CONTAINER UI
	[VUEX_UI_DIALOG_CONTAINER_SHOW]: ({ commit }, payload) => {
		commit(VUEX_UI_DIALOG_CONTAINER_SHOW, payload)
	},

	[VUEX_UI_DIALOG_CONTAINER_HIDE]: ({ commit }) => {
		commit(VUEX_UI_DIALOG_CONTAINER_HIDE)
	},

	[VUEX_UI_DIALOG_CONTAINER_SET_COMPONENT]: ({ commit }, payload) => {
		commit(VUEX_UI_DIALOG_CONTAINER_SET_COMPONENT, payload)
	},

	// LOGIN CONTAINER
	[VUEX_UI_LOGIN_CONTAINER_SHOW]: ({ commit }) => {
		commit(VUEX_UI_LOGIN_CONTAINER_SHOW)
	},

	[VUEX_UI_LOGIN_CONTAINER_HIDE]: ({ commit }) => {
		commit(VUEX_UI_LOGIN_CONTAINER_HIDE)
	},

	[VUEX_UI_LOGIN_CONTAINER_SET_STATE]: ({ commit }, payload) => {
		commit(VUEX_UI_LOGIN_CONTAINER_SET_STATE, payload)
	},

	// NOTIFICATIONS CONTAINER UI
	[VUEX_UI_NOTIFICATIONS_CONTAINER_SHOW]: ({ commit }, payload) => {
		commit(VUEX_UI_NOTIFICATIONS_CONTAINER_SHOW, payload)
	},

	[VUEX_UI_NOTIFICATIONS_CONTAINER_HIDE]: ({ commit }) => {
		commit(VUEX_UI_NOTIFICATIONS_CONTAINER_HIDE)
	},

	[VUEX_UI_NOTIFICATIONS_CONTAINER_SET_STATE]: ({ commit, dispatch }, payload) => {
		commit(VUEX_UI_NOTIFICATIONS_CONTAINER_SET_STATE, payload)
		setTimeout(() => {
			dispatch(VUEX_NOTIFICATIONS_CYCLE_COMPLETE)
		}, 1000)
	}
}

const mutations = {
	// HEADER UI
	[VUEX_UI_HEADER_SHOW]: (state) => {
		state.headerState = true
	},

	[VUEX_UI_HEADER_HIDE]: (state) => {
		state.headerState = false
	},

	// NAVIGATION UI
	[VUEX_UI_NAVIGATION_SHOW]: (state) => {
		state.navigation.openState = true
	},

	[VUEX_UI_NAVIGATION_HIDE]: (state) => {
		state.navigation.openState = false
	},

	[VUEX_UI_NAVIGATION_TOGGLE_OPENSTATE]: (state) => {
		state.navigation.openState = !state.navigation.openState
	},

	[VUEX_UI_NAVIGATION_ENABLED]: (state) => {
		state.navigation.isEnabled = true
	},

	[VUEX_UI_NAVIGATION_DISABLED]: (state) => {
		state.navigation.isEnabled = false
	},

	[VUEX_UI_NAVIGATION_SET_TITLE]: (state, payload) => {
		state.navigation.title = payload
	},

	// OVERLAY CONTAINER UI
	[VUEX_UI_OVERLAY_CONTAINER_SHOW]: (state) => {
		state.overlayContainer.openState = true
	},

	[VUEX_UI_OVERLAY_CONTAINER_HIDE]: (state) => {
		state.overlayContainer.openState = false
	},

	[VUEX_UI_OVERLAY_CONTAINER_SET_STATE]: (state, payload) => {
		state.overlayContainer.openState = payload
	},

	[VUEX_UI_OVERLAY_CONTAINER_SET_COMPONENT]: (state, payload) => {
		if (payload.component) state.overlayContainer.component = payload.component
		if (payload.title) state.overlayContainer.title = payload.title
	},

	// DIALOG CONTAINER UI
	[VUEX_UI_DIALOG_CONTAINER_SHOW]: (state, payload) => {
		state.dialogContainer.openState = true

		if (payload.component) state.dialogContainer.component = payload.component
		if (payload.props) state.dialogContainer.props = payload.props
	},

	[VUEX_UI_DIALOG_CONTAINER_HIDE]: (state) => {
		state.dialogContainer.openState = false
	},

	[VUEX_UI_DIALOG_CONTAINER_SET_STATE]: (state, payload) => {
		state.dialogContainer.openState = payload
	},

	[VUEX_UI_DIALOG_CONTAINER_SET_COMPONENT]: (state, payload) => {
		if (payload.component) state.dialogContainer.component = payload.component
	},

	// LOGIN CONTAINER
	[VUEX_UI_LOGIN_CONTAINER_SHOW]: (state, payload) => {
		state.loginContainer.openState = true
	},

	[VUEX_UI_LOGIN_CONTAINER_HIDE]: (state, payload) => {
		state.loginContainer.openState = false
	},

	[VUEX_UI_LOGIN_CONTAINER_SET_STATE]: (state, payload) => {
		state.loginContainer.openState = payload
	},

	// NOTIFICATIONS CONTAINER UI
	[VUEX_UI_NOTIFICATIONS_CONTAINER_SHOW]: (state, payload) => {
		if (payload.component) state.notificationsContainer.component = payload.component
		if (payload.data) state.notificationsContainer.data = payload.data
		state.notificationsContainer.timeout = (payload.timeout) ? payload.timeout : VUEX_UI_NOTIFICATIONS_CONTAINER_DEFAULT_DELAY

		state.notificationsContainer.openState = true
	},

	[VUEX_UI_NOTIFICATIONS_CONTAINER_HIDE]: (state) => {
		state.notificationsContainer.openState = false
	},

	[VUEX_UI_NOTIFICATIONS_CONTAINER_SET_STATE]: (state, payload) => {
		state.notificationsContainer.openState = payload
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
