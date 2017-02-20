import React from 'react';

class HomePage extends React.Component {
    render(){
        return (
            <div>
                <section id="intro" className="intro">
                    <div className="intro-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <div className="wow fadeInDown" data-wow-offset="0" data-wow-delay="0.1s">
                                        <img src="img/iphone.png" className="img-responsive" alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6 slogan">
                                    <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                        <h2>App landing page template</h2>
                                        <p>Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait. Illum ludus abhorreant te vim.</p>
                                        <p>Dicta fierent sea ne, no duo meis rebum facer, pri odio scripta tincidunt id. Per admodum inimicus iracundia ad </p>
                                    </div>
                                    <div className="buttons">
                                        <a href="#" className="btn btn-success btn-lg wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s"><i className="fa fa-android fa-2x"></i> Download<br /> <small>Android version 1.4</small></a>
                                        <a href="#" className="btn btn-info btn-lg wow fadeInRight" data-wow-duration="3s" data-wow-delay="0.3s"><i className="fa fa-apple fa-2x"></i> Download <br /> <small>iOs version 1.4</small></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider-short"></div>
                <section id="content1" className="home-section">
                    <div className="container">
                        <div className="row text-center heading">
                            <h3>Awesome features</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="wow fadeInLeft" data-wow-delay="0.2s">
                                    <img src="img/img-1.png" alt="" className="img-responsive" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="features">
                                        <i className="fa fa-check fa-2x circled bg-skin float-left"></i>
                                        <h5>Modern interface</h5>
                                        <p>Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut utamur molestiae vix, graecis eligendi ne. </p>
                                    </div>
                                <div className="features">
                                    <i className="fa fa-check fa-2x circled bg-skin float-left"></i>
                                    <h5>Easy to use</h5>
                                    <p>Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut utamur molestiae vix, graecis eligendi ne. </p>
                                </div>
                                <div className="features">
                                    <i className="fa fa-check fa-2x circled bg-skin float-left"></i>
                                    <h5>Free updates</h5>
                                    <p>Lorem ipsum dolor sit amet, nec te mollis utroque honestatis, ut utamur molestiae vix, graecis eligendi ne. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
            </div>
        );
    }
}

export default HomePage;
