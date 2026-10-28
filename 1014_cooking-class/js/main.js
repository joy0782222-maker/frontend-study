
const btn = document.querySelector(".inner_buger")
const menu = document.querySelector("#site-menu")

btn.addEventListener("click", () => {
    const isExpanded = btn.getAttribute("aria-expanded") === "true"

    btn.setAttribute("aria-expanded", String(!isExpanded))
    btn.setAttribute("aria-label", isExpanded ? "메뉴 열기" : "메뉴 닫기")
    menu.classList.toggle("show", !isExpanded)
})
window.addEventListener("resize", () => {
    menu.classList.remove("show")
    btn.setAttribute("aria-expanded", "false")
    btn.setAttribute("aria-label", "메뉴 열기")
})