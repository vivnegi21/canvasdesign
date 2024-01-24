import React from 'react'
import { IoAdd } from 'react-icons/io5';

const ColorPicker = ({colorHistory,setColorHistory,hex,setHex,show,toggleShow}) => {
    return (
        <div>
            <p className='text-gray-600'>Choose your Color</p>
            <div className="flex gap-2 w-fit h-fit flex-wrap">
                {colorHistory.length > 0 && colorHistory.map((color, idx) => {
                    return (
                        <div key={idx} className={`w-8 h-8 rounded-full border cursor-pointer`} style={{
                            backgroundColor: color
                        }} onClick={() => setHex(color)}>

                        </div>
                    )
                })
                }
                <button className='w-8 h-8 text-center flex justify-center items-center  rounded-full text-black bg-gray-300 border ' onClick={() => toggleShow(!show)}><IoAdd /></button>
                {show && (
                    <input type="color" name="" id="" value={hex} onChange={(e) => {
                        setHex(e.target.value);
                    }}
                        onBlur={() => {
                            toggleShow(false)
                            if (colorHistory.length < 5) {
                                setColorHistory([...colorHistory, hex])
                            } else {
                                setColorHistory([...colorHistory.slice(1, 5), hex])
                            }
                        }}

                    />
                )}
            </div>
        </div>
    )
}

export default ColorPicker