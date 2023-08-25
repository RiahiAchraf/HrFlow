export type TUserSkill = {
  name: string;
  value: string | null;
  type: string | null;
};

export type TUser = {
  id: number;
  name: string;
  created_at: string;
  summary: string;
  skills: TUserSkill[];
};
