import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item.jsx';
import * as Arrows from './buttons.jsx';


const items = [{
        src: "/some source",
        href: "/some href",
        name: "some name",
        price: 222
    },
    {
        src: "/some source 2",
        href: "/some href 2",
        name: "some name 2",
        price: 2222
    },
    {
        src: "/some source 3",
        href: "/some href 3",
        name: "some name 3",
        price: 3333
    },
    {
        src: "/some source 4",
        href: "/some href 4",
        name: "some name 4",
        price: 4444
    },
    {
        src: "/some source 5",
        href: "/some href 5",
        name: "some name 5",
        price: 5555
    },
    {
        src: "/some source 6",
        href: "/some href 6",
        name: "some name 6",
        price: 6666
    },
    {
        src: "/some source 7",
        href: "/some href 7",
        name: "some name 7",
        price: 7777
    },
    {
        src: "/some source 8",
        href: "/some href 8",
        name: "some name 8",
        price: 8888
    },
    {
        src: "/some source 9",
        href: "/some href 9",
        name: "some name 9",
        price: 9999
    },
    {
        src: "/some source 10",
        href: "/some href 10",
        name: "some name 10",
        price: 10000
    }
];
 
/*items.map((item, i) => 
    ReactDOM.render(<Item {...item}/>, document.getElementById("slider"))
);*/

/* $(document).ready(() => {
    alert("downloaded.");
}); */

ReactDOM.render([<Arrows.Back_arrow />, < Item items = {items}
/>, <Arrows.Forward_arrow />],  document.getElementById("slider"));