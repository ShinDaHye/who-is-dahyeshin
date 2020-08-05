<template>
    <div id="app">
    <Header/>
    <AboutMe/>
    <Career/>
    <Projects/>
    <Skills/>
    <Contact/>
  </div>
</template>
<script>
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Career from '../components/Career'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
export default {
  name: 'App',
  components: {
    Header,
    AboutMe,
    Career,
    Skills,
    Projects,
    Contact
  }
}
</script>