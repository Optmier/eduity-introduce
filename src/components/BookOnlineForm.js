import React, { useState, useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { useBookDispatch } from '../context/BookContext';
import { dbCtrl } from '../database/DBCtrl';
import '../styles/bookonlineform.scss';

const EdCheckbox = withStyles({
    root: {
        '&$checked': {
            color: '#2c7b6c',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const EdButton = withStyles((theme) => ({
    root: {
        border: '1px solid #2c7b6c',
        color: '#2c7b6c',
        height: '48px',
        fontFamily: "'Montserrat', 'Noto Sans KR'",
        fontSize: '16px',
        '&:hover': {
            backgroundColor: '#2c7b6c32',
            borderColor: '#225e53',
            borderWidth: '2px',
            color: '#225e53',
        },
        '&:active': {
            backgroundColor: '#2c7b6c32',
            borderColor: '#225e53',
            color: '#225e53',
        },
    },
}))(Button);

const EdTextField = withStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: '#2c7b6c',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#2c7b6c',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: '#2c7b6c',
                borderWidth: '2px',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#2c7b6c',
                borderWidth: '3px',
            },
        },
    },
}))(TextField);

const EdSelectForm = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#2c7b6c',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#2c7b6c',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderWidth: '2px',
                borderColor: '#2c7b6c',
            },
            '&.Mui-focused fieldset': {
                borderWidth: '3px',
                borderColor: '#2c7b6c',
            },
        },
    },
})(FormControl);

