import React from 'react'
import { connect } from 'react-redux'

export function reqAuth(Component) {

    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth(this.props.user)
        }
        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps.user)
        }
        checkAuth(user) {
            if (!user.auth) {
                this.props.dispatch({
                    type: 'ROUTING',
                    payload: {
                        method: 'replace',
                        nextUrl: '/login'
                    }
                })
            }
        }
        render() {
            return (
                <div>
                    {this.props.user.auth === true
                        ? <Component {...this.props} />
                        : null
                    }
                </div>
            )
        }
    }

    function mapStateToProps(store) {
        return {
            user: store.user
        }
    }

    return connect(mapStateToProps)(AuthenticatedComponent)
}