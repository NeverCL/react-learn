module.exports = {
    path: 'profile',

    getComponent(nextState, cb) {
        require.ensure([], require => cb(null, require('./profile/profile.jsx')), 'profile.min')
    }
}