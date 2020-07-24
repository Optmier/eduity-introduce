import React, { useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import '../styles/section_location.scss';
import SectionWrapper from './SectionWrapper';

function SectionLocation() {
    const mapContainer = useRef();
    const loadKakaoMap = () => {
        const script = document.createElement('script');
        script.async = true;
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=10e0304099575e008dcf4c8ae927b097&autoload=false';
        document.head.appendChild(script);

        script.onload = () => {
            const kakao = window.kakao;
            kakao.maps.load(() => {
                const mapOption = {
                    center: new kakao.maps.LatLng(37.456089, 126.949751), // 지도의 중심좌표
                    level: 3, // 지도의 확대 레벨
                };

                const map = new kakao.maps.Map(mapContainer.current, mapOption);

                // 마커가 표시될 위치입니다
                const markerPosition = new kakao.maps.LatLng(37.456089, 126.949751);

                // 마커를 생성합니다
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

                // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
                const mapTypeControl = new kakao.maps.MapTypeControl();

                // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
                // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
                map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

                // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
                const zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

                map.setZoomable(false);
            });
        };
    };

    useEffect(() => {
        loadKakaoMap();
    }, []);

    return (
        <SectionWrapper height="360px" no="-location" coverImage="bgcover-contact-us" marginBottom={0}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div ref={mapContainer} className="kakao-map-wrapper"></div>
                </Grid>
            </Grid>
        </SectionWrapper>
    );
}

export default React.memo(SectionLocation);
