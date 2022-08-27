import React from 'react'
import './index.scss'

export interface ICardProps {
  imgSrc: string
  imgLink?: string
  title: string
  children: React.ReactNode
}

const Card = ({
  imgSrc,
  imgLink,
  title,
  children
}: ICardProps) => {
  return (
    <div className="Card">
      <div className="Card-img">
        {
          imgLink
            ? (
                <a href={imgLink} target='_blank' rel='noreferrer'><img src={imgSrc} /></a>
              )
            : <img src={imgSrc} />
        }
      </div>
      <div className="Card-title">{title}</div>
      <div className="Card-content">
        {children}
      </div>
    </div>
  )
}

export default Card
