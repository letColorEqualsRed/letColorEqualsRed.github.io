import React from 'react';

import "../../css/visual-novel-dialog-view.scss";

import BackgroundLayer, { IVisualNovelBackgroundProps } from './VNBackgroundLayer';
import CharacterSpriteLayer, { IVisualNovelDialogCharacterSpritesProps } from './VNCharacterSpriteLayer';
import DialogLayer, { IVisualNovelDialogProps } from './VNDialogLayer';
import DialogOptionsLayer, { IVisualNovelMenuProps } from './VNDialogOptionsLayer';

export default function VisualNovelScene(props: {
    viewProps: IVisualNovelSceneProps,
    options: IVisualNovelMenuProps
}) {
    const { viewProps, options } = props;

    return (
        <div className="vn-dialog scene-wrapper">
            {/* <SoundLayer props={viewProps.sound} /> */}
            <BackgroundLayer props={viewProps.background} />
            <CharacterSpriteLayer props={viewProps.characterSprites} />
            <DialogLayer props={viewProps.dialog} />
            <DialogOptionsLayer props={options} />
        </div>
    )
}

export interface IVisualNovelSceneProps {
    id: string,
    prev: string | null,
    next: string | null,
    type: "visual-novel-dialog",
    sound: {
        src: string,
        loop: boolean
    },
    background: IVisualNovelBackgroundProps
    characterSprites: IVisualNovelDialogCharacterSpritesProps,
    dialog: IVisualNovelDialogProps
}
