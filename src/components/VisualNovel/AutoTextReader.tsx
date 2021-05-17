import React, { useEffect } from 'react';
import { useState } from 'react';

export interface IAutoTextReaderProps {
    dialog: string,
    scrollSpeed: number
}


export default function AutoTextReader(props: { props: IAutoTextReaderProps }) {
    const { dialog, scrollSpeed } = props.props
    let [textContent, setTextContent] = useState<string>("");
    let [autoScrollTask, setAutoScrollTask] = useState<any>(null);

    function interruptAutoScroll() {
        if (autoScrollTask) {
            clearInterval(autoScrollTask);
            setAutoScrollTask(null)
        };
        setTextContent(dialog)
    }

    useEffect(() => {
        async function autoScrollText() {
            let ii = 0;
            setAutoScrollTask(
                setInterval(() => {
                    if (ii < dialog.length) {
                        setTextContent((oldTextContent) => oldTextContent + dialog[ii])
                        ii++
                    } else {
                        clearInterval(autoScrollTask)
                        setAutoScrollTask(null)
                    }
                }, 20 * scrollSpeed)
            )
        }
        autoScrollText()
    }, [setTextContent])

    return (
        <span onClick={interruptAutoScroll} className='dialog-text'>{textContent}</span>
    )
}