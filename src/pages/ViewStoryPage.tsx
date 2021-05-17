import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StoryViewFactory from '../components/StoryViewer';
import { IVisualNovelSceneProps } from '../components/VisualNovel/VisualNovelScene';

import "../css/story-viewer.scss";
import { IRootState } from '../store';

export default function ViewStoryPage() {
    const demoStory = useSelector((state: IRootState) => state.viewStory.loadedStory);
    let [currentSceneIndex, setCurrentSceneIndex] = useState<string | null>('scene-01');

    let demoScene: IVisualNovelSceneProps | null = currentSceneIndex ? demoStory.scenes[currentSceneIndex] : null;

    let options = {
        handlers: {
            nextEvent:
                (demoScene && demoScene.next) ? () => {
                    setCurrentSceneIndex((curr) => demoScene!.next)
                } : null,
            prevEvent:
                (demoScene && demoScene.prev) ? () => {
                    setCurrentSceneIndex((curr) => demoScene!.prev)
                } : null
        }
    }

    return (
        <div>
            <h1>View A Story</h1>
            <div className="story-viewer-container">
                {demoScene &&
                    <div className="story-viewer">
                        <StoryViewFactory viewProps={demoScene} options={options} />
                    </div>
                }
            </div>
        </div >
    )
}