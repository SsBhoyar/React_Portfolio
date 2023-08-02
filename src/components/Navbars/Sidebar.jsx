import { RiHome7Line, RiHome7Fill , RiMailAddLine , RiMailAddFill } from "react-icons/ri";
import { BsPersonExclamation } from 'react-icons/bs';
import { FaFolderOpen , FaRegFolderOpen } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='fixed left-0 h-screen flex flex-col bg-orange-200 dark:bg-zinc-900 dark:text-white shadow-lg'>
      <SidebarIcon icon={<RiHome7Line size="26"/>} />
      <SidebarIcon icon={<RiMailAddLine size="26"/>} />
      <SidebarIcon icon={<FaFolderOpen size="26"/>} />
      <SidebarIcon icon={<BsPersonExclamation size="26"/>} />
      
    </div>
  )
};


const SidebarIcon = ({icon , tooltip = 'tooltip'}) => {
  return (
    <div className="group relative flex items-center justify-center h-12 w-12 m-2 bg-zinc-700 text-amber-500 shadow-lg rounded-3xl hover:rounded-xl hover:text-white hover:bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-300">
        {icon}
        <span className="absolute w-auto p-2 m-2 min-w-max left-12 rounded-full bg-gray-900 opacity-90 text-sm font-semibold scale-0 origin-left transition-all duration-100 group-hover:scale-100">
          {tooltip}
        </span>
    </div>
  )
}

export default Sidebar;