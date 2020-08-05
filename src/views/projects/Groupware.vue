<template>
    <div>
        <div id="skills">
            <h2 class="heading">상상인 그룹웨어</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>VueJs</li>
                <li>Java</li>
                <li>Mybatis</li>
                <li>MySQL</li>
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
                                    <h4>상상인 그룹웨어 구축</h4>
                                </li>
                                <li>
                                    <h4>하이브리드 웹앱 개발</h4>
                                </li>
                                <li>
                                    <h4>자동 배포 툴 Jenkins 사용</h4>
                                </li>
                                <li>
                                    <h4>법인카드 관리를 위한 바로빌 API연동</h4>
                                </li>
                                <li>
                                    <h4>관리자 페이지 개발</h4>
                                </li>
                                <li>
                                    <h4>업무관리, 업무지원요청 페이지 개발</h4>
                                </li>
                                <li>
                                    <h4>퍼블리셔, 기획 협업 경험</h4>
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
                <Carousel centerMode="true" :per-page="1" :mouse-drag="true" :loop="true" :autoplay="true" autoplayTimeout="3000" paginationColor="#ffffff">
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/groupware_admin.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/groupware_dashboard.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/groupware_work_create.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/groupware_work_part.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/groupware_work_supp.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/groupware_workmn.png" style="width: 700px;"/>
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