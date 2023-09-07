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
  count: number;
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
      images: [
        {
          image: string | undefined;
        }
      ];
    }
  ];
}

export interface BaseInfoId {
  id: number;
  category: {
    // 해시태그
    id: number;
    name: string;
  };
  muscles: [
    {
      id: number;
      name_en: string;
    }
  ];
  equipment: [
    // 해시태그
    {
      id: number;
      name: string;
    }
  ];
  images: [
    {
      id: number;
      // exercise_base: number;
      image: string;
    }
  ];
  exercises: [
    {
      id: 1970;
      name: string;
      description: string;
    }
  ];
}
