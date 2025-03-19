"use client"
import Form from "@/components/applicationForm";
import {getOpenings} from "@/lib/contentful"
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const page = () => {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOpening, setSelectedOpening] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchOpenings = async () => {
    try {
      const data = await getOpenings();
      setOpenings(data);
    } catch (error) {
      console.error("Error fetching openings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOpenings();
  }, []);

  const handleCardClick = (opening) => {
    setSelectedOpening(opening);
    setDialogOpen(true);
  };
  
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

    <div className="mt-36">
    <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Openings
      </h1>
 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        // Skeleton loading state
        Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="w-full">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Skeleton className="w-12 h-12 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        // Actual openings cards
        openings.map((opening, index) => (
          <Card 
            key={index} 
            className="w-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleCardClick(opening)}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img
                    src="/hiring.png"
                    alt="Job Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                    {opening.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {opening.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
    </div>

    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {selectedOpening?.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4 overflow-y-auto max-h-[calc(90vh-8rem)] pr-2">
          <div className="flex items-start gap-4">
            <img
              src="/hiring.png"
              alt="Job Icon"
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-gray-600 whitespace-pre-wrap">
                {selectedOpening?.description}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
};

export default page;
