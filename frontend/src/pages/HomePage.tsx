import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "../pages/Layout";
import SearchBar from "../components/SearchBar";
import PropertyGrid from "../components/PropertyGrid";
import Pagination from "../components/Pagination";
import { fetchProperties, PropertyFilters } from "../api/properties";

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<PropertyFilters>(() => ({
    page: Number(searchParams.get("page")) || 1,
    limit: 9,
  }));

  const updateFiltersFromURL = useCallback(() => {
    const urlFilters: Partial<PropertyFilters> = {};
    searchParams.forEach((value, key) => {
      if (value) {
        if (key === "page" || key === "limit") {
          urlFilters[key] = Number(value);
        } else {
          urlFilters[key as keyof PropertyFilters] = value;
        }
      }
    });
    setFilters((prev) => ({ ...prev, ...urlFilters }));
  }, [searchParams]);

  useEffect(() => {
    updateFiltersFromURL();
  }, [updateFiltersFromURL]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["properties", filters],
    queryFn: () => fetchProperties(filters),
  });

  const updateSearchParams = (newFilters: Partial<PropertyFilters>) => {
    const updatedParams = new URLSearchParams(searchParams);
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        updatedParams.set(key, value.toString());
      } else {
        updatedParams.delete(key);
      }
    });
    setSearchParams(updatedParams);
  };

  const handleSearch = (searchFilters: Partial<PropertyFilters>) => {
    const urlPage = searchParams.get("page");
    const page = urlPage ? parseInt(urlPage, 10) : 1;
    const newFilters = { ...filters, ...searchFilters, page };
    setFilters(newFilters);
    updateSearchParams(newFilters);
  };

  const handlePageChange = (newPage: number) => {
    const newFilters = { ...filters, page: newPage };
    setFilters(newFilters);
    updateSearchParams({ page: newPage });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />
      <PropertyGrid properties={data?.properties || []} />
      <Pagination
        currentPage={filters.page || 1}
        totalPages={Math.ceil((data?.total || 0) / (filters.limit || 9))}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
};

export default HomePage;
