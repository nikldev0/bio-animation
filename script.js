const gridItems = document.querySelectorAll('.grid-item');
const img = document.querySelectorAll('img');
const bio = document.querySelectorAll('p');

for (let i = 0; i < gridItems.length; i++) {
  gridItems[0].addEventListener('click', () => {
    if (img[0].classList != 'moveImageUp') {
      img[0].classList.add('moveImageUp');
      img[0].classList.remove('moveImageDown');
      bio[0].classList.add('revealBio');
      bio[0].classList.remove('closeBio');
    } else {
      img[0].classList.remove('moveImageUp');
      img[0].classList.add('moveImageDown');
      bio[0].classList.remove('revealBio');
      bio[0].classList.add('closeBio');
    }
  });

  gridItems[1].addEventListener('click', () => {
    if (img[1].classList != 'moveImageUp') {
      img[1].classList.add('moveImageUp');
      img[1].classList.remove('moveImageDown');
      bio[1].classList.add('revealBio');
      bio[1].classList.remove('closeBio');
    } else {
      img[1].classList.remove('moveImageUp');
      img[1].classList.add('moveImageDown');
      bio[1].classList.remove('revealBio');
      bio[1].classList.add('closeBio');
    }
  });

  gridItems[2].addEventListener('click', () => {
    if (img[2].classList != 'moveImageUp') {
      img[2].classList.add('moveImageUp');
      img[2].classList.remove('moveImageDown');
      bio[2].classList.add('revealBio');
      bio[2].classList.remove('closeBio');
    } else {
      img[2].classList.remove('moveImageUp');
      img[2].classList.add('moveImageDown');
      bio[2].classList.remove('revealBio');
      bio[2].classList.add('closeBio');
    }
  });
}
