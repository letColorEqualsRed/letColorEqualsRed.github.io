import React from 'react'

export interface ICharacterSpriteProps {
    position?: string,
    spriteSrc: string,
    spriteCssClass?: string,
    effects: string,
}

export default function CharacterSprite(props: {
    spriteProps: ICharacterSpriteProps
}) {
    const spriteProps = props.spriteProps;

    function getMediaSourceObject(spritePropsObject: ICharacterSpriteProps ): React.CSSProperties {
        return { 
            backgroundImage: `url("${spritePropsObject.spriteSrc}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }
    }

    return (
        <div style={getMediaSourceObject(spriteProps)}
            className={`sprite ${spriteProps.position ? spriteProps.position : ""} ${spriteProps.spriteCssClass ? spriteProps.spriteCssClass : ""}`}>
        </div>
    )
}