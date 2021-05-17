import React from 'react';

import VisualNovelScene, { IVisualNovelSceneProps } from './VisualNovel/VisualNovelScene';

type StoryViewFactoryProps = IVisualNovelSceneProps;

export default function StoryViewFactory(props: any) {

    return (
        <>
            { props.viewProps.type === "visual-novel-dialog" &&
                <VisualNovelScene viewProps={props.viewProps} options={props.options} />
            }
        </>
    )
}
