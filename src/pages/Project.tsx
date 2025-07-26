import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"; // thêm animation mượt mà
import myStorageLogo from '../assets/images/mystorage-preview1.png';
import inventoryMailLogo from '../assets/images/inventorymail-preview1.jpg';
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  description: string;
  logo: string; // URL hình ảnh
}

const projects: Project[] = [
  {
    id: 1,
    name: "MyStorage",
    description: "A virtual storage chest can manage item resources farming by pickaxe. This plugin making for help peoples who need solution storage block in skyblock mode. That plugin can help you storage block in an virtual storage GUI and manage them (deposit, withdraw,.. item)",
    logo: myStorageLogo,
  },
  {
    id: 2,
    name: "InventoryMail",
    description: "A plugin created a real mailbox storage item parcels of player. A mailbox in real life has been simulated to a virual storage mailbox in minecraft plugin. This plugin allow players to have each personal inventory mailbox for storing items.",
    logo: inventoryMailLogo,
  },
];

const ProjectPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex">
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 py-10">
        {projects.map((project) => (
            <motion.div
            key={project.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => navigate(`/projects/${project.name}`)}
            >
            <Card
                className="bg-black border border-green-400/30 hover:border-green-500 shadow-md hover:shadow-green-500/20 transition duration-300"
            >
                <CardContent className="p-6 flex flex-col items-center text-center text-white">
                <img
                    src={project.logo}
                    alt={project.name}
                    className="w-20 h-20 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-green-400 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                </CardContent>
            </Card>
            </motion.div>
        ))}
        </section>
    </div>
  );
};

export default ProjectPage;