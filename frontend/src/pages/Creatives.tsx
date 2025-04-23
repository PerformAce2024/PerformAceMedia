import React, { useState, useRef, useCallback, useEffect } from "react";

interface Creative {
  name: string;
  url: string;
}

// Updated interface with nested structure
interface CategoryContent {
  [subcategory: string]: Creative[];
}

interface VisionTVProps {
  creatives: { [category: string]: CategoryContent };
  defaultVideoUrl?: string;
}

// Type definitions for fullscreen API
interface FullScreenDocument extends Document {
  mozFullScreenElement?: Element;
  webkitFullscreenElement?: Element;
  msFullscreenElement?: Element;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
}

interface FullScreenElement extends HTMLElement {
  mozRequestFullScreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

const Creatives: React.FC<VisionTVProps> = ({
  creatives,
  defaultVideoUrl = "https://pacreatives.s3.ap-south-1.amazonaws.com/automobile/bmw.mp4",
}) => {
  const [selectedCreativeUrl, setSelectedCreativeUrl] =
    useState<string>(defaultVideoUrl);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<{
    [key: string]: string | null;
  }>({});
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initialize video when component mounts
  useEffect(() => {
    if (videoRef.current && selectedCreativeUrl) {
      videoRef.current.src = selectedCreativeUrl;
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const toggleSubcategory = (category: string, subcategory: string) => {
    setActiveSubcategory({
      ...activeSubcategory,
      [category]:
        activeSubcategory[category] === subcategory ? null : subcategory,
    });
  };

  const handleCreativeSelect = (url: string) => {
    setSelectedCreativeUrl(url);
    if (videoRef.current) {
      videoRef.current.src = url;
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log("Play prevented:", error);
      });
      setIsPlaying(true);
    }
    setCopiedLink(null);
    setShowShareOptions(false);
  };

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.log("Play prevented:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleSoundToggle = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleFullscreenToggle = useCallback(() => {
    if (videoRef.current) {
      const doc = document as FullScreenDocument;
      const videoElement = videoRef.current as FullScreenElement;

      if (
        !doc.fullscreenElement &&
        !doc.mozFullScreenElement &&
        !doc.webkitFullscreenElement &&
        !doc.msFullscreenElement
      ) {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (doc.exitFullscreen) {
          doc.exitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          doc.mozCancelFullScreen();
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        } else if (doc.msExitFullscreen) {
          doc.msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    }
  }, []);

  const toggleShareOptions = useCallback(() => {
    setShowShareOptions(!showShareOptions);
  }, [showShareOptions]);

  const shareToWhatsApp = useCallback(() => {
    if (selectedCreativeUrl) {
      // Create WhatsApp sharing URL
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
        selectedCreativeUrl
      )}`;
      // Open WhatsApp in a new tab/window
      window.open(whatsappUrl, "_blank");
      setShowShareOptions(false);
    } else {
      setCopiedLink("No video selected to share.");
      setTimeout(() => setCopiedLink(null), 3000);
    }
  }, [selectedCreativeUrl]);

  const copyToClipboard = useCallback(() => {
    if (selectedCreativeUrl) {
      navigator.clipboard.writeText(selectedCreativeUrl);
      setCopiedLink("Link Copied!");
      setTimeout(() => setCopiedLink(null), 3000);
      setShowShareOptions(false);
    } else {
      setCopiedLink("No video selected to share.");
      setTimeout(() => setCopiedLink(null), 3000);
    }
  }, [selectedCreativeUrl]);

  // Add event listeners for video events
  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setIsPlaying(false);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [selectedCreativeUrl]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Set initial state based on screen size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    // <div className="flex flex-col md:flex-row h-screen bg-[#EAE91] overflow-hidden">
    //   {/* Mobile sidebar toggle button */}
    //   <button
    //     className="md:hidden fixed top-4 left-4 z-30 bg-primary text-white p-2 rounded-md"
    //     onClick={toggleSidebar}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth="1.5"
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //       />
    //     </svg>
    //   </button>

    //   {/* Left Panel - Dropdowns */}
    //   <div
    //     className={`${
    //       sidebarOpen ? "translate-x-0" : "-translate-x-full"
    //     } md:translate-x-0 transition-transform duration-300 fixed md:relative z-20 w-64 bg-primary text-white h-full overflow-auto`}
    //   >
    //     <div className="p-4">
    //       <div className="flex justify-between items-center mb-4">
    //         <img className="w-32 h-auto" src="logo.png" alt="Logo" />
    //         {/* Close button for mobile */}
    //         <button className="md:hidden text-white" onClick={toggleSidebar}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //       </div>

    //       {Object.keys(creatives).map((category) => (
    //         <div key={category} className="mb-3">
    //           <div
    //             className="flex justify-between items-center py-2 cursor-pointer border-b border-black"
    //             onClick={() => toggleDropdown(category)}
    //           >
    //             <span className="font-medium">{category}</span>
    //             <svg
    //               className={`w-4 h-4 transition-transform ${
    //                 activeDropdown === category ? "rotate-180" : ""
    //               }`}
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M19 9l-7 7-7-7"
    //               />
    //             </svg>
    //           </div>
    //           {activeDropdown === category && (
    //             <div className="mt-1 pl-2">
    //               {Object.keys(creatives[category]).map((subcategory) => (
    //                 <div key={`${category}-${subcategory}`} className="mb-2">
    //                   <div
    //                     className="flex justify-between items-center py-1 px-2 cursor-pointer hover:bg-gray-700 rounded"
    //                     onClick={() => toggleSubcategory(category, subcategory)}
    //                   >
    //                     <span className="text-sm">{subcategory}</span>
    //                     <svg
    //                       className={`w-3 h-3 transition-transform ${
    //                         activeSubcategory[category] === subcategory
    //                           ? "rotate-180"
    //                           : ""
    //                       }`}
    //                       fill="none"
    //                       stroke="currentColor"
    //                       viewBox="0 0 24 24"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                       <path
    //                         strokeLinecap="round"
    //                         strokeLinejoin="round"
    //                         strokeWidth="2"
    //                         d="M19 9l-7 7-7-7"
    //                       />
    //                     </svg>
    //                   </div>
    //                   {activeSubcategory[category] === subcategory && (
    //                     <div className="ml-2 mt-1 border-l border-gray-600 pl-2">
    //                       {creatives[category][subcategory].map((creative) => (
    //                         <div
    //                           key={`${category}-${subcategory}-${creative.name}`}
    //                           className="py-1 px-2 text-sm cursor-pointer hover:bg-gray-800 rounded"
    //                           onClick={() => handleCreativeSelect(creative.url)}
    //                         >
    //                           {creative.name}
    //                         </div>
    //                       ))}
    //                     </div>
    //                   )}
    //                 </div>
    //               ))}
    //             </div>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Dark overlay when sidebar is open on mobile */}
    //   {sidebarOpen && (
    //     <div
    //       className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
    //       onClick={toggleSidebar}
    //     ></div>
    //   )}

    //   {/* Right Panel - TV and Controls */}
    //   <div className="flex-1 flex flex-col items-center justify-start w-full h-screen overflow-auto pt-16 md:pt-0">
    //     {/* Top Bar */}
    //     <div className="bg-primary text-white w-full px-4 py-3 md:p-5 md:ml-2 md:rounded-l-xl flex justify-between items-center ">
    //       <div className="flex items-start">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="currentColor"
    //           className="size-6 mr-2"
    //         >
    //           <path d="M19.5 6h-15v9h15V6Z" />
    //           <path
    //             fillRule="evenodd"
    //             d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z"
    //             clipRule="evenodd"
    //           />
    //         </svg>

    //         <span>VisionTV</span>
    //       </div>
    //       <div className="flex items-center  space-x-2 md:space-x-4">
    //         <div className="hidden md:flex items-center cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="size-6 mr-2"
    //           >
    //             <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
    //           </svg>

    //           <span>Controls</span>
    //         </div>

    //         {/* Share Button with Dropdown */}
    //         <div className="relative cursor-pointer">
    //           <div onClick={toggleShareOptions}>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               className="size-4 mr-2"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </div>

    //           {showShareOptions && (
    //             <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
    //               <div className="px-4 py-2 text-sm text-gray-700 font-medium">
    //                 Share via
    //               </div>
    //               <div className="border-t border-gray-100"></div>

    //               {/* WhatsApp share option */}
    //               <div
    //                 className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer"
    //                 onClick={shareToWhatsApp}
    //               >
    //                 <svg
    //                   className="w-5 h-5 mr-2 text-green-500"
    //                   viewBox="0 0 24 24"
    //                   fill="currentColor"
    //                 >
    //                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    //                 </svg>
    //                 WhatsApp
    //               </div>

    //               {/* Copy Link option */}
    //               <div
    //                 className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer"
    //                 onClick={copyToClipboard}
    //               >
    //                 <svg
    //                   className="w-5 h-5 mr-2 text-gray-500"
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 >
    //                   <rect
    //                     x="9"
    //                     y="9"
    //                     width="13"
    //                     height="13"
    //                     rx="2"
    //                     ry="2"
    //                   ></rect>
    //                   <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    //                 </svg>
    //                 Copy Link
    //               </div>
    //             </div>
    //           )}

    //           {copiedLink && (
    //             <div className="absolute top-full right-0 text-white text-xs bg-gray-800 rounded py-1 px-2 mt-1">
    //               {copiedLink}
    //             </div>
    //           )}
    //         </div>

    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="currentColor"
    //           className="size-5"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       </div>
    //     </div>

    //     <div className="flex-1 w-full flex flex-col items-center justify-center px-4 relative">
    //       <div className="relative w-full max-w-[800px] aspect-[16/10] md:aspect-[16/10]">
    //         {/* TV Image */}
    //         <img
    //           src="tv.svg"
    //           alt="TV"
    //           className="w-full h-full object-contain"
    //         />

    //         {/* Positioned Video Inside the TV Screen - with responsive positioning */}
    //         {selectedCreativeUrl ? (
    //           <video
    //             ref={videoRef}
    //             className="absolute top-[3.5%] left-[7.5%] w-[85%] h-[80%] object-fill bg-accent"
    //             controls={false}
    //           >
    //             <source src={selectedCreativeUrl} type="video/mp4" />
    //             Your browser does not support the video tag.
    //           </video>
    //         ) : (
    //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
    //             No creative selected
    //           </div>
    //         )}

    //         {/* Responsive table position */}
    //         <div className="absolute top-[25%] left-[-12%] -z-10 bg-accent w-[130%] hidden md:block">
    //           <img className="object-fill" src="table.svg" alt="Table" />
    //         </div>
    //       </div>

    //       {/* Media Controls - Responsive */}
    //       <div className="mt-4 md:mt-6 bg-black text-white rounded-md p-2 flex space-x-2 md:space-x-4">
    //         <button onClick={handlePlayPause} className="cursor-pointer">
    //           {isPlaying ? (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               className="w-5 h-5 md:w-6 md:h-6"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               className="w-5 h-5 md:w-6 md:h-6"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           )}
    //         </button>
    //         <button onClick={handleSoundToggle} className="cursor-pointer">
    //           {isMuted ? (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               className="w-5 h-5 md:w-6 md:h-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               className="w-5 h-5 md:w-6 md:h-6"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
    //               />
    //             </svg>
    //           )}
    //         </button>
    //         <button onClick={handleFullscreenToggle} className="cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             className="w-5 h-5 md:w-6 md:h-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
    //             />
    //           </svg>
    //         </button>
    //         <div className="bg-black text-xs rounded px-2 py-1 flex items-center">
    //           Play Ad
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Close share options when clicking outside */}
    //   {showShareOptions && (
    //     <div
    //       className="fixed inset-0 h-full w-full z-10"
    //       onClick={() => setShowShareOptions(false)}
    //     ></div>
    //   )}
    // </div>
    <div className="flex flex-col md:flex-row h-screen bg-[#EAE91] overflow-hidden">
      {/* Mobile sidebar toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-primary text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Left Panel - Dropdowns */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 fixed md:relative z-20 w-64 bg-primary text-white h-full overflow-y-auto overflow-x-hidden`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <img className="w-32 h-auto" src="logo.png" alt="Logo" />
            {/* Close button for mobile */}
            <button className="md:hidden text-white" onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {Object.keys(creatives).map((category) => (
            <div key={category} className="mb-3">
              <div
                className="flex justify-between items-center py-2 cursor-pointer border-b border-black"
                onClick={() => toggleDropdown(category)}
              >
                <span className="font-medium">{category}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === category ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {activeDropdown === category && (
                <div className="mt-1 pl-2">
                  {Object.keys(creatives[category]).map((subcategory) => (
                    <div key={`${category}-${subcategory}`} className="mb-2">
                      <div
                        className="flex justify-between items-center py-1 px-2 cursor-pointer hover:bg-gray-700 rounded"
                        onClick={() => toggleSubcategory(category, subcategory)}
                      >
                        <span className="text-sm">{subcategory}</span>
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            activeSubcategory[category] === subcategory
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      {activeSubcategory[category] === subcategory && (
                        <div className="ml-2 mt-1 border-l border-gray-600 pl-2">
                          {creatives[category][subcategory].map((creative) => (
                            <div
                              key={`${category}-${subcategory}-${creative.name}`}
                              className="py-1 px-2 text-sm cursor-pointer hover:bg-gray-800 rounded"
                              onClick={() => handleCreativeSelect(creative.url)}
                            >
                              {creative.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dark overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Right Panel - TV and Controls */}
      <div className="flex-1 flex flex-col items-center justify-start w-full h-screen overflow-y-auto overflow-x-hidden pt-16 md:pt-0">
        {/* Top Bar */}
        <div className="bg-primary text-white w-full px-4 py-3 md:p-5 md:ml-2 md:rounded-l-xl flex justify-between items-center">
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 mr-2"
            >
              <path d="M19.5 6h-15v9h15V6Z" />
              <path
                fillRule="evenodd"
                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z"
                clipRule="evenodd"
              />
            </svg>

            <span>VisionTV</span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 mr-2"
              >
                <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              </svg>

              <span>Controls</span>
            </div>

            {/* Share Button with Dropdown */}
            <div className="relative cursor-pointer">
              <div onClick={toggleShareOptions}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {showShareOptions && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <div className="px-4 py-2 text-sm text-gray-700 font-medium">
                    Share via
                  </div>
                  <div className="border-t border-gray-100"></div>

                  {/* WhatsApp share option */}
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer"
                    onClick={shareToWhatsApp}
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </div>

                  {/* Copy Link option */}
                  <div
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer"
                    onClick={copyToClipboard}
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy Link
                  </div>
                </div>
              )}

              {copiedLink && (
                <div className="absolute top-full right-0 text-white text-xs bg-gray-800 rounded py-1 px-2 mt-1">
                  {copiedLink}
                </div>
              )}
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col items-center justify-center px-4 relative max-w-full">
          <div className="relative w-full max-w-[800px] aspect-[16/10] md:aspect-[16/10]">
            {/* TV Image */}
            <img
              src="tv.svg"
              alt="TV"
              className="w-full h-full object-contain"
            />

            {/* Positioned Video Inside the TV Screen - with responsive positioning */}
            {selectedCreativeUrl ? (
              <video
                ref={videoRef}
                className="absolute top-[3.5%] left-[7.5%] w-[85%] h-[80%] object-fill bg-accent"
                controls={false}
              >
                <source src={selectedCreativeUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
                No creative selected
              </div>
            )}

            {/* Responsive table position - hidden on mobile */}
            <div className="absolute top-[25%] left-[-12%] -z-10 w-[130%] hidden md:block">
              <img className="object-fill" src="table.svg" alt="Table" />
            </div>
          </div>

          {/* Media Controls - Responsive */}
          <div className="mt-4 md:mt-6 bg-black text-white rounded-md p-2 flex space-x-2 md:space-x-4">
            <button onClick={handlePlayPause} className="cursor-pointer">
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <button onClick={handleSoundToggle} className="cursor-pointer">
              {isMuted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              )}
            </button>
            <button onClick={handleFullscreenToggle} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </button>
            <div className="bg-black text-xs rounded px-2 py-1 flex items-center">
              Play Ad
            </div>
          </div>
        </div>
      </div>

      {/* Close share options when clicking outside */}
      {showShareOptions && (
        <div
          className="fixed inset-0 h-full w-full z-10"
          onClick={() => setShowShareOptions(false)}
        ></div>
      )}
    </div>
  );
};

export default Creatives;
