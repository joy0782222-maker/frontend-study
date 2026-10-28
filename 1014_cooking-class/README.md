# 🍝 쿠킹 클래스 카드 페이지

> 세계 각국 셰프에게 배우는 **쿠킹 클래스 목록 페이지**
> 카드형 레이아웃 + 반응형 + 햄버거 메뉴 실습 (2026.10.14)

<br>

## ✨ 구현 기능

- **카드 리스트** — 클래스 사진, 국가 국기, 제목, 1인 가격
- **반응형 그리드** — 화면이 줄어들면 카드 열 개수가 자동으로 줄어듦
- **햄버거 메뉴** — 768px 이하에서 메뉴가 버튼으로 바뀌고, 클릭하면 열고 닫힘
- **접근성 고려** — 버튼에 `aria-expanded`, `aria-label` 적용
- 창 크기 바뀌면 열린 메뉴 자동으로 닫기

<br>

## 📱 반응형 기준

| 화면 폭 | 변화 |
|---|---|
| ~1000px | 카드 3열 |
| ~768px | 상단 메뉴 숨김 → 햄버거 버튼 표시 |

<br>

## 🛠️ 사용 기술

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

<br>

## 📂 폴더 구조

```
1014/
├─ index.html
├─ css/   → main, responsive, reset, fonts
├─ js/    → main.js (햄버거 메뉴)
├─ img/   → 클래스 사진, 국기, 아이콘
└─ fonts/
```
