import React from 'react';


import "../../css/visual-novel-dialog-view.scss";

export interface IVisualNovelMenuProps {
    handlers: {
        nextEvent?: () => void,
        prevEvent?: () => void
    }
}

export default function DialogOptionsLayer(props: { props: IVisualNovelMenuProps }) {
    const thisProps = props.props;

    return (
        <div className="dialog-options-container">
            <div className="dialog-options">
                <span onClick={thisProps.handlers.prevEvent}>Previous</span>
                <span onClick={thisProps.handlers.nextEvent}>Next</span>
            </div>
        </div>
    )
}