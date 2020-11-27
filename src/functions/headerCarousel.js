/* ----------- returns a random img url to display in header ----------- */
const headerCarousel = () => {

    const randomNum = Math.floor(Math.random() * 7);
    const headerImg = [
        'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.unsplash.com/photo-1591833383187-a750e84a494c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1565610389566-e143ec508d48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1445794777754-0c2ff486652b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        'https://images.unsplash.com/photo-1519111887837-a48ccf9edc00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    ];

    return headerImg[randomNum];

}

export default headerCarousel;