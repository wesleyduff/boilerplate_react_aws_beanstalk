import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as oauthActions from '../../actions/oauthActions';

class LoginPage extends React.Component{
    
    constructor(props, context){
        super(props, context);
        
        this.state = {
            oauth: {
                url: "http://www.cnn.com"
            }
        };
        
        //binding
        this.submitForm = this.submitForm.bind(this);
    }
    
    
    submitForm(event){
        event.preventDefault();
        const oauth = this.state.oauth;
        oauth.url = 'updateUrlFromSubmit in LoginPage';
        
        this.setState({oauth: oauth});
        console.log('In Submit Form set state --------- ', this.state);
        this.props.callOauth(this.state.oauth);
    }
    

    render(){
        console.log('initial state: ', this.state);
        return (
            <div className="container login">
                <div className="row">
                    <div className="col-xs-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="example-name">Name</label>
                                <input type="text" className="form-control" id="example-name" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="example-email">Email</label>
                                <input type="email" className="form-control" id="example-email" placeholder="e-mail" />
                            </div>
                            <button onClick={this.submitForm} type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};


LoginPage.propTypes = {
    oauth: PropTypes.object.isRequired,
    callOauth: PropTypes.func.isRequired
}


function mapStateToProps(state, ownProps){
    return {
        oauth: state.oauth
    };
}

function mapDispatchToProps(dispatch){
    return {
        callOauth: oauth => dispatch(oauthActions.callOauth(oauth))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

