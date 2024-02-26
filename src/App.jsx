import React, { useEffect, useState } from 'react'
import serv1 from "./assets/1.png"
import serv2 from "./assets/2.png"
import serv3 from "./assets/3.png"
import serv4 from "./assets/4.png"
import serv5 from "./assets/5.png"
import serv6 from "./assets/6.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from './projects'

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows:2 ,
    // autoplay:true,
    // afterChange: handleChange ,
    // responsive: [
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       dots:false ,
    //       rows:1 ,
    //       slidesToShow:1 ,
    //       autoplay:false
    //     }
    //   },
    // ]
};

const services = [
    {icon : serv1 , title:"Web Development" , desc:" Designing and building websites according to client specifications, using modern technologies and frameworks."},
    {icon : serv3 , title:"E-commerce Solutions" , desc:" Developing online stores and integrating secure payment gateways for selling products and services online."},
    {icon : serv4 , title:"Custom Software" , desc:" Building bespoke software solutions tailored to specific business requirements."},
    {icon : serv2 , title:"UI/UX Design" , desc:" Designing intuitive and visually appealing user interfaces and experiences for websites and applications."},
    {icon : serv5 , title:"SEO Services" , desc:" Optimizing websites and content for search engines to improve visibility and organic traffic."},
    {icon : serv6 , title:"Maintenance" , desc:" Providing ongoing maintenance, updates, and technical support for websites and applications post-launch."},
]

const skils = [
    {name:"Front-End" ,data:[
        {icon:<i class="fa-brands fa-html5"></i> , title:"html"},
        {icon:<i class="fa-brands fa-css3"></i> , title:"CSS"},
        {icon:<i class="fa-brands fa-sass"></i> , title:"SCSS"},
        {icon:<i class="fa-brands fa-bootstrap"></i> , title:"Bootstrap"},
        {icon:<i class='bx bxl-tailwind-css'></i> , title:"Tailwind"},
        {icon:<i class="fa-brands fa-node-js"></i> , title:"JS"},
        {icon:<i class="fa-brands fa-react"></i> , title:"ReactJS"},
        {icon:<i class="fa-solid fa-fan"></i> , title:"blade "},
        {icon:"" , title:"NextJS"},
        {icon:<i class="fa-brands fa-shopify"></i> , title:"SHOPIFY"},
        {icon:<i class="fa-brands fa-wordpress"></i> , title:"WORDPRESS"},
    ]} ,
    {name:"Back-End" ,data:[
        {icon:<i class='bx bxl-mongodb' ></i> , title:"Mongodb"},
        {icon:<i class="fa-brands fa-laravel"></i> , title:"Laravel"},
        {icon: <i class='bx bxl-php'></i> , title:"PHP"},
        {icon:  <i class="fa-brands fa-node"></i>, title:"nodejs"},
    ]}
]





