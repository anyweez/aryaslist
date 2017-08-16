<template>
  <div id="app">
    <header>
      <h1 class="subtitle">"I'm the ghost in Harrenhal," she thought. And that night, there was one less name to hate.</h1>
    </header>
    <transition name="fade">
    <ul v-if="mounted">
      <li v-for="(member, i) in theList" @mouseover="show(i)" @mouseout="hide(i)" v-bind:key="member.name" :class="{ dead : !member.alive }">
        <section :class="{ intro: true, highlight: visible[i] }">
          <h2>{{ member.name }}</h2>
          <h3>{{ member.role }}</h3>
        </section>
  
        <section v-if="visible[i]" :class="{ show : visible[i], hover : true }">
          <img :src="member.portrait">
          <p>
            <span class="highlight">Reason:</span>
            <span>{{ member.reasoning }}</span>
            <span v-if="member.fate.length > 0">{{ member.fate }}</span>
          </p>
        </section>
      </li>
    </ul>
    </transition>
    <footer>
      <p>
        <span>Images from </span>
        <a href="http://www.hbo.com/game-of-thrones/cast-and-crew/index.html">HBO</a>
        <span>and</span>
        <a href="http://wikiofthrones.com/">Wiki of Thrones</a>
      </p>
    </footer>
  </div>
</template>

<script>
import theList from './arya';

export default {
  name: 'app',
  data() {
    return {
      theList: theList.members,
      visible: theList.members.map(() => false),
      mounted: false,
    };
  },
  mounted() {
    this.show(0);

    this.mounted = true;
  },

  methods: {
    show(i) {
      if (!this.visible[i]) {
        this.$set(this.visible, i, true);
      }
    },
    hide(i) {
      if (this.visible[i]) {
        this.$set(this.visible, i, false);
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h3 {
  font-weight: normal;
  padding: 10px 0;
  margin: 0;
}

h1 {
  font-weight: bold;
  margin: 0 2%;

  font-size: 1.5em;
  text-align: center;
}

h1.subtitle {
  font-weight: normal;
  margin-bottom: 50px;
  margin-top: 50px;
  font-style: italic;

  font-size: 1.8em;
}

@media (min-width: 800px) {
  h1 {
    font-size: 2em;
    /* text-align: left; */
  }
}

h2 {
  padding: 5px 0;
  margin: 0;
}

.dead h2,
h3 {
  opacity: 0.4;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0 1%;
  position: relative;
}

li {
  padding: 10px 0;
  cursor: default;
}

a {
  color: #42b983;
}

.dead {
  text-decoration: line-through;
}

section.intro {
  padding: 0 1%;
}

section.intro.highlight {
  border-left: 5px solid #cecece;
}

section.hover {
  display: none;
  position: fixed;
  right: 15px;
  top: 130px;
}

@media (min-width: 600px) {
  section.show {
    display: block;
  }
}

section img {
  max-width: 960px;
}

section p {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  padding: 10px 20px;
  background-color: rgba(204, 204, 204, 0.9);
  color: #222;
}

span.highlight {
  font-weight: bold;
}

footer {
  text-align: right;
  background-color: #cecece;
  padding: 1px 10px;
  margin-top: 220px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

</style>
