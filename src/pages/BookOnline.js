import React, { useEffect } from 'react';
import BookOnlineForm from '../components/BookOnlineForm';
import { BookProvider } from '../context/BookContext';

function BookOnline() {
    useEffect(() => {
        window.analytics.logEvent('상담 신청 페이지 접속');
        document.querySelector('.nav-root').classList.add('scrolled');
        document.querySelector('.nav-logo>.color').classList.add('scrolled');
        document.querySelector('.nav-logo>.white').classList.add('scrolled');
    }, []);

    return (
        <>
            <BookProvider>
                <BookOnlineForm />
            </BookProvider>
        </>
    );
}

export default React.memo(BookOnline);
