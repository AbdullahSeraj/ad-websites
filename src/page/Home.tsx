import { projects } from '../util/data'
import { useCopyToClipboard } from "usehooks-ts"
import { FaArrowRight, FaLink } from 'react-icons/fa'

const Home = () => {
    const [, copy] = useCopyToClipboard()

    return (
        <div id='products' className='container py-10 border-b border-gray-300 dark:border-slate-800 flex flex-col md:flex-row gap-8'>
            <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                {projects.map((pro, i) => (
                    <div
                        key={i} className='rounded-md border border-blue-300 dark:border-blue-900 hover:border-blue-500 dark:hover:border-blue-300 overflow-hidden hover:rotate-1 transition-all bg-zinc-300 dark:bg-zinc-800'>
                        <img src={pro.img} alt="" className='' />
                        <div className='px-5 py-3'>
                            <h3 className='font-semibold text-lg mb-1'>{pro.title}</h3>
                            <p className='text-sm text-gray-500 mb-4'>{pro.text.length < 170 ? pro.text : pro.text.substring(0, 170) + "..."}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    {/* <a href={pro.githubUrl} target='_blank'>
                                        <FaGithub size={"20px"} className='cursor-pointer text-gray-500 hover:text-black dark:hover:text-white transition-all' />
                                    </a> */}
                                    <FaLink onClick={() => copy(pro.website)} size={"20px"} className='cursor-pointer text-gray-500 hover:text-black dark:hover:text-white transition-all' />
                                </div>
                                <a href={pro.website} target='_blank' className='text-blue-400 hover:text-blue-500 transition-all flex gap-2 items-center text-sm'>visit <FaArrowRight /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home