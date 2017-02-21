import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as oauthActions from '../../actions/oauthActions';

class LoginPage extends React.Component{
    
    constructor(props, context){
        super(props, context);
        
        console.log('props : ', props)
        this.state = {
            login: Object.assign({}, props.login),
            errors: {}
        };
        
        //binding
        this.submitForm = this.submitForm.bind(this);
    }
    
    
    
    submitForm(event){
        event.preventDefault();
       
        this.props.callOauth('test');
        
    }
    

    render(){
        console.log('intial props ', this.props);
        return (
            <div className="container login">
                <h1>{this.props.login.oauth.token}</h1>
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
    login: PropTypes.object.isRequired,
    callOauth: PropTypes.func.isRequired
}


function mapStateToProps(state, ownProps){
    console.log('----state in mapStateToProps :', state.login);
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch){
    return {
        callOauth: oauth => dispatch(oauthActions.callOauth(oauth))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

