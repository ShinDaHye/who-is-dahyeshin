<template>
    <div>
        <div id="skills">
            <h2 class="heading">미세와치 School</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>VueJs</li>
                <li>Spring Boot</li>
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
                                    <h4>미세와치 관리자 웹 개발</h4>
                                </li>
                                <li>
                                    <h4>모비우스 서버 API 연동</h4>
                                </li>
                                <li>
                                    <h4>자동 배포 툴 Bamboo 사용</h4>
                                </li>
                                <li>
                                    <h4>Azure 리눅스 서버 구축 경험</h4>
                                </li>
                                <li>
                                    <h4>DB서버 구축 및 관리 경험</h4>
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
                <Carousel :per-page="1" :mouse-drag="true" :loop="true" :autoplay="true" autoplayTimeout="3000" paginationColor="#ffffff">
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_all_control.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_common.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_dashboard.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_firmware.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_login.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_model.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_model_create.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_notice.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_notice_detail.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_reserve.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_reserve1.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_reserve2.png" style="width: 700px;"/>
                    </Slide>
                    <Slide @slideclick="handleClick">
                        <img src="../../assets/images/project/misewatch_simple.png" style="width: 700px;"/>
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