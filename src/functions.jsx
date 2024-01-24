
import { CiImageOn } from "react-icons/ci";
export function uploadImage(handleChange) {
    return (
        <div className="w-full flex mt-2">
            <input type="file" name='file' id='file' className='hidden' accept=".png, .jpg, .jpeg" onChange={handleChange} />
            <label for="file" className=' w-full  border rounded-lg px-5 py-3 cursor-pointer mt-2 mx-16'>
                <p className='text-gray-600 flex gap-2 items-center w-full '>
                    <CiImageOn className='w-8 h-8 text-blue-500' />Change the add creative image
                    <span className='ml-1 text-blue-500 underline '>select file</span>
                </p>
            </label>
        </div>
    )
}

export function header() {

    return (
        <div className="mt-10" >
            <p className='text-center text-2xl font-bold font-sans'>
                Ad Customization
            </p>
            <p className='text-gray-700'>
                Customize your ad and get templates accordingly
            </p>
        </div>
    )
}