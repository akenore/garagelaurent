import {Carousel} from 'flowbite-react';
import sub1 from '../assets/img/gallery/sub/sub1.png'
import sub2 from '../assets/img/gallery/sub/sub2.png'
import sub3 from '../assets/img/gallery/sub/sub3.png'
import sub4 from '../assets/img/gallery/sub/sub4.png'

export default function Indicators() {
     return (<>
          <Carousel indicators={false} slide={false} className='md:h-[480px]'>
               <div className="flex justify-center space-x-10">
                    <div>
                         <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter"
                              src={sub1}
                              alt=""/>
                    </div>
                    <div>
                         <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter"
                              src={sub2}
                              alt=""/>
                    </div>
               </div>
               <div className="flex justify-center space-x-10">
                    <div>
                         <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter"
                              src={sub3}
                              alt=""/>
                    </div>
                    <div>
                         <img className="h-auto transition-all duration-300 rounded-lg cursor-pointer filter"
                              src={sub4}
                              alt=""/>
                    </div>
               </div>
          </Carousel>
     </>)
}
