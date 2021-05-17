import produce from "immer";
import { ViewStoryActions } from "./actions";
import { IViewStoryState } from "./state";





const initialState: IViewStoryState = {
    loadedStory: {
        scenes: {
            "scene-01": {
                id: "scene-01",
                next: "scene-02",
                prev: null,
                type: 'visual-novel-dialog',
                background: {
                    type: 'still-image',
                    backgroundSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6749%2Fca2cfbf1b2dd449ea6a76a88fca8d5eb2de6e9c3_00.jpg&f=1&nofb=1"
                },
                dialog: {
                    displayMode: "toggled-on",
                    scrollSpeed: 1,
                    dialog: "Hi i is big pog visual novel dialog box"
                },
                characterSprites: {
                    sprites: [
                        {
                            props: {
                                effects: "",
                                spriteSrc: "https://i.redd.it/tx187kf8wr301.png",
                                position: "center",
                                spriteCssClass: ""
                            }
                        }
                    ]
                },
                sound: {
                    loop: false,
                    src: ""
                }
            },
            "scene-02": {
                id: "scene-02",
                next: "scene-03",
                prev: "scene-01",
                type: 'visual-novel-dialog',
                background: {
                    type: 'still-image',
                    backgroundSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6749%2Fca2cfbf1b2dd449ea6a76a88fca8d5eb2de6e9c3_00.jpg&f=1&nofb=1"
                },
                dialog: {
                    displayMode: "toggled-on",
                    scrollSpeed: 1,
                    dialog: "i can auto read and stuff"
                },
                characterSprites: {
                    sprites: [
                        {
                            props: {
                                effects: "",
                                spriteSrc: "https://i.redd.it/tx187kf8wr301.png",
                                position: "center",
                                spriteCssClass: ""
                            }
                        }
                    ]
                },
                sound: {
                    loop: false,
                    src: ""
                }
            },
            "scene-03": {
                id: "scene-03",
                next: null,
                prev: "scene-02",
                type: 'visual-novel-dialog',
                background: {
                    type: 'still-image',
                    backgroundSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6749%2Fca2cfbf1b2dd449ea6a76a88fca8d5eb2de6e9c3_00.jpg&f=1&nofb=1"
                },
                dialog: {
                    displayMode: "toggled-on",
                    scrollSpeed: 1,
                    dialog: "pls gib me gr8 art assets"
                },
                characterSprites: {
                    sprites: [
                        {
                            props: {
                                effects: "",
                                spriteSrc: "https://i.redd.it/tx187kf8wr301.png",
                                position: "center",
                                spriteCssClass: ""
                            }
                        }
                    ]
                },
                sound: {
                    loop: false,
                    src: ""
                }
            }
        }
    },
    currentScene: {
        id: "scene-01",
        prev: null,
        next: "scene-02",
        type: 'visual-novel-dialog',
        background: {
            type: 'still-image',
            backgroundSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6749%2Fca2cfbf1b2dd449ea6a76a88fca8d5eb2de6e9c3_00.jpg&f=1&nofb=1"
        },
        dialog: {
            displayMode: "toggled-on",
            scrollSpeed: 1,
            dialog: "Hi i is big pog visual novel dialog box"
        },
        characterSprites: {
            sprites: [
                {
                    props: {
                        effects: "",
                        spriteSrc: "https://i.redd.it/tx187kf8wr301.png",
                        position: "center",
                        spriteCssClass: ""
                    }
                }
            ]
        },
        sound: {
            loop: false,
            src: ""
        }
    }
}


export default function viewStoryReducer(base: IViewStoryState = initialState, action: ViewStoryActions) {
    switch (action.type) {
        case "@@viewStory/MOUNT_STORY_EVENT":
            return produce(base, (draft) => {
                draft.currentScene = draft.loadedStory.scenes[action.eventId]
            })
    }
    return base
}