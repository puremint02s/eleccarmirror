import React from 'react';

function LoginForm() {
    return (
      <div>
        <img
          style={{ width: 320 }}
          src="img/MyElecCar logo.png"
          alt="서비스 로고"
        />
        <form>
          <p>이메일</p>
          <input placeholder="이메일을 입력해주세요." />
          <p>비밀번호</p>
          <input placeholder="비밀번호를 입력해주세요." />
          <div>
            <input type="checkbox" /> remember me
            <p>아이디/비밀번호 찾기</p>
          </div>
          <div>
            <p>
              <button type="submit">로그인</button>
            </p>
            <p>
              <button type="submit">카카오톡으로 시작</button>
            </p>
            <p>
              <button type="submit">구글로 시작</button>
            </p>
          </div>
        </form>
      </div>
    );
}

export default LoginForm;