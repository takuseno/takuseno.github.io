import * as React from 'react'
import Helmet from "react-helmet"


const MetaData = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/ >
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700;900&family=Roboto:wght@500&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

export default MetaData
