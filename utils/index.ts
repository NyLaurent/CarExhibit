export async function fetchCars() 
{
    const headers ={
        
            'x-rapidapi-key': 'fa1b7ba3aamsh825ca39209b7192p15df6cjsn20ecc9c11792',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    }
    const response =  await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,
    });
    const result = await response.json();
    return result;
    
}