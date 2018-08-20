import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div>
    <div className={styles.header}>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'grey',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
          resonance
        </Link>
      </h2>
    </div>
  </div>
)

export default Header
