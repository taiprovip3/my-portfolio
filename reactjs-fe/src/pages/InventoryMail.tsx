import { Button } from "@/components/ui/button";
import type { FC } from "react";
import { motion } from "framer-motion";
import inventoryMailPreview1 from '../assets/images/inventorymail-preview1.jpg';
import inventoryMailPreview2 from '../assets/images/inventorymail-preview2.jpg';
import inventoryMailPreview3 from '../assets/images/inventorymail-preview3.jpg';
import inventoryMailPreview4 from '../assets/images/inventorymail-preview4.jpg';

import { Link, Element } from 'react-scroll';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const myStoragePreviews = [
  inventoryMailPreview1, inventoryMailPreview2, inventoryMailPreview3, inventoryMailPreview4
];

const InventoryMailPage: FC = () => {

  return (
    <div className="flex flex-col md:flex-row text-white">
      {/* Sidebar - Table of contents */}
      <aside className="md:w-1/4 p-6 border-r border-lime-500/30 sticky top-0 h-fit">
        <h2 className="text-lime-400 text-3xl font-bold mb-4">📚 Contents</h2>
        <ul className="space-y-2 text-lg text-lime-300">
          <li><Link to="overview" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">🧐 Overview</Link></li>
          <li><Link to="features" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">🛠 Feature</Link></li>
          <li><Link to="installation" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">⚙️ Installation</Link></li>
          <li><Link to="preview" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">🖼 Preview</Link></li>
          <li><Link to="commands" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">⛓️ Dependencies</Link></li>
          <li><Link to="dependencies" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">🏷️ Commands</Link></li>
          <li><Link to="permissions" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">⛔ Permissions</Link></li>
          <li><Link to="download" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">⤵️ Download</Link></li>
          <li><Link to="commitment" smooth={true} duration={1000} className="hover:text-green-500 hover:cursor-pointer">✊ Commitment & Conclusion</Link></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 space-y-12">
        {/* Overview */}
        <Element name="overview">
          <section>
            <h1 className="text-3xl font-bold text-lime-400">InventoryMail 🕋💎</h1>
            <h4 className="text-lime-400 mb-4">(A real mailbox inventory storage plugin can receive parcels from consignor)</h4>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              InventoryMail is a powerful and lightweight plugin designed to bring a real-world mailing experience into your Minecraft server. With InventoryMail, each player gets their own virtual mailbox, where they can receive and store items just like a real postal inbox. Players can easily send items to one another, and all incoming parcels are securely saved into their personal mail inventory — accessible anytime, anywhere. The plugin offers intuitive commands for sending, receiving, and managing items, making in-game trading and gifting seamless and immersive.
              What sets InventoryMail apart is its focus on performance and stability. The system is highly optimized to ensure smooth operation even on large-scale servers. It features automatic data saving, ensuring that no items are lost even during server restarts or unexpected crashes. Whether you're running a survival world, a roleplay server, or an MMORPG-style experience, InventoryMail is the perfect solution for enhancing player interaction through item mail. Simple, fast, and reliable — this plugin transforms your server into a connected, player-driven community.
            </p>
          </section>
        </Element>

        {/* Features */}
        <Element name="features">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-2">🛠 Features</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>📦 Each player has their own virtual mailbox (Inventory Mailbox)</li>
              <li>📬 Send items directly to other players' mailboxes</li>
              <li>📥 Retrieve items from your mailbox with simple commands</li>
              <li>🔒 Items are safely stored even if the player is offline</li>
              <li>⚡ Optimized for high performance on large servers</li>
              <li>💾 Automatically saves all mail data to prevent item loss</li>
              <li>🎁 Perfect for gifting, trading, or server events</li>
              <li>🧩 Easy-to-use and fully configurable</li>
            </ul>
          </section>
        </Element>

        {/* Installation */}
        <Element name="installation">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-2">🚀 How to Install</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-1">
              <li>Drop the plugin `.jar` file into your server’s <code>/plugins</code> folder.</li>
              <li>Restart the server.</li>
              <li>Use command <code className="font-bold text-lime-500">/im</code> to open your virtual chest.</li>
              <li>Type command: <code className="font-bold text-lime-500">/im help</code> to see details instructions</li>
              <li>Try to send the first parcel to your friend. Enjoy!</li>
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
                    transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
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
              <li>Vault (OPTIONAL - REQUIRED IF enabled upgrade inventory mail feature in config)</li>
            </ul>
          </section>
        </Element>

        {/* Commands */}
        <Element name="commands">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-4">🏷️ Commands</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>/im: Open the main inventory GUI</li>
              <li>/im send [target]: Send the item in hand to target</li>
              <li>/im refresh: Refreshing item in inventory</li>
              <li>/im reload: Reload the plugin</li>
            </ul>
          </section>
        </Element>

        {/* Permissions */}
        <Element name="permissions">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-4">⛔ Permissions</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>inventorymail.use: Allow open GUI, take parcel, send parcel</li>
              <li>inventorymail.refresh: Refresh player inventory mailbox</li>
              <li>inventorymail.*: Grant admin permissions</li>
              <li>inventorymail.reload: Reload the plugin</li>
              <li>inventorymail.size.[number]: Define the maximum slots of player (comport for making upgrade feature)</li>
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

        {/* Commitment */}
        <Element name="commitment">
          <section>
            <h2 className="text-2xl text-lime-400 font-semibold mb-4">✊ Commitments & Conclusions</h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Commitment</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-gray-300">
                    I guarantee that this plugin source code does not contain malicious or harmful code, conflicting with other components.
                  </p>
                  <p className="text-gray-300">
                    I do use bstats running in the background but only to collect information about the number of servers using the plugin. Absolutely do not steal any other information of the server.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Product Infomation</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-gray-300">
                    This plugin may have some errors or bug unpredictable. Beacause it's only be developed by a one person (me). Some testcases maybe i have been missed!
                    But please don't rush to rate this 1* :(. Tell me proplems, i gonna find solutions!
                  </p>
                  <p className="text-gray-300">
                    Rate a good review this plugin and leave a comment. I'll appreciate it so much! Again Thanks for using my product.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </Element>
      </main>
    </div>
  );
};

export default InventoryMailPage;
