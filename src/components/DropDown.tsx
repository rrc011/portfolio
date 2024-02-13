import { useEffect, useRef, useState } from 'react'

export interface IOption {
    id: string;
    text: string;
    icon?: string;
    onClick: () => void;
}

interface Props {
    title: string;
    options: IOption[];
}

export const DropDown: React.FC<Props> = ({ options, title }) => {
    const dropdownButtonRef = useRef<HTMLButtonElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    // Close the dropdown when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownButtonRef.current &&
            !dropdownButtonRef.current.contains(event.target as Node) &&
            dropdownMenuRef.current &&
            !dropdownMenuRef.current.contains(event.target as Node)
        ) {
            setIsDropdownOpen(false);
        }
    };


    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        toggleDropdown();
    }, []);

    return (
        <div className="relative inline-block text-left">
            <button ref={dropdownButtonRef} onClick={toggleDropdown} id="dropdown-button" className="bg-white bg-opacity-5 border dark:border-white dark:border-opacity-10 border-gray-300 rounded-full flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base text-black text-opacity-70 dark:text-white hover:bg-white hover:bg-opacity-10 cursor-pointer">
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
            {isDropdownOpen && options.length > 0 && <div id="dropdown-menu" ref={dropdownMenuRef} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white bg-opacity-5 ring-1 ring-black ring-opacity-5 ">
                <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                    {
                        options.map((option, idx) => {
                            return (
                                <a
                                    className="flex rounded-md px-4 py-2 text-sm text-black text-opacity-70 dark:text-white hover:bg-white hover:bg-opacity-10 active:bg-blue-100 cursor-pointer items-center"
                                    role="menuitem"
                                    id="dropdown-menu-item"
                                    key={idx}
                                >
                                    {option.icon && <span className="mr-2">
                                        <img className="w-5 h-4" src={option.icon} alt="" srcSet="" />
                                    </span>}
                                    {option.text}
                                </a>
                            );
                        })
                    }
                </div>
            </div>}
        </div>
    )
}
