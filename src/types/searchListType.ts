export interface SearchListType {
  suggestions: [
    {
      value: string;
      data: {
        id: number;
        base_id: number;
        name: string;
        category: string;
        image: string | undefined;
        image_thumbnail: string | undefined;
      };
    }
  ];
}
