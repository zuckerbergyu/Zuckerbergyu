import { definitions } from "../types/database";
import { supabase } from "../utils/supabaseClient";
import { useQuery, useMutation } from "react-query";

export const getSkillList = async (): Promise<
  definitions["Skills"][] | null
> => {
  const { data, error } = await supabase
    .from<definitions["Skills"]>("Skills")
    .select("*")
    .order("id", { ascending: true });
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

export const getGithub = async (): Promise<definitions["Github"][] | null> => {
  const { data, error } = await supabase
    .from<definitions["Github"]>("Github")
    .select("*")
    .order("id", { ascending: false });
  if (error) {
    return [];
  }
  return data;
};
export const useGetGithub = () => useQuery(["Github"], () => getGithub());

export const getAboutMe = async (): Promise<
  definitions["AboutMe"][] | null
> => {
  const { data, error } = await supabase
    .from<definitions["AboutMe"]>("AboutMe")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    return [];
  }
  return data;
};
export const useGetAboutMe = () => useQuery(["AboutMe"], () => getAboutMe());

export const getEducation = async (): Promise<
  definitions["Education"][] | null
> => {
  const { data, error } = await supabase
    .from<definitions["Education"]>("Education")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    return [];
  }
  return data;
};
export const useGetEducation = () =>
  useQuery(["Education"], () => getEducation());
