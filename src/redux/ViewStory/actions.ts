



export function mountStoryEvent(eventId: string) {
    return {
        type: "@@viewStory/MOUNT_STORY_EVENT" as "@@viewStory/MOUNT_STORY_EVENT",
        eventId: eventId
    }
}

export type ViewStoryActions = ReturnType<typeof mountStoryEvent>