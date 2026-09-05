import type CountryType from "../type/User-datatype"

export interface CountriesProps {
    countriespromise: Promise<CountryType[]>
}

export default function Countries({ countriespromise }: CountriesProps) {
    
    return (
        <div>
            <h2>Countries:</h2>
        </div>
    )
}