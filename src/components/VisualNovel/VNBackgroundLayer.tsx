import React from 'react';


export interface IVisualNovelBackgroundProps {
    type: "still-image",
    backgroundSrc: string,
}

export default function BackgroundLayer(props: { props: IVisualNovelBackgroundProps }) {
    let { backgroundSrc, type } = props.props

    function getMediaSourceObject() {
        switch(type) {
            case "still-image":
                return {
                    backgroundImage: `url("${backgroundSrc}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                } 
        }
    }

    return (
        <>
            { type === "still-image"
                && <div className="scene-background" style={ getMediaSourceObject() }> </div>
            }
        </>
    )
}