import { useState,useEffect } from "react";
import './Dropdown.css';

export const Dropdown = (Props) => {
    
    const [data,setData] = useState('');
    const [eduDDOpen, toggleEduDD] = useState(false);

    const openEduDropdown = () => {
        toggleEduDD(true);
    }
    const closeEduDropdown = () => {
        toggleEduDD(false);
    }

    useEffect(() => {
        var data = ''

        for(let i = 0; i < Props.links.length; i++){
            data += "<li><a href='"+ Props.links[i].path + "'>" + Props.links[i].name +"</a></li>" 
        }
        setData(data);
    }, [Props,setData]);

    return (
        <>
            {/*eslint-disable-next-line */}
            <a href='#' onMouseEnter={openEduDropdown} onMouseLeave={closeEduDropdown}>{Props.categoryName}</a>
            {eduDDOpen &&
                <div className='dropdown' onMouseEnter={openEduDropdown} onMouseLeave={closeEduDropdown}>
                    <ul className='dropdown_list' dangerouslySetInnerHTML={{__html:data}}>
                        {/* This is filled in by the Props passed to the dropdown */}
                    </ul>
                </div>
            }
        </>
    )
}

Dropdown.defaultProps = {
    categoryName:"*changethis*",
    links:[
        {name:"Classes", path:"/education/classes"},
        {name:"Booklets", path:"/education/booklets"},
    ]

}