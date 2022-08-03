import React from "react";
import "../../../style.scss";
import "./Feedback.scss";

const Feedback = (props) => {
    return (
        <>
            {props.correctFeedback !== "" &&
                <div className="alert alert-success mb-2" role="alert">
                    {props.correctFeedback}
                </div>
            }

            {props.wrongFeedback !== "" &&
                <div className="alert alert-danger mb-2" role="alert">
                    {props.wrongFeedback}
                </div>
            }

            {props.noBalanceFeedback !== "" &&
                <div className="alert alert-primary mb-2" role="alert">
                    {props.noBalanceFeedback}
                </div>
            }
        </>
    );
}

export default Feedback;
