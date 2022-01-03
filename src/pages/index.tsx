import { Breadcrumb } from 'antd'

import Layout from 'components/Layout'
import Main from 'components/Main'

export default function Home() {
  return (
    <Layout
      breadcrumb={
        <>
          <Breadcrumb.Item>Option</Breadcrumb.Item>
          <Breadcrumb.Item>1</Breadcrumb.Item>
        </>
      }
    >
      <Main />
    </Layout>
  )
}
