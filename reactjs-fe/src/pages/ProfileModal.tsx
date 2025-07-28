import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { FC } from "react";
import { Button } from "@/components/ui/button";

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProfileModal: FC<ProfileModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black border border-lime-500 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-lime-400 text-2xl">Albert Esin</DialogTitle>
          <DialogDescription className="text-gray-300">
            Fullstack Developer - Alien UI Themer 🌌👽
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <section>
            <h3 className="text-lime-300 font-semibold">👋 About Me</h3>
            <p className="text-sm text-gray-400">
              I started learning programming from 2019 to now.
              I'm a passionate developer who loves building futuristic UI/UX inspired by alien aesthetics.
              I focus on frontend React + backend Node.js, with a strong interest in UI animation and 3D web but my strong is backend.
            </p>
          </section>
          <section>
            <h3 className="text-lime-300 font-semibold">🛠 Skills</h3>
            <ul className="list-disc list-inside text-sm text-gray-400">
              <li>React, TypeScript, TailwindCSS, ShadCN</li>
              <li>Node.js, Express, Java, MongoDB, Mysql</li>
              <li>Framer Motion, GSAP, Three.js</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lime-300 font-semibold">📂 Projects</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>👽 <strong>MyStorage</strong>: A virtual storage minecraft plugin like MineralGUI premium but free</li>
              <li>🛸 <strong>InventoryMail</strong>: A mailbox storage minecraft free plugin</li>
            </ul>
          </section>
          <section>
            <h3 className="text-lime-300 font-semibold">📞 Contact</h3>
            <p className="text-sm text-gray-400"><span className="text-indigo-600">🕻</span> Phone number: (+84) 333853430</p>
            <p className="text-sm text-gray-400"><span className="text-cyan-300">🗫</span> Zalo: (+84) 338188506</p>
            <p className="text-sm text-gray-400"><span className="">✉</span> Email: taiprodev69@gmail.com</p>
            <p className="text-sm text-gray-400"><span className="text-blue-600">ⓕ</span> Facebook: <a href="https://www.facebook.com/taiproduaxe" className="underline" target="_blank">www.facebook.com/taiproduaxe</a></p>
            <p className="text-sm text-gray-400"><span className="text-red-600">[▶︎]</span> Youtube: <a href="https://www.youtube.com/@nhinguyenmc" className="underline" target="_blank">www.youtube.com/@nhinguyenmc</a></p>
            <p className="text-sm text-gray-400"><span className="text-black">🐙</span> Github repo: <a href="https://github.com/taiprovip3/" className="underline" target="_blank">www.github.com/taiprovip3/</a></p>
            <p className="text-sm text-gray-400"><span>🚰</span> Spigotmc: <a href="https://www.spigotmc.org/members/albertesin.688663/" className="underline" target="_blank">www.spigotmc.org/members/albertesin.688663</a></p>
            <p className="text-sm text-gray-400"><span>🐸</span> Discord: <a href="https://discord.com/channels/@me/taiproduaxe#5772" className="underline" target="_blank">taiproduaxe#5772</a></p>
          </section>
          <section>
            <h3 className="text-lime-300 font-semibold">💚 Support / Donate</h3>
            <p className="text-sm text-gray-400">
              If you enjoy my work and want to support me, feel free to donate a cup of space coffee 👽☕: <span className="text-sm text-lime-400 font-mono">paypal.me/taiproduaxe</span>
            </p>
          </section>

          {/* View Resume Button */}
          <div className="pt-4 flex justify-end">
            <a href="/resume" rel="noopener noreferrer">
                <Button variant="outline" className="bg-lime-400 border-lime-400 text-black hover:bg-lime-600 hover:text-black">View My Resume</Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};