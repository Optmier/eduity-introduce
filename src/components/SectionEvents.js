import React from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
import { Fade } from 'react-reveal';
import SectionWrapper from './SectionWrapper';
import '../styles/section_events.scss';
// import '../styles/cardview.scss';
import EventLists from '../datas/events.json';

const { events } = EventLists;
console.log(events);

const getDateString = (datetime, type) => {
    const dt = new Date(datetime);
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const weekEn = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
    let result = '';

    if (type === 'simple') {
        if (window.lang === 'ko') {
            result = `${dt.getMonth() + 1}월 ${dt.getDate()}일 (${week[dt.getDay()]})`;
        } else {
            result = `${dt.getMonth() + 1}/${dt.getDate()} (${weekEn[dt.getDay()]})`;
        }
    } else {
        if (window.lang === 'ko') {
            result = `
        ${dt.getFullYear()}년
        ${dt.getMonth() + 1}월
         ${dt.getDate()}일 
        (${week[dt.getDay()]})
        ${dt.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })}
        `;
        } else {
            result = `
        ${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}
        ${dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
        `;
        }
    }

    return result;
};

const EventCard = React.memo(function EventCard({ title, content, location, datetime, link, image }) {
    const MoreButton = withStyles(theme => ({
        root: {
            color: 'white',
            border: '1px solid #ffffffa8',
            borderRadius: 4,
            fontFamily: window.lang === 'ko' ? "'Noto Sans KR', sans-serif" : "'Montserrat', sans-serif",
            width: '144px',
            height: '46px',
        },
    }))(Button);

    const openEventLink = () => {
        const win = window.open(link, '_blank');
        win.focus();
    };

    return (
        <div className="event-card_wrapper">
            <div className="event-card">
                <div className="event-card_cover" style={{ backgroundImage: `url("${image}")` }}></div>
                <div className="event-card_events">
                    <div className="event-title">{title[window.lang]}</div>
                    <div className="event-before">
                        <div className="date">
                            {getDateString(datetime, 'simple')} | {location[window.lang]}
                        </div>
                    </div>
                    <div className="event-after">
                        <div className="date">{getDateString(datetime, 'normal')}</div>
                        <div className="location">{location[window.lang]}</div>
                        <div className="content">{content[window.lang]}</div>
                    </div>
                </div>
            </div>
            <div className="event-card_button-wrapper">
                <MoreButton variant="outlined" onClick={openEventLink}>
                    더 알아보기
                </MoreButton>
            </div>
        </div>
    );
});

function SectionEvents() {
    const filteredEvents = Object.keys(events).filter(
        (i, idx) => idx <= 2 && new Date(events[i].datetime) >= new Date().setDate(new Date().getDate() - 1),
    );
    return (
        <SectionWrapper height="100vh" no="-events" coverImage="bgcover-events" marginBottom={64} darker>
            <Fade bottom distance="72px" duration={800} fraction={1}>
                <div className="intro-header en">
                    <p>다가오는 이벤트</p>
                </div>
            </Fade>
            <div className="cards">
                <Grid container spacing={1}>
                    {filteredEvents.length < 1 ? (
                        <Fade bottom distance="72px" duration={800} fraction={1}>
                            <div className="notify-no-events">
                                <p>예정된 이벤트가 아직 없습니다.</p>
                            </div>
                        </Fade>
                    ) : (
                        filteredEvents.map((no, key) => (
                            <Grid item xs={12} sm={4} key={key}>
                                <Fade duration={800} fraction={0.5}>
                                    <EventCard
                                        title={events[no].title}
                                        content={events[no].content}
                                        location={events[no].location}
                                        datetime={events[no].datetime}
                                        link={events[no].link}
                                        image={events[no].image}
                                    />
                                </Fade>
                            </Grid>
                        ))
                    )}
                </Grid>
            </div>
        </SectionWrapper>
    );
}

export default React.memo(SectionEvents);
