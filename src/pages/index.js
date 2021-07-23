import React from "react";
import ImageSlider from "react-image-comparison-slider";

const IndexPage = () => {
  return (
    <main ref={document}>
      <h1>
        Hello, Jestem Isia.
      </h1>
      <div className={'retouch__images-container'}>
        <div className={'retouch-image'}>
          <ImageSlider style={{ width: 700, height: 500 }}
              image1={"https://imagizer.imageshack.com/img923/9210/Igj6BB.jpg"}
              image2={"https://imagizer.imageshack.com/img922/7249/NCCfen.jpg"}
          />
          </div>

        <div className={'retouch-image'}>
          <ImageSlider style={{ width: 700, height: 500 }}
              image1="https://imagizer.imageshack.com/img922/4202/IfNACi.jpg"
              image2="https://imagizer.imageshack.com/img923/2862/77pNNK.jpg"
          />
        </div>

        <div className={'retouch-image'}>
          <ImageSlider style={{ width: 700, height: 500 }}
            image1="https://imagizer.imageshack.com/img924/5241/E1mJMd.jpg"
            image2="https://imagizer.imageshack.com/img922/9710/IJSLR0.jpg"
          />
        </div>

        <div className={'retouch-image'}>
          <ImageSlider style={{ width: 700, height: 500 }}
          image1="https://imagizer.imageshack.com/img922/7268/UXWK4u.jpg"
          image2="https://imagizer.imageshack.com/img922/3314/zlD0qS.jpg"
        />
        </div>
      </div>
    </main>
  )
}

export default IndexPage
