import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Все работы" },
    { id: "portraits", label: "Портреты" },
    { id: "events", label: "События" },
    { id: "nature", label: "Природа" },
  ];

  const photos = [
    {
      id: 1,
      category: "portraits",
      url: "https://images.unsplash.com/photo-1494790108755-2616c80808b1?w=600&h=800&fit=crop",
    },
    {
      id: 2,
      category: "nature",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
    },
    {
      id: 3,
      category: "events",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop",
    },
    {
      id: 4,
      category: "portraits",
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    },
    {
      id: 5,
      category: "nature",
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=800&fit=crop",
    },
    {
      id: 6,
      category: "events",
      url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600&h=800&fit=crop",
    },
  ];

  const filteredPhotos =
    activeFilter === "all"
      ? photos
      : photos.filter((photo) => photo.category === activeFilter);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-900 mb-4">Портфолио</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Коллекция избранных работ, отражающих мой взгляд на мир через объектив
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.id)}
            className={
              activeFilter === filter.id ? "bg-gray-900" : "border-gray-300"
            }
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-[4/5] hover-scale"
          >
            <img
              src={photo.url}
              alt={`Фотография ${photo.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
              <Icon
                name="Expand"
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                size={32}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
