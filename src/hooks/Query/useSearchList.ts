import SearchApi from "@api/searchApi";
import { useQuery } from "@tanstack/react-query";
import { SearchListType } from "@type/searchListType";
import { QUERY_KEY } from "consts/queryKey";

const search = async (term: string) => {
  const res = await SearchApi.exercise(term);
  return res.data;
};

export const useSearchList = (term: string) => {
  const { data, isLoading } = useQuery<SearchListType, boolean>([QUERY_KEY.SEARCH_LIST, term], () =>
    search(term)
  );
  return { data, isLoading };
};
