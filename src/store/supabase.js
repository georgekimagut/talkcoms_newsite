// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bxiwfnsbpbanfejuqtwt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4aXdmbnNicGJhbmZlanVxdHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNzUyMjQsImV4cCI6MjA2NTY1MTIyNH0.tsgTz0dScd65gaOp-6wYsgom63wmQuPjs_ZsEvt6z8Y"; // or service role for server-side

export const supabase = createClient(supabaseUrl, supabaseKey);
