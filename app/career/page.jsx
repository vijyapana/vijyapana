import Form from "@/components/applicationForm";

const page = () => {
  return (
    <div className="container mx-auto my-24 p-6 md:p-10 bg-white rounded-lg">
         <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Work With US
      </h1>
      
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        
       
        <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/hiring.jpg"
          alt="Hiring"
          className="w-full h-auto object-cover"
        />
        </div>

      
      <div className="w-full lg:w-1/2">
        <Form />
      </div>
    </div>
    </div>
  );
};

export default page;
