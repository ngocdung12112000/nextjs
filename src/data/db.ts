interface Blog {
    id: number;
    image: string;
    imageLink?: string; // Optional for create case
    title: string;
    description: string;
    category: string;
}

export const blogs = [
    {
        id: 1,
        image: "diagonal-building.jpg",
        imageLink: '/images/thumbs/diagonal-building.jpg',
        title: "Just a Standard Format Post",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "Design, Photography"
    },
    {
        id: 2,
        image: "ferris-wheel.jpg",
        imageLink: '/images/thumbs/ferris-wheel.jpg',
        title: "This Is Another Standard Format Post.",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "Design, Music"
    },
    {
        id: 3,
        image: "concert.jpg",
        imageLink: '/images/thumbs/concert.jpg',
        title: "Sample Blog",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "Design, UI"
    },
    {
        id: 4,
        image: "shutterbug.jpg",
        imageLink: '/images/thumbs/shutterbug.jpg',
        title: "Photography Skills Can Improve Your Graphic Design.",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "Photography"
    },
    {
        id: 5,
        image: "usaf-rocket.jpg",
        imageLink: '/images/thumbs/usaf-rocket.jpg',
        title: "The 10 Golden Rules of Clean Simple Design.",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "Branding, Photography"
    },
    {
        id: 6,
        image: "lighthouse-3.jpg",
        imageLink: '/images/thumbs/lighthouse.jpg',
        title: "Breathtaking Photos of Lighthouses.",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "Branding"
    },
    {
        id: 7,
        image: "liberty.jpg",
        imageLink: '/images/thumbs/liberty.jpg',
        title: "Designing With Black and White.",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "Branding, Photography"
    },
    {
        id: 8,
        image: "diagonal-pattern.jpg",
        imageLink: '/images/thumbs/diagonal-pattern.jpg',
        title: "You Can See Patterns Everywhere.",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "Design, UI"
    },
    {
        id: 9,
        image: "ottawa-bokeh.jpg",
        imageLink: '/images/thumbs/ottawa-bokeh.jpg',
        title: "This Is a Video Post Format.",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "Design, UI"
    },
    {
        id: 10,
        image: "ottawa-bokeh.jpg",
        imageLink: '/images/thumbs/gallery/work1.jpg',
        title: "Workspace Design Trends and Ideas.",
        description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim",
        category: "WordPress, UI"
    }
] as Blog[];