import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import Card from "./card";

// import Alert from "@mui/material/Alert";

const Fifth = (props) => {
  const [state, setState] = useState(1);
  const [result, setResult] = useState(Array(27).fill(false));
  const addToCartCounter = (value) => {
    console.log(result[value]);
    if (result[value] != true) {
      setState(state + 1);
      props.updateStateFromFifth(state);

      const copyResult = [...result];
      copyResult[value] = true;
      setResult(copyResult);
    } else {
      //   <Alert severity="success">This is a success Alert.</Alert>;
    }
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let value = parseFloat(props.count);

  const productdata = [
    {
      id: 1,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/368/9781501110368.jpg",
      name: "It Ends with Us",
      author: "Colleen Hoover",
      prize: "₹349",
    },
    {
      id: 2,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/111/9780670097111.jpg",
      name: "Doglapan",
      author: "Ashneer Grover ",
      prize: "₹459",
    },
    {
      id: 3,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/831/9781847941831.jpg",
      name: "Atomic Habits",
      author: "James Clear ",
      prize: "₹551",
    },
    {
      id: 4,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/268/9789390166268.jpg",
      name: "The Psychology of Money",
      author: "Morgan Housel ",
      prize: "₹548",
    },
    {
      id: 5,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/895/9781786330895.jpg",
      name: "Ikigai",
      author: " Francesc Miralles ",
      prize: "₹350",
    },
    {
      id: 6,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/839/9788194790839.jpg",
      name: "The Power of Your Subconscious Mind",
      author: "Joseph Murphy ",
      prize: "₹551",
    },
    {
      id: 7,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/185/9789385986185.jpg",
      name: "Bhagavad Gita",
      author: "A.C. Bhaktivedanta Swami Prabhupada ",
      prize: "₹551",
    },
    {
      id: 8,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/781/9781861972781.jpg",
      name: "The 48 Laws Of Power",
      author: " Robert Greene  ",
      prize: "₹551",
    },
    {
      id: 9,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/676/9780143452676.jpg",
      name: "Karma:",
      author: " Sadhguru ",
      prize: "₹551",
    },
    {
      id: 10,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/237/9781526628237.jpg",
      name: "House of Flame and Shadow",
      author: " Maas Sarah J. Maas ",
      prize: "₹551",
    },
    {
      id: 11,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/170/9780143459170.jpg",
      name: "Getting Dressed",
      author: " Alok Kejriwal  ",
      prize: "₹350",
    },
    {
      id: 12,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/369/9788196631369.jpg",
      name: "Finding the Oasis",
      author: "Sandeep Mall  ",
      prize: "₹551",
    },
    {
      id: 13,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/617/9780143464617.jpg",
      name: "Common Yet Uncommon",
      author: " Sudha Murty ",
      prize: "₹302",
    },
    {
      id: 14,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/751/9780143452751.jpg",
      name: "Art of Habits ",
      author: " Gauranga Das",
      prize: "₹551",
    },
    {
      id: 15,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/798/9780670098798.jpg",
      name: "The Golden Touch",
      author: " T.S. Kalyanaraman ",
      prize: "₹622",
    },
    {
      id: 16,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/676/9780143452676.jpg",
      name: "Karma:",
      author: " Sadhguru ",
      prize: "₹551",
    },
    {
      id: 17,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/098/9780143461098.jpg",
      name: "Curse of the Pir",
      author: " Anupama Pandey ",
      prize: "₹418",
    },
    {
      id: 18,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/543/9780241575543.jpg",
      name: "The Fury",
      author: " Alex Michaelides ",
      prize: "₹1,224",
    },
    {
      id: 19,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/368/9781501110368.jpg",
      name: "It Ends with Us",
      author: " Colleen Hoover ",
      prize: "₹349",
    },
    {
      id: 20,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/094/9780671212094.jpg",
      name: "How to Read a Book",
      author: "  Mortimer J. Adler ",
      prize: "₹413",
    },
    {
      id: 21,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/181/9781405293181.jpg",
      name: "A Good Girl's Guide to Murder",
      author: " Holly Jackson",
      prize: "₹419",
    },
    {
      id: 22,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/188/9781476753188.jpg",
      name: "Ugly Love",
      author: " Colleen Hoover",
      prize: "₹1,224",
    },
    {
      id: 23,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/782/9780008333782.jpg",
      name: "The Kid Who Came From Space",
      author: " Ross Welford ",
      prize: " ₹343",
    },
    {
      id: 24,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/086/9780241252086.jpg",
      name: "White Nights",
      author: " Ronald Meyer ",
      prize: "₹305",
    },
    {
      id: 25,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/579/9780712670579.jpg",
      name: "The Original Rider Waite",
      author: "Pamela Colman Smith ",
      prize: "₹865",
    },
    {
      id: 26,
      imageurl:
        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/543/9780241575543.jpg",
      name: "The Fury",
      author: " Alex Michaelides ",
      prize: "₹1,224",
    },
    {
      id: 27,
      imageurl:
        "https://www.bookswagon.com/productimages/images200/823/9780593336823.jpg",
      name: "Love Hypothesis",
      author: " Ali Hazelwood",
      prize: "₹746",
    },
  ];

  return (
    <div className="Fifth">
      <div className="heading">
        <p>{props.value}</p>
      </div>
      <Carousel responsive={responsive}>
        <Card
          link={productdata[value].imageurl}
          title={productdata[value].name}
          author={productdata[value].author}
          prize={productdata[value].prize}
          function={() => addToCartCounter(value)}
          check={result[value]}
        />
        <Card
          link={productdata[value + 1].imageurl}
          title={productdata[value + 1].name}
          author={productdata[value + 1].author}
          prize={productdata[value + 1].prize}
          function={() => addToCartCounter(value + 1)}
          check={result[value + 1]}
        />
        <Card
          link={productdata[value + 2].imageurl}
          title={productdata[value + 2].name}
          author={productdata[value + 2].author}
          prize={productdata[value + 2].prize}
          function={() => addToCartCounter(value + 2)}
          check={result[value + 2]}
        />
        <Card
          link={productdata[value + 3].imageurl}
          title={productdata[value + 3].name}
          author={productdata[value + 3].author}
          prize={productdata[value + 3].prize}
          function={() => addToCartCounter(value + 3)}
          check={result[value + 3]}
        />
        <Card
          link={productdata[value + 4].imageurl}
          title={productdata[value + 4].name}
          author={productdata[value + 4].author}
          prize={productdata[value + 4].prize}
          function={() => addToCartCounter(value + 4)}
          check={result[value + 4]}
        />
        <Card
          link={productdata[value + 5].imageurl}
          title={productdata[value + 5].name}
          author={productdata[value + 5].author}
          prize={productdata[value + 5].prize}
          function={() => addToCartCounter(value + 5)}
          check={result[value + 5]}
        />
        <Card
          link={productdata[value + 6].imageurl}
          title={productdata[value + 6].name}
          author={productdata[value + 6].author}
          prize={productdata[value + 6].prize}
          function={() => addToCartCounter(value + 6)}
          check={result[value + 6]}
        />
        <Card
          link={productdata[value + 7].imageurl}
          title={productdata[value + 7].name}
          author={productdata[value + 7].author}
          prize={productdata[value + 7].prize}
          function={() => addToCartCounter(value + 7)}
          check={result[value + 7]}
        />
        <Card
          link={productdata[value + 8].imageurl}
          title={productdata[value + 8].name}
          author={productdata[value + 8].author}
          prize={productdata[value + 8].prize}
          function={() => addToCartCounter(value + 8)}
          check={result[value + 8]}
        />
      </Carousel>
      ;
    </div>
  );
};

export default Fifth;
