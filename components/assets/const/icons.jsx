import {
	RiCss3Fill,
	RiHtml5Fill,
	RiReactjsLine,
	RiLiveFill,
	RiShareForwardLine,
	RiVideoAddFill,
	RiUserShared2Fill,
} from "react-icons/ri";
import { SiTailwindcss, SiFacebookgaming } from "react-icons/si";
import { GiBackwardTime } from "react-icons/gi";
import {
	FaUserFriends,
	FaUsers,
	FaFacebookMessenger,
	FaEllipsisH,
	FaUserPlus,
	FaUserEdit,
	FaStore
} from "react-icons/fa";
import { BiStore, BiHappyAlt } from "react-icons/bi";
import {
	BsDisplay,
	BsFillGrid3X3GapFill,
	BsBellFill,
	BsSticky,
	BsFillBookmarkFill
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import {FiTv} from "react-icons/fi"
import {
	AiFillHome,
	AiOutlinePlus,
	AiOutlineLike,
	AiOutlineSmile,
	AiOutlineGif,
	AiOutlineSearch,
	AiFillGift,
} from "react-icons/ai";
import { MdOutlinePhotoLibrary, MdPhotoCamera, MdSmartDisplay, MdOutlineSell } from "react-icons/md";
import { GoComment } from "react-icons/go";
// Header
const headerIcon = [
	{
		href: "/",
		icono: AiFillHome,
		display: "sm:inline-flex",
	},
	{
		href: "/friends",
		icono: FaUserFriends,
		display: "sm:inline-flex",
	},
	{
		href: "/watch",
		icono: MdSmartDisplay,
		display: "sm:inline-flex",
	},
	{
		href: "/store",
		icono: BiStore,
		display: "sm:inline-flex",
	},
	{
		href: "/gaming",
		icono: SiFacebookgaming,
		display: "xl:inline-flex",
	},
];
const headerLateralIcon = [
	{
		icono: BsFillGrid3X3GapFill,
		display: "sm:inline-flex",
	},
	{
		icono: AiOutlinePlus,
		display: "lg:inline-flex hidden",
	},
	{
		icono: FaFacebookMessenger,
		display: "",
	},
	{
		icono: BsBellFill,
		display: "",
	},
];
// Iconos de Home
// SideBar
const sidebar = [
	{
		icono: FaUserFriends,
		texto: "Buscar Amigos",
		class: "icon-lateral",
	},
	{
		icono: BiStore,
		texto: "Marketplace",
		class: "icon-lateral",
	},
	{
		icono: FaUsers,
		texto: "Grupos",
		class: "icon-lateral",
	},
	{
		icono: BsDisplay,
		texto: "Watch",
		class: "icon-lateral",
	},
	{
		icono: GiBackwardTime,
		texto: "Recuerdos",
		class: "icon-lateral",
	},
	{
		icono: IoIosArrowDown,
		texto: "Ver mas",
		class: "icon-lateral text-gray-800 bg-gray-300 rounded-full p-1",
	},
];
const sidebarAd = [
	{
		icono: DiJavascript1,
		texto: "JavaScript",
		class: "icon-lateral text-yellow-400",
	},
	{
		icono: RiCss3Fill,
		texto: "CSS",
		class: "icon-lateral",
	},
	{
		icono: RiHtml5Fill,
		texto: "HTML",
		class: "icon-lateral text-orange-400",
	},
	{
		icono: RiReactjsLine,
		texto: "React",
		class: "icon-lateral text-blue-600",
	},
	{
		icono: SiTailwindcss,
		texto: "TailwindCSS",
		class: "icon-lateral text-green-500",
	},
];
// Iconos de contacts
const publicidadIcon = [
	{
		icon: RiVideoAddFill,
	},
	{
		icon: AiOutlineSearch,
	},
	{
		icon: FaEllipsisH,
	},
];
// Content
// Story{
const storyTitle = [
	{
		name: "Historias",
		active: "border-blue-400 border-b-2 text-blue-400",
	},
	{
		name: "Reels",
		active: "text-gray-400",
	},
	{
		name: "Salas",
		active: "text-gray-400",
	},
];
// Inputbox
const inputIcon = [
	{
		icon: RiLiveFill,
		name: "Live Video",
		color: "text-red-500",
	},
	{
		icon: MdOutlinePhotoLibrary,
		name: "Photo/video",
		color: "text-green-500",
	},
	{
		icon: BiHappyAlt,
		name: "Feeling/Activity",
		color: "text-yellow-500",
	},
];
// reactions
const reactions = [
	{
		icon: AiOutlineLike,
		name: "Like",
	},
	{
		icon: GoComment,
		name: "Comment",
	},
	{
		icon: RiShareForwardLine,
		name: "Share",
	},
];
// reactionComments
const reactionComments = [
	{
		icon: AiOutlineSmile,
	},
	{
		icon: MdPhotoCamera,
	},
	{
		icon: AiOutlineGif,
	},
	{
		icon: BsSticky,
	},
];

// Friends icons
const friendIcons = [
	{
		texto: "Inicio",
		icono: FaUserFriends,
		class: "icon-friend text-white",
		classDiv: "friend-list bg-blue-300"
	},
	{
		texto: "Solicitudes de amistad",
		icono: RiUserShared2Fill,
		class: "icon-friend",
		classDiv: "friend-list"
	},
	{
		texto: "Sugerencias",
		icono: FaUserPlus,
		class: "icon-friend",
		classDiv: "friend-list"
	},
	{
		texto: "Todos los amigos",
		icono: FaUsers,
		class: "icon-friend",
		classDiv: "friend-list"
	},
	{
		texto: "Cumpleaños",
		icono: AiFillGift,
		class: "icon-friend",
		classDiv: "friend-list"
	},
	{
		texto: "Listas personalizadas",
		icono: FaUserEdit,
		class: "icon-friend",
		classDiv: "friend-list"
	},
];

// Watch icons
const watchIcons = [
	{
		texto: "Inicio",
		icono: MdSmartDisplay,
		class: "icon-friend text-white",
		classDiv: "friend-list bg-blue-300"
	},
	{
		texto: "En vivo",
		icono: RiLiveFill,
		class: "icon-friend",
		classDiv: "friend-list"
	},
	{
		texto: "Programas",
		icono: FiTv,
		class: "icon-friend",
		classDiv: "friend-list"
	},
	{
		texto: "Videos guardados",
		icono: BsFillBookmarkFill,
		class: "icon-friend",
		classDiv: "friend-list"
	},

];

// Store icons
const storeIcons = [
	{
		texto: "Explorar todo",
		icono: BiStore,
		class: "icon-friend text-white",
		classDiv: "friend-list bg-blue-300"
	},
	{
		texto: "Notificaciones",
		icono: BsBellFill,
		class: "icon-friend",
		classDiv: "friend-list"
	},
	{
		texto: "Compra",
		icono: FaStore,
		class: "icon-friend",
		classDiv: "friend-list"
	},
	{
		texto: "Venta",
		icono: MdOutlineSell,
		class: "icon-friend",
		classDiv: "friend-list"
	},

];
export {
	sidebar,
	sidebarAd,
	headerIcon,
	headerLateralIcon,
	storyTitle,
	inputIcon,
	reactions,
	reactionComments,
	publicidadIcon,
	friendIcons,
	watchIcons,
	storeIcons
};
