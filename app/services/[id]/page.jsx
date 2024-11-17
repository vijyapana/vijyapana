import Cat from "@/components/servicePage";
import { getServices } from "@/lib/contentful";


const services = await getServices();
export async function generateStaticParams() {



    return services.map((service,idx) => ({ 
        id: String(idx+1),
    }));
}


export default function ServicePage({ params }) {
    const { id } = params;
    
    
    return (<>
        <div style={{backgroundImage:`url('${services[id-1]?.bgImage}')`,backgroundSize:"cover"}} className="mt-24 md:mt-16  h-[40vh] relative flex items-center justify-center text-white">
            <h1 className="z-10 uppercase text-2xl sm:text-3xl font-semibold tracking-wider">{services[id-1].name}</h1>
            <div className="absolute inset-0 bg-[rgb(0,0,0,0.4)]"></div>
        </div>
        
        {services[id-1]?.subservices?.map((s)=>{
            return <Cat images={s?.images} name = {s?.name} desc={s?.description} pdf={s?.pdf} video={s?.video}/>
        })}
        
        </>
    );
}