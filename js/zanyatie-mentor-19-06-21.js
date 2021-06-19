
//  https://www.pexels.com/ru-ru/
function getFetch(query) {
    const KEY = '563492ad6f9170000100000187c9bd80dfdd46a8b4b1fb82657713e8';
    const BASE_URL = 'https://api.pexels.com/';
    
    // const query = 'girls';
    const perPage = 10;
    
    const queryParams = `v1/search?query=${query}&per_page=${perPage}`;
    
    const options = {
        method: 'GET',
        headers: {
            Authorization: KEY,
        },
    };
    
    fetch(BASE_URL + queryParams, options).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        const images = createGallery(data.photos);
        document.querySelector('body').before(...images);
    })
    
    function createImage(link, name) {
        const item = document.createElement('img');
        item.setAttribute('src', link);
        item.setAttribute('alt', name);
        item.setAttribute('width', '300');
        return item;
    };
    
    function createGallery(array) {
        return array.map((elem) => {
            console.log(elem);
            const { src, photographer } = elem;
            return createImage(src.tiny, photographer);
        })
    };
};

getFetch('flowers')