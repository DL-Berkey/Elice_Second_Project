import styled from "styled-components";

interface StyleProps {
    bgColor?: string;
    bottom?: string;
    bgImg?: string;
}

export const ContainerWrap = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

//--------------Header--------------
export const Header = styled.header`
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    width: 100%;
    height: 80px;
    display: flex;
    z-index: 1;
    justify-content: space-between;
`;

export const Logo = styled.p`
    height: 100%;
    line-height: 80px;
    width: 100px;
    text-align: center;
`;

export const Nav = styled.nav`
    height: 100%;
    line-height: 80px;
    width: 50%;
    max-width: 900px;
    display: flex;
    justify-content: space-around;
    p {
        a {
            white-space: nowrap;
        }
    }
`;

//--------------Slides Nav--------------

export const SectionNav = styled.ul`
    position: absolute;
    right: 50px;
    top: calc(50% - 90px);
    z-index: 2;
    height: 180px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    li {
        width: 100%;
        height: 20px;
        background-color: #d9d9d9;
        text-align: center;
        line-height: 20px;
        list-style: none;
        font-size: 12px;
        border-radius: 100px;
        padding: 0px 5px;
        box-sizing: content-box;
        transition: all 0.7s;
    }
`;

//--------- Slides Contents -----------
export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: teal;
    position: absolute;
    z-index: 0;
    left: 0;
    transition: all 0.7s;
`;

export const Section = styled.div<StyleProps>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.bgColor};
    color: #fff;

    bottom: ${(props) => props.bottom};
    //동적으로 못들어감
    /*
        읽고 끝임
        업데이트 안됨
    */
    background-image: ${(props) => props.bgImg};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    h3 {
        width: 100%;
        text-align: center;
        font-size: 30px;
        margin-top: 10%;
    }
`;

export const CarbonGraph = styled.div`
    width: 60%;
    height: 50%;
    margin: 10% auto 0;
    background-color: #e8e8e8;
    opacity: 0.5;
    border-radius: 20px;
`;

export const Section1Box = styled.div`
    margin: 400px auto 0;
    width: auto;
    height: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        h2 {
            font-size: 50px;
            padding-bottom: 40px;
        }
        p {
            font-size: 20px;
        }
    }

    & > p {
        button {
            background-color: #8075bf;
            width: 330px;
            height: 60px;
            border: none;
            border-radius: 100px;
            cursor: pointer;
            font-size: 20px;
        }
    }
`;

export const Section3Box = styled.div`
    margin: 200px auto 0;
    width: auto;
    height: 40%;
    text-align: center;

    div {
        h2 {
            font-size: 50px;
            padding-bottom: 40px;
        }
        p {
            font-size: 20px;
        }
    }
`;