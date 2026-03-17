import { useDebounce } from "../../../../../../../common/hooks/useDebounce/useDebounce"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import type { Property } from "@types";

interface AddressSuggestion {
    properties: {
        place_id: string;
        formatted: string;
    };
}
interface AddressAndDropdownProps {
    property: Property;
    field: any;
}

export const AddressAndDropdown = ({ property, field }: AddressAndDropdownProps) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const debounceAddress = useDebounce(field.state.value, 500);

    const shouldFetch = !!debounceAddress && debounceAddress.length >= 3 && showDropdown;

    const { data: suggestions = [] } = useQuery({
        queryKey: ['AddressSuggestions', debounceAddress],
        queryFn: async () => {
            const API_KEY = import.meta.env.VITE_GEOAPIFY_KEY || 'YOUR_API_KEY';
            const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(debounceAddress)}&apiKey=${API_KEY}`;

            const response = await fetch(url);
            if (!response.ok) throw new Error("Network response was not ok");
            const result = await response.json();

            return result.features || [];
        },
        enabled: shouldFetch,
        refetchOnWindowFocus: false,
    });

    const handleSelect = (address: string) => {
        field.handleChange(address);
        setShowDropdown(false);
    };

    return (
        <div className="flex flex-col gap-2 relative">
            <label className="font-bold">
                Property Address:
            </label>

            <input className="border border-gray-400 rounded-md w-full p-2 text-gray-800"
                type="text"
                placeholder={property.address}
                value={field.state.value || ''}
                onChange={(e) => {
                    field.handleChange(e.target.value);
                    setShowDropdown(true);
                }}
            />

            {showDropdown && suggestions.length > 0 && (
                <ul className="absolute z-10 top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion: AddressSuggestion) => {
                        const addressText = suggestion.properties.formatted;
                        return (
                            <li
                                key={suggestion.properties.place_id}
                                className="p-3 hover:bg-gray-100 cursor-pointer text-gray-800 border-b border-gray-100 last:border-0"
                                onClick={() => handleSelect(addressText)}
                            >
                                {addressText}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    )
}