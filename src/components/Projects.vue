<template>
    <!-- <div id="projects">
        <th>Projects</th>
        <div class="row">
        <div class="col-sm-6">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title"><router-link to="/projects/ims">IMS(면접관리시스템)</router-link></h3>
            </div>
            <div class="panel-body">
              Panel content
            </div>
          </div>
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title"><router-link to="/projects/misewatch">미세와치 School</router-link></h3>
            </div>
            <div class="panel-body">
              Panel content
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="panel panel-success">
            <div class="panel-heading">
              <h3 class="panel-title"><router-link to="/projects/groupware">상상인 그룹웨어</router-link></h3>
            </div>
            <div class="panel-body">
              Panel content
            </div>
          </div>
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title"><router-link to="/projects/mobeek">mobee-k 관리자 웹</router-link></h3>
            </div>
            <div class="panel-body">
              Panel content
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div id="projects" class="background-alt">
        <h2 class="heading">Projects</h2>
        <div class="container">
            <div class="row">
                <div class="project shadow-large" style="height:300px;">
                    <div class="project-image" style="position: absolute; top: 35%; left: 10%;">
                        <img src="../assets/images/project/ims_logo.png" />
                    </div>
                    <!-- End .project-image -->
                    <div class="project-info">
                        <h3>IMS(면접관리시스템)</h3>
                        <p>
                            가온소프트 면접 히스토리를 관리하기 위한 면접자 및 관리자 용 웹 서비스 개발
                        </p>
                        <router-link to="/projects/ims">View Project</router-link>
                    </div>
                    <!-- End .project-info -->
                </div>
                <!-- End .project -->

                <div class="project shadow-large" style="height:300px;">
                    <div class="project-image" style="position: absolute; top: 35%; left: 10%;">
                        <img src="../assets/images/project/groupware_logo.png" />
                    </div>
                    <!-- End .project-image -->
                    <div class="project-info">
                        <h3>상상인 그룹웨어</h3>
                        <p>
                           상상인이 기존에 사용하던 그룹웨어와 비슷한 상상인의 요구사항을 반영한 그룹웨어 개발
                        </p>
                        <router-link to="/projects/groupware">View Project</router-link>
                    </div>
                    <!-- End .project-info -->
                </div>
                <!-- End .project -->
                <div class="project shadow-large" style="height:300px;">
                    <div class="project-image" style="position: absolute; top: 35%; left: 10%;">
                        <img src="../assets/images/project/misewatch_logo.png"  style="width:150px;"/>
                    </div>
                    <!-- End .project-image -->
                    <div class="project-info">
                        <h3>미세와치 School</h3>
                        <p>
                            미세와치 기기를 사용하여 공기질 상태를 확인할 수 있고, 공기청정기, 공기순환기를 원격으로 제어할 수 있는 관리자 웹 서비스 개발
                        </p>
                        <router-link to="/projects/misewatch">View Project</router-link>
                    </div>
                    <!-- End .project-info -->
                </div>
                <!-- End .project -->
                <div class="project shadow-large" style="height:300px;">
                    <div class="project-image" style="position: absolute; top: 35%; left: 10%;">
                        <img src="../assets/images/project/mobeek_logo.png" style="width:150px;"/>
                    </div>
                    <!-- End .project-image -->
                    <div class="project-info">
                        <h3>모비케이 관리자 웹</h3>
                        <p>
                            갤럭시 프렌즈와 같이 특정 테마나 컨텐츠를 제공하는 서비스를 IOS 대응하에 개발
                        </p>
                        <router-link to="/projects/mobeek">View Project</router-link>
                    </div>
                    <!-- End .project-info -->
                </div>
                <!-- End .project -->
            </div>
        </div>
    </div>
    <!-- End #projects -->
</template>
// <script>
// export default {
//     methods: {
//         onClickProject() {
//             // this.$rou
//         }
//     }
// }
// </script>