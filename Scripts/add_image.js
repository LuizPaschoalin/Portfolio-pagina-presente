document.addEventListener('DOMContentLoaded' , function () {
    const inputFile = 
    document.querySelector('.content__firstblock__picture__input');
    const pictureImage = 
    document.querySelector('.content__firstblock__picture__image');
    const pictureImage2 = 
    document.querySelector('.content__thirdblock__picture__image');
    const pictureImageTxt = 'Choose an image';
    pictureImage.innerHTML = pictureImageTxt;
    pictureImage2.innerHTML = pictureImageTxt;

    inputFile.addEventListener('change' , function(e) {
        const inputTarget = e.target;
        console.log(inputTarget);
    })
})


   

