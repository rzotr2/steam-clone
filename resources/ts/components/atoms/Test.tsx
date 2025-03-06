// import React, {ButtonHTMLAttributes, PropsWithChildren} from "react";
// import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
//
// type TestProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren<{}>
//
// export default function Test({children, className, ...props}: TestProps) {
//     return (
//         <Carousel
//             opts={{
//                 align: "start",
//             }}
//             className="w-full max-w-sm"
//         >
//             <CarouselContent>
//                 {Array.from({ length: 5 }).map((_, index) => (
//                     <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                         <div className="p-1">
//                             <div>
//                                 <div className="flex aspect-square items-center justify-center p-6">
//                                     <span className="text-3xl font-semibold">{index + 1}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//         </Carousel>
//     )
// }
