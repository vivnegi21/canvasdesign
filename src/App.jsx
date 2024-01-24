import './index.css'
import Canvas from './Canvas/Canvas'
import { useState } from 'react';
import template from './template.json'
import { header, uploadImage } from './functions';
import ColorPicker from './components/ColorPicker';

function App() {

  const [hex, setHex] = useState("#0369A1");
  const [adText, setAdText] = useState('');
  const [CTA, setCTA] = useState('');
  const [file, setFile] = useState('https://fastly.picsum.photos/id/54/536/354.jpg?hmac=sMoYw3PiEjWwmO8yrArQS3zOwfWVklH03pnQppwqn2Y');
  const [show, toggleShow] = useState(false);
  const [colorHistory, setColorHistory] = useState(['#fff', '#000']);

  function handleChange(e) {
    let uploadImage = e.target.files[0];
    if (!uploadImage) return;
    setFile(URL.createObjectURL(uploadImage))
  }

  return (
    <div className='min-h-screen w-full flex  max-lg:flex-col '>
      <div className='w-full lg:w-1/2 lg:min-h-screen flex items-center justify-center bg-cover' style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1359818120/vector/wave-textures-white-background-abstract-modern-grey-white-waves-and-lines-pattern-template.jpg?s=612x612&w=0&k=20&c=eEs1wkDGrJrhGS9EssXwsWR_jZKPTapiNCFn1cfmwGs=')",
        
      }}>
        <Canvas width='1080' height='1080' className='h-[300px] w-[300px] lg:h-[540px] lg:w-[540px] backdrop-blur-sm' template={template} adText={adText} CTA={CTA} hex={hex} img={file} />
      </div>
      <div className='w-full lg:w-1/2 min-h-screen flex flex-col items-center py-4'>
        
        {header()}

        {uploadImage(handleChange)}
        <div className="form">
          
            <label className="px-2 text-gray-800">Ad Customization</label>
            <input className="" type="text" value={adText} placeholder='Add Text' onChange={e => setAdText(e.target.value)} />
          
            <label className="px-2 text-gray-800">CTA</label>
            <input className="" type="text" value={CTA} placeholder='Add Call to Action...' onChange={e => setCTA(e.target.value)} />
   

          <ColorPicker colorHistory={colorHistory} setColorHistory={setColorHistory}hex={hex}setHex={setHex}show={show}toggleShow={toggleShow} />
        </div>

      </div>
    </div>
  );
}

export default App;
