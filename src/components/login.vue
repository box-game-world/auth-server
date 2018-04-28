<template>
  <div class="wrapper">
    <div class="cell-wrapper">
      <article class="login">
        <h2>로그인</h2>
        <div class="center-wrap">
          <form name="loginForm" id="loginForm" action="/login" method="POST" autocomplete="off" onsubmit="return app.submitLogin()">
          <input type="hidden" name="_csrf" value="a9f93160-efaa-40e3-a38e-691050211ac6"> 
          <div class="input-wrap">
            <span>
              <input type="text" placeholder="아이디(메일)를 입력해 주세요." name="username" id="username" maxlength="100" title="아이디(이메일) 입력" tabindex="1"> 
              <div class="error-msg">
                <span>잘못된 아이디 또는 비밀번호를 입력하셨습니다.</span>
              </div>
            </span>
          </div> 
          <div class="input-wrap">
            <input type="password" placeholder="비밀번호를 입력해 주세요." id="password" name="password" title="비밀번호 입력" tabindex="2"> 
            <div class="error-msg">
              <span>비밀번호를 입력해 주세요.</span>
            </div>
          </div> 
          <label check="">
            <input type="checkbox" title="아이디 저장" tabindex="4">아이디 저장
          </label> 
          <button class="btn-primary btn-login">로그인</button>
            
          </form>
            <div class="menu">
              <ul>
                <li>
                  <a href="https://www.ncloud.com/join/type">회원가입</a>
                </li> 
                <li>
                  <a href="https://www.ncloud.com/findId">아이디 찾기</a>
                </li>
                <li>
                  <a href="https://www.ncloud.com/findPw">비밀번호 찾기</a>
                </li>
              </ul>
              <hr class="mv-20">
            </div>
            <a href="#" onclick="return app.loginByNaver()" class="btn btn-success btn-naver">네이버 아이디로 로그인</a>
          </div>
        </article>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Login extends Vue {}
</script>

<style lang="scss">

.input-wrap input[type=password], .input-wrap input[type=tel], .input-wrap input[type=text], .input-wrap select, .input-wrap textarea {
    width: 100%
}

.wrapper {
    background: #f6f7f8
}

.center-wrap{
  margin: 30px;
}

.wrapper article {
    padding-top: 30px;
    background: #fff;
    min-height: calc(100vh - 190px)
}

.wrapper article h2 {
    font-size: 2.25rem;
    letter-spacing: -1.08px;
    line-height: 1.5;
    line-height: 1.2;
    font-weight: 300;
    text-align: center;
}

.login .menu {
    text-align: center;
    margin-top: 20px;
}

.login .menu ul {
    display: inline-block;
    zoom: 1
}

.login .menu ul:after {
    content: '';
    display: block;
    clear: both;
    font-size: 0;
    height: 0;
    visibility: hidden
}

.login .menu ul > * {
    float: left;
    display: block;
    position: relative;
    padding-left: 15px;
    padding-right: 16px
}

.login .menu ul > :before {
    content: '';
    display: block;
    position: absolute;
    left: -1px;
    right: auto;
    top: 1px;
    bottom: auto;
    width: 1px;
    height: 10px;
    background: #707070
}

.login .menu ul > :first-child {
    padding-left: 0
}

.login .menu ul > :first-child:before {
    display: none;
    display: none !important
}

.login .menu ul > :last-child {
    padding-right: 0
}

.login .menu li {
    font-size: .875rem;
    letter-spacing: -.42px;
    line-height: 1.5;
    font-weight: 300;
    line-height: 1
}

.btn-login, .btn-naver{
  width: 100%;
  height: 50px;
}

.input-wrap .error-msg {
    visibility: hidden;
    font-size: .875rem;
    letter-spacing: -.42px;
    line-height: 1.5;
    margin: 5px 0 4px
}

.input-wrap .error-msg span {
    display: inline-block;
    background-size: 13px;
    color: #fb5134;
    font-size: .875rem;
    letter-spacing: -.42px;
    line-height: 1.5;
    height: 14px;
    line-height: 14px
}

@media (min-width: 768px) {
    .wrapper {
        min-height: calc(100vh - 94px);
        padding: 80px 0;
        box-sizing: border-box;
        display: table;
        width: 100%
    }

    .wrapper .cell-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .wrapper .cell-wrapper article {
        width: 540px;
        margin: 0 auto;
        padding: 60px 20px;
        border: 1px solid #dadada;
        height: auto;
        min-height: auto
    }

    .wrapper .cell-wrapper article h2 {
        font-size: 2.625rem;
        letter-spacing: -1.26px;
        line-height: 1.5;
        line-height: 1.2;
        font-weight: 300;
        text-align: center
    }

    .wrapper .cell-wrapper article h3 {
        font-size: 1rem;
        letter-spacing: -.48px;
        line-height: 1.5;
        font-weight: 300;
        text-align: center;
        margin-top: 10px;
        color: #707070
    }

    .wrapper .cell-wrapper article h4 {
        font-size: 1.25rem;
        letter-spacing: -.6px;
        line-height: 1.5;
        font-weight: 400
    }

    .wrapper .cell-wrapper article .center-wrap {
        margin-top: 50px
    }
}
</style>
