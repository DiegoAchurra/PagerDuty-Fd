import React, { useState, useEffect, useRef } from "react";
import "./AutoComplete.css";

const AutoComplete: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // User input
  const [suggestions, setSuggestions] = useState<string[]>([]); // API suggestions
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [showResults, setShowResults] = useState<boolean>(false); // Whether to show results
  const [previousSuggestions, setPreviousSuggestions] = useState<string[]>([]); // Cache of previous suggestions

  // Tracks if a suggestion was clicked to avoid redundant fetch
  const suggestionClicked = useRef<boolean>(false);

  // Reference to the container for detecting clicks outside
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchSuggestions = async (searchQuery: string): Promise<void> => {
    const API_URL = "https://api.pagerduty.com/services";
    const API_TOKEN = "y_NbAkKc66ryYTWUXYEu";

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}?query=${searchQuery}`, {
        headers: {
          Authorization: `Token token=${API_TOKEN}`,
          Accept: "application/vnd.pagerduty+json;version=2",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }

      const data = await response.json();

      const fetchedSuggestions = data.services.map(
        (service: { name: string }) => service.name
      );

      // Update suggestions only if a suggestion wasn't clicked
      if (!suggestionClicked.current) {
        setSuggestions(fetchedSuggestions);
        setShowResults(true); // Show results only after fetching is complete
      }
    } catch (err) {
      setError("Unable to fetch suggestions. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      setShowResults(false); // Prevent results from displaying
      setLoading(false); // Stop spinner
      return;
    }

    // Cache the current suggestions while loading
    if (!loading) {
      setPreviousSuggestions(suggestions);
    }

    const debounceFetch = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);

    return () => clearTimeout(debounceFetch);
  }, [query]);

  const highlightMatch = (text: string, query: string): JSX.Element => {
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const handleSuggestionClick = (suggestion: string): void => {
    suggestionClicked.current = true; // Avoid fetching when suggestion is clicked
    setQuery(suggestion); // Set input to the selected suggestion
    setSuggestions([]); // Clear suggestions immediately
    setShowResults(false); // Hide results immediately
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    suggestionClicked.current = false; // Reset the clicked state when typing
    setQuery(e.target.value);
  };

  // Effect to handle clicks outside the AutoComplete component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]); // Clear suggestions
        setShowResults(false); // Hide results
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="autoComplete-container" ref={containerRef}>
      <label className="autoComplete-label" htmlFor="service-search">
        Search for PagerDuty Services:
      </label>
      <div className="autoComplete">
        <input
          id="service-search"
          className="input"
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={handleInputChange}
        />
        {loading && <div className="spinner"></div>}
        {error && <div className="error">{error}</div>}
        <ul className="suggestions">
          {/* Show cached results if loading */}
          {loading &&
            previousSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="suggestion"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {highlightMatch(suggestion, query)}
              </li>
            ))}
          {/* Show final results when loading is complete */}
          {!loading &&
            showResults &&
            suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="suggestion"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {highlightMatch(suggestion, query)}
              </li>
            ))}
          {/* Show "Nothing matches" only when loading is complete */}
          {!loading && showResults && suggestions.length === 0 && (
            <li className="no-matches">Nothing matches</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
