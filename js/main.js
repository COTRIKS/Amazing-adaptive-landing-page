// Down button
const header = document.querySelector('.header')
const headerBtn = document.querySelector('.header__btn')

headerBtn.addEventListener('click', (e) => {
  e.preventDefault()

  headerBtn.style.opacity = '0'

  setTimeout(() => {
    headerBtn.style.display = 'none'

    let btnScrollDown = document.createElement('i')
    btnScrollDown.className = 'downBtn fas fa-chevron-down'
    const beginWay = document.body.children[1]
    const container = beginWay.children[0]
    container.append(btnScrollDown)
  }, 300)

  setTimeout(() => {
    if(window.innerWidth <= 576) {
      scrollTo({
        top: header.clientHeight - 70,
        behavior: 'smooth'
      })
    } else if(window.innerWidth <= 1200) {
      scrollTo({
        top: header.clientHeight - 80,
        behavior: 'smooth'
      })
    } else {
      scrollTo({
        top: header.clientHeight,
        behavior: 'smooth'
      })
    }
  }, 600)

  setTimeout(() => {
    document.querySelector('.downBtn').remove()

    headerBtn.style.display = 'flex'
    headerBtn.style.opacity = '1'
  }, 1100)
})

// Burger menu
const burgerBtn = document.querySelector('.header__burger')
const burgerBtnChanger = document.querySelector('.header__burger-changer')
const burgerMenu = document.querySelector('.header__nav')
const iconMenu = document.querySelector('.header__logo')
const menu = document.querySelector('.header__menu')

burgerBtn.addEventListener('click', () => {
  burgerBtnChanger.classList.toggle('open-close')
  burgerMenu.classList.toggle('go-back')
  iconMenu.classList.toggle('look-logo')
})

window.addEventListener('scroll', () => {
  menu.classList.toggle('menu-scroll', window.scrollY > 0)
})

// Animation for form button
let animLetters = document.querySelectorAll('.anim-letter')

let delay = 0

for(const animLetter of animLetters) {
  animLetter.style.animationDelay = `${delay}s`
  delay = delay + 0.3
}

// Appearance up button
const about = document.querySelector('.about')
const quote = document.querySelector('.quote')
const team = document.querySelector('.team')
const audience = document.querySelector('.audience')
const service = document.querySelector('.service')
const company = document.querySelector('.company')

const sumSectionsHeight = header.clientHeight + about.clientHeight + quote.clientHeight + team.clientHeight + audience.clientHeight + service.clientHeight + company.clientHeight

const contact = document.querySelector('.contact')

const upBtn = document.querySelector('.up')

window.addEventListener('scroll', () => {
  if(window.innerWidth > 1200) upBtn.classList.toggle('appearanceBtn', window.scrollY > sumSectionsHeight - contact.clientHeight)
  else upBtn.classList.remove('appearanceBtn')
})

