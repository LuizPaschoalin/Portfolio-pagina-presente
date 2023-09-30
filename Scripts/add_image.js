document.addEventListener('DOMContentLoaded' , function () {
    const inputFile = 
    document.querySelector('.content__firstblock__picture__input');
    const inputFile2 = 
    document.querySelector('.content__thirdblock__picture__input');
    const pictureImage = 
    document.querySelector('.content__firstblock__picture__image');
    const pictureImage2 = 
    document.querySelectorAll('.content__thirdblock__picture__image');
    const pictureImageTxt = 'Choose an image';
    pictureImage.innerHTML = pictureImageTxt;
    pictureImage2.forEach(pictureImage2 => {
        pictureImage2.innerHTML = pictureImageTxt;
    });
});

   

