import React from 'react'
import { Badge } from '@material-ui/core'
import { img_300, unavailable } from '../config/config'
import './SingleContent.css'
import ContentModal from './ContentModal/ContentModal'
const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (

        <ContentModal>
            <Badge
                badgeContent={vote_average}
                color={vote_average > 6 ? "Primary" : "secondary"}
            />
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt="title" />
            <b className='title'>{title}</b>
            <span className='subtitle'>
                {media_type === 'tv' ? "Type: TV Series" : "Type: Movie"}
                <span className='subtitle'>{date}</span>
            </span>
        </ContentModal>
    )
}

export default SingleContent
