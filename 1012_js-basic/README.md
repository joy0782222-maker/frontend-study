# 🟨 JavaScript 첫걸음

> 자바스크립트 첫 수업 — 변수, 출력, 연산 (2026.10.12)

<br>

## 📂 실습 파일

| 파일 | 내용 |
|---|---|
| [`index.html`](./index.html) | 변수 `const` / `let`, 화면 출력, 알림창 · 입력창 |
| [`aa.html`](./aa.html) | 산술 연산, 과일 가격 합계, 오늘 날짜 · 시간 출력 |

<br>

## ✏️ 배운 것

**변수**
- `const` → 재할당 ❌ (제일 안전, 기본으로 사용)
- `let` → 재할당 ⭕
- `var` → 오류가 많아서 이제 안 씀

**화면 출력**
- `console.log()` → 개발자 도구 콘솔에 출력
- `document.write()` → 웹 화면에 출력
- 템플릿 리터럴 `` `${변수}` `` → 문자열 안에 변수 넣기

**대화상자**
- `alert()` 알림 · `confirm()` 확인/취소 · `prompt()` 입력받기

**기타**
- `toLocaleString()` → 숫자 천 단위 콤마
- `new Date()` → 오늘 날짜 · 시간

<br>

```javascript
const name = "hi";
const age = 20;
document.write(`<h1>${name}</h1> <p>나이는 ${age}</p>`);
```
