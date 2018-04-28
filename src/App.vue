<template>
  <div id="app">
    <header>
      <h1>
        Test
      </h1>
    </header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue{ 

}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.css";

*{
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-height: 1000000px;
}

a{
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

input[type=text], input[type=tel] {
    padding: 0 1em;
    border: 1px solid #dadada;
    height: 2.625rem;
    line-height: 2.625rem;
    box-sizing: border-box;
    background: #f6f7f8;
    font-size: .875rem;
    letter-spacing: -.42px; 
    line-height: 1.5
}

input[type=password] {
    padding: 0 1em;
    border: 1px solid #dadada;
    height: 2.625rem;
    line-height: 2.625rem;
    box-sizing: border-box;
    background: #f6f7f8;
    font-size: .875rem;
    letter-spacing: -.42px;
    line-height: 1.5
}

header {
    position: relative;
    height: 70px;
    background: #fff;
    padding: 20px;
}

footer {
    width: 100%;
    height: 60px;
    border-top: 1px solid #dadada;
    text-align: center;
    padding: 23px;
    box-sizing: border-box;
    font-size: .6875rem;
    letter-spacing: -.33px;
    line-height: 1.5;
    color: #666
}

.wf{
  width: 100%!important;
}

.rel{
  position: relative;
}

.btn{
  cursor: pointer;
}
</style>
