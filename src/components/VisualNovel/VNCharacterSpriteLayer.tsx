import React from 'react';

import CharacterSprite, { ICharacterSpriteProps } from './CharacterSprite';

export interface IVisualNovelDialogCharacterSpritesProps {
    sprites: {
        props: ICharacterSpriteProps
    }[]
}


export default function CharacterSpriteLayer(props: { props: IVisualNovelDialogCharacterSpritesProps }) {
    let { sprites } = props.props


    return (
        <div className="character-sprite-layer">
            { 
                sprites.map(sprite => <CharacterSprite spriteProps={sprite.props}/>) 
            }
        </div>
    )
}