const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

// Мобильное меню
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Открыть меню" : "Закрыть меню"
    );

    navigation.classList.toggle("is-open", !isOpen);
  });

  // Закрываем меню после нажатия на ссылку
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Открыть меню");
      navigation.classList.remove("is-open");
    });
  });
}

// Анимация появления элементов при прокрутке
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => {
    item.classList.add("is-visible");
  });
}

// Автоматический год в подвале
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
