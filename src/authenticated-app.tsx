import styled from '@emotion/styled';
import React from 'react';
import { Row } from './components/lib';
import { useAuth } from './context/auth-context';
import { ReactComponent as SoftwareLogo } from './assets/software-logo.svg';


import { ProjectListScreen } from "./screens/project-list"
import { Dropdown, Menu } from 'antd';
/**
 * grid 二维布局 从布局出发 
 * flex 一维布局 从内容出发
 * 一维布局： 只有横向 或纵向的布局
 * 二维布局：既有横向又有纵向的布局
 * 从布局出发：先规划网格（数量固定），然后再把元素往里填充
 * 从内容出发：先有一组内容（数量不固定），然后希望他们均匀的分布在容器中，
 * 由内容自己的大小决定占据的空间
 */
export const AuthenticatedApp = () => {
    const { logout, user } = useAuth()
    return <Container>
        <Header between={true}>
            <HeaderLeft gap={true}>
                <SoftwareLogo width={'18rem'} color={'rgb(38,132, 255)'} />
                <h2>项目</h2>
                <h2>用户</h2>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown overlay={<Menu>
                    <Menu.Item key={'logout'}>
                        <a onClick={logout}>登出</a>
                    </Menu.Item>
                </Menu>}>
                    <a onClick={e => e.preventDefault()}>
                        Hi, {user?.name}
                    </a>
                </Dropdown>
                {/* <button onClick={logout}>登出</button> */}
            </HeaderRight>
        </Header>
        <Main>
            <ProjectListScreen />
        </Main>
    </Container>
}

const Container = styled.div`
    height: 100vh;
`

const Header = styled(Row)`
    padding: 1.2rem 3.2rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1 );
    z-index: 1;
`
const HeaderLeft = styled(Row)`
display:flex;
align-items: center`
const HeaderRight = styled.div``
const Main = styled.main`grid-area:main`