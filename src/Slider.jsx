import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const data = [
    {
        id: 1,
        imgUrl: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
        desc: "Nature photography is a wide range of photography taken outdoors and devoted to displaying natural elements such as landscapes, wildlife, plants, and close-ups of natural scenes and textures.",
        name: "EXPLORE NATURE",
    },
    {
        id: 2,
        imgUrl: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
        desc: "A mountain range is a series or chain of mountains that are close together.",
        name: "EXPLORE MOUNTAINS",
    },
    {
        id: 3,
        imgUrl: "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "EXPLORE NATURE",
    },
    {
        id: 5,
        imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "EXPLORE NATURE",
    },
    {
        id: 6,
        imgUrl: "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "EXPLORE NATURE",
    },
];
const Slider = () => {
    const slideRef = useRef();
    const [loadingProgress, setLoadingProgress] = useState(0);

    //pevious slide
    const handleClickPrev = () => {
        let items = slideRef.current.querySelectorAll(".item");
        slideRef.current.appendChild(items[0]);
    };
    //next slide
    const handleClickNext = () => {
        let items = slideRef.current.querySelectorAll(".item");
        slideRef.current.prepend(items[items.length - 1]);
    };
    return (
        <div className="container">
            <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
            <div id="slide" ref={slideRef}>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="item"
                        style={{ backgroundImage: `url(${item.imgUrl})` }}
                    >
                        <div className="content">
                            <div className="name">{item.name}</div>
                            <div className="des">{item.desc}</div>
                            <button>See more</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button id="prev" onClick={handleClickPrev}>
                    <FaAngleLeft />
                </button>
                <button id="next" onClick={handleClickNext}>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
};

export default Slider;
