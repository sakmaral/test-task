import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { items } from '@/data';
import { chunkArray } from '@/lib/chunk-array';
import Image from 'next/image';

const chunkedItems = chunkArray(items, 2);

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Carousel className="w-full max-w-2xl">
          <CarouselContent>
            {chunkedItems.map((chunk, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                  {chunk.map((subItem) => (
                    <div
                      key={subItem.id}
                      className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg"
                    >
                      <Image
                        priority
                        width={200}
                        height={200}
                        src={subItem.image}
                        alt={subItem.title}
                        className=" object-cover rounded-md"
                      />
                      <p className="mt-2 text-center text-sm font-medium">{subItem.title}</p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
