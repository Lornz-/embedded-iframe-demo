import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Demo</h1>
    <p>This is a react app embedded into an iFrame. The iFrame resizes automatically depending on its content.</p>

    <div className="iframe-container">
      <iframe id="iframe-demo" src="http://localhost:3000" sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{border: '0', width: '100%'}} />
    </div>
        
  </Layout>
)

export default IndexPage