upBtn.addEventListener('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Anchors for links
const homeLink = document.querySelector('.h')
const aboutLink = document.querySelector('.a')
const teamLink = document.querySelector('.t')
const serviceLink = document.querySelector('.s')
const contactLink = document.querySelector('.c')

let links = [homeLink, aboutLink, teamLink, serviceLink, contactLink]

links[0].classList.add('active')

for(const link1 of links) {
  if(window.innerWidth <= 1200) {
    link1.addEventListener('click', () => {
      for(const link2 of links) {
        if(link2.className = 'active') {
          link2.classList.remove('active')
          link1.classList.add('active')
        }
      }
    })
  }
}

homeLink.addEventListener('click', (elem) => {
  elem.preventDefault()

  if(window.innerWidth <= 1200) {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    burgerBtnChanger.classList.remove('open-close')
    burgerMenu.classList.remove('go-back')
    iconMenu.classList.remove('look-logo')
  } else {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
})

aboutLink.addEventListener('click', (elem) => {
  elem.preventDefault()

  if(window.innerWidth <= 576) {
    scrollTo({
      top: header.clientHeight - 70,
      behavior: 'smooth'
    })

    burgerBtnChanger.classList.remove('open-close')
    burgerMenu.classList.remove('go-back')
    iconMenu.classList.remove('look-logo')
  } else if(window.innerWidth <= 1200) {
    scrollTo({
      top: header.clientHeight - 80,
      behavior: 'smooth'
    })

    burgerBtnChanger.classList.remove('open-close')
    burgerMenu.classList.remove('go-back')
    iconMenu.classList.remove('look-logo')
  } else {
    scrollTo({
      top: header.clientHeight,
      behavior: 'smooth'
    })
  }
})

teamLink.addEventListener('click', (elem) => {
  elem.preventDefault()

  if(window.innerWidth <= 576) {
    scrollTo({
      top: (header.clientHeight + about.clientHeight + quote.clientHeight) - 70,
      behavior: 'smooth'
    })

    burgerBtnChanger.classList.remove('open-close')
    burgerMenu.classList.remove('go-back')
    iconMenu.classList.remove('look-logo')
  } else if(window.innerWidth <= 1200) {
    scrollTo({
      top: (header.clientHeight + about.clientHeight + quote.clientHeight) - 80,
      behavior: 'smooth'
    })

    burgerBtnChanger.classList.remove('open-close')
    burgerMenu.classList.remove('go-back')
    iconMenu.classList.remove('look-logo')
  } else {
    scrollTo({
      top: header.clientHeight + about.clientHeight + quote.clientHeight,
      behavior: 'smooth'
    })
  }
})

serviceLink.addEventListener('click', (elem) => {
  elem.preventDefault()

  if(window.innerWidth <= 576) {
    scrollTo({
      top: (header.clientHeight + about.clientHeight + quote.clientHeight + team.clientHeight + audience.clientHeight) - 70,
      behavior: 'smooth'
    })

    burgerBtnChanger.classList.remove('open-close')
    burgerMenu.classList.remove('go-back')
    iconMenu.classList.remove('look-logo')
  } else if(window.innerWidth <= 1200) {
    scrollTo({
      top: (header.clientHeight + about.clientHeight + quote.clientHeight + team.clientHeight + audience.clientHeight) - 80,
      behavior: 'smooth'
    })

    burgerBtnChanger.classList.remove('open-close')
    burgerMenu.classList.remove('go-back')
    iconMenu.classList.remove('look-logo')
  } else {
    scrollTo({
      top: header.clientHeight + about.clientHeight + quote.clientHeight + team.clientHeight + audience.clientHeight,
      behavior: 'smooth'
    })
  }
})

contactLink.addEventListener('click', (elem) => {
  elem.preventDefault()

  if(window.innerWidth <= 576) {
    scrollTo({
      top: (header.clientHeight + about.clientHeight + quote.clientHeight + team.clientHeight + audience.clientHeight + service.clientHeight + company.clientHeight) - 70,
      behavior: 'smooth'
    })

    burgerBtnChanger.classList.remove('open-close')
    burgerMenu.classList.remove('go-back')
    iconMenu.classList.remove('look-logo')
  } else if(window.innerWidth <= 1200) {
    scrollTo({
      top: (header.clientHeight + about.clientHeight + quote.clientHeight + team.clientHeight + audience.clientHeight + service.clientHeight + company.clientHeight) - 80,
      behavior: 'smooth'
    })

    burgerBtnChanger.classList.remove('open-close')
    burgerMenu.classList.remove('go-back')
    iconMenu.classList.remove('look-logo')
  } else {
    scrollTo({
      top: header.clientHeight + about.clientHeight + quote.clientHeight + team.clientHeight + audience.clientHeight + service.clientHeight + company.clientHeight,
      behavior: 'smooth'
    })
  }
})

// Languages window
const popupLang = document.querySelector('.popup')
const popupBtnYes = document.querySelector('.popup__yes')
const popupBtnNo = document.querySelector('.popup__no')

setTimeout(() => {
  popupLang.style.display = 'flex'
}, 5000)

popupBtnNo.addEventListener('click', (el) => {
  el.preventDefault()

  popupLang.style.transform = 'translateX(-700px)'

  setTimeout(() => {
    popupLang.style.display = 'none'
  }, 400)
})

popupBtnYes.addEventListener('click', (el) => {
  el.preventDefault()
  
  popupLang.style.transform = 'translateX(-700px)'

  homeLink.textContent = 'Главная'
  aboutLink.textContent = 'О нас'
  teamLink.textContent = 'Команда'
  serviceLink.textContent = 'Сервис'
  contactLink.textContent = 'Контакты'

  setTimeout(() => {
    popupLang.style.display = 'none'
  }, 400)
})

// Form info
const form = document.forms.frm
const inputName = form.elements.name
const inputEmail = form.email
const formBtn = document.querySelector('.information__btn')

formBtn.addEventListener('click', () => {
  alert(`Your name: ${inputName.value}\nYour e-mail: ${inputEmail.value}`)
})