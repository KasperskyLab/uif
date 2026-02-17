import { useEffect, useMemo } from 'react'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import { Notification, Text, Sidebar, Tag, Space } from '@kaspersky/hexa-ui'
import styled from 'styled-components'

import { getAlertById } from './data/mockAlerts'
import { AlertListPage } from './pages/AlertListPage'
import { AlertAddPage } from './pages/AlertAddPage'
import { AlertCardPage } from './pages/AlertCardPage'

const B2bRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  min-height: 0;
`

const Header = styled.header`
  flex-shrink: 0;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
`

const Content = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 0;
`

const FLEX_MARGIN_LEFT = 400

const ListColumn = styled.div`
  width: ${FLEX_MARGIN_LEFT}px;
  flex-shrink: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const FlexLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 0;
  flex: 1;
`

function ListWithSidebar() {
  const { id } = useParams<{ id?: string }>()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isCreate = pathname.endsWith('/create')
  const alert = useMemo(
    () => (id ? getAlertById(Number(id)) : undefined),
    [id]
  )

  const sidebarVisible = isCreate || id != null
  const sidebarTitle = isCreate
    ? (
        <Text type="H4">Добавление алерта</Text>
      )
    : alert != null
      ? (
          <Space size={8} align="center">
            <Text type="H4">Alert details</Text>
            <Text type="H3">Alert {alert.id}</Text>
            <Tag mode="purple" size="small">
              {alert.status}
            </Tag>
          </Space>
        )
      : null

  const onClose = () => navigate('/b2b-typical-scenario')

  return (
    <FlexLayout>
      <ListColumn>
        <AlertListPage />
      </ListColumn>
      <Sidebar
        visible={sidebarVisible}
        flex
        mask={false}
        title={sidebarTitle}
        onClose={onClose}
      >
        {isCreate ? <AlertAddPage /> : id != null ? <AlertCardPage /> : null}
      </Sidebar>
    </FlexLayout>
  )
}

export function B2bTypicalScenarioApp() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.startsWith('/b2b-typical-scenario')) {
      const el = document.getElementById('layout-content-area')
      if (el) el.scrollTop = 0
    }
  }, [pathname])

  return (
    <B2bRoot>
      <Header>
        <Text type="H4">B2B Typical Scenario</Text>
      </Header>
      <Notification />
      <Content>
        <Routes>
          <Route path="/" element={<AlertListPage />} />
          <Route path="create" element={<ListWithSidebar />} />
          <Route path="entity/:id" element={<ListWithSidebar />} />
        </Routes>
      </Content>
    </B2bRoot>
  )
}
