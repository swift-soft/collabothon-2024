import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or key is undefined.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export const getUser = async () => {
  const { data: user } = await supabase.auth.getUser();
  if (!user.user) return null;

  const { data: publicUser, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.user.id);
  return publicUser[0];
};

export const fetchMessagesForUser = async (userId) => {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("to_user", userId);

  if (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
  return data;
};

export const fetchActionsForUser = async (userId) => {
  const { data, error } = await supabase
    .from("actions")
    .select("*")
    .eq("to_user", userId);

  if (error) {
    console.error("Error fetching actions:", error);
    return [];
  }
  return data;
};
