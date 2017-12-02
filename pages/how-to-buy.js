import React, { Component } from 'react';
import Head from 'next/head';
import { Link } from '../routes';
import { Layout, CTASection } from '../components';
import stylesheet from '../styles/pages/how-to-buy.css';

export default class extends Component {
  jumpTo = (number) => {
    console.log(this[`step${number}`]);
  }
  render() {
    return (
      <div id="how-to-buy-page">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <Layout title="How to Buy | Chef Box Delivery : Ready to cook right at your home.">
          <div className="container">
            <h1 style={{ textAlign: 'center', margin: '50px 0 35px' }} className="fancy-font">วิธีการสั่งซื้อ</h1>
            <div className="row">
              <div className="col-12 col-md-3 step">
                <div className="icon">
                  <i className="material-icons">perm_phone_msg</i>
                </div>
                <h3>สั่งอาหาร</h3>
                <p>ติดต่อ Admin ของเราผ่านทาง Line@  (@chefboxdelivery)</p>
                <button
                  className="btn btn-link"
                  onClick={() => this.jumpTo(1)}
                >
                  <p>How it works</p>
                  <i className="material-icons">keyboard_arrow_down</i>
                </button>
              </div>
    
              <div className="col-12 col-md-3 step">
                <div className="icon">
                  <i className="material-icons">shopping_cart</i>
                </div>
                <h3>เลือกเมนูที่ชอบ</h3>
                <p>เลือกเมนูอาหารผ่านทางเวปไซด์ หรือจาก Admin</p>
                <button
                  className="btn btn-link"
                  onClick={() => this.jumpTo(2)}
                >
                  <p>How it works</p>
                  <i className="material-icons">keyboard_arrow_down</i>
                </button>
              </div>
    
              <div className="col-12 col-md-3 step">
                <div className="icon">
                  <i className="material-icons">motorcycle</i>
                </div>
                <h3>จัดส่งถึงมือคุณ</h3>
                <p>จัดส่งถึงมือคุณ 1 วันหลังจากวันที่คุณสั่งซื้อ</p>
                <button
                  className="btn btn-link"
                  onClick={() => this.jumpTo(3)}
                >
                  <p>How it works</p>
                  <i className="material-icons">keyboard_arrow_down</i>
                </button>
              </div>
    
              <div className="col-12 col-md-3 step">
                <div className="icon">
                  <i className="material-icons">restaurant_menu</i>
                </div>
                <h3>ทำอาหารมื้อพิเศษ</h3>
                <p>สนุกกับประสบการณ์ใหม่ ในการทำอาหารไปกับchefbox</p>
                <button
                  className="btn btn-link"
                  onClick={() => this.jumpTo(4)}
                >
                  <p>How it works</p>
                  <i className="material-icons">keyboard_arrow_down</i>
                </button>
              </div>
            </div>
          </div>
    
          <div className="color-bg">
            <div className="container">
              <div
                ref={(dom) => { this.step1 = dom; }}
                className="step-detail row"
              >
                <div className="col-12 col-md-5">
                  <img src="/static/how-to-buy/step-1.jpg" alt="Chefbox: how to buy step 1" style={{ width: '100%' }} />
                </div>
                <div className="col-12 col-md-7">
                  <div className="text">
                    <h2 className="fancy-font">ช่องทางการสั่งซื้อ</h2>
                    <div className="contact-box">
                      <p>มี 2 ช่องทางการสั่งซื้อ</p>
                      Line@ ID : @Chefboxdelivery มี @ ด้วยนะค้า<br />Facebook fan page : Chefbox.delivery (ทาง inbox นะคะ)
                    </div>
                    <h5 className="fancy-font mb-3">เงื่อนไขการสั่งซื้อ</h5>
                    <ol className="condition">
                      <li>ลูกค้าสามารถสั่งอาหารล่วงหน้าได้อย่างน้อย 1 วัน และสั่งขั้นต่ำ 2 เสริ์ฟขึ้นไป</li>
                      <li>เราจะปิดการรับออเดอร์ของทุกวันเวลา 6 โมงเย็น หากสั่งสายกว่า 6 โมงเย็นอาหารจะ ถูกจัดส่งให้ในวันมะรืน</li>
                      <li>การจัดส่งจะมีค่าส่งตามระยะทาง แต่หากสั่งเกิน 1,000 บาทขึ้นไป ฟรีค่าจัดส่ง</li>
                      <li>โดยค่าส่งจะคิดคำนวนตาม แอป lalamove (สามารถ check ค่าส่งได้ที่ admin)</li>
                    </ol>
                  </div>
                </div>
              </div>
    
              <div
                ref={(dom) => { this.step2 = dom; }}
                className="step-detail row"
              >
                <div className="col-12 col-md-7">
                  <div className="text">
                    <h2 className="fancy-font mb-4">เมนูสูตรอาหาร และวัตถุดิบ</h2>
                    <div className="items">
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>เมนูใหม่ทุก 2 อาทิตย์</p>
                      </div>
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>ทำอาหารไม่เก่งก็ทำได้</p>
                      </div>
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>ความสุขในการทำอาหาร สามารถมีได้ ตั้งแต่ 20 นาทีถึง 1 ชั่วโมง ขึ้นอยู่กับแต่ละเมนู</p>
                      </div>
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>อาหารของเรามีหลากหลายประเภท เปลี่ยนไป ตามฤดูกาล</p>
                      </div>
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>วัตถุดิบจะถูกชั่งตรวงไว้ ในสัดส่วนที่พอดี</p>
                      </div>
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>ทุกเมนูจะมีลิงค์รายละเอียดและวิธีการทำอยู่บนเวปไซส์ของเราที่สามารถดูได้ทั้งบนคอมพิวเตอร์ และสมาร์ทโฟน</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center" style={{ padding: '19px' }}>
                      <Link route="/menus">
                        <button type="button" className="btn button ">เลือกเมนูที่คุณชอบ</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-5">
                  <img src="/static/how-to-buy/step-2.jpg" alt="Chefbox: how to buy step 2" style={{ width: '100%' }} />
                </div>
              </div>
    
              <div
                ref={(dom) => { this.step3 = dom; }}
                className="step-detail row"
              >
                <div className="col-12 col-md-5">
                  <img src="/static/how-to-buy/step-3.jpg" alt="Chefbox: how to buy step 3" style={{ width: '100%' }} />
                </div>
                <div className="col-12 col-md-7">
                  <div className="text">
                    <h2 className="fancy-font mb-4">การจัดส่ง</h2>
                    <div className="items">
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>อาหารจะบรรจุในกล่องที่ควบคุมอุณหภูมิด้วย เจลให้ความเย็น</p>
                      </div>
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>วัตถุดิบทุกอย่างจะถูกจัดลงในถุงและกล่องของตัวเอง โดยแยกตามเมนู </p>
                      </div>
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>จัดส่งด้วยแมสเซนเจอร์ของบริษัทใหญ่เชื่อใจได้</p>
                      </div>
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>คุณไม่จำเป็นต้องอยู่รับของเองหรือห่วงเรื่องตู้เย็นเพราะ เจลเย็นของเราสามารถควบคุมอุณหภมิได้นานกว่า 6 ชม.</p>
                      </div>
                      <div className="item">
                        <i className="material-icons">restaurant_menu</i>
                        <p>วัตถุดิบ สามารถเก็บในตู้เย็นได้ 2 วัน</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div
                ref={(dom) => { this.step4 = dom; }}
                className="step-detail row"
              >
                <div className="col-12 col-md-7">
                  <div className="text">
                    <h2 className="fancy-font mb-4">บริการหลังการขาย</h2>
                    <p>ถ้าคุณมีคำถาม หรือปัญหาเกี่ยวกับ สูตรอาหาร  เทคนิคการทำอาหาร อุปกรณ์ทางเลือกอื่นๆ สามารถติดต่อสอบถามทีมช่วยเหลือของเราได้ ในเวลา 09.00-18.00 พวกเรา Chefbox ยินดีให้บริการ</p>
                    <div className="social">
                      <i className="material-icons">perm_phone_msg</i>
                      <p>092-016-0836</p>
                    </div>
                    <div className="social">
                      <img src="/static/line.png" alt="line" style={{ width: '40px', height: '40px' }} />
                      <p>Line: @chefbox.delivery</p>
                    </div>
                    <Link route="/faq">
                      <button type="button" className="btn btn-primary ">คำถามที่พบบ่อย</button>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-md-5">
                  <img src="/static/how-to-buy/step-4.jpg" alt="Chefbox: how to buy step 3" style={{ width: '100%' }} />
                </div>
              </div>
    
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

