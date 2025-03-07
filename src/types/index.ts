import { STATUSES } from './status';

export type TPlayer = {
  username: string;
  kills: number;
};

export type TTeam = {
  name: string;
  players: TPlayer[];
  points: number;
  place: number;
  total_kills: number;
};

export type TMatch = {
  time: string;
  title: string;
  homeTeam: TTeam;
  awayTeam: TTeam;
  homeScore: number;
  awayScore: number;
  status: STATUSES;
};

export type TApiResponse = {
  ok: boolean;
  data: {
    matches: TMatch[];
  };
};
