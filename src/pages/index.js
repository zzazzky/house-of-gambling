const posts = [
  {
    topic: 'Valve showed off a Steam Deck with an OLED screen',
    link: 'https://journal.tinkoff.ru/news/steam-deck-oled/',
    date: '10.11.2023',
    active: true,
  },
  {
    topic: 'How banks react to a key rate increase in 2023',
    link: 'https://journal.tinkoff.ru/news/banki-i-stavka/',
    date: '09.11.2023',
    active: false,
  },
  {
    topic: 'Hollywood actors and studios agree to end strike',
    link: 'https://journal.tinkoff.ru/news/actors-strike-end/',
    date: '09.11.2023',
    active: false,
  },
  {
    topic:
      'Savva, Olluco and Loona: the 10 best restaurants in Moscow have been named according to the Where to Eat 2023 award',
    link: 'https://journal.tinkoff.ru/news/moscow-best-restaurants-2023/',
    date: '10.11.2023',
    active: false,
  },
  {
    topic: 'The ATP Finals will be held in Turin',
    link: 'https://journal.tinkoff.ru/news/atp-finals-2023-preview/',
    date: '09.11.2023',
    active: false,
  },
];

const buttonMenu = document.querySelector('.header__button_burger');
const mobileMenu = document.querySelector('.header__mobile-menu');

buttonMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__mobile-menu_opened');
  buttonMenu.classList.toggle('header__button_burger');
  buttonMenu.classList.toggle('header__button_close');
});

const buttonLang = document.querySelector('.header__button_lang');
const buttonLangText = buttonLang.querySelector('.header__text');
buttonLang.addEventListener('click', () => {
  buttonLangText.textContent === 'EN'
    ? (buttonLangText.textContent = 'RU')
    : (buttonLangText.textContent = 'EN');
});

class Card {
  constructor(cardData) {
    (this.topic = cardData.topic),
      (this.link = cardData.link),
      (this.date = cardData.date),
      (this.active = cardData.active);
  }

  _getTemplate() {
    return document
      .querySelector('.blog__post-template')
      .content.querySelector('.blog__post')
      .cloneNode(true);
  }

  createPost() {
    this.post = this._getTemplate();
    this.postText = this.post.querySelector('.blog__post-text');
    this.postDate = this.post.querySelector('.blog__post-date');

    if (this.active) {
      this.post.classList.add('blog__post_active');
      this.post.href = this.link;
    }
    this.postText.textContent = this.topic;

    this.postDate.textContent = this.date;

    return this.post;
  }
}

const blogContainer = document.querySelector('.blog__container');

function renderPost(cardData) {
  const card = new Card(cardData);
  blogContainer.append(card.createPost());
}

posts.forEach((item) => renderPost(item));
