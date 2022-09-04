import React from 'react'
import './index.scss'

export interface ICardProps {
  imgSrc: string
  imgLink?: string
  title: string
  moreLink?: string
  author?: string
  children: React.ReactNode
}

const Card = ({
  imgSrc,
  imgLink,
  title,
  author,
  moreLink,
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
      <div className="Card-title">
        <div className="Card-title-main">{title}</div>
        <div className="Card-title-sub">
          <span className="Card-title-sub-title">{author}</span>
          <a className="Card-title-sub-endLink" href={moreLink} target='_blank' rel='noreferrer'><p>{'> '}more</p></a>
        </div>
      </div>
      <div className="Card-content">
        {children}
      </div>
    </div>
  )
}

export default Card
