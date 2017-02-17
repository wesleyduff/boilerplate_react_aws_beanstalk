import React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="wrapper">
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;