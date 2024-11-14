import Form from "@/components/applicationForm";

const page = () => {
  return (
    <div className="container mx-auto my-24 p-6 md:p-10 bg-white rounded-lg">
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Left Side: Stock Image */}
        <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/hiring.jpg"
          alt="Hiring"
          className="w-full h-auto object-cover"
        />
        </div>

      {/* Right side with form */}
      <div className="w-full lg:w-1/2">
        <Form />
      </div>
    </div>
    </div>
  );
};

export default page;