function BookOnlineForm() {
    const dispatch = useBookDispatch();

    const [agree, setAgree] = useState(false);
    const [orderType, setOrderType] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [inputs, setInputs] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        question: '',
    });
    const [errors, setErrors] = useState({
        name: false,
        age: false,
        phone: false,
        email: false,
        question: false,
        orderType: false,
        serviceType: false,
    });

    const { name, age, phone, email, question } = inputs;

    /******************** input State ********************/
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [name]: value,
        }));

        setErrors((errors) => ({
            ...errors,
            [name]: false,
        }));
    }, []);

    /******************** select State ********************/
    const handleSetOrderType = (event) => {
        setOrderType(event.target.value);
        setErrors((errors) => ({
            ...errors,
            ['orderType']: false,
        }));
    };
    const handleSetServiceType = (event) => {
        setServiceType(event.target.value);
        setErrors((errors) => ({
            ...errors,
            ['serviceType']: false,
        }));
    };

    const handleSetAgree = (event) => {
        setAgree(event.target.checked);
    };

    const submitForm = () => {
        /******************** error 체크 ********************/
        Object.keys(inputs).map((name) => {
            if (inputs[name].trim() === '') {
                setErrors((errors) => ({
                    ...errors,
                    [name]: true,
                }));
            }
        });

        if (serviceType === '') {
            setErrors((errors) => ({
                ...errors,
                ['serviceType']: true,
            }));
        }
        if (orderType === '') {
            setErrors((errors) => ({
                ...errors,
                ['orderType']: true,
            }));
        }

        /****************************************************/
        if (Object.values(inputs).every((elem) => elem.trim() !== '') && serviceType !== '' && orderType !== '') {
            if (agree) {
                dispatch({
                    type: 'BOOK',
                    book: {
                        name: name,
                        age: age,
                        phone: phone,
                        email: email,
                        question: question,
                        orderType: orderType,
                        serviceType: serviceType,
                        agree: agree,
                    },
                });

                dbCtrl.submitBooks(
                    {
                        ordName: inputs.name,
                        ordAge: inputs.age,
                        ordPhone: inputs.phone,
                        ordEmail: inputs.email,
                        ordType: orderType,
                        ordService: serviceType,
                        ordQuestion: inputs.question,
                    },
                    {
                        onSuccess() {
                            alert('상담 신청이 접수되었습니다!\n추후 문자 또는 메일로 안내해 드리겠습니다.');
                            setInputs({
                                name: '',
                                age: '',
                                phone: '',
                                email: '',
                                question: '',
                            });
                            setOrderType('');
                            setServiceType('');
                            setAgree(false);
                            document.location.href = '/';
                        },
                        onError(err) {
                            alert('에러가 발생하였습니다.\n다음 코드를 문의 해주시면 신속히 처리해 드리겠습니다.\n' + err);
                        },
                    },
                );
            } else {
                alert('원활한 상담 신청을 위해 정보 제공에 동의해 주시기 바랍니다.');
            }
        } else {
            alert('모든 항목을 채워주세요.');
        }
    };

    return (
        <div className="book-online-root ko">
            <div className="responsive">
                <div className="header">
                    <p className="main">교육 상담 신청</p>
                    {/* <p className="sub">친절하게 상담해 드리겠습니다 :)</p> */}
                </div>
                <div className="contents">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <EdTextField
                                required
                                error={errors.name}
                                fullWidth
                                id="customer-name"
                                name="name"
                                value={name}
                                label="성함"
                                variant="outlined"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EdTextField
                                required
                                error={errors.age}
                                fullWidth
                                id="customer-age"
                                name="age"
                                value={age}
                                label="학년 또는 나이"
                                variant="outlined"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EdTextField
                                required
                                error={errors.phone}
                                fullWidth
                                id="customer-phone"
                                name="phone"
                                value={phone}
                                label="연락처"
                                variant="outlined"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EdTextField
                                required
                                error={errors.email}
                                fullWidth
                                id="customer-email"
                                name="email"
                                value={email}
                                label="이메일"
                                variant="outlined"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EdSelectForm required error={errors.orderType} fullWidth variant="outlined">
                                <InputLabel id="type-label">상담 유형</InputLabel>
                                <Select required id="type" value={orderType} onChange={handleSetOrderType} label="상담 유형">
                                    <MenuItem value={'방문상담'}>방문상담</MenuItem>
                                    <MenuItem value={'전화상담'}>전화상담</MenuItem>
                                </Select>
                            </EdSelectForm>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EdSelectForm required error={errors.serviceType} fullWidth variant="outlined">
                                <InputLabel id="services-label">상담 신청 서비스</InputLabel>
                                <Select
                                    id="services"
                                    name="serviceType"
                                    value={serviceType}
                                    onChange={handleSetServiceType}
                                    label="상담 신청 서비스"
                                >
                                    <MenuItem value={'SAT Writing'}>SAT Writing</MenuItem>
                                    <MenuItem value={'AMC'}>AMC</MenuItem>
                                    <MenuItem value={'AP 수학'}>AP 수학</MenuItem>
                                    <MenuItem value={'Consulting'}>Consulting</MenuItem>
                                    <MenuItem value={'진로 기획'}>진로 기획</MenuItem>
                                </Select>
                            </EdSelectForm>
                        </Grid>
                        <Grid item xs={12}>
                            <EdTextField
                                required
                                error={errors.question}
                                fullWidth
                                id="question"
                                name="question"
                                value={question}
                                onChange={onChange}
                                label="상담하실 내용"
                                variant="outlined"
                                multiline
                                rows={6}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <EdTextField
                                required
                                fullWidth
                                id="question"
                                label="개인정보 수집 및 이용 동의"
                                variant="outlined"
                                multiline
                                rows={6}
                                InputProps={{
                                    readOnly: true,
                                }}
                                defaultValue={`1. 개인정보 수집 항목
 신청자 정보(이름, 생년월일, 전화번호, 이메일 등)
                                    
2. 개인정보의 수집 및 이용 목적
 신청자 관리
                                    
3. 개인정보의 보유 및 이용기간
 보유기간 : 처리목적 달성시
                                    
4. 개인정보 파기절차 및 방법
 에듀이티는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기 절차 및 방법은 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 (3. 개인정보의 보유 및 이용기간) 일정 기간 저장된 후 파기됩니다. 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.`}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<EdCheckbox checked={agree} onChange={handleSetAgree} name="agree" />}
                                label="개인정보 수집 및 이용에 동의합니다."
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <EdButton fullWidth variant="outlined" onClick={submitForm}>
                                신청하기
                            </EdButton>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BookOnlineForm);
