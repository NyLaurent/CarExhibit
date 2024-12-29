import Image from "next/image";
import { CarCard, Hero } from "@/components";
import {SearchBar,CustomFilter} from "@/components";
import { fetchCars } from "@/utils";
import { manufacturers } from "@/constants";

export default async function Home({ searchParams }) {
    // Await searchParams if it's a promise
    const params = await searchParams;

    const allCars = await fetchCars({
        manufacturer: params.manufacturer || '',
        year: params.year || 2022,
        fuel: params.fuel || '',
        limit: params.limit || 10,
        model: params.model || '',
    });

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className=" overflow-hidden">
            <Hero></Hero>
            <div className="mt-12 padding-x 
            padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">
                        Car Catalogue
                    </h1>
                    <p>Explore the cars you might like </p>

                </div>
                <div className="home__filters">
                    <SearchBar/>
                    <div className="home__filter-container">
                        <CustomFilter title="fuel"/>
                        <CustomFilter title="year"/>
                    </div>

                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars?.map((car)=>(
                                <CarCard car={car}/>
                            ))}
                        </div>
                    </section>
                ):(
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}

            </div>
           
        </main>
    );
}
