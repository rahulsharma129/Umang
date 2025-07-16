import React from 'react'
import { Helmet } from 'react-helmet'

const Title = ({ title = "chat App", description = " this is the chat app called umang"}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        </Helmet>
  )
};

export default Title;