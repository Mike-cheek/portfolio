import React from 'react'
import {Link} from 'gatsby'
import SEO from '../components/seo/seo'
import Layout from '../components/layout/layout'
// import ReactGA from 'react-ga4'

import Rocket from '../components/rocket/rocket'
// import {collection, doc, updateDoc, increment} from 'firebase/firestore'
// import {database} from '../../firebaseConfig'

const NotFoundPage = (): JSX.Element => {
  // const dbInstance = collection(database, 'pages')
  // const fs = doc(dbInstance, '404')
  // const update = async () => {
  //   await updateDoc(fs, {
  //     times: increment(1),
  //   })
  // }

  // useEffect(() => {
  //   update()
  // }, [])

  return (
    <>
      <SEO title={'Not found'} pathname={'/404/'} />
      <Layout>
        <h1 style={{color: 'var(--pink)'}}>Page not found</h1>
        <span style={{textAlign: 'center', marginBottom: '100px'}}>
          Did you lose your way while navigating?
          <Rocket />
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/" className="buttonStyle">
            GO HOME
          </Link>
        </span>
      </Layout>
    </>
  )
}

export default NotFoundPage
