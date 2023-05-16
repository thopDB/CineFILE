import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";
import cinefile from "../../assets/cinefile.png";
import logo from "../../../public/logo.png";
import "./style.scss";

const About = () => {
  return (
    <div className="about">
      <ContentWrapper>
        <div className="part">
          <div className="first">
            <Img className="logo" src={logo} />
            <Img className="logoImg" src={cinefile} />
          </div>
          <div className="second">
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur non a ea consequatur officia tempore repellat nostrum
              perspiciatis possimus nobis, ipsa voluptate atque maxime iure qui
              tempora vitae consectetur eius temporibus sit? Commodi nobis
              numquam consequatur praesentium, eum doloribus enim ipsum fugiat
              id? Maiores autem nemo veritatis nam a minus explicabo incidunt
              sint tenetur, porro, tempore nobis! Sed vel consectetur hic quasi
              nobis porro quas obcaecati minus enim impedit quae, quis ipsam,
              delectus accusamus, doloribus possimus sunt tenetur voluptatibus
              omnis cupiditate inventore minima fugit. Autem optio harum,
              consequatur pariatur, tempora, laudantium delectus eos hic
              reprehenderit consectetur ratione corrupti. Totam exercitationem
              vel rem, quae recusandae quasi sed eos voluptates sit. Cum,
              aperiam? Impedit sed aperiam quos consectetur provident hic
              dignissimos commodi, omnis officiis vel, possimus, alias fugiat
              vitae nemo! Delectus rerum adipisci sequi asperiores quod aliquam
              necessitatibus beatae quia nisi magni fugiat, enim, pariatur
              ipsam. Accusantium quas assumenda eum ipsam optio?
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default About;
