import React, {Component} from "react";
import Header from "./GeneralComponents/Header";
import PropTypes from "prop-types";


class Points extends Component {

    logOut = () =>{
        this.props.logOut();
    };

    render() {
        return (
            <div>
                <div>
                    <Header/>
                    <ul className="header">
                        <li>
                            <button onClick={this.logOut}>
                                Выйти в окно
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='content'>
                    <div className='wrapper'>
                        <h2>ТОЧЕЧКИ</h2>
                        <div>
                            <p>The easiest thing to do is post on
                                our <a href="http://forum.kirupa.com">forums</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Points.propTypes = {
    auth: PropTypes.bool.isRequired,
    redirect: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,

};

export default Points;