import { PlayCircleOutlined } from '@ant-design/icons';

export function Logo() {
    return (
       <div className="text-center">
         <div className="shadow-xl mx-auto mb-5 w-24 h-24 p-3 bg-blue-600 rounded-full flex flex-row items-center justify-center">
            <PlayCircleOutlined className=" text-white text-4xl" />
        </div>
        <h2 className="text-3xl text-slate-800 font-thin text-center">No ads hls</h2>
    </div>
    );
}
