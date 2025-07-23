import './App.css';
import fullNameSmImg from './assets/images/fullname-small.png';
import faceImg from './assets/images/face-preview.png';
import softwareDevImg from './assets/images/software-developer4.png';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './components/ui/carousel';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './components/ui/navigation-menu';
import { Button } from './components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';

function App() {
  return (
    <>
      <div className="flex flex-col border border-red-500 h-screen text-white bg-black">
        <header className="flex">
          <div className='px-2'>
            {/* <p className='font-bold text-lg font-serif text-lime-500'>PHAN TAN TAI</p> */}
            <img src={fullNameSmImg} alt="" />
          </div>
          <div className='flex-1'></div>
          <div className=''>
            <nav className="flex justify-center space-x-4 text-lime-300 text-sm">
              <a href="/dashboard" className="rounded-lg px-3 py-2 font-bold hover:bg-teal-950 hover:font-extrabold">
                Home
              </a>
              <a href="/team" className="rounded-lg px-3 py-2 font-bold hover:bg-teal-950 hover:font-extrabold">
                About
              </a>
              <a href="/projects" className="rounded-lg px-3 py-2 font-bold hover:bg-teal-950 hover:font-extrabold">
                Projects
              </a>
              <a href="/reports" className="rounded-lg px-3 py-2 font-bold hover:bg-teal-950 hover:font-extrabold">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <div className="flex-1 flex flex-grow">
          <div className='flex-1 flex flex-row'>
            <div className="basis-1/2 content-center text-center">
              {/* <p className='font-bold text-4xl text-lime-400'>Hi.</p> */}
              <img src={softwareDevImg} alt="" />
              <Button className='border-1 border-black rounded-none bg-lime-400 text-black hover:text-white'>My Resume</Button>
            </div>
            <div className="basis-1/2 my-gradient content-center">
              <div className='flex justify-center'><img src={faceImg} alt="" className='w-80 h-80 object-cover rounded-full shadow-md' /></div>
              <div className='p-5'>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='text-lg font-bold text-lime-300'>About me</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance pl-1">
                      <p>
                        I started programming language from 2019 to now (years at University). My strong programming languages are Java (with a strong focus on OOP principles) and JavaScript, included frameworks related to them. My academic and professional path has revolved around the development of web-based software applications, progressing from foundational concepts to the deployment of real-world products. My favorite game is "Minecraft". That's a coincidence because it was also developed in Java language by Mojang. My goal is becoming a full-stack developer in future, eager to contribute my expertise to impactful real-world projects.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className='text-lg font-bold text-lime-300'>Education</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance pl-1">
                      <p>- From 2006 - 2011: Tran Quang Co - Primary school</p>
                      <p>- From 2012 - 2016: Tran Quan Khai - Secondary school</p>
                      <p>- From 2017 - 2019: Vo Truong Toan - High school</p>
                      <p>- From 2019 - 2023: IUH - Industrial University of Ho Chi Minh City school</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className='text-lg font-bold text-lime-300'>Hobbies</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance pl-1">
                      <p>- Gameplay: Minecraft, League Of Legend,..</p>
                      <p>- Traveling</p>
                      <p>- Building PC hardware</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>

        <div>About</div>
        {/* <footer className="border bg-gray-800 p-4 text-center">
          <p>&copy; 2023 Tên công ty của bạn. Bảo lưu mọi quyền.</p>
        </footer> */}
      </div>      
    </>
  )
}

export default App;