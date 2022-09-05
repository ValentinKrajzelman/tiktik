import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';

const Discover = () => {

    const router = useRouter();
    const topic = router.query.topic;
    // const {topic} = router.query; esto se puede escribir asi tambien usando el llamado destructuring assignment no tiene mucho sentido aca por que query tiene solo una propiedad "topic" pero si tuviese varias y quisiera usar cada una por separado podria pedirlas entre los {}
    console.log(router.query);

    const activeTopicStyle = "xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]";

    const topicStyle = "xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black"

    return (
        <div className='xl:border-b-2 xl:border-gray-200 pb-6 '>

            <div className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
                popular topics
            </div>

            <div className='flex gap-3 flex-wrap'>
                {topics.map((item) => (
                    <Link href={"/?topic=" + item.name} key={item.name}>
                        <div className={item.name === topic ? activeTopicStyle : topicStyle}>
                            <span className='font-bold text-2xl xl:text-md'>
                                {item.icon}
                            </span>
                            <span className='font-medium text-md hidden xl:block capitalize'>
                                {item.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Discover

