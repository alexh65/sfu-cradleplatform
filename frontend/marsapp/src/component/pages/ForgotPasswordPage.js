// /**
//  * Class: ForgotPasswordPage
//  * Summary:
//  *  Contains the contents and functionality of the Forgot Password page.
//  */
//
// import React from "react";
// import PropTypes from "prop-types";
// import {connect} from "react-redux";
// import {Message} from "semantic-ui-react";
// import ForgotPasswordForm from "../forms/ForgotPasswordForm";
// import {resetPasswordRequest} from "../../actions/auth";
// import "../../App.css"
//
//
// class ForgotPasswordPage extends React.Component {
//     state = {
//         success: false
//     };
//
//     submit = data => console.log("reset password");
//     // this.props
//     //     .resetPasswordRequest(data)
//     //     .then(() => this.setState({ success: true })
//
//     // );
//
//     render() {
//         return (
//             <div className="ui-toolbar">
//
//                 {this.state.success ? (
//                     <Message>Email has been sent.</Message>
//                 ) : (
//                     <ForgotPasswordForm submit={this.submit}/>
//                 )}
//             </div>
//         );
//     }
// }
//
// ForgotPasswordPage.propTypes = {
//     resetPasswordRequest: PropTypes.func.isRequired
// };
//
// export default connect(null, {resetPasswordRequest})(ForgotPasswordPage);