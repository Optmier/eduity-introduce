import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BookOnlineForm from '../components/BookOnlineForm';
import { BookProvider } from '../context/BookContext';

function BookOnline() {
    return (
        <>
            <Helmet>
                <title>Pierce 상담 신청 :: 에듀이티 | Eduity for infinite pioneer</title>
            </Helmet>
            <BookProvider>
                <BookOnlineForm />
            </BookProvider>
        </>
    );
}

export default React.memo(BookOnline);
