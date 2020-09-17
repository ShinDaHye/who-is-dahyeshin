<template>
    <div>
        <div id="skills">
            <h2 class="heading">IMS(면접관리시스템)</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>AngularJs</li>
                <li>Java</li>
                <li>Mybatis</li>
                <li>MSSQL</li>
                <li>GIT</li>
                <li>Jenkins</li>
            </ul>
        </div>
        
        <div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <h2 class="heading">About</h2>
                </div>
                    <div class="col-md-8">
                        <p>
                            <ul style="text-align: left;">
                                <li>
                                    <h4>회사 내의 면접 관리 시스템 구축</h4>
                                </li>
                                <li>
                                    <h4>Android 앱과의 연동 API 개발</h4>
                                </li>
                                <li>
                                    <h4>자동 배포 툴 Jenkins 사용</h4>
                                </li>
                                <li>
                                    <h4>인턴 프로젝트로 PL 담당</h4>
                                </li>
                                <li>
                                    <h4>SHA256 이용하여 로그인 페이지 개발</h4>
                                </li>
                                <li>
                                    <h4>fullcalendar 라이브러리 이용하여 면접 일정 관리 페이지 개발</h4>
                                </li>
                                <li>
                                    <h4>퍼블리셔, 기획, 모바일팀과의 협업 경험</h4>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="contact">
        <!-- <h2>Get in Touch</h2> -->
        <h2 class="col-md-4">Gallery</h2>
                <Carousel :per-page="1" :mouse-drag="true" :loop="true" :autoplay="true" autoplayTimeout="3000" paginationColor="#ffffff">
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/ims_login.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/ims_dashboard.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/ims_interview_schedule.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/ims_interviewee_info.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/ims_level.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/ims_result.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/ims_score_standard.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/ims_score_standard_detail.png" style="width: 700px;"/>
                    </Slide>
                </Carousel>
        <!-- End #contact-form -->
        </div>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    },
    data() {
        return {

        }
    },
    methods: {
        handleClick(idx) {
            console.log(this.slideData[idx])
        }
    }
}
</script>