import React, { Component, Fragment } from 'react'


import firstImg from '../../../assets/1.jpg'
import secndImg from '../../../assets/2.jpeg'
import thirdImg from '../../../assets/3.jpeg'
import forthImg from '../../../assets/4.jpg'



 import  './carousel.css'



import {
  Carousel,
  CarouselItem,
  CarouselControl,

  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: firstImg,
    altText: 'Welcome To Our website!',
    caption: 'It’s nice to Meet you'
  },
  {
    src: secndImg,
    altText: 'Welcome To Our website!',
    caption: 'It’s nice to Meet you'
  },
  {
    src: thirdImg,
    altText: 'اهلا و سهلا  بكم في موقعنا',
    caption: 'يسرنا ان نلتقي بكم'
  },
  {
    src: forthImg,
    altText: 'Welcome To Our website!',
    caption: 'It’s nice to Meet you'
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
        <div class="item ">
          <img src={item.src} alt={item.altText} style={{width:'100%'}}/>
          <CarouselCaption captionText={item.caption} captionHeader={ item.altText} />
         </div>
        </CarouselItem>
      );
    });

    return (
        <Fragment>
        
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        
       
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </Fragment>
    );
  }
}

// class Header extends Component{

//     render() {

   
//         return (
//         <header >
           
         
//                 <Navigation />

//                  <Carousel />

//         </header>
//         )
//     }
// }
 export default Header