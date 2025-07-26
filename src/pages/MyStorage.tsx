import { Button } from "@/components/ui/button";
import type { FC } from "react";
import { motion } from "framer-motion";
import myStoragePreview1 from '../assets/images/mystorage-preview1.png';
import myStoragePreview2 from '../assets/images/mystorage-preview2.png';
import myStoragePreview3 from '../assets/images/mystorage-preview3.png';
import myStoragePreview4 from '../assets/images/mystorage-preview4.png';
import myStoragePreview5 from '../assets/images/mystorage-preview5.png';
import myStoragePreview6 from '../assets/images/mystorage-preview6.png';
import myStoragePreview7 from '../assets/images/mystorage-preview7.png';
import myStoragePreview8 from '../assets/images/mystorage-preview8.png';
import { Link, Element } from 'react-scroll';

const myStoragePreviews = [
  myStoragePreview1, myStoragePreview2, myStoragePreview3, myStoragePreview4, myStoragePreview5, myStoragePreview6, myStoragePreview7, myStoragePreview8,
];

const MyStoragePage: FC = () => {
  return (
    <div className="flex flex-col md:flex-row text-white">
      {/* Sidebar - Table of contents */}
      <aside className="md:w-1/4 p-6 border-r border-lime-500/30 sticky top-0 h-fit">
        <h2 className="text-lime-400 text-3xl font-bold mb-4">📚 Contents</h2>
        <ul className="space-y-2 text-lg text-lime-300">
          <li><Link to="overview" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">👽 Overview</Link></li>
          <li><Link to="features" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">🛠 Feature</Link></li>
          <li><Link to="installation" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">⚙️ Installation</Link></li>
          <li><Link to="preview" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">🖼 Preview</Link></li>
          <li><Link to="dependencies" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">⛓️ Dependencies</Link></li>
          <li><Link to="dependencies" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">🏷️ Commands</Link></li>
          <li><Link to="permissions" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">⛔ Permissions</Link></li>
          <li><Link to="download" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">⤵️ Download</Link></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 space-y-12">
        {/* Overview */}
        <Element name="overview">
          <section>
            <h1 className="text-3xl font-bold text-lime-400">MyStorage ⚒️⛏️💎</h1>
            <h4 className="text-lime-400 mb-4">(A virtual storage plugin can manage item resource farming by pickaxe)</h4>
            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
              You don't have the money to buy the paid MineralGUI premium plugin? You want a free but quanlity alternative? WELL, im here becase i'm just like you. MyStorage is the best solution.<br />
              <strong>MyStorage</strong> is a virtual chest plugin for Minecraft servers, especially
              tailored for <span className="text-lime-300">Skyblock mode</span>. It allows players
              to collect mined blocks directly into a storage GUI and manage them easily without
              cluttering inventory.
            </p>
          </section>
        </Element>

        {/* Features */}
        <Element name="features">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-2">🛠 Features</h2>
            <ul className="list-disc list-inside text-sm text-gray-300">
              <li>🔧 Virtual GUI-based storage system</li>
              <li>📦 Auto deposit mined blocks (from pickaxe)</li>
              <li>🧲 Easy deposit & withdraw from chest</li>
              <li>🌌 Designed for Skyblock gameplay</li>
              <li>🔐 Permission-based control</li>
              <li>⚡ Optimized performance affect</li>
            </ul>
          </section>
        </Element>

        {/* Installation */}
        <Element name="installation">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-2">🚀 How to Install</h2>
            <ol className="list-decimal list-inside text-sm text-gray-300 space-y-1">
              <li>Drop the plugin `.jar` file into your server’s <code>/plugins</code> folder.</li>
              <li>Restart the server.</li>
              <li>Use command <code className="font-bold text-lime-500">/kho</code> to open your virtual chest.</li>
              <li>Mine blocks — they will be auto-stored!</li>
              <li>Use buttons in GUI to deposit/withdraw blocks as needed.</li>
            </ol>
          </section>
        </Element>

        {/* Preview */}
        <Element name="preview">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-4">🖼 Plugin Preview</h2>
            <div className="flex flex-wrap">
              {
                myStoragePreviews.map((imageObject, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut", type: "spring", stiffness: 300 }}
                    className="p-1 lg:w-1/3 xs:w-full text-center"> {/* one */}
                    <img
                      src={imageObject}
                      alt="MyStorage GUI preview"
                      className="rounded-lg object-contain mx-auto"
                    />
                    <p className="text-sm text-gray-400 mt-2 text-center italic">MyStorage Preview {index+1}</p>
                  </motion.div>
                ))
              }
            </div>
          </section>
        </Element>

        {/* Dependencies */}
        <Element name="dependencies">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-4">⛓️ Dependencies</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Vault (REQUIRED)</li>
              <li>WorldGuard (REQUIRED)</li>
              <li>LuckPerm or PermissionsEX (OPTIONAL)</li>
              <li>WorldEdit (OPTIONAL)</li>
              <li>NBT API (REQUIRED IF you are using MyStorage version below (lower) v1.0.4)</li>
              <li>ActionBarAPI (REQUIRED IF you are using MyStorage above v1.0.5). Link ActionBarAPI: <a href="https://www.spigotmc.org/resources/actionbarapi-1-8-1-14-2.1315/" target="_blank" className="text-lime-400 underline">Open link!</a></li>

            </ul>
          </section>
        </Element>

        {/* Commands */}
        <Element name="commands">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-4">🏷️ Commands</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>/kho: Open the main storage GUI</li>
              <li>/kho reload: Reload the plugin</li>
            </ul>
          </section>
        </Element>

        {/* Permissions */}
        <Element name="permissions">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-4">⛔ Permissions</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>mystorage.use: Use GUI with all action</li>
              <li>mystorage.reload: Reload the plugin</li>
            </ul>
          </section>
        </Element>

        {/* Download */}
        <Element name="download">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-4">⤵️ Download Plugin</h2>
            <Button
              variant="outline"
              className="bg-lime-600 hover:bg-lime-500 text-3xl font-extrabold p-8 rounded-lg shadow-lg hover:cursor-pointer"
            >
              Download
            </Button>
          </section>
        </Element>
      </main>
    </div>
  );
};

export default MyStoragePage;
