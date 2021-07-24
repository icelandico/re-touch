import React from "react";
import BeforeAfterSlider from 'react-before-after-slider';
import "./index.css";

const IndexPage = () => {
  return (
    <main className={'main__container'}>
      { typeof window !== 'undefined' && (
          <div className={'retouch__images-container'}>
            <div className={'retouch-image'}>
              <p className={'retouch-image__text'}>fotografie i retusz:</p>
              <p className={'retouch-image__text'}>Marianna Matuszewska</p>
              <BeforeAfterSlider
                  after="https://imagizer.imageshack.com/img924/2770/tXP34r.jpg"
                  before="https://imagizer.imageshack.com/img922/7269/mpQMZt.jpg"
                  width={1000}
                  height={750}
              />
            </div>
            <div className={'retouch-container__double'}>
              <div className={'retouch-image'}>
                <BeforeAfterSlider
                    after={"https://imagizer.imageshack.com/img922/4515/3fPtmA.jpg"}
                    before={"https://imagizer.imageshack.com/img924/2238/Q4gvxk.jpg"}
                    width={500}
                    height={800}
                />
              </div>
              <div className={'retouch-image'}>
                <BeforeAfterSlider
                    after="https://imagizer.imageshack.com/img922/1676/GT4AMu.jpg"
                    before="https://imagizer.imageshack.com/img923/8881/solkKH.jpg"
                    width={500}
                    height={800}
                />
              </div>
            </div>
            <div className={'retouch-image'}>
              <p className={'retouch-image__text'}>fotograf: Filip Jesiołowski</p>
              <p className={'retouch-image__text retouch-image__text--bottom'}>retusz: Marianna Matuszewska</p>
              <BeforeAfterSlider
                  after={"https://imagizer.imageshack.com/img923/1397/X81Etw.jpg"}
                  before={"https://imagizer.imageshack.com/img923/761/Gi65Cd.jpg"}
                  width={600}
                  height={900}
              />
            </div>

          </div>
      )}

    </main>
  )
}

export default IndexPage
