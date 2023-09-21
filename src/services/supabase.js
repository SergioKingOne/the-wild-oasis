import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rstmgvmhovylgnxadhkw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzdG1ndm1ob3Z5bGdueGFkaGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5ODk4MTQsImV4cCI6MjAxMDU2NTgxNH0.QFU5rbTsadRAgQ-so46a2-uhfFpvk9-dZq2yT-RMwgM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
