import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wiamonwwuekikoaiantx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpYW1vbnd3dWVraWtvYWlhbnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzOTUwMDMsImV4cCI6MjA4Mzk3MTAwM30.hwJVLOD5eowGKW-d2ugiTl0cKzQF56BZ6tzA3VQylCo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
