import { surpriseMePrompts } from "../constants";

// @ts-ignore
export function getRandomPropmt(prompt: string) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt:string = surpriseMePrompts[randomIndex]

    if(randomPrompt === prompt) return getRandomPropmt(prompt)

    return randomPrompt
}