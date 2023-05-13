import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../styles/global.css'

export default function Footer() {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        copyright
      }
    }
  }
`)

const { copyright } = data.site.siteMetadata
  return (
    <div className='footer'>
        <p>{ copyright }</p>
    </div>
  )
}
