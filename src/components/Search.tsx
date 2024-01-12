type SearchProps = {
    text: string;
    onChange: (text: string) => void;
}

export const Search = ({text, onChange}: SearchProps) => {
    return (
        <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Search..."
            value={text}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
