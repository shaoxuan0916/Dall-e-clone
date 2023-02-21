export type FormType =  {
    name:string,
    prompt: string,
    photo:string
}

export type FormFieldType = {
    labelName:string,
    type:string,
    name:string,
    placeholder:string,
    value:any,
    handleChange: (e:any) => void,
    isSurpriseMe?: boolean,
    handleSurpriseMe?: () => void
}