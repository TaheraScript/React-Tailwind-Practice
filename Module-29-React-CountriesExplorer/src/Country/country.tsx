import type { CountryType } from "../type/CountryType"
import './country.css'

export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {
    
    return (
        <div className="country">
            <h3>{country.name.common}</h3>
        </div>
    )
}