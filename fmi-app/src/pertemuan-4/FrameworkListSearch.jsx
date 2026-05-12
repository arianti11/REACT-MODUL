import { useState } from "react";
import frameworkData from "./framework.json";


export default function FrameworkListSearch() {
    //deklarasi state
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    //deklarasi logic search & filter
    const _searchTerm = searchTerm.toLocaleLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch = framework.name.toLocaleLowerCase()
            .includes(_searchTerm) || framework.description.
            toLocaleLowerCase().includes(_searchTerm);
        const matchesTag = selectedTag ? framework.tags.
        includes(selectedTag) : true;
        return matchesSearch && matchesTag;
    })
    //deklarasi pengambilan unique tags di frameworkData
    const allTags = [
        new Set(frameworkData.flatMap
            ((framework) => framework.tags)),
    ];


    return (


        <div className="p-8">


            <input
                type="text"
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => setSelectedTag(e.target.value)}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
           
            </select>




            {filteredFrameworks.map((item) => (
                <div key={item.id} className="border p-4 mb-4
                 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold
                     text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">
                        {item.description}</p>
                    <p className="text-gray-400 
                    text-xs">Developed by:{item.details.developer}</p>
                    <a className="text-blue-600 underline"
                     href={item.details.officialWebsite}>Visit Website</a><br />
                    {item.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200
                         text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                            {tag}</span>
                    ))}
                </div>
            ))}
        </div>
    )
}
