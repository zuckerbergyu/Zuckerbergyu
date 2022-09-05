import { definitions } from "../types/database";
import { supabase } from "../utils/supabaseClient";
import { useQuery, useMutation } from "react-query";

export const getSkillList = async (): Promise<
  definitions["Skills"][] | null
> => {
  const { data, error } = await supabase
    .from<definitions["Skills"]>("Skills")
    .select("*");
  // .order("id", { ascending: false });
  if (error) {
    return [];
  }
  return data;
};
export const useGetSkillList = () => useQuery(["Skills"], () => getSkillList());
