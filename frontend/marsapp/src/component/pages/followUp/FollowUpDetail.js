/**
 * Class: FollowUpDetail
 * Summary:
 *  Base file for showing contents of FollowUp Detail page.
 */


import React from "react";
import {connect} from "react-redux";
import FollowUpDetailForm from "../../forms/FollowUpDetailForm";
import api from "../../../api";
import ConfirmAlert from "../../utils/ConfirmAlert";
import ErrorAlert from "../../utils/ErrorAlert";

class FollowUpDetail extends React.Component {
    state = {
        isShowConfirm: false,
        isShowError: false,
        isShowConfirmMsg: "",
        isShowErrorMsg: "",
    }
    submit = data => {
        api.followUp.addFollowUp(data).then(res => {
            if (res) {
                this.onShowAlert("Saved follow up details" , false)
            }
        }).catch(error=>{
            this.onShowAlert("Failed to save follow up details" , true)

        })
    }

    onShowAlert = (message, isError) => {
        if (isError) {
            this.setState({
                    ...this.state,
                    isShowError: true,
                    isShowErrorMsg: message,
                },
                () => {
                    window.setTimeout(() => {
                        this.setState({
                            isShowError: false,
                            isShowErrorMsg: message,
                        })
                    }, 2000)
                });
        } else {
            this.setState({
                    ...this.state,
                    isShowConfirm: true,
                    isShowConfirmMsg: message,
                },
                () => {
                    window.setTimeout(() => {
                        this.setState({
                            isShowConfirm: false,
                            isShowConfirmMsg: message,
                        })
                    }, 2000)
                });
        }
    }

    remove = data => {
        api.followUp.removeFollowUpById(data.id).then(res=> {
                if (res) {
                    this.onShowAlert("Delete Successful", false);
                    this.props.history.push("/allFollowUp");
                }
            }
        ).catch(error=>{
            this.onShowAlert("Delete Failed" , true)
        });
    }

        render() {
        return (
            <div>
                <FollowUpDetailForm submit={this.submit} remove={this.remove}></FollowUpDetailForm>
                <ConfirmAlert message={this.state.isShowConfirmMsg} show={this.state.isShowConfirm}></ConfirmAlert>
                <ErrorAlert message={this.state.isShowErrorMsg} show={this.state.isShowError}></ErrorAlert>
            </div>
        );
    }
}

export default connect(null,)(FollowUpDetail);