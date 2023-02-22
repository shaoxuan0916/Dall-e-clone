// @ts-ignore
import FileSaver from "file-saver"
import { surpriseMePrompts } from "../constants";

// @ts-ignore
export function getRandomPropmt(prompt: string) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt:string = surpriseMePrompts[randomIndex]

    if(randomPrompt === prompt) return getRandomPropmt(prompt)

    return randomPrompt
}

export async function downloadImage(_id:string, photo:string){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}