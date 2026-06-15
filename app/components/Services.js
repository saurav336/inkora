import {RiArrowRightUpLongLine} from "react-icons/ri";

export default function Services({num, brandName, desc, icons}) {
    return (
        <>
            <div className="services-grid">
                <div className="services text-white">
                    <span className="service-num text-[12px] font-syne text-[#5a5f66] traking-[.2em]">{num}</span>
                    <div className="service-icon"><i className="text-[22px]">{icons}</i></div>
                    <h3 className="font-syne font-[600] text-[22px]">{brandName}</h3>
                    <p className="font-inter text-[13.5px] text-[#9aa0a6]">{desc}</p>
                    <div className="service-arrow opacity-0"><RiArrowRightUpLongLine/></div>
                </div>
            </div>

        </>
    )
}