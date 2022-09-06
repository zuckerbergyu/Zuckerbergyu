import { definitions } from "../types/database";
import { supabase } from "../utils/supabaseClient";
import { useQuery, useMutation } from "react-query";

export const getSkillList = async (): Promise<
  definitions["Skills"][] | null
> => {
  const { data, error } = await supabase
    .from<definitions["Skills"]>("Skills")
    .select("*");
  if (error) {
    return [];
  }
  return data;
};
export const useGetSkillList = () => useQuery(["Skills"], () => getSkillList());

export const getCareer = async (): Promise<definitions["Career"][] | null> => {
  const { data, error } = await supabase
    .from<definitions["Career"]>("Career")
    .select("*")
    .order("id", { ascending: false });
  if (error) {
    return [];
  }
  return data;
};
export const useGetCareer = () => useQuery(["Career"], () => getCareer());
