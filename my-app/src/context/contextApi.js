import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const DataContext = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState("loading");
    const [searchResult, setSearchResults] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = async (query) => {
        setLoading(true);
        const data = await fetchDataFromApi(`search/?q=${query}`);
        setSearchResults(data.contents);
        setLoading(false);
    };

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.getElementById("root").classList.add("dark");
        } else {
            document.getElementById("root").classList.remove("dark");
        }
    }, [theme]);

    return (
        <DataContext.Provider
          value={{
            loading,
            setLoading,
            searchResult,
            selectedCategory,
            setSelectedCategory,
            mobileMenu,
            setMobileMenu,
            theme,
            setTheme,
          }}
        >
            {props.children}
        </DataContext.Provider>
    );
};