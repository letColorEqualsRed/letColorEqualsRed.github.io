import React from 'react';
import AutoTextReader from './AutoTextReader';


export interface IVisualNovelDialogProps {
    dialog: string,
    scrollSpeed: number,
    displayMode: "toggled-on" | "toggled-off" | "disabled"
}

export default function DialogLayer(props: { props: IVisualNovelDialogProps }) {
    const thisProps = props.props

    return (
        <div className="dialog-box-container">
            <div className="dialog-box">
                <AutoTextReader props={{
                    dialog: thisProps.dialog,
                    scrollSpeed: thisProps.scrollSpeed
                }} />
            </div>
        </div>
    )
}