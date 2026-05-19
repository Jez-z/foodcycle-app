import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrgkhibnlosutauenrvp.supabase.co";
const supabaseKey = "sb_publishable_C33j6PTWWevn0Bdk5-LLXQ_muNUzdKK";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
