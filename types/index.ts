import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button"| "submit";
}
export interface SearchManufacturerPops{
    manufacturer:string;
    setManufacturer:(manufacturer: string)=>void;

}
export interface CarProps{
    city_mpg:number;
    class:string;
    comination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;

}