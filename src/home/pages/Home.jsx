import React from "react";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import Navigation from "../../Shared/components/Navigation";
import MyCarousel from "../components/Carousel";
import WhatweDo from "../components/WhatweDo";
import WhyCodeArena from "../components/WhyCodeArena";
import ExpertTeam from "../components/ExpertTeam";
import BackParticles from "../../Shared/components/background";
import Footer from "../../Shared/components/Footer";
const Home = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    // <React.Fragment>
    //   <BackParticles />
    //   <Navigation />

    //   <ScrollContainer>
    //     <ScrollPage page={0}>
    //       <Animator animation={batch(Fade(), MoveIn(0, -200))}>
    //         <MyCarousel />
    //       </Animator>
    //     </ScrollPage>

    //     <ScrollPage page={1}>
    //       <Animator animation={batch(ZoomIn(), Move(), MoveOut(0, -200))}>
    //         <WhatweDo />
    //       </Animator>
    //     </ScrollPage>

    //     <ScrollPage page={2}>
    //         <WhyCodeArena />
    //     </ScrollPage>

    //     <ScrollPage page={3}>
    //       <Animator animation={batch(MoveIn(-1000, 0), Move(), MoveOut(0, -200))}>
    //         <ExpertTeam />
    //       </Animator>
    //     </ScrollPage>

    //     {/* <ScrollPage page={3}>
    //       <div>
    //         <span style={{ fontSize: "3em" }}>
    //           <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
    //           <Animator animation={MoveIn(1000, 0)}>
    //             Nice to meet you 🙋🏻‍♀️
    //           </Animator>
    //           - I'm Seonghyeok -
    //           <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
    //           <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
    //         </span>
    //       </div>
    //     </ScrollPage> */}

    //     {/* <ScrollPage page={3}>
    //       <Animator animation={batch(ZoomIn(), MoveOut(0, -200))}>
    //       </Animator>
    //     </ScrollPage> */}

    //   </ScrollContainer>
    // </React.Fragment>
    
      <React.Fragment>
        <BackParticles />
        <Navigation />
         <MyCarousel />
        <WhatweDo />
        <WhyCodeArena />
        <ExpertTeam />
        <Footer/>
      </React.Fragment>
  );
};

export default Home;
