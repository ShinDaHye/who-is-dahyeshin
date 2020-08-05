<template>
    <!-- <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <a href="#about" class="navbar-brand mb-0 h1">About</a>
            <a class="navbar-brand mb-0 h1">Career</a>
            <a class="navbar-brand mb-0 h1">Skills</a>
            <a class="navbar-brand mb-0 h1">Projects</a>
            <a class="navbar-brand mb-0 h1">Contact</a>
        </div>
    </nav> -->
    <div>
        <div id="mobile-menu-open" class="shadow-large">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <header>

        <div id="mobile-menu-close">
            <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" class="shadow">
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#experience">Career</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
        </header>
    </div>
</template>
<script>
export default {
    methods: {
        aboutClick(){
            alert("About");
        }
    }
}
</script>