export interface Categorys {
  results: [
    {
      id: number;
      name: string;
    }
  ];
}

export interface CategoryRes {
  id: number;
  name: string;
}

export interface BaseInfo {
  results: [
    {
      id: number;
      category: {
        id: number;
        name: string; // 카테고리 명칭
      };
      equipment: [
        {
          id: number;
          name: string; // 어떤 장비로 하는지
        }
      ];
      exercises: [
        {
          id: number;
          name: string; // 대표 운동 명칭
        }
      ];
    }
  ];
}
