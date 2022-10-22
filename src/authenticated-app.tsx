import styled from '@emotion/styled';
import React from 'react';
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
        <Header>
            <HeaderLeft>
                <h3>LOGO</h3>
                <h3>项目</h3>
                <h3>用户</h3>
            </HeaderLeft>
            <HeaderRight>
                <button onClick={logout}>登出</button>
            </HeaderRight>
        </Header>
        <Nav>nav</Nav>
        <Main>
            <ProjectListScreen />
        </Main>
        <Aside>aside</Aside>
        <Footer>footer</Footer>
    </Container>
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem 1fr 6rem;
    grid-template-columns: 20rem 1fr 20rem;
    grid-template-areas: 
    "header header header"
    "nav main aside"
    "footer footer footer";
    height: 100vh;
    grid-gap: 10rem;
`

const Header = styled.header`
grid-area:header;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between ;
`
const HeaderLeft = styled.div`
display:flex;
align-items: center`
const HeaderRight = styled.div``
const Main = styled.main`grid-area:main`
const Nav = styled.nav`grid-area:nav`
const Aside = styled.aside`grid-area:aside`
const Footer = styled.footer`grid-area:footer`