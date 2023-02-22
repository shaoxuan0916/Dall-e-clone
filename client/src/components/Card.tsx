import React from "react"
import { download } from "../assets"
import { downloadImage } from "../utils"

interface ICardProps {
  _id: string
  name: string
  prompt: string
  photo: string
}

const Card: React.FC<any> = ({ _id, name, prompt, photo }) => {
  return (
    <>
      <div>Card</div>
    </>
  )
}

export default Card
