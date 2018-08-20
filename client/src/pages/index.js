import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import Header from '../components/header'
import styles from './home.module.css'

const IndexPage = ({ siteTitle }) => (
  <div>
    <Header />
    <div className={styles.home}>
      <h1>Curated Music Right at Your Fingertips</h1>
      <img src={withPrefix('/img/resonance-phone-outline.svg')} alt="Logo" />;
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
