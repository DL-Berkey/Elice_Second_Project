import { useState, useRef, MouseEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
import {
    Container,
    Form,
    Input,
    OKButton,
    XButton,
    LogoContainer,
    Label,
    TopImage,
    SecondContainer,
    SecondContainer1,
    Select,
} from "../styles/pages/signup-style";
import { signup, myInfo } from "@/api/user";
import { Logo } from "@/styles/common";
import errorRecoil from "@/recoil/errorRecoil";
import userInfo from "@/recoil/user";
import { useSetRecoilState, useRecoilState } from "recoil";
const UserInfo = () => {
    const [userInfo, setUserInfo] = useRecoilState(userInfo);
    const nickname = useRef<HTMLInputElement>(null);
    const introduce = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const passwordok = useRef<HTMLInputElement>(null);
    const id = useRef<HTMLInputElement>(null);
    const region = useRef<HTMLSelectElement>(null);
    const age = useRef<HTMLSelectElement>(null);
    const gender = useRef<HTMLInputElement>(null);
    const [ValidationCheck, setValidationCheck] = useState(false);
    const [inputStatus, setInputStatus] = useState("");
    const setError = useSetRecoilState(errorRecoil);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            getUserInfo();
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    const getUserInfo = async () => {
        await myInfo().then((res) => {
            if (res === null) {
                return;
            }
            console.log(res);
            setUserInfo(res.data);
        });
    };
    console.log();
    const handleClickRadioButton = (radioBtnName: string) => {
        setInputStatus(radioBtnName);
        console.log(radioBtnName);
        console.log(inputStatus);
    };
    function isvalidationtrue() {
        if (
            email.current == null ||
            introduce.current == null ||
            password.current == null ||
            passwordok.current == null ||
            id.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            region.current == null
        ) {
            return;
        }
        if (
            email.current?.value == "" ||
            introduce.current?.value == "" ||
            password.current?.value == "" ||
            passwordok.current?.value == "" ||
            id.current?.value == "" ||
            nickname.current?.value == "" ||
            gender.current?.value == "" ||
            age.current?.value == "" ||
            region.current?.value == "" ||
            region.current?.value == "해당없음"
        ) {
            setValidationCheck(false);
            return;
        }
        setValidationCheck(true);
    }
    let formData = {
        email: "",
        introduce: "",
        nickname: "",
        password: "",
        id: "",
        age: "",
        region: "",
        gender: "",
    };
    const validationTrue = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        isvalidationtrue();
    };
    const onClickPrevent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };
    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (
            email.current == null ||
            introduce.current == null ||
            password.current == null ||
            passwordok.current == null ||
            id.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            region.current == null
        ) {
            return;
        }

        formData = {
            email: email.current?.value,
            introduce: introduce.current?.value,
            password: password.current?.value,
            id: id.current?.value,
            nickname: nickname.current?.value,
            gender: inputStatus,
            age: age.current?.value,
            region: region.current?.value,
        };

        const result: any = await signup(formData);

        if (result?.response?.status != undefined) {
            console.log(result?.response?.data);
            setError({
                isError: true,
                message: result?.response?.data?.message,
            });
            return;
        }
        navigate(ROUTES.Home.path);
    };

    function selectnum() {
        var num = [];
        for (var i = 20; i < 99; i++) {
            num.push(<option value={i}>{i}세</option>);
        }
        return num;
    }
    return (
        <>
            <TopImage />
            <Container>
                <div>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <SecondContainer>
                        <SecondContainer1>
                            <Form>
                                <Label>아이디</Label>
                                <Input placeholder="아이디" name="id" ref={id} disabled={true} />

                                <Label>이메일</Label>
                                <Input
                                    type="email"
                                    placeholder="이메일을 입력하세요."
                                    name="email"
                                    ref={email}
                                />
                                <Label>닉네임</Label>
                                <Input
                                    type="id"
                                    placeholder="닉네임을 입력하세요."
                                    name="nickname"
                                    ref={nickname}
                                />
                                <Label>인사말</Label>
                                <Input
                                    placeholder="인사말을 입력하세요."
                                    name="introduce"
                                    ref={introduce}
                                />
                                <Label>성별</Label>
                                <div>
                                    <span>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="남"
                                            defaultChecked={inputStatus === "남"}
                                            onClick={() => handleClickRadioButton("남")}
                                            ref={gender}
                                        ></input>
                                        <label style={{ marginRight: "40px" }}>남</label>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="여"
                                            defaultChecked={inputStatus === "여"}
                                            onClick={() => handleClickRadioButton("여")}
                                            ref={gender}
                                        ></input>
                                        여
                                    </span>
                                </div>
                            </Form>
                        </SecondContainer1>
                        <SecondContainer1>
                            <Form>
                                <Label>비밀번호</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="password"
                                    ref={password}
                                    maxLength={8}
                                />
                                <Label>비밀번호 확인</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="passwordok"
                                    ref={passwordok}
                                    maxLength={8}
                                />
                                <Label>나이</Label>
                                <Select defaultValue="1" ref={age} name="age">
                                    {selectnum()}
                                </Select>
                                <Label>지역</Label>
                                <Select defaultValue="해당없음" name="local" ref={region}>
                                    <option value="해당없음">해당없음</option>
                                    <option value="서울">서울</option>
                                    <option value="경기도">경기도</option>
                                    <option value="강원도">강원도</option>
                                    <option value="충청도">충청도</option>
                                    <option value="경상도">경상도</option>
                                    <option value="전라도">전라도</option>
                                </Select>
                                {ValidationCheck ? (
                                    <OKButton onClick={onClick} onMouseEnter={validationTrue}>
                                        회원 가입하기
                                    </OKButton>
                                ) : (
                                    <XButton onClick={onClickPrevent} onMouseEnter={validationTrue}>
                                        회원 가입하기
                                    </XButton>
                                )}
                            </Form>
                        </SecondContainer1>
                    </SecondContainer>
                </div>
            </Container>
        </>
    );
};

export default UserInfo;