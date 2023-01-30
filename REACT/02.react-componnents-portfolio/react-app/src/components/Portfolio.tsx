import React from "react";

export const Portfolio = () => {
  const projects = [
    {
      image:
        "https://www.shutterstock.com/image-photo/smile-girl-field-sunflower-260nw-1461657335.jpg",
      paragraph: "Lorem ipsun",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/smile-girl-field-sunflower-260nw-1461657335.jpg",
      paragraph: "Lorem ipsun",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/smile-girl-field-sunflower-260nw-1461657335.jpg",
      paragraph: "Lorem ipsun",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/smile-girl-field-sunflower-260nw-1461657335.jpg",
      paragraph: "Lorem ipsun",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/smile-girl-field-sunflower-260nw-1461657335.jpg",
      paragraph: "Lorem ipsun",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/smile-girl-field-sunflower-260nw-1461657335.jpg",
      paragraph: "Lorem ipsun",
    },
  ];

  return (
    <>
      <h1>Portfolio</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quas
        ea fugiat hic error, delectus earum? Dolor sunt velit quis officiis ab
        dignissimos qui commodi minus ut. Eius, earum? Assumenda.
      </p>

      <div className="grid-container">
        {projects.map((val, i) => {
          const { image, paragraph } = val;

          return (
            <>
              <div key={i} className="project">
                <img src={image} alt="alt text" />
                <p>
                  {paragraph} {i}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
