import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className="border-b border-gray-300">
            <button
                onClick={toggleAccordion}
                className="w-full cursor-pointer flex justify-between items-center gap-2 p-4 text-left bg-[#ececec] hover:bg-[#f0f0f0] transition-colors"
            >
                <span className="font-semibold text-[#254168] text-[18px]">{title}</span>
                <span className="text-[#254168] transition-transform duration-300">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </button>

            <div
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 py-4" : "max-h-0"
                    }`}
            >
                <div className="text-[#254168cc] text-[16px]">{children}</div>
            </div>
        </div>
    )
}
export default AccordionItem