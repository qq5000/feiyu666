import { XSta } from 'xsta';

import { appConfig } from '@/data/config';
import { useSearchDatas } from '@/hooks/useSearchDatas';
import { http } from '@/services/http';

import { isArray, isString } from '../is';
import { DoubanHotMovie } from '.';

export const kHotMoviesKey = 'kHotMovies';
export const getHotMovies = () => XSta.get<DoubanHotMovie[]>(kHotMoviesKey);

export const useSearchHotMovies = () => {
  return useSearchDatas<any, DoubanHotMovie>({
    isEqual: () => false,
    async onSearch() {
      const currenHotMovies = XSta.get(kHotMoviesKey);
      if (currenHotMovies) return currenHotMovies;
      const hotMovies = (await appConfig.get()).hotMovies;
      const movies = isString(hotMovies)
        ? await http.get(hotMovies as string)
        : hotMovies;
      if (!isArray(movies)) {
        return []; // 非预期数据
      }
      XSta.set(kHotMoviesKey, movies);
      return movies;
    },
  });
};
