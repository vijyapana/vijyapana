// lib/contentful.js

import { createClient } from 'contentful';

const client = createClient({
    accessToken: 'nSgSdYM9N_B3V3-XP0muXRAZRtgInnJ7N86dXQJSJqc',
  space: 'zxwltbyujwus'
});

export const getSlideShowImages = async()=>{
    const res = await client.getEntries({
        content_type:"slideshowImages"
    })

    
    const image1 = res.items[0].fields.slideshow1images.map((img)=>{
        return img.fields.file.url
    })
    const image2 = res.items[0].fields.slideshow2.map((img)=>{
        return img.fields.file.url
    })
    const {heading1,heading2,subheading1,subheading2} = res.items[0].fields
    
    
    return {image1,image2,heading1,heading2,subheading1,subheading2}
    
}
//git issue
export const getProducts = async()=>{
    const res = await client.getEntries({
        content_type:"classyHampers"
    })
    
    const products = res.items.map((product)=>{
        const name = product.fields.name
        const thumbnail = "https://"+product.fields.thumbnail.fields.file.url.slice(2)
        
        
        const insideImages = product.fields.insideImages.map((img)=>{
            return "https://"+img.fields.file.url.slice(2)
        })
        const pdfFile = product.fields?.pdfFile?.fields.file.url
        
        
        return {name,thumbnail,insideImages,pdfFile}
    })
    return products;
}

export const getServices = async()=>{
    const res = await client.getEntries({
        content_type:"services"
    })
    
    
    const services = res.items.map((product)=>{
        const name = product.fields.serviceName
        const dropdownpoints = product.fields.navdropdownpoints
        const subservices = product.fields?.subservices?.map((s)=>{
            const {name,description,images:img} = s.fields;
            let pdf = null;
            let video = null;
            if (s.fields.pdf) {
                pdf = "https://"+s.fields.pdf.fields.file.url.slice(2);
            }
            if (s.fields.video) {
                video = "https://"+s.fields.video.fields.file.url.slice(2);
            }
            const images = img.map((i)=>{return "https://"+i.fields.file.url.slice(2)})
            return {name,description,images,pdf,video};
        });
        
        console.log(subservices);
        
        const images = product.fields.images.map((img)=>{
            return "https://"+img.fields.file.url.slice(2)
        })
        
        const bgImage ="https://"+product.fields?.bgimage?.fields?.file?.url?.slice(2);
        return {name,dropdownpoints,images,bgImage,subservices}
    })
    return services
}




export const getHeroImages = async()=>{
    const res = await client.getEntries({
        content_type:"heroImages"
    })
    
    const services = res.items.map((product)=>{
        const images = product.fields.heroslideshowimages.map((img)=>{
            return "https://"+img.fields.file.url.slice(2)
        })
        return {images}
    })
    return services
    
}
export const getClientLogos = async()=>{
    const res = await client.getEntries({
        content_type:"clientLogos"
    })
    
    const services = res.items.map((product)=>{
        const images = product.fields.images.map((img)=>{
            return "https://"+img.fields.file.url.slice(2)
        })
        return {images}
    })
    return services
    
}

export default client;