import { IVisualNovelSceneProps } from "../../components/VisualNovel/VisualNovelScene";


type Scene = IVisualNovelSceneProps

export interface IViewStoryState {
    loadedStory: {
        scenes: {
            [key: string]: Scene
        }
    },
    currentScene: Scene | null,
}