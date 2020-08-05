<template>
    <div id="project">
        <!-- <ul class="sub_menu">
            Projects
            <li><router-link to="/projects/ims" tag="a">IMS(면접관리시스템)</router-link></li>
            <li><router-link to="/projects/groupware" tag="a">상상인 그룹웨어</router-link></li>
            <li><router-link to="/projects/misewatch" tag="a">미세와치 School</router-link></li>
            <li><router-link to="/projects/mobeek" tag="a">mobee-k 관리자 웹</router-link></li>
        </ul> -->
        <div>
        <div id="mobile-menu-open" class="shadow-large">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <header>

        <div id="mobile-menu-close">
            <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul class="shadow">
            <li><router-link to="/" tag="a" style="color:black;">HOME</router-link></li>
            <li><router-link to="/projects/ims" tag="a">IMS</router-link></li>
            <li><router-link to="/projects/groupware" tag="a">GROUPWARE</router-link></li>
            <li><router-link to="/projects/misewatch" tag="a">MISEWATCH</router-link></li>
            <li><router-link to="/projects/mobeek" tag="a">MOBEE-K</router-link></li>
        </ul>
        </header>
    </div>
        <router-view style="padding-top:10%" />
    </div>
</template>