import React from 'react'

import { footerList1, footerList2, footerList3 } from '../utils/constants'

const Footer = () => {


    const List = ({ items }: { items: string[] }) => {
        return (
            <div className='flex flex-wrap gap-2 mt-5'>
                {footerList1.map((item) => (
                    <div key={item} className="text-gray-400 text-sm hover:underline cursor-pointer">
                        {item}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className='mt-6 hidden xl:block'>
            <List items={footerList1} />
            <List items={footerList2} />
            <List items={footerList3} />
        </div>
    )
}

export default Footer