import { pickOne } from '../utils/base';

export const randomMovie = () => {
  return pickOne([
    '请回答1988',
    '漫长的季节',
    '白色巨塔',
    '非自然死亡',
    '半泽直树',
    '孤独又灿烂的神鬼怪',
    '想见你',
    '我们与恶的距离',
    '俗女养成记',
    '爱的迫降',
    '恶作剧之吻',
    '悠长假期',
    '东京爱情故事',
  ]);
};
