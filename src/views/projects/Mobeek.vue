<template>
    <div>
        <div id="skills">
            <h2 class="heading">모비케이 관리자 웹</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>NodeJS</li>
                <li>Mybatis</li>
                <li>MySQL</li>
                <li>GIT</li>
                <li>Bamboo</li>
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
                                    <h4>모비케이 관리자 웹 개발 </h4>
                                </li>
                                <li>
                                    <h4>Azure 리눅스 서버 구축 경험</h4>
                                </li>
                                <li>
                                    <h4>Nginx 프록시 서버 구축</h4>
                                </li>
                                <li>
                                    <h4>pm2를 사용하여 서비스 관리</h4>
                                </li>
                                <li>
                                    <h4>Sendgrid를 통한 이메일 발송 기능 개발</h4>
                                </li>
                                <li>
                                    <h4>자동 배포 툴 Bamboo 사용</h4>
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
                        <img src="../../assets/images/project/mobeek_change_password.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/mobeek_customer_detail.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/mobeek_customer_list.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/mobeek_dashboard.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/mobeek_sendgrid.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/mobeek_service_create.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/mobeek_service_detail.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/mobeek_service_info.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/mobeek_service_list.png" style="width: 700px;"/>
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