import './App.css';
import fullNameSmImg from './assets/images/fullname.png';
import softwareDevImg from './assets/images/software-developer6.png';
import avatar4 from "./assets/images/avatar2.jpg"
import { motion } from 'framer-motion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import React from 'react';
import { ProfileModal } from './pages/ProfileModal';

function App() {
  const [profileModalOpen, setProfileModalOpen] = React.useState(false);
  return (
    <>
      <div className="flex-1 flex">
        {/* Left */}
        <div className="basis-1/2 flex justify-center items-center">
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.div
                className='w-3/5
                          grid place-items-center gap-2'
                initial={{ opacity: 0, y: 20 }} // Trạng thái ban đầu: ẩn và hơi dịch xuống
                animate={{ opacity: 1, y: 0 }} // Trạng thái khi component được mount: hiện và trở lại vị trí cũ
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 0px 8px rgb(255,255,255)", 
                  borderColor: "#03f072ff", // Màu border khi hover (ví dụ: green-600)
                  borderWidth: "4px",     // Độ dày border khi hover
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300 }} // Thời gian chuyển động là 0.5 giây
                onClick={() => setProfileModalOpen(true)}
              >
                <img src={avatar4} alt="" className='w-64 h-64 object-cover rounded-full outline-none shadow-md border-none' />
                <img src={fullNameSmImg} alt="" />
                <div className='text-lime-400 text-xs'>(alias: AlbertEsin, taiproduaxe, nhinguyenmc)</div>
                <img src={softwareDevImg} alt="" />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between gap-4">
                <Avatar>
                  <AvatarImage src="https://static.wikia.nocookie.net/logopedia/images/f/f9/Minecraft_Bedrock_icon.svg" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@AboutMe</h4>
                  <p className="text-sm">
                    I started programing from 2019 to now.
                    My favorite game is: Minecraft.
                    My strength is Backend but i know Frontend and DevOps is also important!
                  </p>
                  <div className="text-muted-foreground text-xs">
                    Joined December 2019
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        {/* Right */}
        <div className="basis-1/2 content-center">
          <div className='justify-items-center'>
            <img src="https://images.squarespace-cdn.com/content/v1/55070640e4b02d883732a32c/93180440-910b-4eac-afcb-a0644a979de2/Space+Spaceship+GIF+by+Dyanapyehchek.gif?format=2500w" alt="" className='w-16 h-16 border-none' />
            {/* <Button className='border-1 border-black rounded-none bg-lime-400 text-black hover:text-white'>My Resume</Button> */}
          </div>
        </div>
      </div>
      <ProfileModal open={profileModalOpen} onOpenChange={setProfileModalOpen} />
    </>
  )
}

export default App;