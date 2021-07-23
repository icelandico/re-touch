import React from "react";
import BeforeAfterSlider from 'react-before-after-slider'
import "./index.css";

const IndexPage = () => {
  return (
    <main ref={document}>
      <h1>
        Hello, Jestem Isia.
      </h1>
      <div className={'retouch__images-container'}>
        <div className={'retouch-image'}>
          <BeforeAfterSlider
              before={"https://imagizer.imageshack.com/img923/9210/Igj6BB.jpg"}
              after={"https://imagizer.imageshack.com/img922/7249/NCCfen.jpg"}
              width={500}
              height={700}
          />
          </div>

        <div className={'retouch-image'}>
          <BeforeAfterSlider
              before="https://imagizer.imageshack.com/img922/4202/IfNACi.jpg"
              after="https://imagizer.imageshack.com/img923/2862/77pNNK.jpg"
              width={500}
              height={800}
          />
        </div>

        <div className={'retouch-image'}>
          <BeforeAfterSlider
            before="https://imagizer.imageshack.com/img924/5241/E1mJMd.jpg"
            after="https://imagizer.imageshack.com/img922/9710/IJSLR0.jpg"
            width={600}
            height={800}
          />
        </div>

        <div className={'retouch-image'}>
          <BeforeAfterSlider
          before="https://imagizer.imageshack.com/img922/7268/UXWK4u.jpg"
          after="https://imagizer.imageshack.com/img922/3314/zlD0qS.jpg"
          width={800}
          height={500}
        />
        </div>
      </div>
    </main>
  )
}

export default IndexPage
