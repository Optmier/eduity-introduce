import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { IoIosArrowDown } from 'react-icons/io';

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
        padding: '1rem',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
            backgroundColor: '#F7F9FC',
        },

        '@media all and (max-width: 768px)': {
            padding: '1rem 0rem',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        fontWeight: '600',
        backgroundColor: 'white',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
            backgroundColor: '#F7F9FC',
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
            '& svg': {
                transition: 'all 0.5s',
                transform: 'rotate(180deg)',
            },
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);
export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <span className="faq-title">
                        01. 시선흐름 분석 서비스를 이용하기 위한 최소사양은 어떻게 되나요?
                        <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <span>
                        노트북은 최소 13인치, 최소 해상도는 1440*900(100%)이며, 웹캠은 720p 이상을 권장 드립니다. <br />웹 브라우저는 크롬
                        웹브라우저에 최적화 되어있습니다. 이외의 웹브라우저 사용 시, 다수의 버그가 발생할 수 있습니다.
                    </span>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <span className="faq-title">
                        02. 분석 테스트의 난이도는 어떻게 되나요? <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <span>
                        테스트는 TOFEL 문제와 에듀이티 자체 제작 문제로 선택이 가능합니다. TOFEL 문제는 난이도 중이며, 자체 제작 문제는
                        난이도 하입니다.
                    </span>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <span className="faq-title">
                        03. 분석 테스트의 양은 얼마나 되나요? <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <span>1개 set 당 5개의 문제로 총 3 set의 문제가 제공됩니다. 테스트 시간은 총 17분입니다.</span>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <span className="faq-title">
                        04. 시선흐름 분석 서비스를 모바일에서 이용할 수 있나요?
                        <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <span>
                        현재 분석 서비스는 웹 버전만 출시된 상태입니다. ‘결과 분석표’ 는 모바일에서 조회가 가능하나, <br /> ‘시선흐름
                        분석서비스’는 반드시 웹 브라우저와 함께 이용해주시면 감사하겠습니다.
                    </span>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <span className="faq-title">
                        05. 시선흐름 분석 서비스는 유료 서비스 인가요? <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <span>현재 시선흐름 분석 서비스는 베타버전으로 3번의 무료 체험 기회가 제공됩니다.</span>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
