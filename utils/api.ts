// utils/api.ts

import { supabase } from "./supabaseClient";
import { User } from "../types/User";

//一覧用のユーザーを取得する fetchUsers
export const fetchUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase
    .from<"dev_users", User>("dev_users") // テーブル名と型を2つ指定
    .select("*")
    .eq("deleted", false);

  if (error) {
    throw error;
  }
  return data as User[];
};

//idによって1人のユーザーを取得
export const fetchUserById = async (id: number): Promise<User | null> => {
  const { data, error } = await supabase
    .from<"dev_users", User>("dev_users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No rows found
      return null;
    }
    throw error;
  }

  return data as User;
};

//新規
export const createUser = async (
  user: Omit<User, "id" | "deleted">
): Promise<User> => {
  const { data, error } = await supabase
    .from("dev_users")
    .insert(user)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as User;
};

//更新
export const updateUser = async (
  id: number,
  user: Partial<User>
): Promise<User> => {
  const { data, error } = await supabase
    .from("dev_users")
    .update(user)
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as User;
};

//削除
export const deleteUser = async (id: number): Promise<void> => {
  const { error } = await supabase.from("dev_users").delete().eq("id", id);

  if (error) {
    throw error;
  }
};

//論理削除
export const softDeleteUser = async (id: number): Promise<User> => {
  const { data, error } = await supabase
    .from("dev_users")
    .update({ deleted: true })
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    throw error;
  }
  return data as User;
};
