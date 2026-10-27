# 🎨 CSS 선택자

> CSS 기초 — 선택자로 원하는 요소만 골라 꾸미기 (2026.09.29)

<br>

## 📂 실습 파일

| 파일 | 내용 |
|---|---|
| [`index.html`](./index.html) + [`main.css`](./main.css) | 기본 선택자 |
| [`sellcter.html`](./sellcter.html) + [`sellcer.css`](./sellcer.css) | 하위 · 자식 선택자 |

<br>

## ✏️ 선택자 정리

| 선택자 | 문법 | 예시 |
|---|---|---|
| 태그 | `태그명` | `p { color: blueviolet; }` |
| 클래스 | `.이름` | `.menu1 { color: brown; }` |
| 아이디 | `#이름` | `#title { font-size: 48px; }` |
| 여러 개 | `A, B` | `.desk, .small { ... }` |
| 하위 (자손 전부) | `A B` | `div p { ... }` |
| 자식 (바로 아래만) | `A > B` | `.sec2 > p { ... }` |

<br>

## 💡 포인트

- 클래스는 여러 개 붙일 수 있음 → `class="box box1"`
- 아이디는 페이지에 하나만
- `div p` 는 손자까지 전부, `div > p` 는 바로 아래 자식만