const App = () => {
    const [img , setimg] = useState()
    useEffect(_=>{
        const pageTurnBtn = document.querySelectorAll(".nextprev-btn")

        pageTurnBtn.forEach((el , index)=>{
            el.onclick = ()=>{
                const pageTurnId = el.getAttribute("data-page")
                const pageTurn = document.getElementById(pageTurnId)

                if(pageTurn.classList.contains("turn")) {
                    pageTurn.classList.remove("turn")
                    pageTurn.style.zIndex = 20 - index
                }
                else {
                    pageTurn.classList.add("turn")
                    pageTurn.style.zIndex = 20  +index
                }

            }
        })


        //contact me button when click
        const pages = document.querySelectorAll(".book-page.page-right")
        const contactMeBtn = document.querySelector(".btn.contact-me")

        contactMeBtn.onclick = ()=>{

            pages.forEach((page , index)=>{
                setTimeout(() => {
                    page.classList.add("turn")
                    page.style.zIndex = 20 + index
                }, (index+1) * 100);
            })
        }


    } ,[])

    const [resize , Setresize] = useState(true)

    useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth > 1030 ) Setresize(true)
        else  Setresize(false)
      };
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 
  
  return (
    <>
    <h1 className='mobile'> It is not currently available in the mobile version due to time constraints </h1>
    <div class="wrapper">
        <div class="cover cover-left"></div>
        <div class="cover cover-right turn"></div>
        <div className={`showImg ${img ? "show" : ""}`}> <i onClick={_=> setimg("")}  class='bx bx-expand-alt'></i>  <img src={img} /> </div>

        <div class="book">

            <div class="book-page page-left">
                <div class="profile-page">
                    <img src="me.jpg" alt="" />
                    <h1>Ahmed Abdelrhman</h1>
                    <h3>Full Stack Developer</h3>
                    
                    <div class="social-media">
                        <a href=""> <i class="bx bxl-facebook"></i> </a>
                        <a href=""> <i class="bx bxl-linkedin"></i> </a>
                        <a href=""> <i class="bx bxl-whatsapp"></i> </a>
                        <a href=""> <i class="bx bxl-instagram-alt"></i> </a>
                    </div>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sit ea totam. Sit, laudantium aliquam. Adipisci eaque nam id aspernatur aperiam quae, voluptas veniam consectetur delectus inventore culpa fuga! Laborum!</p>
                    <div class="btn-box"> 
                        <a href="#" class="btn"> Download CV </a>
                        <a href="#" class="btn contact-me">Contact Me</a>
                    </div>

                </div>
            </div>

            <div class="book-page page-right " id="turn-1">
                {/* <!-- page 1 ( work experience ) --> */}
                <div class="page-front">
                    <h1 class="title"> Work Experience</h1>

                    <div class="workeduc-box">
                        <span class="year"> <i class="bx bxs-calendar"></i> 2020 - 2021   </span>
                        <h3>Web Developer - company</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error labore aperiam dicta veniam pariatur cumque inventore laudantium laborum, qui soluta obcaecati illum incidunt! Cum id dicta magni dolorem velit.</p>
                    </div>
                    
                    <div class="workeduc-box">
                        <span class="year"> <i class="bx bxs-calendar"></i> 2020 - 2021   </span>
                        <h3>Web Developer - company</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error labore aperiam dicta veniam pariatur cumque inventore laudantium laborum, qui soluta obcaecati illum incidunt! Cum id dicta magni dolorem velit.</p>
                    </div>

                    <div class="number-page"> 1</div>
                    <div class="nextprev-btn next" data-page="turn-1"> <i class="bx bx-chevron-right"></i> </div>
                </div>

                {/* <!-- page 2 ( Education ) --> */}
                <div class="page-back">
                    <h1 class="title">Education</h1>

                    <div class="workeduc-box">
                        <span class="year"> <i class="bx bxs-calendar"></i> 2020 - 2021   </span>
                        <h3>Web Developer - company</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error labore aperiam dicta veniam pariatur cumque inventore laudantium laborum, qui soluta obcaecati illum incidunt! Cum id dicta magni dolorem velit.</p>
                    </div>
                    
                    <div class="workeduc-box">
                        <span class="year"> <i class="bx bxs-calendar"></i> 2020 - 2021   </span>
                        <h3>Web Developer - company</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error labore aperiam dicta veniam pariatur cumque inventore laudantium laborum, qui soluta obcaecati illum incidunt! Cum id dicta magni dolorem velit.</p>
                    </div>

                    <div class="number-page"> 2</div>
                    <div class="nextprev-btn back" data-page="turn-1"> <i class="bx bx-chevron-left"></i> </div>
                </div>

            </div>

            <div class="book-page page-right " id="turn-2">
                
                {/* <!--  page 3 ( my services )  --> */}
                <div class="page-front">
                    <h1 class="title">My Services</h1>
                    <div class="services-box">
                        {
                            services.map((e,index)=>(
                                <div class="services-content">
                                    <img src={e.icon} />
                                    <p>{e.title}</p>
                                    <span>{e.desc}</span>
                                </div>
                            ))
                        }
                    </div>

                    
                    <div class="number-page"> 3</div>
                    <div class="nextprev-btn" data-page="turn-2"> <i class="bx bx-chevron-right"></i> </div>
                
                </div>

                {/* <!--  page 4 ( my skills )  --> */}
                <div class="page-back">
                    <h1 class="title">My Skills</h1>
                    <div class="skills-box">
                        {
                            skils.map((ele , index)=>(
                                <div class="skills-content">
                                    <h3>{ele.name}</h3>
                                    <div class="content">
                                    {
                                        ele.data?.map((e,idx)=>(
                                            <span> {e.icon} {e.title}</span>
                                        ))
                                    }
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    
                    <div class="number-page"> 4</div>
                    <div class="nextprev-btn back" data-page="turn-2"> <i class="bx bx-chevron-left"></i> </div>
                
                </div>

            </div>

            <div class="book-page page-right" id="turn-3">
                
                {/* <!--  page 5 ( latest project or my portfolio )  --> */}
                <div class="page-front">
                    <h1 class="title">my projects</h1>
                    <Slider {...settings} >
                        {
                            data.map((e,index)=>(
                                <div className={`box ${e.type}`} key={index}>
                                    <img src={e.img} />
                                    <i class='bx bx-expand' onClick={_=> setimg(e.img)}></i>
                                    <p> {e.title} </p>

                                    <div className='links'>
                                        <a href={e.github} target='_blank' > <i class='bx bxl-github' ></i> </a>
                                        <a href={e.visit} target='_blank' > <i class='bx bx-show-alt' ></i> </a>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>

                    <div class="number-page"> 5</div>
                    <div class="nextprev-btn" data-page="turn-3"> <i class="bx bx-chevron-right"></i> </div>
                
                </div>

                {/* <!--  page 6 ( Contact me )  --> */}
                <div class="page-back contactus">
                        <h1 className="title">Contact Me</h1>
                    <form>
                        <img src="bg.jpg" alt="" />
                        <input type="text" placeholder='your name' />
                        <input type="text" placeholder='your phone' />
                        <input type="text" placeholder='your emaill' />
                        <textarea name="" placeholder='your message' ></textarea>
                        <div className="btn"> Send </div>
                    </form>

                    <div class="number-page"> 6</div>
                    <div class="nextprev-btn back" data-page="turn-3"> <i class="bx bx-chevron-left"></i> </div>

                </div>
            </div>
            
        </div>
    </div>
        
       

</>
  )
}

export default App