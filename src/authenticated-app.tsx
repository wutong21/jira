import styled from '@emotion/styled';
import React from 'react';
import { Row } from './components/lib';
import { useAuth } from './context/auth-context';

import { ProjectListScreen } from "./screens/project-list"

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
    const { logout } = useAuth()
    return <Container>
        <Header between={true}>
            <HeaderLeft gap={true}>
                <h2>LOGO</h2>
                <h2>项目</h2>
                <h2>用户</h2>
            </HeaderLeft>
            <HeaderRight>
                <button onClick={logout}>登出</button>
            </HeaderRight>
        </Header>
        <Main>
            <ProjectListScreen />
        </Main>
    </Container>
}

const HeaderItemm = styled.h3`
margin-right: 3rem`

const Container = styled.div`
    height: 100vh;
`

const Header = styled(Row)`
`
const HeaderLeft = styled(Row)`
display:flex;
align-items: center`
const HeaderRight = styled.div``
const Main = styled.main`grid-area:main`